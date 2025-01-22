import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "../prisma";
import { UserMembership } from "../next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials");
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email.toString(),
            },
          });

          if (user === null) {
            throw new Error("Invalid credentials");
          }

          const isPasswordValid = await compare(
            credentials.password.toString(),
            user.password
          );

          if (!isPasswordValid) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            image: user.profilePictureUrl,
          } as User;
        } catch (error) {
          console.error("Authentication error", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userWithMemberships = await prisma.user.findUnique({
          where: { id: user.id },
          include: {
            memberships: {
              include: {
                company: true,
                role: true,
              },
            },
          },
        });

        if (userWithMemberships) {
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
          token.image = user.image;
          token.memberships = userWithMemberships.memberships.map(
            (membership) => ({
              id: membership.id,
              role: membership.userRole,
              company: {
                id: membership.company.id,
                name: membership.company.name,
                slug: membership.company.slug,
                logoUrl: membership.company.logoUrl,
                primaryColor: membership.company.primaryColor,
                secondaryColor: membership.company.secondaryColor,
              },
            })
          );
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
        session.user.memberships = token.memberships as UserMembership[];
      }
      return session;
    },
  },
});
