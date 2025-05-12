import {
    Workflow,
    Star,
    Settings2,
    BookOpen,
    FileText,
    Users,
    ClipboardList,
    Briefcase,
    MessageCircle,
    GraduationCap,
    Bot,
  } from "lucide-react";
  
  export const data = {
    user: {
      name: "Nome do Usuário",
      email: "usuario@exemplo.com",
      avatar: "/avatars/default.jpg", // imagem padrão
    },
    navMain: [
      {
        title: "Estágios",
        url: "/estagios",
        icon: Workflow,
        isActive: true,
        items: [
          { title: "Disponíveis", url: "/estagios/disponiveis" },
          { title: "Favoritos", url: "/estagios/favoritos" },
          { title: "Inscrições", url: "/estagios/inscricoes" },
          { title: "Histórico", url: "/estagios/historico" },
        ],
      },
      {
        title: "Instituições",
        url: "/instituicoes",
        icon: GraduationCap,
        items: [
          { title: "Todas Instituições", url: "/instituicoes" },
          { title: "Minhas Instituições", url: "/instituicoes/minhas" },
        ],
      },
      {
        title: "Avaliações",
        url: "/avaliacoes",
        icon: Star,
        items: [
          { title: "Minhas Avaliações", url: "/avaliacoes/minhas" },
          { title: "Avaliar Estágio", url: "/avaliacoes/nova" },
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
      {
        title: "Administração",
        url: "/admin",
        icon: ClipboardList,
        items: [
          { title: "Usuários", url: "/admin/usuarios" },
          { title: "Estágios", url: "/admin/estagios" },
          { title: "Relatórios", url: "/admin/relatorios" },
        ],
      },
      {
        title: "Configurações",
        url: "/configuracoes",
        icon: Settings2,
        items: [
          { title: "Perfil", url: "/configuracoes/perfil" },
          { title: "Conta", url: "/configuracoes/conta" },
          { title: "Preferências", url: "/configuracoes/preferencias" },
        ],
      },
      {
        title: "Sobre o Sistema",
        url: "/sobre",
        icon: BookOpen,
        items: [
          { title: "Ajuda", url: "/sobre/ajuda" },
          { title: "Termos de Uso", url: "/sobre/termos" },
          { title: "Política de Privacidade", url: "/sobre/privacidade" },
        ],
      },
    ],
  };
  