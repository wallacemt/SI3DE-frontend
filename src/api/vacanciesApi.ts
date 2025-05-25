import axios from "axios";
import { baseURL, handleToken } from "./api";
import type { VagaResponse } from "@/types/vagasType";

const vacanciesApi = axios.create({
  baseURL: `${baseURL}/vagas`,
  withCredentials: true,
});

export const getVagas = async (): Promise<VagaResponse> => {
  try {
    handleToken(vacanciesApi);
    const response = await vacanciesApi.get<VagaResponse>("");
    return response.data as VagaResponse;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};