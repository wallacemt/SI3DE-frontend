import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "@/hooks/useUserContext";
import { Card, CardContent } from "@/components/ui/card";

export const AdminOverview = ({ hide = false }: { hide?: boolean }) => {
    const { user } = useUserContext();

    if (!user) return null;

    return (
        <div className={`${hide ? "hidden" : "block"} px-4 pb-4`}>
            <Card className="bg-muted/50 shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-blue-100 p-2">
                        <FaUserCircle className="text-4xl text-blue-900" />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                            {user.nome}
                        </h3>
                        <p className="text-sm text-muted-foreground">Administrador</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
