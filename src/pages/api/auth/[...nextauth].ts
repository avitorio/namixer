import NextAuth, { NextAuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Sing-in',
      credentials: {},
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams(credentials)
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id
        token.name = <string>user.username
        token.jwt = user.jwt
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
        session.jwt = token.jwt
      }

      return session
    }
  },
  secret: `${process.env.NEXTAUTH_JWT}`,
  jwt: {
    secret: `${process.env.NEXTAUTH_JWT}`
  }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
