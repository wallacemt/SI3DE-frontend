import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MailIcon, GraduationCap, BookOpen, TrendingUp, Clock, Briefcase } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FaUserCircle } from "react-icons/fa";
import type { UserData } from "@/types/userTypes";

interface AlunoDialogProps {
  aluno: UserData;
}

export function AlunoDialog({ aluno }: AlunoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="cursor-pointer transition-all">
          Ver mais
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl px-6 py-5">
        <DialogHeader className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <FaUserCircle className="text-8xl text-secundaria/80" />
          </div>
          <DialogTitle className="text-2xl font-semibold text-foreground">{aluno.nome}</DialogTitle>
        </DialogHeader>

        <Separator className="my-3" />

        <div className="space-y-5 text-sm text-muted-foreground">
          <div className="flex flex-col gap-3">
            <InfoItem icon={MailIcon} label="Email" value={aluno.email} />
            <InfoItem icon={GraduationCap} label="Curso" value={aluno.profile?.curso!} />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <InfoItem icon={TrendingUp} label="CRA" value={aluno.profile?.craValue!} />
            <InfoItem icon={BookOpen} label="Matérias Cursadas" value={aluno.profile?.numeroMateriasConcluidas!} />
          </div>

          <InfoItem
            icon={Clock}
            label="Último Acesso"
            value={formatDistanceToNow(new Date(aluno.acessAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          />
        </div>

        <Separator className="my-4" />

        <div className="flex items-start gap-3">
          <Briefcase className="h-4 w-4 mt-1 text-primary" />
          <div className="w-full">
            <p className="text-xs uppercase text-muted-foreground mb-1">Vagas Inscritas</p>
            <ScrollArea className="h-[120px] w-[25rem] pr-2">
              {aluno.vacanciesSubscribe?.length! > 0 ? (
                <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                  {aluno.vacanciesSubscribe?.map((vaga: any) => (
                    <li key={vaga.vagaId}>{vaga.title}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground italic">Nenhuma vaga inscrita.</p>
              )}
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string | number }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 mt-1 text-primary" />
      <div>
        <p className="text-xs uppercase">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </div>
  );
}
