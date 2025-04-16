"use client";

import { ComponentProps } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
// import CWlogo from "./CWlogo";
import { NavMain } from "./nav-main";
import {
  ADMIN_NAV_ITEMS,
  GENERAL_NAV_ITEMS,
  SUPPORT_NAV_ITEMS,
  SUPER_ADMIN_NAV_ITEMS,
} from "@/constants";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import { useUser } from "@/hooks/use-user";

export const user = {
  name: "Fulano deTal",
  email: "fulano.detal@example.com",
  avatar: "https://github.com/shadcn.png",
};

export default function AppSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const isAdmin = user?.memberships.some(
    (membership) =>
      membership.role === "ADMIN" || membership.role === "SUPER_ADMIN"
  );
  const isSuperAdmin = user?.memberships.some(
    (membership) => membership.role === "SUPER_ADMIN"
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
        {/*<div className="flex aspect-square size-8 items-center justify-center rounded-md text-primary">
          <CWlogo />
        </div>
        <div className="grid flex-1 text-left text-lg leading-tight">
          <span className="truncate font-semibold">Condado Window</span>
           <span className="truncate text-xs">Bayam&oacute;n, PR</span> 
        </div>*/}
      </SidebarHeader>
      <SidebarContent>
        <NavMain groupLabel="General" items={GENERAL_NAV_ITEMS} />
        <NavMain groupLabel="Support" items={SUPPORT_NAV_ITEMS} />
        {isAdmin && <NavMain groupLabel="Admin" items={ADMIN_NAV_ITEMS} />}
        {isSuperAdmin && (
          <NavMain
            groupLabel="System Configuration"
            items={SUPER_ADMIN_NAV_ITEMS}
          />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
