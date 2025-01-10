import { Button } from "@/components/ui/button";
import { AppWindowIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <header className="w-full bg-primary p-4">
        <div className="container mx-auto">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="Condado Window Logo"
              width={288}
              height={30}
              className="object-contain"
            />
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <AppWindowIcon className="mx-auto size-24 text-primary" />
          <h1 className="text-4xl font-bold md:text-6xl text-secondary-foreground">
            Page Not Found
          </h1>
          <p className="text-xl mt-4">
            We couldn&apos;t find the page you were looking for. But don&apos;t
            worry, you can continue your work on the dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild variant="default">
              <Link href="/dashboard">Return to Dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
