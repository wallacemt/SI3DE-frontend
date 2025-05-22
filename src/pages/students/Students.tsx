import { ProfileFormModal } from "@/components/ProfileFormModal";
import { SideBar } from "@/components/SideBar";
import { VagasList } from "@/components/VagaList";
import CarreirasPage from "../carreiras/StudentsCarreiras";
interface StudentsProps {
  page?: "home" | "carreiras";
}
export const Students = ({ page = "home" }: StudentsProps) => {
  const pageComponents = {
    home: () => <VagasList />,
    carreiras: () => <CarreirasPage />,
  };

  return (
    <>
      <SideBar>{pageComponents[page]()}</SideBar>
      <ProfileFormModal />
    </>
  );
};
