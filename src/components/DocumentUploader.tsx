import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const DocumentUploader = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<string>("");
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    setProgress("Започнува обработка...");

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setProgress(`Обработка на ${file.name} (${i + 1}/${files.length})...`);

        // Read file as text (simplified - in production you'd use PDF.js or similar)
        const text = await file.text();
        
        // Process document
        const { error } = await supabase.functions.invoke("process-documents", {
          body: {
            documentName: file.name,
            text: text,
            pageNumber: 1,
          },
        });

        if (error) throw error;
      }

      toast({
        title: "Успешно!",
        description: `Обработени се ${files.length} документи.`,
      });
      setProgress("Завршено! ✓");
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Грешка",
        description: "Настана грешка при обработка на документите.",
        variant: "destructive",
      });
      setProgress("");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-6 border border-border rounded-lg bg-card">
      <h3 className="text-lg font-semibold mb-4">Прикачи Документи за Тренинг</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Прикачете PDF документи за да го тренирате chatbot-от со вашите податоци.
      </p>
      
      <div className="flex items-center gap-4">
        <Button
          disabled={isProcessing}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Обработка...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Избери Документи
            </>
          )}
        </Button>
        
        <input
          id="file-upload"
          type="file"
          multiple
          accept=".pdf,.txt"
          onChange={handleFileUpload}
          className="hidden"
          disabled={isProcessing}
        />

        {progress && (
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            {progress.includes("✓") ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            {progress}
          </span>
        )}
      </div>
    </div>
  );
};