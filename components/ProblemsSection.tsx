'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { PhoneOff, MailX, MessageCircle, Star, SignpostBig } from 'lucide-react'

// Illustrates a website's branding not matching the real-world business:
// a browser mockup (blue, the site) beside a shopfront mockup (grey, the
// actual brand) with a red "does not match" mark between them.
function BrandMismatchIllustration() {
  return (
    <svg viewBox="0 0 96 72" fill="none" className="w-full h-full" aria-hidden>
      <path d="M2 46h92" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

      {/* Website mockup */}
      <rect x="2" y="8" width="40" height="32" rx="3" fill="white" stroke="#2563EB" strokeWidth="1.5" />
      <path d="M2 15h40" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="7" cy="11.5" r="1" fill="#2563EB" />
      <circle cx="11" cy="11.5" r="1" fill="#2563EB" />
      <circle cx="15" cy="11.5" r="1" fill="#2563EB" />
      <path d="M18 26l4-6 4 6-4 4-4-4z" fill="#2563EB" />
      <rect x="10" y="33" width="24" height="3" rx="1.5" fill="#2563EB" fillOpacity="0.35" />

      {/* Shopfront mockup: peaked roof, window, door, hanging sign */}
      <path d="M52 20l21-14 21 14z" fill="#94A3B8" fillOpacity="0.25" stroke="#64748B" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="54" y="20" width="38" height="26" fill="white" stroke="#64748B" strokeWidth="1.5" />
      <rect x="58" y="25" width="9" height="9" fill="white" stroke="#64748B" strokeWidth="1.3" />
      <path d="M58 29.5h9M62.5 25v9" stroke="#64748B" strokeWidth="1" />
      <rect x="69" y="34" width="9" height="12" fill="#64748B" fillOpacity="0.15" stroke="#64748B" strokeWidth="1.5" />
      <circle cx="76" cy="40" r="0.8" fill="#64748B" />
      {/* Hanging sign: a scrawled mark, deliberately unlike the crisp website logo */}
      <rect x="63" y="12" width="20" height="7" rx="1" fill="white" stroke="#64748B" strokeWidth="1.2" />
      <path d="M66 15.5c1-1.6 2-1.6 3 0s2 1.6 3 0 2-1.6 3 0 2 1.6 3 0" stroke="#64748B" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Mismatch marker */}
      <circle cx="48" cy="24" r="8" fill="white" stroke="#E11D48" strokeWidth="1.5" />
      <text x="48" y="27.5" fontSize="10" fontWeight="700" fill="#E11D48" textAnchor="middle">&#8800;</text>
    </svg>
  )
}

// Illustrates a visitor who never calls or emails: Lucide's own
// phone-off and mail-x icons, side by side.
function NoCallNoEmailIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-8">
      <PhoneOff size={64} strokeWidth={1.5} className="text-slate-500" />
      <MailX size={64} strokeWidth={1.5} className="text-slate-500" />
    </div>
  )
}

// Illustrates unclear copy directly: a plain chat bubble icon with a real
// text "?" overlaid (Lucide's built-in question-mark glyph rendered
// wrong at this size, so this uses an actual font character instead).
function UnclearAnswerIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <MessageCircle size={110} strokeWidth={1.4} className="text-rose-600" />
      <span
        className="absolute font-extrabold text-rose-600"
        style={{ fontSize: 42, top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        ?
      </span>
    </div>
  )
}

