import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            login: credentials.email,
            password: credentials.password,
          }),
        });

        const data = await res.json();
        if (res.ok && data) {
          return data;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, data }) {
      return { ...token, ...data };
    },
    async session({ token }) {
      return {
        user: {
          email: token.email,
          id: token.id,
          fullName: token.fullName,
          profileImage: token.profileImage,
          accessToken: token.accessToken,
          admin: token.admin,
          dummyImage: "/assets/images/dummy-profile-img.webp",
        },
      };
    },
  },
});
export { handler as GET, handler as POST };
