import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { studentsMock } from "@/assets/studentsMock";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlunoDialog } from "../AlunosDialog";
import { StudentsOverviewChart } from "../StudentOverviewChart";

export const StudentsList = () => {
  const [ordenarPor, setOrdenarPor] = useState("cra");
  const [ordem, setOrdem] = useState("desc");

  const alunosFiltrados = studentsMock.sort((a, b) => {
    const campo = ordenarPor === "cra" ? "cra" : "materiasCursadas";
    const valorA = a[campo] || 0;
    const valorB = b[campo] || 0;
    return ordem === "asc" ? valorA - valorB : valorB - valorA;
  });

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4 space-x-4">
            <div className="w-full md:w-1/4 space-y-2">
              <Label>Ordenar por:</Label>
              <Select onValueChange={setOrdenarPor} defaultValue="cra">
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cra">CRA</SelectItem>
                  <SelectItem value="materiasCursadas">Matérias</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/4 space-y-2">
              <Label>Ordem:</Label>
              <Select onValueChange={setOrdem} defaultValue="desc">
                <SelectTrigger>
                  <SelectValue placeholder="Ordem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Menor para maior</SelectItem>
                  <SelectItem value="desc">Maior para menor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

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
                  <TableCell>{aluno.curso}</TableCell>
                  <TableCell>{aluno.cra}</TableCell>
                  <TableCell>{aluno.materiasCursadas}</TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(aluno.acessAt), { addSuffix: true, locale: ptBR })}
                  </TableCell>
                  <TableCell>
                    <Badge>{aluno.vagasInscritas.length} vaga(s)</Badge>
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
      <div className="rounded-xl h-fit p-2">
        <StudentsOverviewChart />
      </div>
    </>
  );
};
