'use client';

import { Sign } from 'crypto';
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <>...</>
  }
  if (status === 'authenticated') {
    return (
      <div className='flex items-center gap-2'>
        <Link href="/dashboard">
          <Image 
            src={session.user?.image ?? ''}
            width={32}
            height={32}
            alt="Profile Picture"
          />
        </Link>
        <SignOutButton />
      </div>
    )
  }
  return <button onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>
}