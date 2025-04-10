import { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Aos from "aos";

Chart.register(ArcElement, Tooltip, Legend);

export const JobFilters = () => {
  const [area, setArea] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [periodo, setPeriodo] = useState("");
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const chartData = {
    labels: ["Front-end", "Back-end", "Ciência de Dados", "DevOps", "QA", "Suporte"],
    datasets: [
      {
        data: [30, 20, 25, 15, 5, 5],
        backgroundColor: [
          "#10B981", // Alta demanda
          "#F59E0B", // Média
          "#10B981", // Alta
          "#F59E0B", // Média
          "#EF4444", // Baixa
          "#EF4444", // Baixa
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          color: "#4B5563", // texto cinza para dark mode também
        },
      },
    },
  };

  return (
    <div className="w-full hidden xl:fixed right-2 md:max-w-sm lg:flex flex-col gap-6 px-4 md:px-0 " data-aos="fade-right">
      {/* Filtros */}
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow border border-gray-200 dark:border-neutral-700">
        <h2 className="text-lg font-semibold text-primary dark:text-purple-300 mb-4">Filtros</h2>

        <div className="space-y-2">
          {/* Área */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Área</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="px-3 py-2 border rounded-md bg-gray-50 dark:bg-neutral-700 dark:text-white border-gray-300 dark:border-neutral-600"
            >
              <option value="">Todas as áreas</option>
              <option value="desenvolvimento">Desenvolvimento</option>
              <option value="dados">Ciência de Dados</option>
              <option value="seguranca">Segurança</option>
            </select>
          </div>

          {/* Modalidade */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Modalidade</label>
            <select
              value={modalidade}
              onChange={(e) => setModalidade(e.target.value)}
              className="px-3 py-2 border rounded-md bg-gray-50 dark:bg-neutral-700 dark:text-white border-gray-300 dark:border-neutral-600"
            >
              <option value="">Todas as modalidades</option>
              <option value="presencial">Presencial</option>
              <option value="remoto">Remoto</option>
              <option value="hibrido">Híbrido</option>
            </select>
          </div>

          {/* Período */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Período</label>
            <select
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              className="px-3 py-2 border rounded-md bg-gray-50 dark:bg-neutral-700 dark:text-white border-gray-300 dark:border-neutral-600"
            >
              <option value="">Todos os períodos</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </div>
        </div>
      </div>

      {/* Gráfico de demanda */}
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow border border-gray-200 dark:border-neutral-700">
        <h2 className="text-lg font-semibold text-primary dark:text-purple-300 mb-4">Demanda por Área</h2>
        <div className="relative h-64">
          <Pie data={chartData} options={chartOptions} />
        </div>

        <div className="mt-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-semibold text-green-600">Alta:</span> Front-end, Ciência de Dados
          </p>
          <p>
            <span className="font-semibold text-yellow-500">Média:</span> Back-end, DevOps
          </p>
          <p>
            <span className="font-semibold text-red-500">Baixa:</span> QA, Suporte
          </p>
        </div>
      </div>
    </div>
  );
};
