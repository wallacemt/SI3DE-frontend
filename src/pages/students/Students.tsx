import { ProfileFormModal } from "@/components/ProfileFormModal";
import { SideBar } from "@/components/SideBar";
import { useUserContext } from "@/hooks/useUserContext";

export const Students = () => {
  const { user } = useUserContext();

  return (
    <>
      <SideBar>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div>
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{JSON.stringify(user, null, 2)}</pre>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SideBar>
      <ProfileFormModal />
    </>
  );
};
