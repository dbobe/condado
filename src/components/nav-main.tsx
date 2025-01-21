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

interface NavMainProps {
  groupLabel: string;
  items: NavigationItem[];
}
export function NavMain({ groupLabel, items }: NavMainProps) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);
  console.log("🚀 ~ NavMain ~ paths:", paths);
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
                item.href === `/${paths[0]}` && "bg-accent"
              )}
            >
              <Link href={item.href}>
                {item.icon && <item.icon />}
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
