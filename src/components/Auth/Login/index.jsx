import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthBanner } from "../../Utils/AuthBanner";
import Aos from "aos";
import "aos/dist/aos.css";
import { Eye, EyeOff, KeyIcon, UserIcon } from "lucide-react";
import { Loading } from "../../Utils/Loading";
import { CircleSpinner, ClapSpinner } from "react-spinners-kit";
import { AlertWindow } from "../../Utils/AlertWindow";

const mockLogin = {
  email: "202404437019@alunos.uniruy.edu.br",
  password: "1132@Wyden",
};

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWindow, setShowWindow] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email === mockLogin.email && password === mockLogin.password) {
        showAlert("Login realizado com sucesso!", "success");

        setTimeout(() => {
          setShowWindow({ show: false, message: "", type: "" });
          navigate("/dashboard");
        }, 2000);
      } else {
        showAlert("Login ou senha incorretos!", "error");
      }
      setLoading(false);
    }, 1500);
  };

  const showAlert = (message, type) => {
    setShowWindow({ show: true, message, type });
  };

  return (
    <div className="h-screen bg-white/90 flex">
      {showWindow.show && <AlertWindow message={showWindow.message} type={showWindow.type} />}

      <div className="h-full">
        <AuthBanner />
      </div>
      <div className="h-full w-full lg:w-[50%] relative lg:absolute lg:left-0 flex justify-center overflow-hidden">
        <div className="h-full w-full flex flex-col items-center justify-between bg-white">
              <img src="./logo.svg" alt="Wyden Logo" className="w-32 mb-4 self-start relative " />
          <div className="flex flex-col items-start justify-center flex-1 w-full max-w-md relative">
            <img src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1744306739/logo_dhl8vb.png" alt="Project Logo" className="w-28 lg:w-44 self-center top-0 border-b border-gray-400"  />
            <div className="flex flex-col items-center font-secundaria w-full">
              <h1 className="text-2xl md:text-3xl font-principal font-bold text-center text-gray-900 mt-1">
                Encontre seu caminho profissional e inspire-se a alcançar novos horizontes
              </h1>
              <p className="text-center text-lg text-gray-600 mt-3 mb-6 font-secundaria">
                Sua plataforma de vagas feita sobre medida. <br />
                Seu e-mail de acesso segue o padrão:
                <br />
                <span className="font-semibold">"suamatricula"@alunos."suainstituicao".edu.br</span>
              </p>
            </div>

            <form className="w-full space-y-4" onSubmit={handleLogin}>
              <div className="flex flex-col w-full relative">
                <label htmlFor="email" className="text-sm font-medium text-neutral-90/80 mb-1">
                  E-mail
                </label>
                <span className="absolute left-2 top-[2.7rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500">
                  <UserIcon size={20} />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-neutral-300 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-secundaria/40"
                />
              </div>

              <div className="flex flex-col w-full relative">
                <label htmlFor="password" className="text-sm font-medium text-neutral90/80 mb-1">
                  Senha
                </label>
                <span className="absolute left-2 top-[2.7rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500">
                  <KeyIcon size={20} />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
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

              <button
                className="bg-secundaria w-full text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-800 transition disabled:opacity-80"
                disabled={loading}
              >
                {loading ? <Loading spiner={<CircleSpinner size={30} color="#FF2F00" />} /> : "Entrar"}
              </button>

              <div className="text-sm mt-2 text-neutral90/60 font-secundaria flex justify-between w-full">
                <p className="cursor-pointer underline hover:text-neutral90/90">Esqueci minha senha</p>
                <p className="font-secundaria">
                  Não tem conta? {""}
                  <span
                    className="font-semibold underline hover:text-neutral90 cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    Cadastre-se
                  </span>
                </p>
              </div>
            </form>

            <div className="w-full border-t mt-8 pt-4 text-center text-xs text-neutral90/80">
              <p className="font-semibold">
                &copy; Desenvolvido por alunos da <span className="underline hover:text-neutral90/100">UNIRUY</span> -
                Wyden.
              </p>
            </div>
          </div>

          <div className="w-full bg-DarkP2 py-8 text-center text-lg text-neutral90/80 bg-DarkP1 font-secundaria">
            Está com dúvidas para fazer o login?{" "}
            <span className="font-semibold cursor-pointer underline hover:text-neutral90/100">Acessar Ajuda</span>
          </div>
        </div>
      </div>
    </div>
  );
};
