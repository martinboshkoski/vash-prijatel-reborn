import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    console.log("Received message:", message);

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Create embedding for user's question
    console.log("Creating embedding for query...");
    const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: message,
      }),
    });

    const embeddingData = await embeddingResponse.json();
    const queryEmbedding = embeddingData.data[0].embedding;
    console.log("Embedding created");

    // 2. Search for relevant document chunks
    console.log("Searching for relevant chunks...");
    const { data: chunks, error: searchError } = await supabase.rpc(
      'search_document_chunks',
      {
        query_embedding: queryEmbedding,
        match_threshold: 0.7,
        match_count: 5,
      }
    );

    if (searchError) {
      console.error("Search error:", searchError);
      throw searchError;
    }

    console.log("Found chunks:", chunks?.length || 0);

    // 3. Build context from retrieved chunks
    const context = chunks && chunks.length > 0
      ? chunks.map((chunk: any) => 
          `[Документ: ${chunk.document_name}, Страна: ${chunk.page_number}]\n${chunk.chunk_text}`
        ).join('\n\n')
      : 'Нема достапни документи.';

    // 4. Generate response using GPT with context
    console.log("Generating response...");
    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Ти си AI асистент за осигурување кој помага на корисниците со информации за осигурителни полиси. 
            Одговарај на македонски јазик, јасно и професионално.
            Користи го следниот контекст од документите за да одговориш на прашањето.
            Ако не можеш да најдеш релевантна информација во контекстот, кажи дека не си сигурен и препорачај да контактираат директно.
            
            КОНТЕКСТ ОД ДОКУМЕНТИ:
            ${context}`,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const chatData = await chatResponse.json();
    const reply = chatData.choices[0].message.content;

    console.log("Response generated successfully");

    return new Response(
      JSON.stringify({ 
        reply,
        sources: chunks?.slice(0, 3).map((c: any) => ({
          document: c.document_name,
          page: c.page_number
        }))
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});