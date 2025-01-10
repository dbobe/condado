import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  ContactIcon,
  FileText,
  HomeIcon,
  InfoIcon,
  SettingsIcon,
  LogOutIcon,
  LucideIcon,
  WrenchIcon,
  UserCogIcon,
} from "lucide-react";

export type NavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const generalNavItems: NavItem[] = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/dashboard",
  },
  {
    icon: ContactIcon,
    label: "Customers",
    href: "/dashboard/customers",
  },
  {
    icon: FileText,
    label: "Documents",
    href: "/dashboard/documents",
  },
];

export const supportNavItems: NavItem[] = [
  {
    icon: InfoIcon,
    label: "Help",
    href: "/help",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: LogOutIcon,
    label: "Logout",
    href: "/logout",
  },
];

export const adminNavItems: NavItem[] = [
  {
    icon: WrenchIcon,
    label: "Company Management",
    href: "/dashboard/company-management",
  },
  {
    icon: UserCogIcon,
    label: "User Management",
    href: "/dashboard/user-management",
  },
];

export default function VerticalNavMenu({ navItems }: { navItems: NavItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label} className="py-2 w-full">
            <NavigationMenuLink
              href={item.href}
              className="group inline-flex w-full items-center justify-start bg-primary text-primary-foreground px-4 py-2 text-base font-bold transition-colors hover:bg-secondary/50 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-100/50 dark:data-[state=open]:bg-gray-800/50 data-[active]:border-l-4 data-[active]:border-primary-foreground"
            >
              <item.icon className="size-4 mr-2" />
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
