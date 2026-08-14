'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/case-studies', label: 'Work' },
  { href: '/services', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const HEADER_HEIGHT = 64

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'
  // Bar is always transparent; only the text/icon colour adapts to
  // whatever section is currently sitting behind it.
  const [overDark, setOverDark] = useState(isHome)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Watches every section tagged data-nav-theme and flips overDark to
  // match whichever one currently sits behind the fixed bar, so nav text
  // stays readable over both dark and light sections without a background.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme]'))
    if (sections.length === 0) return

    const active = new Set<HTMLElement>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) active.add(el)
          else active.delete(el)
        })
        const current = [...sections].reverse().find((el) => active.has(el))
        if (current) setOverDark(current.dataset.navTheme === 'dark')
      },
      { rootMargin: `-${HEADER_HEIGHT}px 0px -${Math.max(window.innerHeight - HEADER_HEIGHT - 1, 0)}px 0px`, threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  const fg = overDark ? '#F6F3EE' : '#10233F'
  const fgDim = overDark ? 'rgba(246,243,238,0.7)' : '#8C887D'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isHome ? 'md:hidden' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9 mr-9">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors relative pb-1"
                style={{ color: active ? fg : fgDim }}
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
            style={overDark ? { background: '#F6F3EE', color: '#10233F' } : { background: '#10233F', color: '#F6F3EE' }}
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
            style={{ background: open ? '#10233F' : fg, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{ background: open ? '#10233F' : fg, opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-all duration-200 origin-center"
            style={{ background: open ? '#10233F' : fg, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
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
