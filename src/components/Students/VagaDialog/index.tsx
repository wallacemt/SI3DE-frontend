import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";
import { format } from "date-fns";
import type { Vaga } from "@/types/vagasType";
import { useState } from "react";
import { Link } from "react-router";

interface VagaDialogProps {
  vaga: Vaga;
  isSubscribed?: boolean;
}
export function VagaDialog({ vaga, isSubscribed }: VagaDialogProps) {
  const [open, setOpen] = useState(false);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
          Ver detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-full  ">
        <DialogHeader className="space-y-1">
          <DialogTitle className="flex flex-col items-center gap-2 text-lg font-bold text-foreground">
            <Briefcase className="w-14 h-14 text-primary" />
            {vaga.title}
          </DialogTitle>
          <p className="text-xs text-muted-foreground">Publicado em {format(new Date(vaga.createdAt), "dd/MM/yyyy")}</p>
        </DialogHeader>

        <Separator className="my-3" />

        <div className="space-y-4 text-sm max-h-[70vh] overflow-y-auto pr-1">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Empresa: </p>
            <span className="text-base font-medium text-primary">{vaga.empresa}</span>
          </div>

          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Descrição: </p>
            <p className="text-sm text-foreground">{vaga.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Bolsa: </p>
            <p className="text-sm text-foreground">{formatter.format(vaga.bolsa)} </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">Modalidade: {vaga.modalidade}</Badge>
            <Badge variant="outline">Nível: {vaga.nível}</Badge>
            <Badge variant="secondary">Plataforma: {vaga.publicationPlataform}</Badge>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <Button variant="ghost" className="w-full sm:w-auto" onClick={() => setOpen(false)}>
            Voltar
          </Button>
          {!isSubscribed && (
            <Link to={vaga.subscriptionRef} target="_blank" referrerPolicy="no-referrer">
              <Button variant="default" className="w-full sm:w-auto">
                Candidatar-se
              </Button>
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
