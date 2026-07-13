'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/starter/preview-1', label: 'Home' },
  { href: '/starter/preview-1/about', label: 'About' },
  { href: '/starter/preview-1/contact', label: 'Contact' },
]

export default function PreviewNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/starter/preview-1" className="text-lg font-extrabold uppercase tracking-widest">
          Forge<span style={{ color: '#FF5A1F' }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
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
        <nav className="max-w-5xl mx-auto px-6 pb-5 flex flex-col">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-t text-xs font-bold uppercase tracking-widest text-white/60"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
