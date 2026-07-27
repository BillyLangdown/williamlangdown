'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import KeystoneLogo from './KeystoneLogo'

const navLinks = [
  { href: '/starter/preview-6', label: 'Home' },
  { href: '/starter/preview-6/about', label: 'About' },
  { href: '/starter/preview-6/contact', label: 'Contact' },
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
      className="border-b bg-white transition-shadow duration-300"
      style={{ borderColor: '#E4E9EE', boxShadow: scrolled ? '0 4px 20px rgba(19,42,61,0.06)' : 'none' }}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/starter/preview-6" className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 flex items-center justify-center rounded-sm"
            style={{ background: '#132A3D', color: '#F2A93B' }}
          >
            <KeystoneLogo size={19} />
          </span>
          <span style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-xl font-bold uppercase tracking-wide" >
            Keystone
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide transition-colors"
              style={{ color: '#3F4C58' }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:01170000000"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-sm transition-transform hover:scale-[1.03] active:scale-95"
            style={{ background: '#F2A93B', color: '#132A3D' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            0117 000 0000
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} style={{ background: '#132A3D' }} />
          <span className={`block w-5 h-px transition-all duration-200 ${open ? 'opacity-0' : ''}`} style={{ background: '#132A3D' }} />
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} style={{ background: '#132A3D' }} />
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
        <nav className="max-w-5xl mx-auto px-6 pb-5 flex flex-col">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-t text-sm font-semibold uppercase tracking-wide"
              style={{ color: '#3F4C58', borderColor: '#E4E9EE' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
