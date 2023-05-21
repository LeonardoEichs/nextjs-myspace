import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function Users() {
  const users = await prisma.user.findMany()
  return (
    <div>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}