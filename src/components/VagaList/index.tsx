import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { FaPaperPlane } from "react-icons/fa";
import { dataVagasMock } from "./dataVagasMock";
import { VagaDialog } from "../VagaDialog";

export const VagasList = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Vagas Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataVagasMock.map((vaga) => (
          <>
            <Card key={vaga.id} className="flex flex-col justify-between relative">
              <Badge variant="default" className="absolute right-2">Inscritos: {vaga.subscriptions}</Badge>
              <CardHeader>
                <CardTitle>{vaga.title}</CardTitle>
                <p className="text-sm text-muted-foreground">Empresa Exemplo</p>
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
                  <Button className=" text-white font-medium rounded hover:bg-primary80/80 bg-primary80 cursor-pointer transition flex items-center gap-2">
                    <FaPaperPlane />
                    Candidatar-se
                  </Button>
                  <VagaDialog vaga={vaga} />
                </div>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};
