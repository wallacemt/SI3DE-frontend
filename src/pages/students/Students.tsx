import { Button } from "@/components/ui/button";
import { useUserContext } from "@/hooks/useUserContext";

export const Students = () => {
  const { logout } = useUserContext();
  return (
    <div>
      Students
      <Button onClick={() => logout()}>Sair</Button>
    </div>
  );
};
