import { deleteFeedBack, getFeeedBacks, postFeedback } from "@/api/feedbackApi";
import type { FeedbackResponse } from "@/types/feedbacks";
import { useState } from "react";
import { toast } from "sonner";

export const useFeedback = () => {
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const enviarFeedback = async ({
    tipo,
    mensagem,
    setOpen,
  }: {
    tipo: string;
    mensagem: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    setLoading(true);
    try {
      const promise = toast.promise(postFeedback({ tipo, mensagem }), {
        loading: "Enviando feedback",
        success: "Obrigado por contribuir com a plataforma.",
      });
      const response = await promise.unwrap();
      if (response) {
        setOpen(false);
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const pegarFeedbacks = async (): Promise<FeedbackResponse> => {
    setLoading(true);
    try {
      const response = await getFeeedBacks();
      return response;
    } catch (error: any) {
      toast.error(error.response.data.error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const removerFeedback = async (id: string) => {
    setLoading(true);
    try {
      const response = await deleteFeedBack(id);
      if (response) {
        toast.success(response.message);
        return setUpdate(!update);
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { enviarFeedback, pegarFeedbacks, loading, removerFeedback, update, setUpdate };
};
