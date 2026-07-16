'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

const problems = [
  {
    title: 'The branding doesn’t reflect the real thing',
    description: "If your site looks cheaper than your actual business, it sets the wrong expectation. People judge quality by design before they ever speak to you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 2a8 8 0 100 16c1.1 0 2-.9 2-2 0-.45-.18-.86-.47-1.16-.3-.3-.53-.68-.53-1.14 0-.83.67-1.5 1.5-1.5H14a4 4 0 004-4c0-3.31-3.58-6.2-8-6.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="6.3" cy="9.2" r="1.1" fill="currentColor" />
        <circle cx="8.3" cy="5.8" r="1.1" fill="currentColor" />
        <circle cx="12.2" cy="6.2" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
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
    title: 'Not built to be seen on a phone',
    description: "Over 60% of visits to small business sites now happen on a phone. If yours is slow or breaks on mobile, you lose visitors before they see what you offer.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="5" y="1" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 6L8 11h4l-2.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
]

const DESKTOP_DWELL = 7000

// Shortest signed distance from `active` to `i` around a ring of `total`
// cards, e.g. for 6 cards, going from index 5 to index 0 is +1 (forward
// one), not -5. This is what makes the coverflow spin the short way round
// instead of sweeping backwards through every card.
function ringOffset(i: number, active: number, total: number) {
  let diff = i - active
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export default function ProblemsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [deskPaused, setDeskPaused] = useState(false)

  const onCardScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const step = el.offsetWidth - 48
    setActiveIndex(Math.min(Math.round(el.scrollLeft / step), problems.length - 1))
  }

  const goToDesk = useCallback((idx: number) => setDisplayIndex(idx), [])
  const goNext = useCallback(() => setDisplayIndex((i) => (i + 1) % problems.length), [])
  const goPrev = useCallback(() => setDisplayIndex((i) => (i - 1 + problems.length) % problems.length), [])

  // Only auto-advance while the section is actually on screen, so the
  // carousel isn't several cards in by the time someone scrolls to it.
  useEffect(() => {
    if (deskPaused || !inView) return
    const id = setTimeout(() => {
      setDisplayIndex((i) => (i + 1) % problems.length)
    }, DESKTOP_DWELL)
    return () => clearTimeout(id)
  }, [displayIndex, deskPaused, inView])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
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
                <div className="bg-white border border-border-light rounded-sm p-6 relative overflow-hidden shadow-sm" style={{ height: '234px' }}>

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
            Sound familiar? Get in touch
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>

      {/* ── DESKTOP: 3D coverflow, neighbouring cards peek in from off screen ── */}
      <div className="hidden md:block py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-12 pl-4 border-l-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Common problems</h2>
            <p className="text-sm text-secondary mt-1">Which of these is you?</p>
          </div>

          <div
            onMouseEnter={() => setDeskPaused(true)}
            onMouseLeave={() => setDeskPaused(false)}
            className="relative overflow-hidden"
            style={{ height: '320px', perspective: '1600px' }}
          >
            {problems.map((problem, i) => {
              const offset = ringOffset(i, displayIndex, problems.length)
              const abs = Math.abs(offset)
              if (abs > 1) return null
              const isActive = offset === 0
              return (
                <div
                  key={problem.title}
                  onClick={() => !isActive && goToDesk(i)}
                  className="absolute left-1/2 top-1/2 w-[440px] rounded-sm border border-border-light bg-white shadow-sm p-9 flex items-start gap-6"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * 330}px) translateZ(${-abs * 170}px) rotateY(${-offset * 34}deg) scale(${1 - abs * 0.16})`,
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? 'none' : 'blur(3px)',
                    zIndex: isActive ? 10 : 5,
                    cursor: isActive ? 'default' : 'pointer',
                    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease, filter 0.6s ease',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                  >
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                      {i + 1} / {problems.length}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-ink mt-2 mb-3 leading-snug">{problem.title}</h3>
                    <p className="text-base text-secondary leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Prev/next arrows + progress dots, each dot fills over the dwell period */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous problem"
              className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {problems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToDesk(i)}
                  aria-label={`Show problem ${i + 1}`}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: i === displayIndex ? '40px' : '8px',
                    backgroundColor: 'rgba(37,99,235,0.15)',
                  }}
                >
                  {i === displayIndex && (
                    <span
                      key={displayIndex}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        backgroundColor: '#2563EB',
                        animation: `problemsFill ${DESKTOP_DWELL}ms linear forwards`,
                        animationPlayState: deskPaused || !inView ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next problem"
              className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-10 border-t border-border-light pt-8 flex justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium border border-ink/20 text-ink px-5 py-2.5 rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              Sound familiar? Get in touch
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes problemsFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

    </section>
  )
}
