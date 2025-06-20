import axios from "axios";
import { baseURL, handleToken, type SimpleResponse } from "./api";
import type { UserData } from "@/types/userTypes";
import type { PerfilFormValues } from "@/hooks/useProfileModal";

const userApi = axios.create({
  baseURL: `${baseURL}/user`,
  withCredentials: true,
});



export const getUser = async (): Promise<UserData> => {
  try {
    handleToken(userApi);
    const response = await userApi.get<UserData>("");
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

export const postUserProfile = async (data: PerfilFormValues): Promise<SimpleResponse> => {
  try {
    handleToken(userApi);
    const response = await userApi.post<SimpleResponse>("/profile", data);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
