"use client";

import { ComponentProps } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import CWlogo from "./CWlogo";
import { NavMain } from "./nav-main";
import {
  ADMIN_NAV_ITEMS,
  GENERAL_NAV_ITEMS,
  SUPPORT_NAV_ITEMS,
} from "@/constants";
import { NavUser } from "./nav-user";

export const user = {
  name: "Fulano deTal",
  email: "fulano.detal@example.com",
  avatar: "https://github.com/shadcn.png",
};

export default function AppSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  const isAdmin = true;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center gap-2 flex-row">
        <div className="flex aspect-square size-8 items-center justify-center rounded-md text-primary">
          <CWlogo />
        </div>
        <div className="grid flex-1 text-left text-lg leading-tight">
          <span className="truncate font-semibold">Condado Window</span>
          {/* <span className="truncate text-xs">Bayam&oacute;n, PR</span> */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain groupLabel="General" items={GENERAL_NAV_ITEMS} />
        <NavMain groupLabel="Support" items={SUPPORT_NAV_ITEMS} />
        {isAdmin && <NavMain groupLabel="Admin" items={ADMIN_NAV_ITEMS} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
