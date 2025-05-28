import { getVagas } from "@/api/vacanciesApi";
import type { VagaResponse } from "@/types/vagasType";
import { useState } from "react";

export const useVagas = () => {
  const [loading, setLoading] = useState(true);

  const getAppVagas = async (filtros?: Record<string, string>): Promise<VagaResponse | null> => {
    try {
      const response = await getVagas(filtros);
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { getAppVagas, loading };
};
