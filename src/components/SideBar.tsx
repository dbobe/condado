import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Copyright } from "lucide-react";
import VerticalNavMenu, {
  generalNavItems,
  supportNavItems,
} from "./VerticalNavMenu";
import ThemeToggler from "./ThemeToggler";

export default function SideBar() {
  return (
    <div className="bg-primary h-screen max-w-sm">
      <div className="flex flex-col items-center px-16 py-12">
        <Link href="/dashboard">
          <Image
            src="/img/logo.png"
            alt="Condado Window"
            width={281}
            height={30}
          />
        </Link>
        <div className="w-full my-8">
          <h2 className="text-primary-foreground uppercase text-lg font-bold">
            General
          </h2>
          <VerticalNavMenu navItems={generalNavItems} />
        </div>
        <div className="w-full">
          <h2 className="text-primary-foreground uppercase text-lg font-bold">
            Support
          </h2>
          <VerticalNavMenu navItems={supportNavItems} />
        </div>
        <Separator className="my-8 bg-primary-foreground" />
        <div className="flex flex-col gap-1 items-start w-full text-primary-foreground">
          <ThemeToggler />
          <div className="flex gap-1 items-center flex-row">
            <Copyright className="size-6" />
            <p>2025</p>
          </div>

          <p>Condado Window</p>
        </div>
      </div>
    </div>
  );
}
