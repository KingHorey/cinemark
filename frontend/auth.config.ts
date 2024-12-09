// import type { NextAuthConfig } from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const authConfig = {
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedin = !!auth?.user;
//       const isOnProfile = nextUrl.pathname.startsWith("/profile");
//       if (isOnProfile) {
//         if (isLoggedin) return true;
//         return false;
//       } else if (isLoggedin)
//         return Response.redirect(new URL("/profile", nextUrl));
//       return true;
//     },
//   },
//   providers: [
//     Credentials({
//       async authorize(credentials)
//     }),
//   ],
// } satisfies NextAuthConfig;
