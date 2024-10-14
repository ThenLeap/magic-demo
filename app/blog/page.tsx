import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
