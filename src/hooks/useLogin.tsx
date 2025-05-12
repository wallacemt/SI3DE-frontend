import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { userLogin } from "@/api/authApi";
import { useUserContext } from "./useUserContext";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { login } = useUserContext();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = form.getValues();
      const response = await userLogin(data.email, data.password);
      if (response) {
        toast.success(`Bem vindo(a)! ${response.nome.split(" ")[0]}`);
        login(response.jwtToken, response.role);
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { form, loading, handleLogin, error };
};
