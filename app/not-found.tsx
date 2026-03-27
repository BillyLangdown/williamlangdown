import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">
            404
          </p>
          <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Page not found.
          </h1>
          <p className="text-base text-gray-500 mb-10">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block border border-gray-900 text-gray-900 text-sm px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
