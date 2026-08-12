import Link from 'next/link'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Working Together' },
  { href: '/contact', label: 'Contact' },
]

const specialismLinks = [
  { href: '/services/growth-websites', label: 'Websites, Somerset & South West' },
  { href: '/services/custom-software', label: 'Custom Software' },
  { href: '/services/booking-systems-automation', label: 'Booking & Automation' },
  { href: '/blog', label: 'Writing' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-14 px-6" style={{ background: '#10233F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
          {/* Logo + contact details */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-base font-heading font-bold tracking-tight text-bone">
              William Langdown
            </Link>
            <a
              href="mailto:hello@williamlangdown.com"
              className="text-sm transition-colors"
              style={{ color: 'rgba(246,243,238,0.55)' }}
            >
              hello@williamlangdown.com
            </a>
            <a
              href="tel:+447446856927"
              className="text-sm transition-colors"
              style={{ color: 'rgba(246,243,238,0.55)' }}
            >
              +44 7446 856927
            </a>
            <p className="text-sm" style={{ color: 'rgba(246,243,238,0.55)' }}>
              Somerset-based, working with UK businesses nationwide
            </p>
          </div>

          {/* Nav links, grouped into two labeled columns */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:flex sm:gap-x-16">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(246,243,238,0.35)' }}>Explore</p>
              {exploreLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors hover:text-bone"
                  style={{ color: 'rgba(246,243,238,0.6)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(246,243,238,0.35)' }}>More</p>
              {specialismLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors hover:text-bone"
                  style={{ color: 'rgba(246,243,238,0.6)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(246,243,238,0.12)' }}>
          <p className="text-xs" style={{ color: 'rgba(246,243,238,0.4)' }}>
            &copy; {year} William Langdown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