// Illustrates a cramped, disordered phone layout: overlapping content
// blocks and a spinner standing in for slow load times.
function SlowCrampedMobileIllustration() {
  return (
    <svg viewBox="0 0 96 72" fill="none" className="w-full h-full" aria-hidden>
      <path d="M2 68h92" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

      {/* Phone outline */}
      <rect x="26" y="4" width="34" height="60" rx="5" fill="white" stroke="#64748B" strokeWidth="1.5" />
      <rect x="39" y="7.5" width="8" height="1.6" rx="0.8" fill="#64748B" fillOpacity="0.5" />

      {/* Cramped, overlapping content */}
      <rect x="30" y="14" width="20" height="9" rx="1" fill="#2563EB" fillOpacity="0.12" stroke="#2563EB" strokeWidth="1.3" transform="rotate(-5 40 18.5)" />
      <rect x="33" y="19" width="20" height="9" rx="1" fill="#E11D48" fillOpacity="0.1" stroke="#E11D48" strokeWidth="1.3" transform="rotate(4 43 23.5)" />
      <path d="M29 35h24M29 39h17M29 43h22" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
      <rect x="30" y="48" width="13" height="6" rx="1" fill="#64748B" fillOpacity="0.1" stroke="#64748B" strokeWidth="1.3" />
      <rect x="39" y="50" width="14" height="6" rx="1" fill="#64748B" fillOpacity="0.1" stroke="#64748B" strokeWidth="1.3" transform="rotate(-5 46 53)" />

      {/* Slow-loading spinner */}
      <g transform="translate(76 16)">
        <circle r="8" fill="white" stroke="#E11D48" strokeOpacity="0.25" strokeWidth="2" />
        <path d="M0 -8a8 8 0 016 13" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}

// Illustrates missing trust signals directly: a literal 1-out-of-5 star
// rating, nothing else.
function NoTrustSignalsIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-0.5">
      <Star size={32} className="text-amber-500 fill-amber-500" />
      {[0, 1, 2, 3].map(i => (
        <Star key={i} size={32} className="text-slate-300" />
      ))}
    </div>
  )
}

// Illustrates a literal signpost: Lucide's bolder signpost-big icon.
function NoClearNextStepIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignpostBig size={110} strokeWidth={1.4} className="text-slate-500" />
    </div>
  )
}

const problems = [
  {
    title: 'The branding doesn’t reflect the real thing',
    description: "If your site looks cheaper than your actual business, it sets the wrong expectation. People judge quality by design before they ever speak to you.",
    visual: <BrandMismatchIllustration />,
  },
  {
    title: 'People visit but never get in touch',
    description: "They find your site, look around, and leave. Something is putting them off. It is usually fixable once you know what it is.",
    visual: <NoCallNoEmailIllustration />,
  },
  {
    title: 'The writing does not explain what you do',
    description: "If someone lands on your site and cannot tell in ten seconds what you offer and who it is for, they will not stick around to find out.",
    visual: <UnclearAnswerIllustration />,
  },
  {
    title: 'Not built to be seen on a phone',
    description: "Over 60% of visits to small business sites now happen on a phone. If yours is slow or breaks on mobile, you lose visitors before they see what you offer.",
    visual: <SlowCrampedMobileIllustration />,
  },
  {
    title: 'Nothing to make them trust you',
    description: "No reviews, a thin contact page, no face behind the business. People notice these gaps even when they cannot name them, and they move on.",
    visual: <NoTrustSignalsIllustration />,
  },
  {
    title: 'Hard to know where to go next',
    description: "If the next step is not obvious, most people will not look for it. They will just leave. The layout should do that work for them.",
    visual: <NoClearNextStepIllustration />,
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
                style={{ flexShrink: 0, width: 'calc(100vw - 48px)', scrollSnapAlign: 'start' }}
              >
                <div className="bg-white border border-border-light rounded-sm p-6 relative overflow-hidden shadow-sm" style={{ height: '350px' }}>

                  <span className="absolute top-5 right-6 text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                    {i + 1} / {problems.length}
                  </span>

                  <div className="mx-auto mb-4" style={{ width: 180, height: 125 }}>
                    {problem.visual}
                  </div>

                  <h3 className="text-base font-bold text-ink mb-2 leading-snug text-center">{problem.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed text-center">{problem.description}</p>
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
            style={{ height: '440px', perspective: '1600px' }}
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
                  className="absolute left-1/2 top-1/2 w-[560px] rounded-sm border border-border-light bg-white shadow-sm p-9 flex flex-col items-center text-center"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * 390}px) translateZ(${-abs * 190}px) rotateY(${-offset * 34}deg) scale(${1 - abs * 0.16})`,
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? 'none' : 'blur(3px)',
                    zIndex: isActive ? 10 : 5,
                    cursor: isActive ? 'default' : 'pointer',
                    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease, filter 0.6s ease',
                  }}
                >
                  <span className="absolute top-6 right-7 text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                    {i + 1} / {problems.length}
                  </span>

                  <div className="mb-4" style={{ width: 250, height: 175 }}>
                    {problem.visual}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-3 leading-snug">{problem.title}</h3>
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
