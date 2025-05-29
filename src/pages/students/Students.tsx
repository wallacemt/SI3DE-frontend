import { SideBar } from "@/components/SideBar";
import { VagasList } from "@/components/Students/VagaList";
import { ProfileFormModal } from "@/components/Students/ProfileFormModal";
import StudentCaerer from "../../components/Students/Caerer/StudentsCarreiras";
import { StudentSubscriptions } from "@/components/Students/Subscriptions";
import { AvaliarEstagio } from "@/components/Students/AvaliarEstagio";
import { UserAccount } from "@/components/Students/UserAccount";
interface StudentsProps {
  page?: "home" | "carreiras" | "inscricoes" | "avaliar_estagio" | "perfil";
}
export default function Students({ page = "home" }: StudentsProps) {
  const pageComponents = {
    home: () => <VagasList />,
    carreiras: () => <StudentCaerer />,
    inscricoes: () => <StudentSubscriptions />,
    avaliar_estagio: () => <AvaliarEstagio />,
    perfil: () => <UserAccount />,
  };

  return (
    <>
      <SideBar>{pageComponents[page]()}</SideBar>
      <ProfileFormModal />
    </>
  );
}
