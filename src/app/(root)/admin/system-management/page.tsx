"use client";

import { toast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function SystemManagementPage() {
  const { user } = useUser();
  const router = useRouter();
  console.log(user);
  if (
    user?.memberships.some((membership) => membership.role !== "SUPER_ADMIN")
  ) {
    toast({
      title: "You are not authorized to access this page",
      description: "Please contact your administrator",
      variant: "destructive",
    });
    router.push("/");
  }
  return <div>SystemManagementPage</div>;
}
