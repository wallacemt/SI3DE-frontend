import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthBanner } from "../../Utils/AuthBanner";
import Aos from "aos";
import "aos/dist/aos.css";
import { Eye, EyeOff, KeyIcon, UserIcon } from "lucide-react";
import { cursoOptions } from "./courseOptions";

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen bg-white/90 flex overflow-hidden">
      <div className="h-full">
        <AuthBanner position="left" effect="fade-right" />
      </div>
      <div className="h-full w-full lg:w-[50%] relative lg:absolute lg:right-0 flex justify-center">
        <div className="h-full w-full flex flex-col items-center justify-between bg-white">
          <div className="flex flex-col items-start justify-center flex-1 w-full max-w-md">
            <div className="flex flex-col items-start font-secundaria w-full">
              <img src="./logo.svg" alt="Wyden Logo" className="w-64 mb-4 self-start relative left-[-4rem]" />
              <h2 className="text-lg text-gray-700">Cadastro</h2>
              <h1 className="text-2xl md:text-3xl font-principal font-bold text-left text-gray-900 mt-1">
                Crie sua conta e comece sua jornada profissional
              </h1>
              <p className="text-left text-lg text-gray-600 mt-3 mb-6 font-secundaria">
                Preencha os campos abaixo com seus dados institucionais para se cadastrar na plataforma.
              </p>
            </div>

            <form
              className="w-full space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(name, email, matricula, password, curso);
              }}
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col w-full relative">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-90/80 mb-1">
                    Nome completo
                  </label>
                  <span className="absolute left-2 top-[2.7rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500">
                    <UserIcon size={20} />
                  </span>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-neutral-300 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-secundaria/40"
                  />
                </div>

                <div className="flex flex-col w-full relative">
                  <label htmlFor="matricula" className="text-sm font-medium text-neutral-90/80 mb-1">
                    Matrícula
                  </label>
                  <input
                    id="matricula"
                    type="text"
                    required
                    placeholder="Ex: 2023123456"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    className="border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secundaria/40"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col w-full relative">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-90/80 mb-1">
                    E-mail institucional
                  </label>
                  <span className="absolute left-2 top-[2.7rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500">
                    <UserIcon size={20} />
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-neutral-300 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-secundaria/40"
                  />
                </div>

                <div className="flex flex-col w-full  relative">
                  <label htmlFor="password" className="text-sm font-medium text-neutral90/80 mb-1">
                    Senha
                  </label>
                  <span className="absolute left-2 top-[2.7rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500">
                    <KeyIcon size={20} />
                  </span>
                  <input
                    id="password"
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-neutral-300 rounded-md px-8 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-secundaria/40"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-[38px] text-neutral90/60 hover:text-neutral90/90"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="curso" className="text-sm font-medium text-neutral-90/80 mb-1">
                  Curso
                </label>
                <select
                  id="curso"
                  value={curso}
                  required
                  onChange={(e) => setCurso(e.target.value)}
                  className="border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secundaria/40"
                >
                  <option value="" disabled>
                    Selecione um curso
                  </option>
                  {cursoOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button className="bg-secundaria w-full text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-800 transition">
                Cadastrar
              </button>

              <div className="text-sm mt-2 text-neutral90/60 font-secundaria flex justify-between w-full">
                <p className="font-secundaria">
                  Já tem conta?{" "}
                  <span
                    className="font-semibold underline hover:text-neutral90 cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>

            <div className="w-full mt-8 pt-4 text-center text-xs text-neutral90/80">
              <p className="font-semibold">
                &copy; Desenvolvido por alunos da <span className="underline hover:text-neutral90/100">UNIRUY</span> -
                Wyden.
              </p>
            </div>
          </div>

          <div className="w-full bg-DarkP2 py-8 text-center text-lg text-neutral90/80 bg-DarkP1 font-secundaria">
            Está com dúvidas para se cadastrar?{" "}
            <span className="font-semibold cursor-pointer underline hover:text-neutral90/100">Acessar Ajuda</span>
          </div>
        </div>
      </div>
    </div>
  );
};
