import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";
import { format } from "date-fns";
import type { Vaga } from "@/types/vagasType";

export function VagaDialog({ vaga }: { vaga: Vaga }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Ver detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Briefcase className="w-5 h-5 text-primary" />
            {vaga.title}
          </DialogTitle>
          <p className="text-xs text-muted-foreground">Publicado em {format(new Date(vaga.createdAt), "dd/MM/yyyy")}</p>
        </DialogHeader>

        <Separator className="my-2" />

        <div className="space-y-3 text-sm max-h-[75vh] overflow-y-auto pr-1">
          <p>
            <strong>Empresa:</strong> <span className="text-primary font-medium">Empresa Exemplo</span>
          </p>

          <p>
            <strong>Descrição:</strong> {vaga.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Modalidade: {vaga.modalidade}</Badge>
            <Badge variant="outline">Nível: {vaga.nível}</Badge>
            <Badge variant="secondary">Plataforma: {vaga.publicationPlataform}</Badge>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex justify-end gap-2">
          <Button variant="secondary">Voltar</Button>
          <Button variant="default">Candidatar-se</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
