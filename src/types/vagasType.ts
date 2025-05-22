export interface Vaga {
  id: string;
  title: string;
  subscriptions: number;
  createdAt: string;
  publicationPlataform: string;
  description: string;
  modalidade: "remoto" | "híbrido" | "presencial";
  nível: "estágio" | "trainee" | "efetivo";
}

export interface VagaResponse {
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
  title: string;
  turno: string;
}
