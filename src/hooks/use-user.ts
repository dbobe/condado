import { useSession } from "next-auth/react";
import { UserRole } from "@prisma/client";
import { UserMembership } from "../../next-auth";

export interface User {
  id: string;
  name: string;
  email: string;
  memberships: UserMembership[];
}

export function useUser() {
  const { data: session, status } = useSession();
  const user = session?.user;

  const getUserCompanies = () => {
    return user?.memberships.map((membership) => membership.company) ?? [];
  };

  const getUserRoleInCompany = (companyId: string) => {
    return user?.memberships.find(
      (membership) => membership.company.id === companyId
    )?.role;
  };

  const isUserInCompany = (companyId: string) => {
    return (
      user?.memberships.some(
        (membership) => membership.company.id === companyId
      ) ?? false
    );
  };

  const hasRole = (companyId: string, roles: UserRole[]) => {
    const userRole = getUserRoleInCompany(companyId);
    return userRole ? roles.includes(userRole) : false;
  };

  return {
    user: user as User | undefined,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
    getUserCompanies,
    getUserRoleInCompany,
    isUserInCompany,
    hasRole,
  };
}
