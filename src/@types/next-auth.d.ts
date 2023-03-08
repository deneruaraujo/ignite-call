import NextAuth from 'next-auth/next'

export module 'next-auth' {
  interface user {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }
}
