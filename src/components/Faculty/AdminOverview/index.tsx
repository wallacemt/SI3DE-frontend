import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "@/hooks/useUserContext";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AdminOverview = ({ hide = false }: { hide?: boolean }) => {
  const { user } = useUserContext();

  if (!user) return null;
  return (
    <div className={`${hide ? "hidden" : "block"} px-4 pb-4`}>
      <Card className="bg-muted/50 dark:bg-muted/70 shadow-lg border border-border/30">
        <CardHeader className="flex flex-col items-center gap-2 text-center pt-6">
          <div className="rounded-full bg-primary/20 p-4 animate-in fade-in zoom-in" aria-hidden="true">
            <FaUserCircle className="text-5xl text-destaque/70 drop-shadow-sm" />
          </div>
          <CardTitle className="text-lg font-semibold text-foreground">{user.adminName}</CardTitle>
          <CardDescription className="text-muted-foreground">Administrador do sistema</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
