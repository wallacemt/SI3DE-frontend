import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, User2Icon } from "lucide-react";
import { useUserContext } from "@/hooks/useUserContext";
import { Avatar } from "@/components/ui/avatar";

export const UserAccount = () => {
  const { user } = useUserContext();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-xl rounded-2xl">
        <CardHeader className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-4">
            <Avatar className="border-2 border-secundaria h-20 w-20 flex items-center justify-center rounded-full shadow-sm">
              <User2Icon className="text-primary w-full h-full" />
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-bold">Minha Conta</CardTitle>
              <p className="text-muted-foreground text-sm">Informações do seu perfil de aluno</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="flex gap-2 items-center"
            onClick={() => console.log("Abrir modal")}
          >
            <Pencil className="w-4 h-4" />
            Editar Perfil
          </Button>
        </CardHeader>

        <CardContent className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Info label="Nome" value={user?.nome!} />
            <Info label="E-mail" value={user?.email!} />
            <Info label="Curso" value={user?.profile?.curso!} />
            <Info label="Matrículas Concluídas" value={String(user?.profile?.numeroMateriasConcluidas)} />
            <Info label="CRA" value={String(user?.profile?.craValue)} />
            <Info label="LinkedIn" value={user?.profile?.linkedin!} isLink />
            <Info label="GitHub" value={user?.profile?.github!} isLink />
            <Info label="Portifolio" value={user?.profile?.portfolio!} isLink />
          </div>

          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Áreas de Interesse</h4>
            <div className="flex flex-wrap gap-2">
              {user?.profile?.interesses.map((area: string, index: number) => (
                <Badge key={index} variant="outline">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Habilidades</h4>
            <div className="flex flex-wrap gap-2">
              {user?.profile?.habilidades.map((skill: string, index: number) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

function Info({ label, value, isLink = false }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div>
      <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
      {isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline break-all">
          {value}
        </a>
      ) : (
        <p className="text-base font-semibold text-foreground break-words">{value || "—"}</p>
      )}
    </div>
  );
}
