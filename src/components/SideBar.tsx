import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Copyright } from "lucide-react";
import VerticalNavMenu, {
  generalNavItems,
  supportNavItems,
  adminNavItems,
} from "./VerticalNavMenu";
import ThemeToggler from "./ThemeToggler";
import logo from "../../public/img/sidebar-logo.png";

export default function SideBar() {
  const isAdmin = true;
  return (
    <div className="bg-primary h-screen max-w-sm flex flex-col justify-between">
      <div className="flex flex-col items-center px-16 py-12">
        <Link href="/dashboard">
          <Image
            src={logo}
            alt="Condado Window"
            width={300}
            height={300}
            className="w-80 h-auto"
          />
        </Link>
        <div className="w-full my-8">
          <h2 className="text-primary-foreground uppercase text-lg font-bold">
            General
          </h2>
          <VerticalNavMenu navItems={generalNavItems} />
        </div>
        <div className="w-full mb-8">
          <h2 className="text-primary-foreground uppercase text-lg font-bold">
            Support
          </h2>
          <VerticalNavMenu navItems={supportNavItems} />
        </div>
        {isAdmin && (
          <div className="w-full">
            <h2 className="text-primary-foreground uppercase text-lg font-bold">
              Administration
            </h2>
            <VerticalNavMenu navItems={adminNavItems} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 items-end w-full text-primary-foregroun p-4">
        <Separator className="my-4 bg-primary-foreground" />
        <ThemeToggler />
        <div className="flex gap-1 items-center flex-row">
          <Copyright className="size-6" />
          <p>2025 Condado Window</p>
        </div>
      </div>
    </div>
  );
}
