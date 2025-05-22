import axios from "axios";
import { baseURL, handleToken } from "./api";
import type { VagaResponse } from "@/types/vagasType";

const userApi = axios.create({
  baseURL: `${baseURL}/vagas`,
  withCredentials: true,
});

export const getVagas = async (): Promise<VagaResponse> => {
  try {
    handleToken(userApi);
    const response = await userApi.get<VagaResponse>("");
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};