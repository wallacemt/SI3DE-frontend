import * as React from "react";
import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUserContext } from "@/hooks/useUserContext";
import { Link } from "react-router";
import { UserOverview } from "../Students/UserOverview";
import { data } from "@/assets/data";
import { AdminOverview } from "../Faculty/AdminOverview";

export function AppSidebar({ sidebarType = "student", ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUserContext();
  const { open } = useSidebar();
  const dataNav = [...(sidebarType === "student" ? data.student : data.uniruy), ...data.navMain,];
  return (
    <Sidebar collapsible="icon" variant="sidebar" {...props}>
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
        {sidebarType === "student" ? <UserOverview hide={!open} /> : <AdminOverview hide={!open} />}
        <NavMain items={dataNav} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: user?.nome!, email: user?.email! }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
