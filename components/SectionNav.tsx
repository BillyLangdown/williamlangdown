import Link from 'next/link'

const links = [
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Desktop-only nav, used in place of the fixed header on the homepage:
 * sits inline at the top of the section right after the Hero instead of
 * floating over it. Mobile keeps the fixed header in Nav.tsx.
 */
export default function SectionNav() {
  return (
    <div className="hidden md:flex items-center justify-end gap-9 max-w-6xl mx-auto px-6 h-16 border-b border-border-light">
      <nav className="flex items-center gap-9">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="text-sm text-tertiary hover:text-ink transition-colors">
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/contact"
        className="inline-block text-sm px-5 py-2.5 rounded-sm text-bone bg-ink transition-colors"
      >
        Get in touch
      </Link>
    </div>
  )
}
