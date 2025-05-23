import { getEmAlta, getInsightCarreira } from "@/api/aiApi";
import type { Insights } from "@/types/vagasType";
import { useState } from "react";
import { toast } from "sonner";

export const useAi = () => {
  const [loading, setLoading] = useState(true);
  const getAreasEmAlta = async (): Promise<Insights[]> => {
    try {
      const res = await getEmAlta();
      return res ? res : [];
    } catch (error: any) {
      toast.error(error.response.data.error);
      throw error;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  const getCarreiraInsight = async (): Promise<Insights[]> => {
    try {
      const res = await getInsightCarreira();
      return res;
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.error);
      throw error;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  return { getAreasEmAlta, getCarreiraInsight, loading };
};
