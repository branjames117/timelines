import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // configure authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: {
    // default strategy
    strategy: 'jwt',
  },
};

console.log(process.env.GOOGLE_ID);
console.log(process.env.GOOGLE_SECRET);

export default NextAuth(authOptions);
