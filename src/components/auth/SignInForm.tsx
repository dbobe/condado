import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export default function SignInForm({
  className,
  ...props
}: ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign in to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email and password to sign in
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2"></div>
      </div>
    </form>
  );
}
