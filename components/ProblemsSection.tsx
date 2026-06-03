'use client'

import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    title: 'People visit but never get in touch',
    description: "They find your site, look around, and leave. Something is putting them off. It is usually fixable once you know what it is.",
  },
  {
    title: 'Nothing to make them trust you',
    description: "No reviews, a thin contact page, no face behind the business. People notice these gaps even when they cannot name them, and they move on.",
  },
  {
    title: 'The writing does not explain what you do',
    description: "If someone lands on your site and cannot tell in ten seconds what you offer and who it is for, they will not stick around to find out.",
  },
  {
    title: 'Hard to know where to go next',
    description: "If the next step is not obvious, most people will not look for it. They will just leave. The layout should do that work for them.",
  },
  {
    title: 'Looks like every other website',
    description: "If your site could belong to any business in your space, it is harder to stand out. People form an opinion on design before they read anything.",
  },
  {
    title: 'Slow or broken on mobile',
    description: "Slow load times, layouts that break on phones, images that do not appear. Most of your visitors are on mobile. These things cost you enquiries.",
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
          minHeight: '100svh',
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#e8edf3',
        }}
      >
        <div className="mb-6 px-6 text-center">
          <div className="inline-block px-4 py-2.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.88)' }}>
            <h2 className="text-3xl font-heading font-bold text-ink">Common problems</h2>
            <p className="text-sm text-secondary mt-1">Which of these is you?</p>
          </div>
        </div>

        {/* Textured scroll track */}
        <div
          className="relative"
          style={{
            background: 'radial-gradient(circle, rgba(15,23,42,0.1) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#e8edf3',
          }}
        >
          {/* Left/right fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #e8edf3, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #e8edf3, transparent)' }}
          />

          {/* Cards */}
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
                <div
                  className="bg-white border border-border-light rounded-sm p-6 relative overflow-hidden shadow-sm"
                  style={{ minHeight: '195px' }}
                >
                  <span
                    className="absolute -bottom-3 -right-1 font-heading font-bold leading-none select-none pointer-events-none"
                    style={{ fontSize: '100px', color: '#f1f5f9' }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                      {i + 1} / {problems.length}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2 leading-snug relative">{problem.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed relative">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-1.5 mt-4 px-6">
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 4v14M5 13l6 6 6-6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ── DESKTOP: grid ── */}
      <div className="hidden md:flex md:flex-col md:justify-center py-20 px-6" style={{ minHeight: '100svh' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
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
                <h3 className="text-base font-semibold text-ink mb-2">{problem.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
