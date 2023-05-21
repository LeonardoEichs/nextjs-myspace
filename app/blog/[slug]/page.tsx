export const revalidate = 1200;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(res => res.json())

  return posts.map(post => ({
    slug: post.slug
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(res => res.json())
  const post = posts.find(post => post.slug === params.slug)!

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}