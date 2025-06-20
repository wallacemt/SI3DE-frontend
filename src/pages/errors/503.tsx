import React, { useEffect, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ServerMaintenance: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_#2563eb_50%,_#1e3a8a_100%)] min-h-screen flex flex-col items-center justify-center text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
        <div className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-blue-400 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-indigo-900 animate-pulse delay-100"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-purple-900 animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 rounded-full bg-blue-900 animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <div className="animate-[float_6s_ease-in-out_infinite] mb-12">
          <div className="flex items-center justify-center space-x-3">
            <img
              src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1744306739/logo_dhl8vb.png"
              alt="Project Logo"
              className="w-22 lg:w-44 self-center top-0 border-b border-gray-400"
            />
          </div>
        </div>
        <h1
          className="text-8xl font-bold mb-6 text-[#88005b] drop-shadow-[0_0_10px_rgba(106,27,154,0.7)]"
          data-aos="fade-down"
        >
          503
        </h1>

        <h2 className="text-4xl font-semibold mb-6 font-principal"> Servidor Em Manutenção</h2>

        <p className="text-xl mb-10 font-secundaria">
          Lamentamos o inconveniente, O servidor esta em manutenção,
          <br /> tente novamente mais tarde.
        </p>
        <button
          onClick={() => window.location.reload()}
          className=" px-4 py-2 bg-secundaria/60 hover:bg-secundaria text-white font-bold rounded transition  cursor-pointer"
        >
          Tentar novamente
        </button>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-6 text-center text-blue-200 z-10" data-aos="fade-in" data-aos-delay="3000">
        <p>Sistema de Vagas Icaros © 2023 - Projeto acadêmico</p>
      </div>
    </div>
  );
};
