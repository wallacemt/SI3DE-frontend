export interface LoginResponse {
  acessAt: string;
  email: string;
  jwtToken: string;
  nome: string;
  role: "student" | "teacher" | "admin";
}

export interface UserData {
  acessAt: Date;
  email: string;
  id: string;
  isFullProfile: boolean;
  nome: string;
  role: string;
}
