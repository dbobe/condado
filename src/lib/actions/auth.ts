"use server";

import { signIn, signOut } from "@/auth";
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

    if (result?.error) {
      return { success: false, error: result?.error };
    }

    return { success: true };
  } catch (error) {
    console.error("Sign in error", error);
    return { success: false, error: "Authentication failed" };
  }
};

// TODO: Add sign up logic (User can not be created by the user)

export const logOut = async () => {
  await signOut({ redirect: true, redirectTo: "/sign-in" });
};
