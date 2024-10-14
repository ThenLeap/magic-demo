// This is a mock implementation. In a real application, you would fetch data from a database or API.
interface Post {
  slug: string
  title: string
  date: string
  content: string
  excerpt: string
}

const posts: Post[] = [
  {
    slug: 'hello-world-1',
    title: 'Hello World 1',
    date: '2023-05-01',
    content: '<p>This is my first blog post!</p>',
    excerpt: 'Welcome to my new blog...'
  },
  {
    slug: 'hello-world-2',
    title: 'Hello World 2',
    date: '2023-05-01',
    content: '<p>This is my first blog post!</p>',
    excerpt: 'Welcome to my new blog...'
  },
  {
    slug: 'hello-world-3',
    title: 'Hello World 3',
    date: '2023-05-01',
    content: '<p>This is my first blog post!</p>',
    excerpt: 'Welcome to my new blog...'
  },
  {
    slug: 'hello-world-4',
    title: 'Hello World 4',
    date: '2023-05-01',
    content: '<p>This is my first blog post!</p>',
    excerpt: 'Welcome to my new blog...'
  },
  // Add more posts here
]

export async function getPosts(): Promise<Post[]> {
  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find(post => post.slug === slug)
}
