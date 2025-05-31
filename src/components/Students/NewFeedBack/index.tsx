import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCirclePlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { defaultSideBarClassName } from "@/components/ui/sidebar";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useFeedback } from "@/hooks/useFeedback";

export const EnviarFeedback = () => {
  const [tipo, setTipo] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const maxChars = 400;
  const { enviarFeedback, loading } = useFeedback();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <p className={`${defaultSideBarClassName} cursor-pointer text-sm`}>Enviar Feedback</p>
      </DialogTrigger>

      <DialogContent className="w-full md:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center gap-3 pb-2 px-2 sm:px-4 pt-4">
          <DialogTitle className="text-xl font-semibold flex gap-2 items-center">
            <MessageCirclePlus className="w-6 h-6 text-primary" />
            Envie seu Feedback
          </DialogTitle>
        </DialogHeader>

        <form
          className="space-y-4"
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            enviarFeedback({ tipo, mensagem, setOpen });
          }}
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 w-full">
              <Label className="text-sm font-medium">Tipo de Feedback</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger className="w-full focus:ring-2 focus:ring-primary/30">
                  <SelectValue placeholder="Selecione o tipo de feedback" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sugestao">💡 Sugestão</SelectItem>
                  <SelectItem value="elogio">🎉 Elogio</SelectItem>
                  <SelectItem value="erro">🐞 Erro</SelectItem>
                  <SelectItem value="outro">📄 Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 w-full">
              <Label htmlFor="mensagem" className="text-sm font-medium">
                Mensagem
              </Label>
              <Textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value.slice(0, maxChars))}
                rows={5}
                placeholder="Descreva seu feedback com clareza..."
                className="w-full resize-none break-words whitespace-pre-wrap border-muted focus-visible:ring-2 focus-visible:ring-primary/40"
              />

              <div className="flex justify-end">
                <Badge variant="outline" className="text-xs">
                  {mensagem.length}/{maxChars} caracteres
                </Badge>
              </div>
            </div>

            <Button type="submit" disabled={!tipo && !mensagem.trim() || loading} className="w-full">
              <MessageCirclePlus className="mr-2 w-4 h-4" />
              Enviar Feedback
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
