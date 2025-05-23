import {
  ContactIcon,
  DoorClosed,
  FileText,
  HomeIcon,
  InfoIcon,
  LogOutIcon,
  MonitorCog,
  SettingsIcon,
  UserCogIcon,
  WrenchIcon,
} from "lucide-react";
import { NavigationItem } from "../../types";

export const FIELD_NAMES = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
};

export const FIELD_TYPES = {
  firstName: "text",
  lastName: "text",
  email: "email",
  password: "password",
};

export const GENERAL_NAV_ITEMS: NavigationItem[] = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/",
  },
  {
    icon: ContactIcon,
    label: "Customers",
    href: "/customers",
  },
  {
    icon: FileText,
    label: "Documents",
    href: "/documents",
  },
  {
    icon: DoorClosed,
    label: "Product Configurator",
    href: "/configurator",
  },
];

export const SUPPORT_NAV_ITEMS: NavigationItem[] = [
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

export const ADMIN_NAV_ITEMS: NavigationItem[] = [
  {
    icon: WrenchIcon,
    label: "Company Management",
    href: "/admin/company-management",
  },
  {
    icon: UserCogIcon,
    label: "User Management",
    href: "/admin/user-management",
  },
];

export const SUPER_ADMIN_NAV_ITEMS: NavigationItem[] = [
  {
    icon: MonitorCog,
    label: "System Management",
    href: "/admin/system-management",
  },
];
