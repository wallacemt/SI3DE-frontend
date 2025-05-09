import { getUser } from "@/api/userApi";
import type { UserData } from "@/types/userTypes";

export const useUser = () => {
  const getUserInfo = async (): Promise<UserData> => {
    try {
      const response = await getUser();
      return response;
    } catch (error: any) {
      return error;
    }
  };
  return { getUserInfo };
};
