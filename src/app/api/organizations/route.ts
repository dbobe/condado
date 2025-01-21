import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const organizations = await prisma.organization.findMany({
      where: {
        memberships: {
          some: {
            userId: session.user.id,
          },
        },
      },
    });

    return NextResponse.json(organizations);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { name, slug } = await req.json();

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const organization = await prisma.organization.create({
      data: {
        name,
        slug,
        memberships: {
          create: {
            userId: session.user.id,
            role: "OWNER",
          },
        },
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
