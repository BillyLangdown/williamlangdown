'use client'

import { useState } from 'react'
import Link from 'next/link'

const items = [
  {
    href: '/starter',
    visual: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M9 1.5L2.5 9h4.5L7 14.5 13.5 7H9V1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Starter Websites, from £495',
  },
  {
    href: '/case-studies/building-ventilation-services-ltd',
    visual: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M1.5 13L6 7.5 9 10l5.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 3.5H14.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Made a client's site 75% faster on mobile",
  },
  {
    href: '/services/custom-software',
    visual: (
      <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M9 1.5v2.1M9 14.4v2.1M16.5 9h-2.1M3.6 9H1.5M14.1 3.9l-1.5 1.5M5.4 12.6l-1.5 1.5M14.1 14.1l-1.5-1.5M5.4 5.4L3.9 3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="3.4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Custom Software & Booking Systems',
  },
  {
    href: '/services/website-audits',
    visual: (
      <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 12.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Website Audits, from £145',
  },
]

// Repeated several times per half so a single half is comfortably wider
// than any realistic desktop viewport. With just the two items once, a
// single half was narrower than the screen on wide monitors, so the loop
// ran out of content and appeared to stop instead of scrolling seamlessly.
const REPEAT = 6

function TickerHalf() {
  return (
    <div className="flex items-center shrink-0">
      {Array.from({ length: REPEAT }).map((_, r) =>
        items.map((item, i) => (
          <span key={`${r}-${i}`} className="flex items-center gap-2 px-5">
            <span className="text-accent shrink-0 flex items-center">{item.visual}</span>
            <Link
              href={item.href}
              className="text-sm font-medium text-ink hover:text-accent transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
            <span className="h-1 w-1 rounded-full bg-accent/40 shrink-0 ml-3" />
          </span>
        ))
      )}
    </div>
  )
}

export default function PromoTicker() {
  // Computed synchronously on first render (not via a post-mount setState)
  // so applying it never re-triggers/restarts the CSS animation.
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  return (
    <div
      className="relative w-full border-t border-b border-border-light"
      style={{
        scrollSnapAlign: 'start',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F8FAFC',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-6">
        <span className="hidden sm:block shrink-0 text-[11px] font-semibold uppercase tracking-widest text-tertiary py-4 pr-6 border-r border-border-light">
          Also available
        </span>
        <div className="relative flex-1 overflow-hidden py-4">
          <div
            className="flex"
            style={{
              width: 'max-content',
              animation: reduceMotion ? 'none' : 'promo-ticker-scroll 135s linear infinite',
            }}
          >
            <TickerHalf />
            <TickerHalf />
          </div>
        </div>
      </div>
    </div>
  )
}
