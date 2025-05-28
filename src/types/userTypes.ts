export interface LoginResponse {
  acessAt: string;
  email: string;
  jwtToken: string;
  nome: string;
  role: "student" | "teacher" | "admin";
}
export type UserRole = "student" | "teacher";
interface StudentProfile {
  id: string;
  craValue: number;
  curso: string;
  habilidades: string[];
  interesses: string[];
  linkedin: string;
  porcentagem_conclusao: {
    porcentCompleted: number;
  };
  numeroMateriasConcluidas: number;
  github: string;
  portfolio: string | null;
  user_id: string;
}

export interface UserData {
  acessAt: Date;
  email: string;
  id: string;
  isFullProfile: boolean;
  nome: string;
  role: string;
  profile?: StudentProfile;
  adminName?: string;
  vacanciesSubscribe?: Object[];
}
