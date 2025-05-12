import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface SideBarProps {
  children: React.ReactNode;
  type?: "student" | "teacher";
}

export const SideBar = ({ children, type = "student" }: SideBarProps) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar sidebarType={type} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
          <>{children}</>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
