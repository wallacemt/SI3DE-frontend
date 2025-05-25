import { getVagas } from "@/api/vacanciesApi";
import type { VagaResponse } from "@/types/vagasType";
import { useState } from "react";

export const useVagas = () => {
  const [loading, setLoading] = useState(false);

  const getAppVagas = async (): Promise<VagaResponse | null> => {
    setLoading(true);
    try {
      const response = await getVagas();
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { getAppVagas, loading };
};
