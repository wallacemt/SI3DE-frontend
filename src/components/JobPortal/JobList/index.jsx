import React, { useEffect } from "react";
import { FaPaperPlane, FaInfoCircle } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const mockVagas = [
  {
    id: 1,
    titulo: "Desenvolvedor Front-end Júnior",
    empresa: "Tech Solutions Inc.",
    local: "Salvador, BA",
    requisitos: [
      "HTML, CSS e JavaScript",
      "React ou Vue.js",
      "CRA mínimo: 7.0",
      "Matérias: Programação Web, Estrutura de Dados",
    ],
  },
  {
    id: 2,
    titulo: "Analista de Dados",
    empresa: "Data Analytics Corp",
    local: "Remoto",
    requisitos: [
      "Python e SQL",
      "Conhecimento em análise de dados",
      "CRA mínimo: 8.0",
      "Matérias: Banco de Dados, Estatística",
    ],
  },
  {
    id: 3,
    titulo: "Engenheiro de Software",
    empresa: "Softtech Inc.",
    local: "Remoto",
    requisitos: [
      "Java ou Python",
      "Conhecimento em padr es de codificação",
      "CRA mínimo: 8.0",
      "Matérias: Engenharia de Software, Programação Orientada a Objetos",
    ],
  },
  {
    id: 4,
    titulo: "Desenvolvedor Mobile",
    empresa: "Mobile Solutions",
    local: "Remoto",
    requisitos: [
      "Java, Swift ou Kotlin",
      "Conhecimento em desenvolvimento mobile",
      "CRA mínimo: 8.0",
      "Matérias: Desenvolvimento de Software, Programação Mobile",
    ],
  },
  {
    id: 5,
    titulo: "Desenvolvedor de Jogos",
    empresa: "GameDev Studio",
    local: "Salvador, BA",
    requisitos: [
      "Java, C# ou C++",
      "Conhecimento em desenvolvimento de jogos",
      "CRA mínimo: 7.0",
      "Matérias: Programação de Jogos, Desenvolvimento de Software",
    ],
  },
  {
    id: 6,
    titulo: "Gerente de TI",
    empresa: "TechSupport Inc.",
    local: "Salvador, BA",
    requisitos: [
      "Experiência em gerenciamento de equipes",
      "Conhecimento em segurança de redes",
      "CRA mínimo: 8.0",
      "Matérias: Administração de Redes, Segurança de Redes",
    ],
  },
];


export const JobList = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, [])
  return (
    <div className="flex flex-col h-full w-full items-center px-4 py-10 bg-DarkP dark:bg-neutral-900 transition-colors">
     
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-secundaria absolute top-4">
        Portal de Estágios
      </h1>

      <div className="lg:w-1/2 space-y-6">
        {mockVagas.map((vaga) => (
          <div
            key={vaga.id}
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 transition hover:shadow-lg border border-neutral90/70 dark:border-neutral10"
            data-aos="fade-up"
          >
            <div className="border-b border-gray-200 dark:border-neutral-700 pb-3 mb-4">
              <h2 className="text-xl font-semibold text-primary dark:text-purple-300">{vaga.titulo}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {vaga.empresa} - {vaga.local}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Requisitos:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {vaga.requisitos.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <button className="bg-primary80 text-white font-medium px-4 py-2 rounded hover:bg-purple-800 transition flex items-center gap-2">
                <FaPaperPlane />
                Candidatar-se
              </button>
              <button className="bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-white font-medium px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-neutral-600 transition flex items-center gap-2">
                <FaInfoCircle />
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
