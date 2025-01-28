"use server";

import { auth } from "@/auth";
import { prisma } from "../../../prisma";

export async function getCustomers() {
  const session = await auth();
  if (!session?.user?.memberships?.[0]?.company?.id) {
    throw new Error("Unauthorized");
  }

  const companyId = session.user.memberships[0].company.id;
  try {
    return await prisma.partner.findMany({
      where: {
        companyId: companyId,
      },
      orderBy: {
        companyName: "asc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch customers", error);
    throw new Error("Failed to fetch customers");
  }
}

export async function getCustomerById(id: string) {
  const session = await auth();
  if (!session?.user?.memberships?.[0]?.company?.id) {
    throw new Error("Unauthorized");
  }

  const companyId = session.user.memberships[0].company.id;
  try {
    return await prisma.partner.findUnique({
      where: { id, companyId },
    });
  } catch (error) {
    console.error("Failed to fetch customer", error);
    throw new Error("Failed to fetch customer");
  }
}
