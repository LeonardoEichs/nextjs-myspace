import FollowButton from "@/components/FollowButton/FollowButton"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  return { title: `User profile of ${user?.name}`}
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image } = user ?? {}
  return (
    <div>
      <h1>{name}</h1>
      <img src={image ?? ''} alt={name ?? 'User profile pic'} width={300} />
      <h3>Bio</h3>
      <p>{bio}</p>
      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  )
}