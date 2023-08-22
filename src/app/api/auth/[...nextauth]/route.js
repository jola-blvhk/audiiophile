import NextAuth from "next-auth/next";
import prisma from "../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email.com" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "JohnUser" },
      },
      async authorize(credentials) {
        //   check email and password
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }
        //   check if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        //   If no user found
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }
        //   if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!passwordMatch) {
          throw new Error("Incorrect Password");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

export default NextAuth(authOptions)