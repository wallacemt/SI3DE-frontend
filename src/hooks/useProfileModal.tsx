import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { postUserProfile } from "@/api/userApi";
import { useUserContext } from "./useUserContext";
import { toast } from "sonner";

export const perfilSchema = z.object({
  nome: z.string().min(3, "Nome obrigatório"),
  curso: z.string().min(3, "Curso obrigatório"),
  numeroMateriasConcluidas: z.number().min(0, "Insira um número válido"),
  craValue: z.number().min(0).max(10, "CRA deve ser entre 0 e 10"),
  interesses: z.array(z.string()).nonempty("Escolha pelo menos um interesse"),
  turno: z.string().min(3, "Turno obrigatório"),
  modalidade: z.string().min(3, "Modalidade obrigatória"),
  habilidades: z.array(z.string()).nonempty("Informe pelo menos uma habilidade"),
  linkedin: z
    .string()
    .min(3)
    .refine(
      (value) => value.startsWith("https://www.linkedin.com/"),
      "URL inválida, deve comecar com https://www.linkedin.com/"
    ),
  github: z
    .string()
    .min(3, "URL inválida")
    .refine((value) => value.startsWith("https://github.com/"), "URL inválida, deve comecar com https://github.com/"),
  portfolio: z.string().min(3, "URL inválida").optional().or(z.literal("")),
});

export type PerfilFormValues = z.infer<typeof perfilSchema>;

export const usePerfilModal = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<PerfilFormValues>({
    resolver: zodResolver(perfilSchema),
    defaultValues: {
      nome: "",
      curso: "",
      numeroMateriasConcluidas: 0,
      craValue: 0,
      turno: "",
      interesses: [],
      habilidades: [],
      linkedin: "",
      github: "",
      portfolio: "",
    },
  });
  const { handleUpdate, handleViewModal } = useUserContext();

  const onSubmit = async (values: z.infer<typeof perfilSchema>) => {
    setLoading(true);
    try {
      if (!values.portfolio) {
        values.portfolio = values.github;
      }
      const response = await postUserProfile(values);
      if (response) {
        toast.success("Perfil atualizado com sucesso!");
        handleViewModal();
        handleUpdate();
      }
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, onSubmit };
};
