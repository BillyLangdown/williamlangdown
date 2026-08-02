import Link from 'next/link'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/growth-websites', label: 'Growth Websites' },
  { href: '/starter', label: 'Starter Websites' },
  { href: '/services/custom-software', label: 'Custom Software' },
  { href: '/services/booking-systems-automation', label: 'Booking & Automation' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-light py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
          {/* Logo + contact details */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-base font-heading font-bold tracking-tight">
              William Langdown
            </Link>
            <a
              href="mailto:hello@williamlangdown.com"
              className="text-sm text-tertiary hover:text-ink transition-colors"
            >
              hello@williamlangdown.com
            </a>
            <a
              href="tel:+447446856927"
              className="text-sm text-tertiary hover:text-ink transition-colors"
            >
              +44 7446 856927
            </a>
            <p className="text-sm text-tertiary">
              Based in Taunton, Somerset
            </p>
          </div>

          {/* Nav links, grouped into two labeled columns */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:flex sm:gap-x-16">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-tertiary/70 mb-1">Explore</p>
              {exploreLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-tertiary hover:text-ink transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-tertiary/70 mb-1">Services</p>
              {serviceLinks.map(({ href, label }) => (
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
