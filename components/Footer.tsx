import Link from 'next/link'

const exploreLinks = [
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Working Together' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-nav-theme="dark" className="relative z-10 py-14 px-6" style={{ background: '#10233F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
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
              Somerset, UK — working nationwide
            </p>
          </div>

          <nav className="flex flex-col gap-3">
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
