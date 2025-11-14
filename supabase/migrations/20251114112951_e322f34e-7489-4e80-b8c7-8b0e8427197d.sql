-- Fix function search path
DROP FUNCTION IF EXISTS search_document_chunks(vector, float, int);

CREATE OR REPLACE FUNCTION search_document_chunks(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  document_name text,
  page_number integer,
  chunk_text text,
  similarity float
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    document_chunks.id,
    document_chunks.document_name,
    document_chunks.page_number,
    document_chunks.chunk_text,
    1 - (document_chunks.embedding <=> query_embedding) as similarity
  FROM document_chunks
  WHERE 1 - (document_chunks.embedding <=> query_embedding) > match_threshold
  ORDER BY document_chunks.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;