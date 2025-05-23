import { SideBar } from "@/components/SideBar";
import CarreirasPage from "../carreiras/StudentsCarreiras";
import { VagasList } from "@/components/Students/VagaList";
import { ProfileFormModal } from "@/components/Students/ProfileFormModal";
interface StudentsProps {
  page?: "home" | "carreiras";
}
export default function Students({ page = "home" }: StudentsProps) {
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
}
