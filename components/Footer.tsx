import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-light py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
          {/* Logo + email */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-base font-heading font-bold tracking-tight">
              William Langdown
            </Link>
            <a
              href="mailto:hello@williamlangdown.co"
              className="text-sm text-tertiary hover:text-ink transition-colors"
            >
              hello@williamlangdown.com
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-tertiary hover:text-ink transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border-light pt-8">
          <p className="text-xs text-tertiary">
            &copy; {year} William Langdown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
