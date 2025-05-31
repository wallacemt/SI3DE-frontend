import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Vaga } from "@/types/vagasType";
import { VagaCard } from "@/components/Utils/VagaCard";
import { BriefcaseBusiness } from "lucide-react";
import { Empty } from "@/components/Utils/Empty";

export const StudentSubscriptions = () => {
  const [inscritas, setInscritas] = useState<Vaga[]>();
  const [historico, setHistorico] = useState<Vaga[]>();
  useEffect(() => {
    setInscritas([
      {
        _id: "682fbc69b2f9cfb7b3960a4d",
        bolsa: 1200.0,
        createdAt: new Date("2025-04-29T09:00:00Z"),
        description: "Conhecimentos em HTML, CSS, JavaScript e React.",
        empresa: "TechWave",
        modalidade: "remoto",
        nível: "estágio",
        publicationPlataform: "LinkedIn",
        requisitos: ["HTML", "CSS", "JavaScript", "React"],
        subscriptionRef: "https://www.linkedin.com/jobs/view/1",
        subscriptions: 1,
        title: "Estágio em Desenvolvimento Front-End",
        turno: "matutino",
        status: "inscrito",
      },
      {
        _id: "682fbc69b2f9cfb7b3960a4d",
        bolsa: 1200.0,
        createdAt: new Date("2025-04-29T09:00:00Z"),
        description: "Conhecimentos em HTML, CSS, JavaScript e React.",
        empresa: "TechWave",
        modalidade: "remoto",
        nível: "estágio",
        publicationPlataform: "LinkedIn",
        requisitos: ["HTML", "CSS", "JavaScript", "React"],
        subscriptionRef: "https://www.linkedin.com/jobs/view/1",
        subscriptions: 1,
        title: "Estágio em Desenvolvimento Front-End",
        turno: "matutino",
        status: "aprovado",
      },
      {
        _id: "682fbc69b2f9cfb7b3960a4d",
        bolsa: 1200.0,
        createdAt: new Date("2025-04-29T09:00:00Z"),
        description: "Conhecimentos em HTML, CSS, JavaScript e React.",
        empresa: "TechWave",
        modalidade: "remoto",
        nível: "estágio",
        publicationPlataform: "LinkedIn",
        requisitos: ["HTML", "CSS", "JavaScript", "React"],
        subscriptionRef: "https://www.linkedin.com/jobs/view/1",
        subscriptions: 1,
        title: "Estágio em Desenvolvimento Front-End",
        turno: "matutino",
        status: "em_analise",
      },
    ]);
    setHistorico([
      {
        _id: "682fbc69b2f9cfb7b3960a4d",
        bolsa: 1200.0,
        createdAt: new Date("2025-04-29T09:00:00Z"),
        description: "Conhecimentos em HTML, CSS, JavaScript e React.",
        empresa: "TechWave",
        modalidade: "remoto",
        nível: "estágio",
        publicationPlataform: "LinkedIn",
        requisitos: ["HTML", "CSS", "JavaScript", "React"],
        subscriptionRef: "https://www.linkedin.com/jobs/view/1",
        subscriptions: 1,
        title: "Estágio em Desenvolvimento Front-End",
        turno: "matutino",
        status: "reprovado",
      },
    ]);
  }, []);

  return (
    <div className="space-y-6 px-6 py-4">
      <h1 className="text-2xl font-bold text-primary flex gap-2 items-center">
        <BriefcaseBusiness /> Minhas Vagas
      </h1>

      <Accordion type="multiple" className="w-full h-full space-y-4" defaultValue={["inscritas"]}>
        <AccordionItem value="inscritas">
          <AccordionTrigger className="text-lg font-medium">Vagas Inscritas</AccordionTrigger>
          <AccordionContent className={`${inscritas?.length! > 0 ? "grid" : "block"} gap-4 lg:grid-cols-2`}>
            {inscritas?.length! > 0 ? (
              inscritas?.map((vaga) => <VagaCard key={vaga._id} vaga={vaga} isSubscribed />)
            ) : (
              <Empty message="Nenhuma vaga inscrita" />
            )}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="historico">
          <AccordionTrigger className="text-lg font-medium">Histórico de Vagas</AccordionTrigger>
          <AccordionContent className={`${inscritas?.length! > 0 ? "grid" : "block"} gap-4 grid-cols-1 lg:grid-cols-2`}>
            {historico?.length! > 0 ? (
              historico?.map((vaga) => <VagaCard key={vaga._id} vaga={vaga} />)
            ) : (
              <Empty message="Nenhuma histico de vaga" />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
