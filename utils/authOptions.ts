import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signInWithOAuth } from "./signInWithOAuth";
import { UserType } from "@/libs/interfaces/user.interface";
import { getUserByEmail } from "./getUserByEmail";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.type === "oauth") {
        return await signInWithOAuth({ account, profile });
      }
      return true;
    },
    async jwt({ token, trigger, session }) {
      if (trigger === "update") {
        if (token?.user) {
          const user: UserType = token.user as UserType;
          user.role = session.role;
          token.user = user;
        }
      } else {
        const user = await getUserByEmail({ email: token.email });
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        name?: string;
        email?: string;
        image?: string;
      };
      return session;
    },
  },
  // pages: {
  //   signIn: "/auth/sign-in",
  // },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
