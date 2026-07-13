'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/starter/preview-4', label: 'Work' },
  { href: '/starter/preview-4/about', label: 'About' },
  { href: '/starter/preview-4/contact', label: 'Contact' },
]

export default function PreviewNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="px-6 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/starter/preview-4"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1B19' }}
          className="text-xl sm:text-2xl font-semibold tracking-tight"
        >
          Maren Voss
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-xs uppercase tracking-[0.15em] hover:opacity-60 transition-opacity" style={{ color: '#6B6560' }}>
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
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} style={{ background: '#1C1B19' }} />
          <span className={`block w-5 h-px transition-all duration-200 ${open ? 'opacity-0' : ''}`} style={{ background: '#1C1B19' }} />
          <span className={`block w-5 h-px transition-all duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} style={{ background: '#1C1B19' }} />
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
        <nav className="max-w-5xl mx-auto pt-5 flex flex-col">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b text-sm uppercase tracking-[0.15em]"
              style={{ color: '#1C1B19', borderColor: '#E5E2DC' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
