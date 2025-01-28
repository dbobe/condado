"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "../../types";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { logOut } from "@/lib/actions/auth";

interface NavMainProps {
  groupLabel: string;
  items: NavigationItem[];
}
export function NavMain({ groupLabel, items }: NavMainProps) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              tooltip={item.label}
              asChild
              className={cn(
                "hover:bg-accent",
                item.href === `/${paths[0]}` && "bg-accent",
                item.href === pathname && "bg-accent"
              )}
            >
              {item.label === "Logout" ? (
                <button onClick={logOut}>
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
                </button>
              ) : (
                <Link href={item.href}>
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
