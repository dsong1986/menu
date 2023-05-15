import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from "next-auth/providers/auth0"


export const authOptions = {
  providers: [
    Auth0Provider({
        clientId: process.env.AUTH0_ID as string,
        clientSecret: process.env.AUTH0_SECRET as string,
        issuer: process.env.AUTH0_ISSUER,
      }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)