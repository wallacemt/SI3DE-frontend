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
