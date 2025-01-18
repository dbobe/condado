import {
  ContactIcon,
  FileText,
  HomeIcon,
  InfoIcon,
  LogOutIcon,
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
    href: "/dashboard",
  },
  {
    icon: ContactIcon,
    label: "Customers",
    href: "/customers",
  },
  {
    icon: FileText,
    label: "Documents",
    href: "/dashboard/documents",
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
    href: "/dashboard/company-management",
  },
  {
    icon: UserCogIcon,
    label: "User Management",
    href: "/dashboard/user-management",
  },
];
