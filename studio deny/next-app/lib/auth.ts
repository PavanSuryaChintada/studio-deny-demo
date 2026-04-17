import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const nextAuthSecret = process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET;

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: nextAuthSecret,
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Credentials({
      id: "credentials",
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email =
          typeof credentials?.email === "string" ? credentials.email.trim().toLowerCase() : "";
        const password = typeof credentials?.password === "string" ? credentials.password : "";
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.password) return null;

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image ?? undefined,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (
        account?.provider === "google" &&
        account.providerAccountId &&
        profile &&
        "email" in profile &&
        profile.email
      ) {
        const email = String(profile.email).toLowerCase();
        let dbUser = await prisma.user.findUnique({ where: { email } });

        if (!dbUser) {
          dbUser = await prisma.user.create({
            data: {
              email,
              name: user.name ?? (profile as { name?: string }).name ?? null,
              image:
                user.image ?? (profile as { picture?: string }).picture ?? null,
              password: null,
            },
          });
        }

        const providerAccountId = account.providerAccountId;

        const existingLink = await prisma.account.findFirst({
          where: {
            provider: "google",
            providerAccountId,
          },
        });

        if (existingLink && existingLink.userId !== dbUser.id) {
          return false;
        }

        if (!existingLink) {
          await prisma.account.create({
            data: {
              userId: dbUser.id,
              provider: "google",
              providerAccountId,
              access_token: account.access_token ?? null,
              refresh_token: account.refresh_token ?? null,
            },
          });
        } else {
          await prisma.account.update({
            where: { id: existingLink.id },
            data: {
              access_token: account.access_token ?? null,
              refresh_token: account.refresh_token ?? null,
            },
          });
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        if (user.id) token.id = user.id;
        if (user.email) token.email = user.email;
        if (user.name !== undefined && user.name !== null) token.name = user.name;
        if (user.image !== undefined) token.picture = user.image;
      }

      const email =
        (typeof token.email === "string" ? token.email : user?.email)?.toLowerCase() ?? undefined;
      if (email) {
        const dbUser = await prisma.user.findUnique({ where: { email } });
        if (dbUser) {
          token.id = dbUser.id;
          token.email = dbUser.email;
          token.name = dbUser.name;
          token.picture = dbUser.image;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? "";
        if (token.email) session.user.email = token.email as string;
        if (token.name !== undefined) session.user.name = token.name as string | null;
        if (token.picture !== undefined) session.user.image = (token.picture as string) ?? null;
      }
      return session;
    },
  },
});
