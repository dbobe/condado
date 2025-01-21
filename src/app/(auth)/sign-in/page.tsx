"use client";

import AuthForm from "@/components/AuthForm";
import CWlogo from "@/components/CWlogo";
import { signInSchema } from "@/lib/validations";
// import SignInForm from "@/components/auth/SignInForm";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
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
              onSubmit={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={"/img/Banner-bg.png"}
          alt="Background image"
          fill
          className="absolute inset-0 size-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </main>
  );
}
