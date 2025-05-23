import React, { useEffect, useState } from "react";
import { FaBriefcase, FaSearch, FaFilter, FaChartLine, FaCheck, FaLock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const tips = [
  "Analisando seu histórico acadêmico...",
  "Verificando empresas com vagas abertas...",
  "Comparando com seu perfil profissional...",
  "Calculando compatibilidade com as vagas...",
  "Preparando recomendações personalizadas...",
];

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 600 });

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 10, 100);
        if (next >= 100) clearInterval(interval);
        return next;
      });
    }, 500);

    const tipInterval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(tipInterval);
    };
  }, []);
  const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme") as "light" | "dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <div className="bg-foreground dark:bg-DarkP min-h-screen flex items-center justify-center p-4 sm:p-6 relative">
      <div
        className="relative z-10 w-full max-w-md dark:bg-DarkP bg-card-foreground rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        data-aos="zoom-in"
      >
        {/* Conteúdo principal com rolagem se necessário */}
        <div className="overflow-y-auto flex-grow">
          <div className="dark:bg-DarkP bg-card-foreground px-6 py-4">
            <div className="flex items-center justify-center space-x-3">
              <img
                src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1744306739/logo_dhl8vb.png"
                alt="Project Logo"
                className="w-22 lg:w-44 self-center top-0 border-b border-gray-400"
              />
            </div>
          </div>

          <div className="px-8 py-4 text-center">
            {/* Ícone animado */}
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-300 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border-4 border-indigo-300 animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              />
              <div className="absolute inset-8 flex items-center justify-center">
                <FaBriefcase className="text-indigo-600 text-3xl animate-bounce-custom" />
              </div>
            </div>

            <h2 className="text-2xl font-bold font-principal text-neutral10 dark:text-gray-800 mb-2">
              Encontrando as melhores vagas
            </h2>
            <p className="text-gray-200 dark:text-gray-600 mb-2 font-secundaria">
              Estamos analisando seu perfil e buscando oportunidades compatíveis...
            </p>
            <p className="text-sm text-gray-100 dark:text-gray-500 mt-1 italic font-secundaria">{tips[tipIndex]}</p>

            <div className="my-6">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-sm text-gray-50 dark:text-gray-500 mt-2">{Math.floor(progress)}% concluído</p>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              {[
                { icon: <FaSearch />, label: "Buscando", delay: "0s" },
                { icon: <FaFilter />, label: "Filtrando", delay: "0.3s" },
                { icon: <FaChartLine />, label: "Analisando", delay: "0.6s" },
                { icon: <FaCheck />, label: "Finalizando", delay: "0.9s" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center animate-pulse-custom"
                    style={{ animationDelay: step.delay }}
                  >
                    <div className="text-indigo-600">{step.icon}</div>
                  </div>
                  <span className="text-xs text-gray-200 dark:text-gray-500 mt-2">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé fixo */}
        <div className="bg-card-foreground/50 px-6 py-4 border-t border-gray-200 text-sm dark:text-gray-100 text-gray-500 text-center">
          <FaLock className="inline mr-2" />
          Seus dados estão protegidos e serão usados apenas para esta finalidade
        </div>
      </div>

      {/* Estilos de animação */}
      <style>
        {`
      @keyframes pulse-custom {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @keyframes bounce-custom {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }

      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .animate-pulse-custom {
        animation: pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      .animate-bounce-custom {
        animation: bounce-custom 2s infinite;
      }

      .animate-spin-slow {
        animation: spin-slow 3s linear infinite;
      }
    `}
      </style>
    </div>
  );
};

export default LoadingPage;