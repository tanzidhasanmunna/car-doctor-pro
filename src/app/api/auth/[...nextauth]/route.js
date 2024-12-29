import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
const bcrypt = require("bcrypt");

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db
          .collection("users")
          .findOne({ email: email });
        if (!currentUser) {
          return null;
        }

        const isValid = bcrypt.compareSync(password, currentUser.password);
        if (!isValid) {
          return null;
        }
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "facebook" || account.provider === "google") {
        const { name, email, image } = user;

        try {
          const db = await connectDB();
          const userCollection = await db.collection("users");
          const exist = await userCollection.findOne({ email });
          if (!exist) {
            await userCollection.insertOne(user);
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
