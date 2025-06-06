import {
  Workflow,
  Star,
  Settings2,
  BookOpen,
  FileText,
  ClipboardList,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

export const data = {
  user: {
    name: "Nome do Usuário",
    email: "usuario@exemplo.com",
    avatar: "/avatars/default.jpg",
  },
  navMain: [
    {
      title: "Sobre o Sistema",
      url: "/sobre",
      icon: BookOpen,
      items: [
        { title: "Ajuda", url: "/sobre/ajuda" },
        { title: "Termos de Uso", url: "/sobre/termos" },
        { title: "Documentação", url: "https://si3de-backend.onrender.com/" },
        { title: "Política de Privacidade", url: "/sobre/privacidade" },
      ],
    },
    {
      title: "Configurações",
      url: "/configuracoes",
      icon: Settings2,
      items: [
        { title: "Perfil", url: "/perfil" },
        { title: "Preferências", url: "/configuracoes/preferencias" },
      ],
    },
  ],
  uniruy: [
    {
      title: "Instituição",
      url: "/instituição",
      icon: GraduationCap,
      items: [{ title: "Graficos", url: "/uniruy/dashboard/graficos" }],
    },
    {
      title: "Administração",
      url: "/uniruy",
      icon: ClipboardList,
      items: [
        { title: "Usuários", url: "/uniruy/usuarios" },
        { title: "Estágios", url: "/uniruy/estagios" },
        { title: "Feadbacks", url: "/uniruy/feedbacks" },
      ],
    },
  ],
  student: [
    {
      title: "Estágios",
      url: "/estagios",
      icon: Workflow,
      isActive: true,
      items: [
        { title: "Disponíveis", url: "/dashboard" },
        { title: "Insights ", url: "/insights " },
        { title: "Inscrições", url: "/inscricoes" },
      ],
    },
    {
      title: "Avaliações",
      url: "/avaliacoes",
      icon: Star,
      items: [
        { title: "Minhas Avaliações", url: "/avaliacoes/minhas" },
        { title: "Avaliar Estágio", url: "/avaliacoes/nova" },
        { title: "FeedBack da Plataforma", url: "/new/feedback" },
      ],
    },
    {
      title: "Chat",
      url: "/chat",
      icon: MessageCircle,
      items: [
        { title: "Mensagens", url: "/chat/mensagens" },
        { title: "IA Assistente", url: "/chat/assistente" },
      ],
    },
    {
      title: "Documentos",
      url: "/documentos",
      icon: FileText,
      items: [
        { title: "Enviar Documentos", url: "/documentos/enviar" },
        { title: "Assinaturas Pendentes", url: "/documentos/assinaturas" },
      ],
    },
  ],
};
