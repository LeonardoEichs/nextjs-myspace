import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "./buttons";


const links = [
  { 
    text: 'About',
    href: '/about'
  },
  {
    text: 'Blog',
    href: '/blog'
  },
  {
    text: 'Users',
    href: '/users'
  }
]

export default function NavMenu() {
  return (
    <nav className="flex bg-blue-500 text-white h-[70px] justify-between items-center">
      <Link href={'/'}>
        <Image src="/logo.png" width={216} height={30} alt="NextSpace Logo" />
      </Link>
      <ul className="list-none flex mr-4">
        {links.map(({ text, href }) => 
          <li key={href} className="h-[70px] flex items-center p-1">
            <Link href={href}>{text}</Link>
          </li>
        )}
        <li className="flex items-center px-4">
          <SignInButton />
        </li>
      </ul>
    </nav>
  )
}