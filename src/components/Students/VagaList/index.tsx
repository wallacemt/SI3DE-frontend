import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useVagas } from "@/hooks/useVagas";
import type { Vaga } from "@/types/vagasType";
import { toast } from "sonner";
import { Link } from "react-router";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { Loading } from "@/components/Utils/Loading";
import { VagaDialog } from "../VagaDialog";

export const VagasList = () => {
  const [vagas, setVagas] = useState<Vaga[] | []>();
  const {getAppVagas, loading} = useVagas();

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await getAppVagas();
        setVagas(response?.vagas!);
      } catch (error) {
        toast.error("Erro ao carregar vagas");
      }
    };

    fetchVagas();
  }, []);

  if(loading) {
    return <Loading spiner={<CircleSpinner color="#f30"/>} message="Carregando vagas..."/>
  }
  return (
    <div className="space-y-8 px-12 mb-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Vagas Disponíveis
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {vagas?.map((vaga) => (
          <>
            <Card
              key={vaga._id}
              className="flex flex-col justify-between relative"
            >
              <CardHeader>
                <CardTitle className="truncate max-w-[28ch] hover:">
                  {vaga.title}
                </CardTitle>
                <div className="flex gap-4">
                  <p className="text-sm text-muted-foreground">
                    {vaga.empresa}
                  </p>
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
                  <Link
                    to={vaga.subscriptionRef}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <Button className=" w-full text-white font-medium rounded hover:bg-primary80/80 bg-primary80 cursor-pointer transition flex items-center gap-2">
                      <FaPaperPlane />
                      Candidatar-se
                    </Button>
                  </Link>
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
