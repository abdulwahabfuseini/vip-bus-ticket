import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/Prismadb";
import { IUser, Role } from "@/contexts/Types";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credential",
      credentials: {
        username: { label: "Username", placeholder: "Enter Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Please Enter Username and Password");
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials?.username },
        });

        if (!user || !user.password) {
          throw new Error("No User Found");
        }

        if (credentials.password !== user.password) {
          throw new Error("Incorrect Credentials");
        }

        return {
          id: user.id.toString(),
          username: user.username,
          password: user.password,
          role: user.role as Role,
          name: user.lastName,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user as IUser;
      }
      
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as IUser;
      return session;
    },
  },
};
