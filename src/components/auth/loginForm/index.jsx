import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerLateral from "../../bannerLateral";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiUser } from "react-icons/fi";
import { ImEyeBlocked } from "react-icons/im";
import ReCAPTCHA from "react-google-recaptcha"; // Importando o ReCAPTCHA
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Armazenando o valor do reCAPTCHA

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); 
    console.log("ReCAPTCHA value:", value); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Por favor, complete o reCAPTCHA.");
      return;
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <BannerLateral />
        </div>
        <div className="flex flex-col items-center justify-center relative py-8 lg:absolute left-24">
          {/* Logo */}
          <img src="./logo.svg" alt="Wyden Logo" className="w-62 mb-6" />

          {/* Formulário */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <button className="h-12 w-full mb-6 bg-[#0072C6] rounded-lg text-white flex items-center justify-center gap-2 font-semibold hover:bg-[#005fa3] transition-colors">
              <PiMicrosoftOutlookLogoFill size={24} />
              Entrar com email de estudante
            </button>

            <div className="flex items-center my-4 xl:text-lg text-gray-400">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="mx-2 text-black">ou</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <form action="" className="mt-4">
              {/* Campo de Email */}
              <div className="relative mb-6">
                <input
                  type="email"
                  placeholder="m@exemplo.com"
                  className="w-full p-4 text-lg bg-neutral-100 border-b rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#0072C6] focus:border-transparent transition-all"
                  required
                  onChange={null}
                  style={{ paddingRight: "3.5rem" }}
                />
                <AiOutlineMail className="absolute right-4 top-4 bg-neutral-100 text-gray-400 text-xl" size={30} />
              </div>

              {/* Senha */}
              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full p-4 text-lg bg-neutral-100 border-b rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#0072C6] focus:border-transparent transition-all"
                  required
                  style={{ paddingRight: "3.5rem" }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-4 text-gray-400 text-xl"
                >
                  {showPassword ? <AiFillEye size={30} /> : <AiFillEyeInvisible size={30} />}
                </button>
              </div>
              {/* ReCAPTCHA */}
              <ReCAPTCHA
                  sitekey={'6LcUo_sqAAAAADp9GKA9MDB8Qaijaa4rf7JJqLzQ'} 
                  onChange={handleRecaptchaChange}
                />

              {/* Botão de Login */}
              <button
                type="submit"
                className="w-full py-3 bg-[#FF2A00] text-white rounded-lg text-lg font-semibold hover:bg-[#e02400] transition-colors"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
      );
};

export default LoginForm;
