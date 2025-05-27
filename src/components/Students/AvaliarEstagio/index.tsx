import { useEffect, useState } from "react";
import { useVagas } from "@/hooks/useVacancies";
import type { Vaga } from "@/types/vagasType";
import { toast } from "sonner";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { Loading } from "@/components/Utils/Loading";
import empty from "@/assets/empty.svg";
import { VagaCard } from "@/components/Utils/VagaCard";
import { Empty } from "@/components/Utils/Empty";
import { Star } from "lucide-react";

export const AvaliarEstagio = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const { getAppVagas, loading } = useVagas();
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchVagas = async () => {
        try {
          const response = await getAppVagas();
          setVagas(response?.vagas ?? []);
        } catch (error) {
          toast.error("Erro ao carregar vagas");
        }
      };

      fetchVagas();
    }, 350);

    return () => clearTimeout(delayDebounce);
  }, []);

  return (
    <div className="space-y-8 px-4 sm:px-12 mb-4">
      <h1 className="text-2xl font-bold text-primary flex gap-2 items-center">
        <Star className="text-yellow-400/90" size={30} /> Avalie seus estagios
      </h1>

      {loading ? (
        <div className="flex justify-center items-center w-full h-">
          <Loading spiner={<CircleSpinner color="#f30" />} message="Carregando vagas..." />
        </div>
      ) : (
        <>
          {vagas.length <= 0 && <Empty image={empty} message="Nehuma vaga encontrada!" />}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {vagas?.slice(0, 3).map((vaga) => (
              <VagaCard vaga={vaga} key={vaga._id} mode="avaliation" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
