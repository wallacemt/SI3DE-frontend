import axios from "axios";
import { baseURL, handleToken } from "./api";
import type { UserData } from "@/types/userTypes";

const facultyApi = axios.create({
  baseURL: `${baseURL}/faculty`,
  withCredentials: true,
});

export const getFacultyStudents = async (): Promise<UserData[]> => {
  try {
    handleToken(facultyApi);
    const response = await facultyApi.get<UserData[]>("/students");
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
