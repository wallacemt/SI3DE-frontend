import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useUserContext } from "@/hooks/useUserContext";
import { Star } from "lucide-react";
import type { Vaga } from "@/types/vagasType";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const evaluationSchema = z.object({
  companyName: z.string().min(1, "Nome da empresa é obrigatório"),
  internshipArea: z.string().min(1, "Área do estágio é obrigatória"),
  internshipDuration: z.string().optional(),
  internshipPeriod: z.string().optional(),
  ratings: z.object({
    workEnvironment: z.number(),
    supervision: z.number(),
    learning: z.number(),
    compensation: z.number(),
    overall: z.number(),
  }),
  positiveAspects: z.string().optional(),
  negativeAspects: z.string().optional(),
  recommendations: z.string().optional(),
  recommendation: z.enum(["sim", "nao"]),
  studentName: z.string().min(1, "Nome do estudante é obrigatório"),
  studentCourse: z.string().min(1, "Curso é obrigatório"),
  anonymous: z.boolean().default(false),
});

interface StageEvaluationDialogProps {
  vaga: Vaga;
}
export default function StageEvaluationDialog({ vaga }: StageEvaluationDialogProps) {
  const { user } = useUserContext();
  const form = useForm({
    resolver: zodResolver(evaluationSchema),
    defaultValues: {
      ratings: {
        workEnvironment: 0,
        supervision: 0,
        learning: 0,
        compensation: 0,
        overall: 0,
      },
      anonymous: false,
    },
  });

  function onSubmit(data: any) {
    console.log("Avaliação enviada:", data);
    toast.success("Avaliação enviada com sucesso!");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="w-full sm:w-auto bg-amber-400/80 hover:bg-amber-400/90 text-foreground text-sm sm:text-base"
        >
          Avaliar Estágio
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full md:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            {" "}
            <Star className="text-yellow-400/90" size={20} /> Avaliar Experiência de Estágio
          </DialogTitle>
          <DialogDescription>
            Compartilhe sua experiência e ajude outros estudantes a conhecerem melhor as empresas
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa *</Label>
              <Input id="companyName" {...form.register("companyName")} defaultValue={vaga.empresa} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="internshipArea">Área do Estágio *</Label>
              <Select {...form.register("internshipArea")}>
                <SelectTrigger className="w-full" id="internshipArea">
                  <SelectValue placeholder="Selecione a área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administracao">Administração</SelectItem>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="contabilidade">Contabilidade</SelectItem>
                  <SelectItem value="rh">Recursos Humanos</SelectItem>
                  <SelectItem value="engenharia">Engenharia</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="internshipDuration">Duração</Label>
              <Select {...form.register("internshipDuration")}>
                <SelectTrigger className="w-full" id="internshipDuration">
                  <SelectValue placeholder="Selecione a duração" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-meses">3 meses</SelectItem>
                  <SelectItem value="6-meses">6 meses</SelectItem>
                  <SelectItem value="12-meses">12 meses</SelectItem>
                  <SelectItem value="mais-12-meses">Mais de 12 meses</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="internshipPeriod">Período</Label>
              <Input
                id="internshipPeriod"
                placeholder="Ex: Jan/2024 - Jun/2024"
                {...form.register("internshipPeriod")}
              />
            </div>
          </div>

          <div className="grid gap-4">
            <Label>Recomendação</Label>
            <RadioGroup defaultValue="sim" {...form.register("recommendation")}>
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="sim" id="rec-sim" />
                  <Label htmlFor="rec-sim">Sim, recomendo esta empresa</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="nao" id="rec-nao" />
                  <Label htmlFor="rec-nao">Não recomendo esta empresa</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Seu Nome *</Label>
              <Input id="studentName" {...form.register("studentName")} defaultValue={user?.nome} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentCourse">Seu Curso *</Label>
              <Input
                id="studentCourse"
                {...form.register("studentCourse")}
                defaultValue={user?.profile?.curso!}
                disabled
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input id="anonymous" type="checkbox" {...form.register("anonymous")} />
            <Label htmlFor="anonymous">Publicar avaliação de forma anônima</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="positiveAspects">Aspectos Positivos: </Label>
            <Textarea id="positiveAspects" {...form.register("positiveAspects")} rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="negativeAspects">Aspectos a Melhorar: </Label>
            <Textarea id="negativeAspects" {...form.register("negativeAspects")} rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recommendations">Dicas para Futuros Estagiários: </Label>
            <Textarea id="recommendations" {...form.register("recommendations")} rows={3} />
          </div>

          <DialogFooter>
            <Button type="submit">Enviar Avaliação</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
