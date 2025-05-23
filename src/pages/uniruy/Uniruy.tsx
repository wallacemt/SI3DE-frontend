import { SideBar } from "@/components/SideBar";
import { StudentsCharts } from "../studentCharts";
import { StudentsList } from "@/components/School/StudentsList";

interface UniruyProps {
  page?: "home" | "graficos";
}

export default function Uniruy({ page = "home" }: UniruyProps) {
  const pageComponents = {
    home: () => <StudentsList />,
    graficos: () => <StudentsCharts />,
  };
  return (
    <div>
      <SideBar type="teacher">{pageComponents[page]()}</SideBar>
    </div>
  );
}
