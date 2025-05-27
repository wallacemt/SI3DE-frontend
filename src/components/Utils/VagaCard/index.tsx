import StageEvaluationDialog from "@/components/Students/AvaliationModal";
import { VagaDialog } from "@/components/Students/VagaDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Vaga } from "@/types/vagasType";
import { ChartPie, CircleCheckBig, CircleX, Loader, Medal, PartyPopper } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router";

interface VagaCardProps {
  vaga: Vaga;
  isSubscribed?: boolean;
  mode?: "default" | "avaliation";
}
export const VagaCard = ({ vaga, isSubscribed, mode = "default" }: VagaCardProps) => {
  return (
    <Card className="flex flex-col justify-between relative">
      <CardHeader>
        <CardTitle className="truncate max-w-[28ch]">{vaga.title}</CardTitle>
        <span className="text-xs text-muted-foreground">
          Adicionado {""}
          {new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(vaga?.createdAt || new Date()))}
        </span>
        <div className="flex gap-4">
          <Badge
            variant={vaga.modalidade === "remoto" ? "outline" : "secondary"}
            className="text-sm text-muted-foreground"
          >
            {vaga.empresa}
          </Badge>
          <Badge variant="secondary" className="text-muted-foreground font-bold">
            {vaga.turno.charAt(0).toUpperCase() + vaga.turno.slice(1)}
          </Badge>
          <Badge variant="outline" className="text-secundariaP2 border border-secundaria">
            Inscritos: {vaga.subscriptions}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium">Requisitos:</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-x-2 space-y-2 p-1">
            <Badge>Conhecimento em React</Badge>
            <Badge>HTML, CSS, JS</Badge>
            <Badge>Boa comunicação</Badge>
          </ul>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {mode === "default" &&
            (vaga.status === "nao_inscrito" || !vaga.status ? (
              <Link to={vaga.subscriptionRef} target="_blank" referrerPolicy="no-referrer">
                <Button className="w-full bg-primary80 text-white hover:bg-primary80/80">
                  <FaPaperPlane />
                  Candidatar-se
                </Button>
              </Link>
            ) : vaga.status === "inscrito" ? (
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Loader className="text-primary" />
                Inscrito (aguardando análise)
              </Button>
            ) : vaga.status === "em_analise" ? (
              <Button variant="outline" className="w-full flex items-center gap-2">
                <ChartPie className="text-yellow-500" />
                Em análise
              </Button>
            ) : vaga.status === "aprovado" ? (
              <Button variant="outline" className="w-full flex items-center gap-2">
                <CircleCheckBig className="text-green-600" />
                Aprovado para próxima fase
              </Button>
            ) : vaga.status === "reprovado" ? (
              <Button variant="outline" className="w-full flex items-center gap-2 text-red-500" disabled>
                <CircleX />
                Não aprovado
              </Button>
            ) : vaga.status === "finalista" ? (
              <Button variant="outline" className="w-full flex items-center gap-2 text-blue-600">
                <Medal />
                Etapa final
              </Button>
            ) : vaga.status === "contratado" ? (
              <Button variant="outline" className="w-full flex items-center gap-2 text-emerald-600" disabled>
                <PartyPopper />
                Contratado
              </Button>
            ) : null)}
          {mode === "avaliation" && <StageEvaluationDialog />}
          <VagaDialog vaga={vaga} isSubscribed={isSubscribed} />
        </div>
      </CardContent>
    </Card>
  );
};
