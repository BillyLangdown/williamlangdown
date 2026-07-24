'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/starter/preview-2', label: 'Home' },
  { href: '/starter/preview-2/about', label: 'About' },
  { href: '/starter/preview-2/contact', label: 'Contact' },
]

export default function PreviewNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="px-6 py-6 transition-shadow duration-300"
      style={{ background: '#FBF6EF', boxShadow: scrolled ? '0 4px 20px rgba(58,50,42,0.06)' : 'none' }}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link
          href="/starter/preview-2"
          style={{ fontFamily: 'var(--font-willow-display)' }}
          className="text-xl sm:text-2xl tracking-tight"
        >
          Willow &amp; Bloom
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#3A322A' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} style={{ background: '#3A322A' }} />
          <span className={`block w-5 h-px transition-all duration-200 ${open ? 'opacity-0' : ''}`} style={{ background: '#3A322A' }} />
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} style={{ background: '#3A322A' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="sm:hidden overflow-hidden"
        style={{
          maxHeight: open ? '240px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.22s ease',
        }}
      >
        <nav className="max-w-4xl mx-auto pt-5 flex flex-col">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b text-base"
              style={{ color: '#3A322A', borderColor: 'rgba(58,50,42,0.12)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
