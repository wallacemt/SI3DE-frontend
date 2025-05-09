import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const useUserContext = () => {
  return useContext(UserContext);
};
