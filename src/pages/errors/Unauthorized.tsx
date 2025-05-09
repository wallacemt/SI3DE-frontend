import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from "@/components/ui/button";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const  Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div
        className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden"
        data-aos="fade-up"
      >
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6">
            <FaExclamationTriangle className="text-red-500 text-3xl" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
            Acesso não autorizado
          </h1>

          <p className="text-gray-600 mb-6">
            Você está tentando acessar uma área restrita.{" "}
            <span className="font-medium">Estudantes não têm permissão</span> para visualizar esta página.
          </p>

          <div className="flex justify-center">
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center hover:translate-y-[-2px] hover:shadow-lg transition-all cursor-pointer"
            >
              <FaHome className="mr-2" />
              Voltar para o início
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            Se você acredita que isso é um erro, entre em contato com o suporte técnico.
          </p>
        </div>
      </div>
    </div>
  );
};

