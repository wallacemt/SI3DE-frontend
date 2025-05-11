import { ProfileFormModal } from "@/components/ProfileFormModal";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/hooks/useUserContext";

export const Students = () => {
  const { logout, user } = useUserContext();
  return (
    <>
      <div>
        Students
        <Button onClick={() => logout()}>Sair</Button>
      </div>
      <ProfileFormModal />
    </>
  );
};
