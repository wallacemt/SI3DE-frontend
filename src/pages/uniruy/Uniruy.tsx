import { Button } from "@/components/ui/button";
import { useUserContext } from "@/hooks/useUserContext";

export const Uniruy = () => {
  const { logout } = useUserContext();
  return (
    <div>
      Uniruy
      <Button onClick={() => logout()}>Sair</Button>
    </div>
  );
};
