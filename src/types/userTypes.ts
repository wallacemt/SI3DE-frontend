export interface LoginResponse{
    acessAt: string,
    email: string,
    jwtToken: string,
    nome: string,
    role: "student" | "teacher" | "admin"
}
