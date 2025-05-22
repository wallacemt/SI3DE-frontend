import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { useEffect, useState } from "react";

const areasEmAltaMock = [
  {
    label: "Desenvolvimento Web Full-Stack",
    value: 45,
    description:
      "Alta demanda por profissionais com experiência em front-end (React) e back-end (Python), combinando seus interesses e habilidades.",
  },
  {
    label: "Inteligência Artificial e Machine Learning",
    value: 35,
    description:
      "Crescente busca por cientistas de dados e engenheiros de machine learning, utilizando Python e seus conhecimentos em IA.",
  },
  {
    label: "Engenharia de Dados",
    value: 20,
    description:
      "Oportunidades na construção e manutenção de pipelines de dados, aplicando seus conhecimentos em Banco de Dados e Python.",
  },
];

const carreiraMock = [
  {
    label: "Desenvolvedor Front-End",
    value: 85,
    description:
      "Alta compatibilidade com seus interesses em Desenvolvimento Web e habilidades em React. Mercado em constante crescimento, com alta demanda por profissionais qualificados.",
  },
  {
    label: "Engenheiro de Machine Learning",
    value: 75,
    description:
      "Seus interesses em IA e habilidades em Python são muito valorizados. Crescimento exponencial na área, com foco em inovação e soluções complexas.",
  },
];

export default function CarreirasPage() {
  const [areasEmAlta, setAreasEmAlta] = useState(areasEmAltaMock);
  const [carreira, setCarreira] = useState(carreiraMock);

  useEffect(() => {
    setAreasEmAlta(areasEmAltaMock);
    setCarreira(carreiraMock);
  }, []);
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-primary">Insights de Carreira</h1>

      <Tabs defaultValue="areas" className="space-y-6">
        <TabsList>
          <TabsTrigger value="areas">Áreas em Alta</TabsTrigger>
          <TabsTrigger value="carreira">Recomendações de Carreira</TabsTrigger>
        </TabsList>

        <TabsContent value="areas">
          <Card>
            <CardHeader>
              <CardTitle>Áreas com Alta Demanda</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={areasEmAlta}>
                  <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip cursor={{ fill: "#f3f4f6" }} contentStyle={{ backgroundColor: "#fff", borderRadius: 8 }} />
                  <Bar dataKey="value" fill="#6a1b9a">
                    {areasEmAlta.map((_,index) => (
                      <Cell key={`cell-${index}`} fill="#6a1b9a" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="grid gap-4 mt-6">
                {areasEmAlta.map((item, i) => (
                  <div key={i} className="rounded-md border p-4 bg-muted/50">
                    <h3 className="text-sm font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="carreira">
          <Card>
            <CardHeader>
              <CardTitle>Perfis Compatíveis com Você</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={carreira}>
                  <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip
                    cursor={{ stroke: "#6a1b9a", strokeWidth: 2 }}
                    contentStyle={{ backgroundColor: "#fff", borderRadius: 8 }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#6a1b9a" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>

              <div className="grid gap-4 mt-6">
                {carreira.map((item, i) => (
                  <div key={i} className="rounded-md border p-4 bg-muted/50">
                    <h3 className="text-sm font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
