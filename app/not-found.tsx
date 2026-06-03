import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        className="pt-40 pb-24 px-6 min-h-[70vh]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-accent uppercase mb-6">
            404
          </p>

          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-6 pl-4 border-l-4 border-accent">
            Page not found.
          </h1>

          <p className="text-base text-secondary leading-relaxed mb-12 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white text-sm px-7 py-3.5 rounded-sm transition-colors"
            style={{ background: '#2563EB' }}
          >
            Back to home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
