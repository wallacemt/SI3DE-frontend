import {
  BarChart as ReBarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  PieChart as RePieChart,
  Pie,
  Cell,
  LineChart as ReLineChart,
  Line,
  Legend,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartLegendContent, ChartTooltipContent } from "@/components/ui/chart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";

const COLORS = ["#2563eb", "#60a5fa", "#f97316", "#10b981", "#6366f1"];

const candidaturasMesData = [
  { month: "Jan", Estágio: 10 },
  { month: "Feb", Estágio: 18 },
  { month: "Mar", Estágio: 23 },
  { month: "Apr", Estágio: 15 },
  { month: "May", Estágio: 12 },
  { month: "Jun", Estágio: 8 },
];

const statusPreenchimentoData = [
  { name: "Com perfil", value: 70 },
  { name: "Sem perfil", value: 30 },
];

const cursosMaisCandidaturasData = [
  { curso: "Sistemas de Informação", candidaturas: 30 },
  { curso: "Análise e Desenvolvimento de Sistemas", candidaturas: 50 },
  { curso: "Engenharia de Software", candidaturas: 20 },
  { curso: "Engenharia de Software", candidaturas: 20 },
  { curso: "Engenharia Elétrica", candidaturas: 20 },
];

const craPorCursoData = [
  { curso: "Sistemas de Informação", cra: 7.5 },
  { curso: "Análise e Desenvolvimento de Sistemas", cra: 8.0 },
  { curso: "Engenharia de Software", cra: 6.8 },
  { curso: "Engenharia de Software", cra: 8.2 },
  { curso: "Engenharia Elétrica", cra: 7.0 },
];

const acessosRecentesData = [
  { dia: "Seg", acessos: 12 },
  { dia: "Ter", acessos: 19 },
  { dia: "Qua", acessos: 17 },
  { dia: "Qui", acessos: 25 },
  { dia: "Sex", acessos: 10 },
];

export const StudentsCharts = () => {
  return (
    <div className="space-y-10 p-6 overflow-y-hidden">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={"/uniruy/dashboard"}>
              <BreadcrumbLink>Dashboard</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Graficos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold font-principal">Dashboard de Estágios</h1>

      {/* Candidaturas por Mês */}
      <Card>
        <CardHeader>
          <CardTitle>Candidaturas por Mês</CardTitle>
          <CardDescription>
            Este gráfico mostra a evolução das candidaturas às vagas de estágio mês a mês. Ajuda a entender a
            sazonalidade e o engajamento dos alunos ao longo do tempo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ Estágio: { label: "Estágio", color: COLORS[0] } }} className="w-full h-[250px]">
            <ReBarChart data={candidaturasMesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegendContent />} />
              <Bar dataKey="Estágio" fill="var(--color-Estágio)" />
            </ReBarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status de Preenchimento de Perfil</CardTitle>
          <CardDescription>
            Analisa a proporção de alunos com perfil completo versus incompleto. Um perfil completo aumenta a chance de
            sucesso em processos seletivos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <RePieChart>
              <Pie
                data={statusPreenchimentoData}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label
                labelLine={false}
                isAnimationActive={false}
              >
                {statusPreenchimentoData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cursos com Mais Candidaturas</CardTitle>
          <CardDescription>
            Mostra os cursos que mais se destacam em volume de candidaturas, indicando interesse e proatividade dos
            alunos por área.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{ candidaturas: { label: "Candidaturas", color: COLORS[1] } }}
            className="w-full h-[250px]"
          >
            <ReBarChart data={cursosMaisCandidaturasData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="curso" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegendContent />} />
              <Bar dataKey="candidaturas" fill="var(--color-candidaturas)" />
            </ReBarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* CRA médio por curso */}
      <Card>
        <CardHeader>
          <CardTitle>CRA Médio por Curso</CardTitle>
          <CardDescription>
            Indica a média do Coeficiente de Rendimento Acadêmico por curso. Auxilia no mapeamento do desempenho geral
            dos estudantes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <ReLineChart data={craPorCursoData}>
              <XAxis dataKey="curso" />
              <YAxis />
              <Tooltip
                separator=" | "
                itemStyle={{ textTransform: "uppercase", width: "fit-content" }}
                labelStyle={{ color: "black", fontSize: "1rem", fontWeight: 600 }}
                wrapperStyle={{ maxWidth: "fit-content" }}
              />
              <Legend />
              <Line type="monotone" dataKey="cra" stroke={COLORS[2]} strokeWidth={3} dot={{ r: 4 }} />
            </ReLineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Últimos acessos */}
      <Card>
        <CardHeader>
          <CardTitle>Últimos Acessos dos Alunos</CardTitle>
          <CardDescription>
            Apresenta o número de acessos diários recentes, permitindo acompanhar a atividade dos alunos na plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <ReLineChart data={acessosRecentesData}>
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="acessos" stroke={COLORS[3]} strokeWidth={2} dot={{ r: 4 }} />
            </ReLineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
