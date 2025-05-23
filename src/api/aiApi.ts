import axios from "axios";
import { baseURL, handleToken } from "./api";
import type { Insights } from "@/types/vagasType";

const aiApi = axios.create({
  baseURL: `${baseURL}/insights`,
  withCredentials: true,
});

export const getEmAlta = async (): Promise<Insights[]> => {
  try {
    handleToken(aiApi);
    const response = await aiApi.get("/areas-em-alta");
    return response.data.insight as Insights[];
  } catch (error) {
    throw error;
  }
};

export const getInsightCarreira = async (): Promise<Insights[]> => {
  try {
    handleToken(aiApi);
    const response = await aiApi.get("/carreira");
    return response.data.insight;
  } catch (error) {
    throw error;
  }
};
