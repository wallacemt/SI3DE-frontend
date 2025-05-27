import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";
import { useAi } from "@/hooks/useAi";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { Loading } from "@/components/Utils/Loading";
import type { Insights } from "@/types/vagasType";

const PIE_COLORS = ["#023535", "#015958", "#008F8C", "#0CABA8", "#0FC2C0"];
const BAR_COLOR = "#2563eb";

export default function StudentCaerer() {
  const [areasEmAlta, setAreasEmAlta] = useState<Insights[]>([]);
  const [carreira, setCarreira] = useState<Insights[]>([]);
  const { getAreasEmAlta, getCarreiraInsight, loading } = useAi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resAreas = await getAreasEmAlta();
        const resCarreira = await getCarreiraInsight();
        setAreasEmAlta(resAreas);
        setCarreira(resCarreira);
      } catch {
        return;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-primary">📊 Insights de Carreira</h1>

      <Tabs defaultValue="areas" className="space-y-6">
        <TabsList className="flex justify-start gap-4 overflow-x-auto">
          <TabsTrigger value="areas">🌟 Áreas em Alta</TabsTrigger>
          <TabsTrigger value="carreira">🎯 Recomendação de Carreira</TabsTrigger>
        </TabsList>

        {loading ? (
          <Loading spiner={<CircleSpinner color="#2563eb" />} message="Carregando Insights..." />
        ) : (
          <>
            {/* Áreas em Alta */}
            <TabsContent value="areas">
              <Card>
                <CardHeader>
                  <CardTitle>🌱 Áreas com Alta Demanda</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2">
                  {/* Gráfico de Pizza */}
                  <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={areasEmAlta}
                          dataKey="value"
                          nameKey="label"
                          outerRadius="80%"
                          innerRadius="45%"
                          paddingAngle={3}
                          label={({ percent }) => `(${(percent * 100).toFixed(0)}%)`}
                          labelLine={false}
                        >
                          {areasEmAlta.map((_, i) => (
                            <Cell key={`cell-${i}`} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#f0fdf4",
                            borderRadius: 8,
                            border: "1px solid #86efac",
                          }}
                        />
                        <Legend layout="vertical" verticalAlign="bottom" align="center" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Descrições */}
                  <div className="space-y-4">
                    {areasEmAlta.map((item, i) => (
                      <div key={i} className="rounded-md border p-4 bg-neutral90 shadow-sm hover:shadow-md transition">
                        <h3 className="text-sm font-semibold text-green-500 mb-1">{item.label}</h3>
                        <p className="text-sm text-green-200">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Carreiras */}
            <TabsContent value="carreira">
              <Card>
                <CardHeader>
                  <CardTitle>🔍 Perfis Compatíveis com Você</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6  p-2">
                  <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart layout="vertical" data={carreira} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="label" type="category" width={150} tick={{ fontSize: 12 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#f20",
                            borderRadius: 8,
                            border: "1px solid #93c5fd",
                          }}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="rounded-md border p-4 bg-neutral90 flex gap-4 shadow-sm hover:shadow-md transition">
                                  <p className="text-sm text-blue-200">{payload[0].payload.label} : </p>
                                  <p className="text-sm font-semibold text-blue-500 mb-1">{payload[0].value}%</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar dataKey="value" fill={BAR_COLOR} radius={[0, 6, 6, 0]} barSize={24} label={"a"} />
                        <Legend
                          layout="horizontal"
                          verticalAlign="bottom"
                          align="center"
                          content={<p className="text-blue-500 font-bold font-principal">Compatibilidade (%)</p>}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Descrições */}
                  <div className="space-y-4">
                    {carreira.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-md border p-4 dark:bg-neutral90 bg-foreground shadow-sm hover:shadow-md transition"
                      >
                        <h3 className="text-sm font-semibold text-blue-500 mb-1">{item.label}</h3>
                        <p className="text-sm text-blue-200">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
