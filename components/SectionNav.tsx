'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Desktop-only nav, used in place of the fixed header on the homepage:
 * sits inline at the top of the section right after the Hero instead of
 * floating over it. Mobile keeps the fixed header in Nav.tsx. Styled to
 * match Nav.tsx's desktop bar: centred, indexed, bold uppercase.
 */
export default function SectionNav() {
  const pathname = usePathname()

  return (
    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center max-w-6xl mx-auto px-6 h-16 border-b border-border-light">
      <div aria-hidden />
      <nav className="flex items-center justify-self-center gap-11">
        {links.map(({ href, label }, i) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className="inline-flex items-baseline gap-1.5 text-xs font-extrabold uppercase tracking-wide transition-colors"
              style={{ color: active ? '#C1613D' : '#8C887D' }}
            >
              <span className="text-[9px] font-semibold tabular-nums" style={{ color: '#C1613D' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="justify-self-end">
        <Link
          href="/contact"
          className="inline-block text-sm px-5 py-2.5 rounded-sm text-bone bg-ink transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  )
}
