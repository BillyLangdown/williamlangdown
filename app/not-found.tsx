import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-6">
            404
          </p>

          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6">
            Page not found.
          </h1>

          <p className="text-lg text-secondary leading-relaxed mb-12">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-ink text-ink text-sm px-7 py-3.5 rounded-none hover:bg-ink hover:text-white transition-all duration-200"
          >
            Back to home
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="mt-px"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
