'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    title: 'People visit but never get in touch',
    description: "They find your site, look around, and leave. Something is putting them off. It is usually fixable once you know what it is.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        {/* Door rectangle */}
        <rect x="2" y="2" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
        {/* Floor line */}
        <path d="M1 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Handle */}
        <circle cx="10" cy="9.5" r="0.9" fill="currentColor" />
        {/* Arrow exiting right */}
        <path d="M14 9.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 7l2 2.5-2 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Nothing to make them trust you',
    description: "No reviews, a thin contact page, no face behind the business. People notice these gaps even when they cannot name them, and they move on.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 2L3 5v6c0 4 3 6 7 7 4-1 7-3 7-7V5l-7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 8.5c0-1.1.9-2 2-2s2 .9 2 2c0 1-.7 1.4-1.2 1.7-.3.2-.8.5-.8 1.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="14" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'The writing does not explain what you do',
    description: "If someone lands on your site and cannot tell in ten seconds what you offer and who it is for, they will not stick around to find out.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="2" width="11" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 7h6M6 10h4M6 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 5l2-2M17 5l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Hard to know where to go next',
    description: "If the next step is not obvious, most people will not look for it. They will just leave. The layout should do that work for them.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 16v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 9C8.5 7.5 6.5 6 5 5M10 9c1.5-1.5 3.5-3 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="5" cy="4" r="1.8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="4" r="1.8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="17.2" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Looks like every other website',
    description: "If your site could belong to any business in your space, it is harder to stand out. People form an opinion on design before they read anything.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="1" y="8" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="5" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="2" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Slow or broken on mobile',
    description: "Slow load times, layouts that break on phones, images that do not appear. Most of your visitors are on mobile. These things cost you enquiries.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="5" y="1" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 6L8 11h4l-2.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ProblemsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  const onCardScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const step = el.offsetWidth - 48
    setActiveIndex(Math.min(Math.round(el.scrollLeft / step), problems.length - 1))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-subtle" style={{ scrollSnapAlign: 'start' }}>

      {/* ── MOBILE: horizontal snap cards on dot-grid canvas ── */}
      <div
        className="md:hidden relative flex flex-col justify-center py-10"
        style={{
          minHeight: '88svh',
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#e8edf3',
        }}
      >
        <div className="mb-6 px-6 text-center">
          <div className="w-10 h-[2px] mx-auto mb-4" style={{ backgroundColor: '#2563EB' }} />
          <h2 className="text-3xl font-heading font-bold text-ink">Common problems</h2>
          <p className="text-sm text-secondary mt-1">Which of these is you?</p>
        </div>

        {/* Scroll track */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #e8edf3, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #e8edf3, transparent)' }} />

          <div
            ref={scrollRef}
            onScroll={onCardScroll}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '24px',
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '28px',
              paddingBottom: '28px',
              gap: '16px',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
          >
            {problems.map((problem, i) => (
              <div
                key={problem.title}
                style={{ flexShrink: 0, width: 'calc(100vw - 64px)', scrollSnapAlign: 'start' }}
              >
                <div className="bg-white border border-border-light rounded-sm p-6 relative overflow-hidden shadow-sm" style={{ minHeight: '200px' }}>

                  {/* Top row: icon + counter */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-9 h-9 rounded-sm flex items-center justify-center"
                      style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                    >
                      {problem.icon}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                      {i + 1} / {problems.length}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-ink mb-2 leading-snug">{problem.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots + CTA */}
        <div className="flex items-center justify-between mt-4 px-6">
          <div className="flex gap-1.5">
            {problems.map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '24px' : '6px',
                  backgroundColor: i === activeIndex ? '#2563EB' : '#ffffff',
                }}
              />
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-accent transition-colors"
          >
            Get in touch
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>

      {/* ── DESKTOP: grid ── */}
      <div className="hidden md:flex md:flex-col md:justify-center py-20 px-6" style={{ minHeight: '100svh' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 pl-4 border-l-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Common problems</h2>
            <p className="text-sm text-secondary mt-1">Which of these is you?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {problems.map((problem, i) => (
              <div
                key={problem.title}
                className={`border-t border-border-light py-8 ${i % 2 === 0 ? 'md:pr-14' : 'md:pl-14 md:border-l md:border-border-light'}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '0.5s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  {problem.icon}
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{problem.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border-light pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium border border-ink/20 text-ink px-5 py-2.5 rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}
