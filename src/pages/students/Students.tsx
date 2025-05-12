import { ProfileFormModal } from "@/components/ProfileFormModal";
import { SideBar } from "@/components/SideBar";
import { VagasList } from "@/components/VagaList";

export const Students = () => {
  return (
    <>
      <SideBar>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <VagasList />
        </div>
      </SideBar>
      <ProfileFormModal />
    </>
  );
};
