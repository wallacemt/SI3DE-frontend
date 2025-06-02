import { useCallback, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle2, Info, Lightbulb, Trash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";
import { useFeedback } from "@/hooks/useFeedback";
import type { Feedback, FeedbackType } from "@/types/feedbacks";
import { formatDate } from "@/components/ui/formated";
import { Loading } from "@/components/Utils/Loading";
import { CircleSpinner } from "@/components/ui/circleSpin";
import { Empty } from "@/components/Utils/Empty";
import { Button } from "@/components/ui/button";

export const Feadbecks = () => {
  const [selectedTipo, setSelectedTipo] = useState<FeedbackType | "todos">("todos");
  const { pegarFeedbacks, loading, removerFeedback, update } = useFeedback();

  const [feedbacks, setFeedbacks] = useState<Feedback[]>();
  const tipoMap = {
    sugestao: { label: "Sugestão", color: "text-blue-600", icon: <Lightbulb size={16} /> },
    erro: { label: "Erro", color: "text-red-600", icon: <AlertCircle size={16} /> },
    elogio: { label: "Elogio", color: "text-green-600", icon: <CheckCircle2 size={16} /> },
    outro: { label: "Outro", color: "text-gray-600", icon: <Info size={16} /> },
  };
  const fetchFeedbacks = useCallback(async () => {
    try {
      const res = await pegarFeedbacks();
     setFeedbacks(res.feedbacks)
    } catch (error) {
      console.error("Erro ao carregar feedbacks", error);
    }
  }, [pegarFeedbacks]);

  useEffect(() => {
    fetchFeedbacks();
  }, [selectedTipo, update]);

  const feedbacksFiltrados = selectedTipo === "todos" ? feedbacks : feedbacks?.filter((f) => f.tipo === selectedTipo);

  return (
    <div className="w-full mx-auto space-y-10 p-6 overflow-y-hidden">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={"/uniruy/dashboard"}>
              <BreadcrumbLink>Dashboard</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>FeedBacks</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="shadow-xl  rounded-2xl">
        <CardHeader>
          <CardDescription className="text-muted-foreground text-xs md:text-sm">
            Veja o que os alunos estão falando sobre a plataforma.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs
            defaultValue="todos"
            className="w-full  "
            onValueChange={(val: any) => {
              setSelectedTipo(val);
            }}
          >
            <TabsList className="mb-4 mx-auto grid grid-cols-5 gap-2">
              <TabsTrigger className="md:text-sm text-xs" value="todos">
                Todos
              </TabsTrigger>
              <TabsTrigger className="md:text-sm text-xs" value="sugestao">
                Sugestões
              </TabsTrigger>
              <TabsTrigger className="md:text-sm text-xs" value="erro">
                Erros
              </TabsTrigger>
              <TabsTrigger className="md:text-sm text-xs" value="elogio">
                Elogios
              </TabsTrigger>
              <TabsTrigger className="md:text-sm text-xs" value="outro">
                Outros
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTipo}>
              <ScrollArea className="h-fit pr-6 ease-in-out transition-discrete">
                <div className="space-y-6">
                  {loading ? (
                    <Loading spiner={<CircleSpinner color="#f30" />} message=" " />
                  ) : (
                    feedbacksFiltrados?.map((fb) => (
                      <Card key={fb.id} className="border overflow-auto w-full border-muted shadow-sm max-h-72">
                        <CardHeader
                          className={`pb-2 md:mt-0 mt-4 relative flex flex-col sm:flex-row justify-between items-start sm:items-center ${
                            tipoMap[fb.tipo].color
                          } rounded-t-md`}
                        >
                          <div className="flex flex-col gap-2 items-center">
                            <div className="flex gap-2 items-center">
                              <CardTitle className="text-base">
                                {fb.nome.split(" ")[0] + " " + fb.nome.split(" ")[1]}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground truncate">
                              {formatDate(fb?.createdAt!)}</p>
                            </div>
                            <p className="text-sm text-muted-foreground">{fb.email}</p>
                          </div>
                          <div className="flex md:flex-row items-center gap-2 absolute md:-top-4 -top-10 right-2 ">
                            {tipoMap[fb.tipo].icon}
                            <Badge variant="secondary" className={`${tipoMap[fb.tipo].color} capitalize bg-foreground`}>
                              {tipoMap[fb.tipo].label}
                            </Badge>
                            <Button
                              variant={"ghost"}
                              onClick={() => {
                                removerFeedback(fb.id);
                              }}
                              className="text-muted-foreground hover:text-red-600 transition"
                              title="Excluir feedback"
                            >
                              <Trash size={16} />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="overflow-auto">
                          <p className="text-sm leading-relaxed">{fb.mensagem}</p>
                        </CardContent>
                      </Card>
                    ))
                  )}

                  {feedbacksFiltrados?.length === 0 && <Empty message="Nenhum feedback encontrado." />}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
