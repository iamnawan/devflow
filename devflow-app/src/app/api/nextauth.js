import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER, // Anda perlu mengatur ini jika ingin pengiriman email nyata
      from: process.env.EMAIL_FROM,     // Anda perlu mengatur ini jika ingin pengiriman email nyata
    }),
    // Tambahkan provider lain seperti GoogleProvider atau GitHubProvider di sini jika diperlukan
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],
  pages: {
    signIn: '/auth/signin', // Halaman sign-in kustom Anda
    verifyRequest: '/auth/verify-request', // Halaman untuk verifikasi magic link
    error: '/auth/error', // Halaman untuk menampilkan error
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, such as an access_token and user id from a provider.
      if (token.sub) {
        session.user.id = token.sub; // Pastikan ID pengguna tersedia di sesi
      }
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }