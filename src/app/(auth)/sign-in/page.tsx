"use client";

import AuthForm from "@/components/AuthForm";
import CWlogo from "@/components/CWlogo";
import { signInSchema } from "@/lib/validations";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid credentials");
        return { success: false, error: "Invalid credentials" };
      }

      // Fetch user's organizations
      const orgsResponse = await fetch("/api/organizations");
      const organizations = await orgsResponse.json();

      if (organizations.length === 0) {
        // If user has no organizations, redirect to create one
        router.push("/create-organization");
      } else {
        // If user has organizations, redirect to the first one's dashboard
        router.push(`/org/${organizations[0].slug}/dashboard`);
      }

      return { success: true };
    } catch (error) {
      toast.error("Something went wrong");
      return { success: false, error: "Something went wrong" };
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="flex size-10 items-center justify-center rounded-md text-primary">
              <CWlogo />
            </div>
            Condado Window
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full flex max-w-sm bg-muted p-8 rounded-md">
            <AuthForm
              type="SIGN_IN"
              schema={signInSchema}
              defaultValues={{
                email: "",
                password: "",
              }}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/img/Banner-bg.png"
          alt="Background image"
          fill
          className="absolute inset-0 size-full object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
    </main>
  );
}
