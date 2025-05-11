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
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <ProfileFormModal />
    </>
  );
};
