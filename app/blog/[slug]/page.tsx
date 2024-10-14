import { getPostBySlug } from '@/lib/posts'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return <div>Post not found</div>
  }
  
  return (
    <article>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
