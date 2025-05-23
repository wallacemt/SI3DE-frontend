export interface Vaga {
  _id: string;
  bolsa: number;
  createdAt: Date;
  description: string;
  empresa: string;
  modalidade: "remoto" | "híbrido" | "presencial";
  nível: "estágio" | "trainee" | "efetivo";
  publicationPlataform: string;
  requisitos: string[];
  subscriptionRef: string;
  subscriptions: number;
  title: string;
  turno: string;
}
export interface VagaResponse {
  limit: number;
  page: number;
  pages: number;
  total: number;
  vagas: Vaga[];
}

export interface Insights {
  description: string;
  label: string;
  value: number;
}
