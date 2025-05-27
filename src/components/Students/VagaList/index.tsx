import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useVagas } from "@/hooks/useVacancies";
import type { Vaga } from "@/types/vagasType";
import { toast } from "sonner";
import { Link } from "react-router";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { Loading } from "@/components/Utils/Loading";
import { VagaDialog } from "../VagaDialog";
import empty from "@/assets/empty.svg";
export const VagasList = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const { getAppVagas, loading } = useVagas();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchVagas = async () => {
        try {
          const queryParams: Record<string, string> = { ...filters };

          if (search) queryParams.search = search;

          const response = await getAppVagas(queryParams);
          setVagas(response?.vagas ?? []);
        } catch (error) {
          toast.error("Erro ao carregar vagas");
        }
      };

      fetchVagas();
    }, 350);

    return () => clearTimeout(delayDebounce);
  }, [search, filters]);

  return (
    <div className="space-y-8 px-4 sm:px-12 mb-4">
      <h2 className="text-2xl font-semibold tracking-tight">Vagas Disponíveis</h2>

      <div className="md:grid gap-4 md:grid-cols-2 flex flex-col">
        <div className="relative">
          <Button
            variant={"outline"}
            className="absolute h-9 right-0"
            onClick={() => {
              setSearch("");
              setFilters({});
            }}
          >
            Resetar Filtros
          </Button>
          <Input
            placeholder="Pesquisar por título, empresa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-32"
          />
        </div>
        <div className="flex gap-4">
          <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, modalidade: value }))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Modalidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remoto">Remoto</SelectItem>
              <SelectItem value="presencial">Presencial</SelectItem>
              <SelectItem value="híbrido">Híbrido</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, nível: value }))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Nível" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="estágio">Estágio</SelectItem>
              <SelectItem value="junior">Júnior</SelectItem>
              <SelectItem value="trainee">Trainee</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center w-full h-">
          <Loading spiner={<CircleSpinner color="#f30" />} message="Carregando vagas..." />
        </div>
      ) : (
        <>
          {vagas.length <= 0 && (
            <div className="w-full h-full flex flex-col items-center justify-center  shadow-muted-foreground">
              <img src={empty} alt="Empty Ilustration" className="h-60" />
              <p className="text-md text-muted-foreground">Nenhuma vaga encontrada</p>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {vagas?.map((vaga) => (
              <Card key={vaga._id} className="flex flex-col justify-between relative">
                <CardHeader>
                  <CardTitle className="truncate max-w-[28ch]">{vaga.title}</CardTitle>
                  <div className="flex gap-4">
                    <p className="text-sm text-muted-foreground">{vaga.empresa}</p>
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
                    <Link to={vaga.subscriptionRef} target="_blank" referrerPolicy="no-referrer">
                      <Button className="w-full bg-primary80 text-white hover:bg-primary80/80">
                        <FaPaperPlane />
                        Candidatar-se
                      </Button>
                    </Link>
                    <VagaDialog vaga={vaga} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
