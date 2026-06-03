'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
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
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px bg-gray-900 transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-gray-900 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-gray-900 transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: open ? '480px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.22s ease',
        }}
      >
        <div
          className="border-t"
          style={{
            borderBottom: '2px solid rgba(15,23,42,0.12)',
            boxShadow: '0 8px 24px rgba(15,23,42,0.08)',
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <nav className="px-6 pt-2 pb-6 flex flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-border-light text-base font-medium transition-colors ${
                  pathname === href ? 'text-ink' : 'text-secondary hover:text-ink'
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2563EB' }} />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex justify-center items-center gap-2 text-white text-sm px-6 py-3.5 rounded-sm font-medium"
              style={{ background: '#2563EB' }}
            >
              Let&apos;s talk
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
