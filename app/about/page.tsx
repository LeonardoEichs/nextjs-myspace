// Next Js will do this automatically because it
// detects that there is no data fetching operation
// in this page. This is called "static generation".
// But we can be more explicit about it by adding
// the following line:
export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a social media company'
}

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  )
}