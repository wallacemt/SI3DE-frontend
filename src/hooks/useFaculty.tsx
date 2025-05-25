import { getFacultyStudents } from "@/api/facultyApi";
import type { UserData } from "@/types/userTypes";
import { useState } from "react";

export const useFaculty = () => {
  const [loading, setLoading] = useState(false);
  const getStudents = async (): Promise<UserData[]> => {
    setLoading(true);
    try {
      const response = await getFacultyStudents();
      return response;
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { getStudents, loading };
};
