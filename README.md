# Icaro - Frontend

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=orange) &nbsp;
![Project Version](https://img.shields.io/static/v1?label=version&message=v0.1.0&color=yellow) &nbsp;
![Pull Request Welcome](https://img.shields.io/badge/PRs-welcome-green)

---

## 🚀 Sobre o Projeto

O **Icaro** é uma plataforma de estágios inteligente, projetada para conectar talentos em busca de oportunidades com empresas que oferecem vagas. Nosso objetivo é otimizar o processo de recrutamento e seleção, proporcionando uma experiência intuitiva e eficiente para estudantes e recrutadores.

O frontend deste projeto foi desenvolvido com **React** e **TypeScript**, utilizando as bibliotecas **Tailwind CSS** para estilização e **Shadcn/ui** para componentes de UI, garantindo uma interface moderna, responsiva e acessível. A comunicação com a API do backend é realizada via **Axios**, proporcionando uma interação fluida e dinâmica.

---

## 📖 Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração e Execução](#configuracao-e-execucao)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Capturas de Tela](#capturas-de-tela)
- [Integrantes da Equipe](#integrantes-da-equipe)
- [Contribuições](#contribuicoes)
- [Licença](#licenca)

---

## 🛠️ Tecnologias Utilizadas

<div align='center' id="tecnologias-utilizadas">
  <img align='center' height='49' width='49' title='React' alt='React' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'/> &nbsp;
  <img align='center' height='49' width='49' title='TypeScript' alt='TypeScript' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'/> &nbsp;
  <img align='center' height='49' width='49' title='Tailwind CSS' alt='Tailwind CSS' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'/> &nbsp;
  <img align='center' height='49' width='49' title='Shadcn/ui' alt='Shadcn/ui' style="border-radius: 50%;" src='https://avatars.githubusercontent.com/u/139895814?v=4'/> &nbsp;
  <img align='center' height='49' width='49' title='Axios' alt='Axios' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg'/> &nbsp;
  <img align='center' height='49' width='49' title='Vite' alt='Vite' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'/> &nbsp;
  <img align='center' height='49' width='49' title='Swiper' alt='Swiper' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg'/> &nbsp;
</div>

---

## 📂 Estrutura do Projeto

```
icaro-frontend/
│-- public
│-- src/
│   ├── api/                # Configuração da instância Axios e chamadas à API
│   ├── assets/             # Imagens, ícones, etc.
│   ├── components/         # Componentes reutilizáveis do Shadcn/ui e personalizados
│   ├── contexts/           # Contextos globais da aplicação
│   ├── data/               # Arquivos de dados usados no projeto
│   ├── hooks/              # Hooks personalizados
│   ├── pages/              # Páginas principais da aplicação (rotas)
│   ├── types/              # Tipos personalizados usados no projeto
│   ├── main.tsx            # Ponto de entrada da aplicação
│   ├── roleBasedRoute.tsx  # Componente que faz as verificações de roles da aplicação
│   ├── routes/             # Rotas da aplicação
│   └── global.css          # Estilos globais e configurações do Tailwind
│-- .env                    # Variáveis de ambiente
│-- package.json            # Dependências e scripts do projeto
│-- tsconfig.json           # Configuração do TypeScript
│-- vite.config.ts          # Configuração do Vite
│-- README.md
```

---

## ⚙️ Configuração e Execução

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 18.x ou superior)
- **npm** (gerenciador de pacotes do Node.js, geralmente vem com o Node.js)

### 1️⃣ Clonar o Repositório

```bash
git clone [https://github.com/wallacemt/SI3DE-frontend.git](https://github.com/wallacemt/SI3DE-frontend.git)
cd SI3DE-frontend
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis (substitua pelos seus valores):

```
VITE_API_URL=http://localhost:8080/api # URL da API do backend do Icaro
# Outras variáveis de ambiente conforme necessário
```

### 4️⃣ Rodar a Aplicação

A aplicação estará disponível em http://localhost:5173 (porta padrão do Vite, a menos que configurado diferente).

```bash
npm run dev
```

# 📌 Principais Funcionalidades

- Autenticação de Usuários: Cadastro, login e gerenciamento de perfis para estudantes e empresas.
- Busca Inteligente de Vagas: Filtros avançados por área, localização, tipo de estágio, requisitos e mais.
- Perfis Detalhados: Estudantes podem criar perfis com currículo, habilidades e histórico. Empresas podem apresentar sua cultura e vagas.
- Sistema de Candidaturas: Processo simplificado de aplicação e acompanhamento de candidaturas.
- Dashboard Intuitivo: Visão geral para estudantes (vagas salvas, candidaturas) e empresas (vagas publicadas, candidatos).
- Design Responsivo: Experiência de usuário fluida em desktops, tablets e smartphones.
- Componentes Reutilizáveis: Utilização de Shadcn/ui para uma UI consistente e de alta qualidade.

# 👥 Integrantes da Equipe

- Este projeto está sendo desenvolvido por um grupo de estudantes da faculdade Uniruy Wyden.

| Nome                |  Papel no Projeto  |                                                                                                                                GitHub |                                                                                                                                                      LinkedIn |
| ------------------- | :----------------: | ------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Cauê Ramos Valverde |   FrontEnd/Lider   |                                                                                           [Github](https://github.com/CaueKonceRamos) | [Linkedin](https://www.linkedin.com/in/cau%C3%AA-ramos-valverde-3480a42a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |
| Letícia Farias      |     Marketing      |                                                                                             [Github](https://github.com/LettyFariias) |                        [Linkedin](https://www.linkedin.com/in/lettyfarias/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |
| Deivide Maciel      |      BackEnd       |                                                                                              [Github](https://github.com/deivomaciel) |                     [Linkedin](https://www.linkedin.com/in/deivide-maciel/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |
| Beatriz de Abreu    | BackEnd/Pesquisas  |                                                                                                 [Github](https://github.com/Biabreuz) |         [Linkedin](https://www.linkedin.com/in/beatriz-de-abreu-4a1450232/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |
| Gustavo             | FrontEnd/Pesquisas |                                                                                                   [Github](https://github.com/guzhzh) |       [Linkedin](https://www.linkedin.com/in/gustavo-de-jesus-d-800595297/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |
| Kaique Simões       | FrontEnd/Pesquisas | [Github](https://www.linkedin.com/in/kaiquesimoes/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |                       [Linkedin](https://www.linkedin.com/in/kaiquesimoes/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BpGdss%2FJ4Te%2BvLL6gSzUExA%3D%3D) |

# 🤝 Contribuições

- Contribuições, sugestões e feedbacks são muito bem-vindos! Se você encontrou um bug, tem uma ideia de melhoria ou deseja adicionar uma nova funcionalidade, sinta-se à vontade para nos ajudar.

- Faça um fork do repositório.

  - Clone seu repositório forked para sua máquina local.
  - Crie uma nova branch para sua feature ou correção:

  ```bash
  git checkout -b feature/minha-nova-funcionalidade
  ```

  - Faça suas alterações e commit:

  ```bash
  git commit -m 'feat: adiciona funcionalidade X'
  ```

  - Envie suas alterações para o seu fork:

  ```bash
  git push origin feature/minha-nova-funcionalidade
  ```

  - Abra um Pull Request para a branch main do repositório original, explicando suas mudanças. [Agradecemos sua colaboração!]

# 📜 Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo LICENSE na raiz do repositório.
