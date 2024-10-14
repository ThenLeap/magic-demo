import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      </Link>
      <p className="text-gray-500 text-sm mb-2">{post.date}</p>
      <p className="text-gray-700">{post.excerpt}</p>
    </div>
  )
}
