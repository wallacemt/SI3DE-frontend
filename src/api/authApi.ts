import type { LoginResponse } from "@/types/userTypes";
import axios from "axios";
import { baseURL, type SimpleResponse } from "./api";

const authAPI = axios.create({
  baseURL: `${baseURL}/auth`,
  withCredentials: true,
});

export const getAuth = async (): Promise<SimpleResponse> => {
  try {
    const res = await authAPI.get<SimpleResponse>("");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const userLogin = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await authAPI.post<LoginResponse>("/login", { email, password });
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
