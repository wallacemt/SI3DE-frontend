import { useState, useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Aos from "aos";
import "aos/dist/aos.css";
import { Eye, EyeOff, KeyIcon, UserIcon } from "lucide-react";
import { AuthBanner } from "@/components/Utils/AuthBanner";
import { Loading } from "@/components/Utils/Loading";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { useLoginForm } from "@/hooks/useLogin";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { form, loading, handleLogin } = useLoginForm();

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
    <div className="min-h-screen bg-white/90 flex flex-col lg:flex-row overflow-hidden">
      <div className="h-full">
        <AuthBanner />
      </div>
      <ScrollArea className="flex-1 lg:flex-none w-full lg:w-[50%] max-h-[90%] relative lg:absolute lg:left-0 flex justify-center overflow-x-hidden">
        <div className="flex flex-col items-center justify-between bg-white">
          <img
            src="/logo.svg"
            alt="Wyden Logo"
            className="w-1/5 mb-4 self-start absolute left-0 "
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="flex flex-col items-start justify-center flex-1 w-full max-w-md relative md:bottom-[4.5vh] bottom-[10vh] in">
            <img
              src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1744306739/logo_dhl8vb.png"
              alt="Project Logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
              className="w-28 lg:w-1/4 self-center top-0 border-b border-gray-400"
            />
            <div className="flex flex-col items-center font-secundaria w-full">
              <h1 className="text-xl md:text-[1.3rem] font-principal font-bold text-center text-gray-900 mt-1">
                Encontre seu caminho profissional e inspire-se a alcançar novos horizontes
              </h1>
              <p className="text-center text-base md:text-[1rem] text-gray-600 mt-3 mb-6 font-secundaria flex flex-col ">
                <span>Seu e-mail de acesso segue o padrão:</span>
                <span className="font-semibold">"suamatricula"@alunos."suainstituicao".edu.br</span>
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={handleLogin} className="w-full space-y-2 md:p-0 p-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-sm font-medium text-neutral90/80 mb-1">E-mail</FormLabel>
                      <span className="absolute left-0 top-[3.2rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500 p-1">
                        <UserIcon size={20} />
                      </span>
                      <FormControl>
                        <Input
                          id="email"
                          {...field}
                          onChange={(e) => {
                            form.setValue(field.name, e.target.value);
                            form.trigger(field.name);
                          }}
                          placeholder="Digite seu e-mail"
                          className="pl-8 py-2 pr-4 text-neutral90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-sm font-medium text-neutral90/80 mb-1">Senha</FormLabel>
                      <span className="absolute left-0 top-[3.2rem] transform -translate-y-1/2 text-neutral90/70 border-r border-neutral-500 p-1">
                        <KeyIcon size={20} />
                      </span>
                      <FormControl>
                        <Input
                          id="password"
                          {...field}
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => {
                            form.setValue(field.name, e.target.value);
                            form.trigger(field.name);
                          }}
                          placeholder="Digite sua senha"
                          className="pl-8 py-2 pr-10 text-neutral90"
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-[38px] text-neutral90/60 hover:text-neutral90/90"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-secundaria w-full text-white font-semibold py-6 px-6 rounded-md hover:bg-purple-800 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-xl font-principal"
                  disabled={loading || !form.formState.isValid}
                >
                  {loading ? <Loading spiner={<CircleSpinner size={30} color="#FF2F00" />} /> : "Entrar"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-screen bg-[#dcd6d1] text-center text-sm md:text-lg text-neutral90/80 bg-DarkP1 font-secundaria bottom-0">
            <span>Está com dúvidas para fazer o login? </span>
            <span className="font-semibold cursor-pointer underline hover:text-neutral90/100">Acessar Ajuda</span>
            <div className="w-full text-center text-xs text-neutral90/80">
              <p className="font-semibold text-xs">
                &copy; Desenvolvido por alunos da <span className="underline hover:text-neutral90/100">UNIRUY</span> -
                Wyden.
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
