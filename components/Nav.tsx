'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === '/'
  // Only the homepage has a full-bleed dark hero behind the nav, so only
  // there does the bar start transparent with light text.
  const transparent = isHome && !scrolled && !open

  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: transparent ? 'transparent' : 'rgba(246,243,238,0.95)',
        backdropFilter: transparent ? 'none' : 'blur(8px)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(8px)',
        boxShadow: transparent ? 'none' : '0 1px 24px rgba(16,35,63,0.07)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src={transparent ? '/images/Williamlangdown-logo-white.png' : '/images/Williamlangdown-logo-transparent.png'}
            alt="William Langdown"
            height={34}
            width={161}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors relative pb-1"
                style={{ color: active ? (transparent ? '#F6F3EE' : '#10233F') : (transparent ? 'rgba(246,243,238,0.7)' : '#8C887D') }}
              >
                {label}
                {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta rounded-full" />}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-block text-sm px-5 py-2.5 rounded-sm transition-colors"
            style={
              transparent
                ? { background: '#F6F3EE', color: '#10233F' }
                : { background: '#10233F', color: '#F6F3EE' }
            }
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: transparent ? '#F6F3EE' : '#10233F', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{ background: transparent ? '#F6F3EE' : '#10233F', opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: transparent ? '#F6F3EE' : '#10233F', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
          />
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
        <div className="border-t border-border-light" style={{ background: '#F6F3EE' }}>
          <nav className="px-6 pt-2 pb-6 flex flex-col">
            {links.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-border-light text-base font-medium transition-colors ${
                    active ? 'text-ink' : 'text-secondary hover:text-ink'
                  }`}
                >
                  {label}
                  {active && <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-terracotta" />}
                </Link>
              )
            })}

            <div className="pt-4 flex flex-col gap-1">
              <a href="tel:+447446856927" className="text-sm font-semibold text-ink">
                +44 7446 856927
              </a>
              <p className="text-xs text-tertiary">Somerset-based, working UK-wide</p>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex justify-center items-center gap-2 text-bone text-sm px-6 py-3.5 rounded-sm font-medium bg-ink"
            >
              Get in touch
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
