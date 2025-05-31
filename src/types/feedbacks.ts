export interface Feedback {
  createdAt: string;
  curso: string;
  email: string;
  id: string;
  mensagem: string;
  nome: string;
  tipo: FeedbackType;
}
export interface FeedbackResponse {
  feedbacks: Feedback[];
}
export type FeedbackType = "sugestao" | "erro" | "elogio" | "outro";
