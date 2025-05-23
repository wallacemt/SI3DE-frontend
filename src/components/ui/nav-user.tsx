"use client";

import { BadgeCheck, ChevronsUpDown, LogOut, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { useUserContext } from "@/hooks/useUserContext";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
  };
}) {
  const { isMobile } = useSidebar();
  const { logout } = useUserContext();

  const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme") as "light" | "dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg p-1">
                <AvatarImage
                  src={"https://res.cloudinary.com/dg9hqvlas/image/upload/v1747017540/pngwing.com_idimby.png"}
                  className={`${theme === "dark" ? "invert-75" : ""}`}
                  alt={user.name}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={"https://res.cloudinary.com/dg9hqvlas/image/upload/v1747017540/pngwing.com_idimby.png"}
                    className={`${theme === "dark" ? "invert-75" : ""} p-1`}
                    alt={user.name}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => toggleTheme()}>
                <Sparkles />
                {theme === "dark" ? "Light theme" : "Dark theme"}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
