'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_1px_24px_rgba(0,0,0,0.07)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-base font-heading font-bold tracking-tight shrink-0">
          William Langdown
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors relative pb-1 ${
                pathname === href ? 'text-ink' : 'text-tertiary hover:text-ink'
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-accent text-white text-sm px-5 py-2.5 rounded-sm hover:bg-accent/90 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-5 h-px bg-gray-900 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-gray-900 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-gray-900 transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border-light px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-tertiary hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block bg-accent text-white text-sm px-5 py-3 rounded-sm text-center"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  )
}
