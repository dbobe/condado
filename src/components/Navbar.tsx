import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";
import {
  adminNavItems,
  generalNavItems,
  supportNavItems,
} from "./VerticalNavMenu";

export default function Navbar() {
  const isAdmin = true;

  return (
    <div className="bg-primary py-2 px-5 flex justify-between text-white">
      <Link href="/" className="flex items-center gap-2 flex-row">
        <Image
          src="/img/cw-logo.png"
          alt="Condado Window Logo"
          width={50}
          height={50}
        />
        <div className="text-2xl font-bold">Condado Window</div>
      </Link>
      <div className="flex items-center">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-black">CW</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>General</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {generalNavItems.map((item) => (
              <DropdownMenuItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuLabel className="mt-4">Support</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {supportNavItems.map((item) => (
              <DropdownMenuItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
            {isAdmin && (
              <>
                <DropdownMenuLabel className="mt-4">Admin</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {adminNavItems.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
