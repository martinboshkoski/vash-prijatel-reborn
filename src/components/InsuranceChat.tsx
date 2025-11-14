import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ document: string; page: number }>;
}

export const InsuranceChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { message: userMessage },
      });

      if (error) throw error;

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
          sources: data.sources,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Грешка",
        description: "Настана грешка при комуникацијата. Ве молиме обидете се повторно.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Chat Interface */}
      <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-border">
        {/* Messages Display */}
        {messages.length > 0 && (
          <div className="mb-4 max-h-[400px] overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${
                  msg.role === "user"
                    ? "bg-primary/10 ml-8"
                    : "bg-muted mr-8"
                }`}
              >
                <p className="text-sm font-semibold mb-1">
                  {msg.role === "user" ? "Вие" : "AI Асистент"}
                </p>
                <p className="text-foreground whitespace-pre-wrap">
                  {msg.content}
                </p>
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p className="font-semibold">Извори:</p>
                    {msg.sources.map((source, i) => (
                      <p key={i}>
                        • {source.document} (Страна {source.page})
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Напишете ја вашата порака овде... (на пр. Кои видови осигурување нудите?)"
              className="w-full min-h-[120px] p-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            {isLoading
              ? "AI асистентот размислува..."
              : "Напишете ја вашата порака и притиснете Испрати"}
          </p>
          <Button
            size="lg"
            className="px-8"
            onClick={handleSend}
            disabled={isLoading || !message.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Се вчитува
              </>
            ) : (
              "Испрати"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};