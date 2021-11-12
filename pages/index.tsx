import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { PrismaClient } from '@prisma/client'

interface User {
  id: number
  name?: string
  email: string
}

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const prisma = new PrismaClient()

  // create a new user
  const newUser: User = await prisma.users.create({
    data: {
      id: 1,
      name: 'John Doe',
      email: 'man@gmail.com',
    },
  })

  const allUsers = await prisma.users.findMany()
  console.log(newUser, allUsers)

  return {
    props: { allUsers },
  }
}

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1>Sign In or Sign Up</h1>
    </Layout>
  )
}

export default HomePage
