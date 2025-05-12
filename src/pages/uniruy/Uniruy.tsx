import { SideBar } from "@/components/SideBar";
import { StudentsList } from "@/components/StudentsList";
import { useUserContext } from "@/hooks/useUserContext";

interface UniruyProps {
  page?: "home" | "graficos";
}

export const Uniruy = ({ page = "home" }: UniruyProps) => {
  const pageComponents = {
    home: () => <StudentsList />,
    graficos: () => <h1>Alunos</h1>,
  };
  const { user } = useUserContext();
  console.log(user);
  return (
    <div>
      <SideBar type="teacher">{pageComponents[page]()}</SideBar>
    </div>
  );
};
