import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

import { prismadb } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
    // error: precisa criar
  },
  // events: {
  //   async signIn({ user }) {
  //     await prismadb.user.create({
  //       data: {
  //         name: user.name!,
  //         avatar_url: user.image,
  //       } ,
  //     });
  //   }
  // },
  providers: [
    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prismadb),
  session: { strategy: "jwt" },
});
