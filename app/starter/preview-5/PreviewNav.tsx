'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/starter/preview-5', label: 'Home' },
  { href: '/starter/preview-5/about', label: 'About' },
  { href: '/starter/preview-5/contact', label: 'Contact' },
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
      className={`border-b transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : ''}`}
      style={{
        borderColor: scrolled ? 'rgba(148,163,255,0.1)' : 'transparent',
        background: scrolled ? 'rgba(5,6,10,0.75)' : '#05060A',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/starter/preview-5" className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M4 18L12 4l8 14" stroke="#05060A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-lg font-semibold tracking-tight text-white">
            Axium
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-mono text-slate-400 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/starter/preview-5/contact"
            className="text-sm font-medium px-4 py-2 rounded-md transition-all hover:scale-[1.03] active:scale-95"
            style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)', color: '#05060A' }}
          >
            Start free trial
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[5px] p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px bg-white transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
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
        <nav className="max-w-6xl mx-auto px-6 pb-5 flex flex-col">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-t text-sm font-mono text-slate-400"
              style={{ borderColor: 'rgba(148,163,255,0.1)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
