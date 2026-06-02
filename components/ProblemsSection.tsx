'use client'

import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    title: 'People visit but never get in touch',
    description: "They find your site, look around, and leave. Something in the journey is putting them off. It is usually fixable once you know what it is.",
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

const CARD_SCROLL = 160
const TOTAL_SCROLL = (problems.length - 1) * CARD_SCROLL

export default function ProblemsSection() {
  const outerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [cardProgress, setCardProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  // Mobile: scroll-driven card progress
  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return
      const rect = outerRef.current.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top)
      setCardProgress(Math.min(problems.length - 1, scrolled / CARD_SCROLL))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Desktop: intersection observer fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (listRef.current) observer.observe(listRef.current)
    return () => observer.disconnect()
  }, [])

  const activeIndex = Math.floor(cardProgress)
  const exitProgress = cardProgress - activeIndex

  const getCardStyle = (i: number): React.CSSProperties => {
    if (i < activeIndex) {
      return { transform: 'translateX(-115%) rotate(-6deg)', zIndex: 0, pointerEvents: 'none', opacity: 0 }
    }
    if (i === activeIndex && i < problems.length - 1) {
      return {
        transform: `translateX(${-exitProgress * 115}%) rotate(${-exitProgress * 6}deg)`,
        zIndex: problems.length - i,
        opacity: 1,
      }
    }
    const d = i - activeIndex
    return {
      transform: `translateY(${d * 9}px) scale(${1 - d * 0.025})`,
      zIndex: problems.length - i,
      opacity: d > 2 ? 0 : 1,
    }
  }

  return (
    <section className="bg-subtle">

      {/* ── MOBILE: stacked cards peeling off on scroll ── */}
      <div ref={outerRef} className="md:hidden" style={{ height: `calc(100svh + ${TOTAL_SCROLL}px)` }}>
        <div className="sticky top-0 overflow-hidden flex flex-col pt-24 pb-8 px-6" style={{ height: '100svh' }}>

          <h2 className="text-3xl font-heading font-bold text-ink mb-6">What I see most</h2>

          {/* Card stack — fixed height so cards don't stretch to fill viewport */}
          <div className="relative" style={{ height: '280px' }}>
            {problems.map((problem, i) => (
              <div
                key={problem.title}
                className="absolute inset-0"
                style={getCardStyle(i)}
              >
                <div className="bg-white border border-border-light rounded-sm p-6 h-full flex flex-col relative overflow-hidden shadow-sm">
                  {/* Ghost number */}
                  <span
                    className="absolute -bottom-3 -right-1 font-heading font-bold leading-none select-none pointer-events-none"
                    style={{ fontSize: '100px', color: '#f1f5f9' }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  {/* Counter + accent dot */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                      {String(i + 1).padStart(2, '0')} / {String(problems.length).padStart(2, '0')}
                    </span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2 leading-snug relative">{problem.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed relative">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex gap-1.5 mt-6 shrink-0">
            {problems.map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '24px' : '6px',
                  backgroundColor: i < activeIndex ? '#94A3B8' : i === activeIndex ? '#2563EB' : '#E2E8F0',
                }}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ── DESKTOP: existing grid ── */}
      <div className="hidden md:block py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What I see most</h2>
          </div>
          <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2">
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
