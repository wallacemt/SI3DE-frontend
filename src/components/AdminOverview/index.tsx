import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "@/hooks/useUserContext";
import { Card, CardContent } from "@/components/ui/card";

export const AdminOverview = ({ hide = false }: { hide?: boolean }) => {
  const { user } = useUserContext();

  if (!user) return null;

  return (
    <div className={`${hide ? "hidden" : "block"} px-4 pb-4`}>
      <Card className="bg-muted/40 dark:bg-muted/60 shadow-md transition-colors">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="rounded-full bg-primary/10 p-3 flex items-center justify-center" aria-hidden="true">
            <FaUserCircle className="text-4xl text-primary" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-foreground leading-tight">{user.nome}</h3>
            <span className="text-sm text-muted-foreground">Administrador</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
