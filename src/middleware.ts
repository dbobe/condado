import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  // Check if the path includes an organization slug
  const organizationPath = /^\/org\/([^\/]+)/;
  const match = request.nextUrl.pathname.match(organizationPath);

  if (match) {
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    const organizationSlug = match[1];

    // You might want to verify if the user has access to this organization
    // This is a simplified example
    try {
      const response = await fetch(
        `${process.env.NEXTAUTH_URL}/api/organizations/${organizationSlug}/verify`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/org/:path*",
};
