import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaPaperPlane } from "react-icons/fa";
import { dataVagasMock } from "@/assets/dataVagasMock";
import { VagaDialog } from "../VagaDialog";

export const VagasList = () => {
  return (
    <div className="space-y-8 px-12">
      <h2 className="text-2xl font-semibold tracking-tight">Vagas Disponíveis</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {dataVagasMock.map((vaga) => (
          <>
            <Card key={vaga.id} className="flex flex-col justify-between relative">
              <CardHeader>
                <CardTitle className="truncate max-w-[25ch] hover:">{vaga.title}</CardTitle>
                <div className="flex gap-4">
                  <p className="text-sm text-muted-foreground">Empresa Exemplo</p>
                  <Badge
                    variant="outline"
                    className="text-secundariaP2 border flex items-center justify-center right-2 border-secundaria"
                  >
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
