import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Workflow,
} from "lucide-react";

import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from "@/components/ui/sidebar";
import { useUserContext } from "@/hooks/useUserContext";
import { Link } from "react-router";
import { UserOverview } from "../UserOverview";
import { data } from "@/assets/data";



export function AppSidebar({ sidebarType = "student", ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUserContext();
  const {open} = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to={"/"}>
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1744306739/logo_dhl8vb.png"
              alt="Logo Wyden"
              className="w-24 border-b border-neutral90/60 dark:border-neutral10/60  object-contain mx-auto hover:translate-y-[-2px] hover:shadow-lg transition-all cursor-pointer"
            />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <UserOverview hide={!open} />
        <NavMain items={data.navMain}  />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: user?.nome!, email: user?.email! }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
