"use server";

import { signIn } from "@/auth";
import { User } from "@prisma/client";

export const signInWithCredentials = async (
  params: Pick<User, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result?.ok || result?.error) {
      return { success: false, error: result?.error || "Invalid credentials" };
    }

    return { success: true };
  } catch (error) {
    console.error("Sign in error", error);
    return { success: false, error: "Authentication failed" };
  }
};

// TODO: Add sign up logic (User can not be created by the user)
