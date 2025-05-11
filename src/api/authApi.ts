import type { LoginResponse } from "@/types/userTypes";
import axios from "axios";
import { baseURL } from "./api";

const authAPI = axios.create({
  baseURL: `${baseURL}/auth`,
  withCredentials: true,
});

export const userLogin = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await authAPI.post<LoginResponse>("/login", { email, password });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
