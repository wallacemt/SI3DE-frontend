import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useVagas } from "@/hooks/useVacancies";
import type { Vaga } from "@/types/vagasType";
import { toast } from "sonner";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { Loading } from "@/components/Utils/Loading";
import empty from "@/assets/empty.svg";
import { VagaCard } from "@/components/Utils/VagaCard";
import { BriefcaseBusiness } from "lucide-react";
import { Empty } from "@/components/Utils/Empty";

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
      <h1 className="text-2xl font-bold text-primary flex gap-2 items-center">
        <BriefcaseBusiness className="text-secundaria/90" size={30} /> Vagas Disponiveis
      </h1>

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
          <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, turno: value }))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Turno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matutino">Matutino</SelectItem>
              <SelectItem value="vespertino">Vespertino</SelectItem>
              <SelectItem value="noturno">Noturno</SelectItem>
              <SelectItem value="integral">Integral</SelectItem>
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
            <Empty image={empty} message="Nehuma vaga encontrada!"/>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {vagas?.map((vaga) => (
              <VagaCard vaga={vaga} key={vaga._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
