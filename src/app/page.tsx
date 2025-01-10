import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-16">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="text-lg">
        This page will load a splash page for the company and a login form.
        Account creation will not be available. Condado Window administrators
        are responsible for account creations.
      </p>
      <Button asChild size={"lg"} variant="default" className="rounded-xl">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
}
