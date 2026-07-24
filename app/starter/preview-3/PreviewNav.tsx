'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/starter/preview-3', label: 'Home' },
  { href: '/starter/preview-3/about', label: 'About' },
  { href: '/starter/preview-3/contact', label: 'Contact' },
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
      className="border-b bg-white transition-all duration-300"
      style={{ borderColor: '#E7E9EE', boxShadow: scrolled ? '0 1px 0 rgba(28,35,51,0.04), 0 8px 24px rgba(28,35,51,0.04)' : 'none' }}
    >
      <div
        className="max-w-4xl mx-auto px-6 flex items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? '68px' : '96px' }}
      >
        <Link href="/starter/preview-3" className="text-base font-semibold tracking-tight" style={{ color: '#1C2333' }}>
          Hartley &amp; Co
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-10">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-xs uppercase tracking-[0.15em] transition-colors"
              style={{ color: '#5B6478' }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{ background: '#D9B96C' }}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} style={{ background: '#1C2333' }} />
          <span className={`block w-5 h-px transition-all duration-200 ${open ? 'opacity-0' : ''}`} style={{ background: '#1C2333' }} />
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} style={{ background: '#1C2333' }} />
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
        <nav className="max-w-4xl mx-auto px-6 pb-5 flex flex-col">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-t text-xs uppercase tracking-[0.15em]"
              style={{ color: '#5B6478', borderColor: '#E7E9EE' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
