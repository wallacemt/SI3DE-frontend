import { SideBar } from "@/components/SideBar";
import { StudentsCharts } from "../../components/Faculty/StudentCharts";
import { StudentsList } from "@/components/Faculty/StudentsList";
import { Feadbecks } from "@/components/Faculty/Feadbecks";

interface UniruyProps {
  page?: "home" | "graficos" | "feadbacks";
}

export default function Uniruy({ page = "home" }: UniruyProps) {
  const pageComponents = {
    home: () => <StudentsList />,
    graficos: () => <StudentsCharts />,
    feadbacks: () => <Feadbecks />,
  };
  return (
    <div className="overflow-x-hidden">
      <SideBar type="teacher">{pageComponents[page]()}</SideBar>
    </div>
  );
}
