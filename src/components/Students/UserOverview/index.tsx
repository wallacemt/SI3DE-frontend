import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "@/hooks/useUserContext";

export const UserOverview = ({ hide = false }: { hide?: boolean }) => {
  const { user } = useUserContext();
  if (!user) return null;
  return (
    <div className={`space-y-6 px-4 pb-4  ${hide ? " hidden" : "block"}`}>
      <div className="flex items-center gap-4">
        <FaUserCircle className="text-5xl text-secundariaP2" />
        <div>
        <h3 className="text-base font-bold text-foreground">{user.nome}</h3>
          <p className="text-sm font-bold text-foreground/70">{user.profile?.curso!}</p>
        </div>
      </div>
      <div>
        <div className="text-sm font-bold text-foreground/80 mb-1">
          {user.profile?.numeroMateriasConcluidas || 0}% do curso concluído
        </div>
        <div className="bg-foreground/80 h-2 rounded-full overflow-hidden">
          <div
            className="bg-secundaria h-full transition-all duration-500"
            style={{ width: `${user.profile?.numeroMateriasConcluidas || 0}%` }}
          />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-2">Áreas de Interesse</h4>
        <div className="flex flex-wrap gap-2">
          {(user.profile?.interesses || []).map((area: string) => (
            <span
              key={area}
              className="border-purple-9\00 dark:bg-purple-900  font-bold text-xs font-principal px-3 py-1 rounded-full border dark:border-secundariaP2 dark:text-neutral10 text-neutral90"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
