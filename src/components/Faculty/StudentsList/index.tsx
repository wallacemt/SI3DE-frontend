import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StudentsOverviewChart } from "../StudentOverviewChart";
import { Card } from "@/components/ui/card";
import { AlunoDialog } from "../AlunosDialog";
import { useFaculty } from "@/hooks/useFaculty";
import type { UserData } from "@/types/userTypes";
import { toast } from "sonner";
import { Loading } from "@/components/Utils/Loading";
import { CircleSpinner } from "@/components/ui/circleSpin";

export const StudentsList = () => {
  const [students, setStudents] = useState<UserData[]>([]);
  const [ordenarPor, setOrdenarPor] = useState("cra");
  const [ordem, setOrdem] = useState("desc");
  const [busca, setBusca] = useState("");
  const { getStudents, loading } = useFaculty();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents();
        setStudents(response!);
      } catch (error) {
        toast.error("Erro ao carregar estudantes");
      }
    };

    fetchStudents();
  }, []);

  console.log(students);

  const resetFiltros = () => {
    setOrdenarPor("cra");
    setOrdem("desc");
    setBusca("");
  };

  const alunosFiltrados = [...students]
    .filter((aluno) => {
      const textoBusca = busca.toLowerCase();
      return aluno.nome.toLowerCase().includes(textoBusca) || aluno.email.toLowerCase().includes(textoBusca);
    })
    .sort((a, b) => {
      let valorA: any, valorB: any;

      switch (ordenarPor) {
        case "cra":
          valorA = a.profile?.craValue;
          valorB = b.profile?.craValue;
          break;
        case "materiasCursadas":
          valorA = a.profile?.numeroMateriasConcluidas;
          valorB = b.profile?.numeroMateriasConcluidas;
          break;
        case "curso":
          valorA = a.profile?.curso.toLowerCase();
          valorB = b.profile?.curso.toLowerCase();
          return ordem === "asc" ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
        case "ultimoAcesso":
          valorA = new Date(a.acessAt).getTime();
          valorB = new Date(b.acessAt).getTime();
          break;
        case "vagasInscritas":
          valorA = a.vacanciesSubscribe?.length;
          valorB = b.vacanciesSubscribe?.length;
          break;
        default:
          valorA = 0;
          valorB = 0;
      }

      return ordem === "asc" ? valorA - valorB : valorB - valorA;
    });

  return (
    <>
      {loading ? (
        <Loading spiner={<CircleSpinner color="#f30" />} message="Carregando estudantes..." />
      ) : (
        <div className="flex flex-col gap-4 p-4 pt-0">
          <Card className="p-4 flex flex-col md:flex-row flex-wrap gap-4 items-end justify-between">
            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <Label>Ordenar por:</Label>
              <Select onValueChange={setOrdenarPor} value={ordenarPor}>
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cra">CRA</SelectItem>
                  <SelectItem value="materiasCursadas">Matérias Cursadas</SelectItem>
                  <SelectItem value="curso">Curso</SelectItem>
                  <SelectItem value="ultimoAcesso">Último Acesso</SelectItem>
                  <SelectItem value="vagasInscritas">Vagas Inscritas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <Label>Ordem:</Label>
              <Select onValueChange={setOrdem} value={ordem}>
                <SelectTrigger>
                  <SelectValue placeholder="Ordem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Crescente</SelectItem>
                  <SelectItem value="desc">Decrescente</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/3">
              <Label>Buscar por nome ou email:</Label>
              <Input placeholder="Digite aqui..." value={busca} onChange={(e) => setBusca(e.target.value)} />
            </div>

            <div>
              <Button variant="outline" onClick={resetFiltros}>
                Resetar filtros
              </Button>
            </div>
          </Card>

          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Curso</TableHead>
                  <TableHead>CRA</TableHead>
                  <TableHead>Matérias</TableHead>
                  <TableHead>Último Acesso</TableHead>
                  <TableHead>Inscrições</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alunosFiltrados.map((aluno, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{aluno.nome}</TableCell>
                    <TableCell>{aluno.email}</TableCell>
                    <TableCell>{aluno.profile?.curso}</TableCell>
                    <TableCell>{aluno.profile?.craValue}</TableCell>
                    <TableCell>{aluno.profile?.numeroMateriasConcluidas}</TableCell>
                    <TableCell>
                      {formatDistanceToNow(new Date(aluno.acessAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge>{aluno.vacanciesSubscribe?.length || 0} vaga(s)</Badge>
                    </TableCell>
                    <TableCell>
                      <AlunoDialog aluno={aluno} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      <div className="rounded-xl h-fit p-4">
        <StudentsOverviewChart />
      </div>
    </>
  );
};
