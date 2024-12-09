// import NextAuth, { User } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { myAxios } from "./middleware";

// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "jwt-decode";

// interface customJWTPayload extends JwtPayload {
//   first_name: string;
//   last_name: string;
//   email: string;
//   expires_at: number;
//   access_token: string;
//   refresh_token: string;
//   image: string;
//   id: string;
// }

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     Credentials({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         try {
//           const { data } = await myAxios.post(
//             "/user/token/",
//             JSON.stringify({
//               email: credentials.email,
//               password: credentials.password,
//             })
//           );
//           const token: customJWTPayload = jwtDecode(data.access);
//           const user = {
//             access_token: data.access,
//             refresh_token: data.refresh,
//             expires_at: (token?.exp ?? 0) * 1000,
//             user: {
//               name: `${token.first_name} ${token.last_name}`,
//               email: token.email,
//               image: token.image,
//               id: token.id,
//             },
//           };

//           return user;
//         } catch (err) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, account, trigger, session }) {
//       if (trigger === "update") {
//         return { ...token, ...session };
//       }
//       if (user) {
//         return {
//           ...token,
//           access_token: user.access_token,
//           refresh_token: user.refresh_token,
//           expires_at: user.expires_at,
//         };
//       } else if (Date.now() <= token.expires_at) {
//         return token;
//       } else {
//         if (!token.refresh_token) throw new TypeError("Missing refresh_token");
//         try {
//           const refresh = JSON.stringify({
//             refresh: token.refresh_token,
//           });

//           const { data } = await myAxios.post("user/token/refresh/", refresh);
//           const decoded_token: customJWTPayload = jwtDecode(data.access);
//           token.access_token = data.access;
//           token.refresh_token = data.refresh || "";
//           token.expires_at = decoded_token.expires_at;
//           return token;
//         } catch (err: any) {
//           token.error = "RefreshTokenError";
//           return token;
//         }
//       }
//       // const date = new Date().getTime();
//       // // if (user.user && date * 1000 < user.expires_at && token.access_token) {
//       // //   return token;
//       // // } else if (
//       // //   user.user &&
//       // //   date * 1000 < user.expires_at &&
//       // //   !token.access_token
//       // // ) {
//       // //   token.access_token = user.access_token;
//       // //   token.refresh_token = user.refresh_token;
//       // //   token.expires_at = user.expires_at;
//       // //   return token;
//       // // } else if (date * 1000 < user.expires_at) {
//       // //   console.log("Still valid: ", token);
//       // //   return token;
//       // // } else if (new Date().getTime() * 1000 <= user.expires_at - 100) {
//       // //   const { data } = await myAxios.post(
//       // //     "user/token/refresh",
//       // //     user.refresh_token
//       // //   );
//       // //   const decoded_token: customJWTPayload = jwtDecode(data.access);
//       // //   token.access_token = data.access;
//       // //   token.refresh_token = user.refresh_token || "";
//       // //   token.expires_at = decoded_token.expires_at;
//       // //   return token;
//       // // } else {
//       // // console.log("*********************************");
//       // // console.log(user);
//       // token.access_token = user.access_token;
//       // token.refresh_token = user.refresh_token;
//       // token.expires_at = user.expires_at;
//       // // console.log(token);
//       // // }
//       return token;
//     },
//     async session({ session, token, trigger, user }) {
//       // Handle session update
//       if (trigger === undefined && token.first_name) {
//         // Custom logic for updates

//         session.user.name = `${token.first_name} ${token.last_name}`;
//         session.user.email = token.email || "";
//         session.user.image = typeof token.image === "string" ? token.image : "";
//         session.user.id = token.id as string;

//         return session;
//       }

//       if (token.access_token) {
//         const decoded_token: customJWTPayload = jwtDecode(
//           token.access_token as unknown as string
//         );

//         session.user = {
//           ...session.user,
//           name: `${decoded_token.first_name} ${decoded_token.last_name}`,
//           email: decoded_token.email || "",
//           image: decoded_token.image || null,
//           id: decoded_token.id || "",
//         };
//       } else {
//         session.error = token.error; // Handle errors like refresh failure
//       }

//       return session;
//     },
//   },
//   session: { strategy: "jwt" },
//   secret: "EFIuABVGKRPnc9LIbN9sjG/4pXD/MuMNWtyVGcghPd8=",
// });

// declare module "next-auth" {
//   interface User {
//     access_token: string;
//     refresh_token: string;
//     expires_at: number;
//     user: {
//       name: string;
//       email: string;
//       image: string;
//       id: string;
//     };
//   }

//   interface Session {
//     email?: string;
//     name?: string;
//     image?: string;
//     id: string;
//     error?: "RefreshTokenError";
//   }
// }
