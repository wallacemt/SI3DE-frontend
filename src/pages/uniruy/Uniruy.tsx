import { SideBar } from "@/components/SideBar";
import { StudentsList } from "@/components/StudentsList";
import { StudentsCharts } from "../studentCharts";

interface UniruyProps {
  page?: "home" | "graficos";
}

export const Uniruy = ({ page = "home" }: UniruyProps) => {
  const pageComponents = {
    home: () => <StudentsList />,
    graficos: () => <StudentsCharts />,
  };
  return (
    <div>
      <SideBar type="teacher">{pageComponents[page]()}</SideBar>
    </div>
  );
};
