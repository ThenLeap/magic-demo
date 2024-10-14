import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}
