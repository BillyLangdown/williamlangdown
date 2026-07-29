'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { PhoneOff, MailX, MessageCircle, Star, SignpostBig, Palette } from 'lucide-react'

// Illustrates branding as a concept (a paint palette, standing for visual
// identity), not a specific business: a single, instantly-readable icon.
function BrandMismatchIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Palette size={100} strokeWidth={1.4} className="text-white/90" />
    </div>
  )
}

// Illustrates a visitor who never calls or emails: Lucide's own
// phone-off and mail-x icons, side by side.
function NoCallNoEmailIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-8">
      <PhoneOff size={64} strokeWidth={1.5} className="text-white/90" />
      <MailX size={64} strokeWidth={1.5} className="text-white/90" />
    </div>
  )
}

// Illustrates unclear copy directly: a plain chat bubble icon with a real
// text "?" overlaid (Lucide's built-in question-mark glyph rendered
// wrong at this size, so this uses an actual font character instead).
function UnclearAnswerIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <MessageCircle size={82} strokeWidth={1.4} className="text-white/90" />
      <span
        className="absolute font-extrabold text-white/90"
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
      {/* Phone outline, centered in the frame (viewBox center is 48,36) */}
      <rect x="31" y="6" width="34" height="60" rx="5" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
      <rect x="44" y="9.5" width="8" height="1.6" rx="0.8" fill="rgba(255,255,255,0.5)" />

      {/* Cramped, overlapping content, recentered within the phone (was
          off-center relative to the phone itself, not just the frame) */}
      <rect x="37" y="15" width="20" height="9" rx="1" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" transform="rotate(-5 47 19.5)" />
      <rect x="40" y="20" width="20" height="9" rx="1" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" transform="rotate(4 50 24.5)" />
      <path d="M36 36h24M36 40h17M36 44h22" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="37" y="49" width="13" height="6" rx="1" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
      <rect x="46" y="51" width="14" height="6" rx="1" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" transform="rotate(-5 53 54)" />
    </svg>
  )
}

// Illustrates missing trust signals directly: a literal 1-out-of-5 star
// rating, nothing else. All white (per the "one light colour" rule for
// this set) — the rating still reads via solid-fill vs. faint-outline,
// not via a different hue.
function NoTrustSignalsIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-0.5">
      <Star size={32} className="text-white fill-white" />
      {[0, 1, 2, 3].map(i => (
        <Star key={i} size={32} className="text-white/30" />
      ))}
    </div>
  )
}

// Illustrates a literal signpost: Lucide's bolder signpost-big icon.
function NoClearNextStepIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignpostBig size={110} strokeWidth={1.4} className="text-white/90" />
    </div>
  )
}

const problems = [
  {
    title: 'Not built for phones',
    description: 'Most visits are mobile, and yours breaks there.',
    visual: <SlowCrampedMobileIllustration />,
  },
  {
    title: 'Nothing that builds trust',
    description: 'No reviews and no face behind your business.',
    visual: <NoTrustSignalsIllustration />,
  },
  {
    title: 'Branding doesn’t match',
    description: 'It sets the wrong expectation before you speak.',
    visual: <BrandMismatchIllustration />,
  },
  {
    title: 'Visitors don’t reach out',
    description: 'They browse, then leave without reaching out.',
    visual: <NoCallNoEmailIllustration />,
  },
  {
    title: 'Nobody can tell what you do',
    description: "If they can't tell what you offer, they leave.",
    visual: <UnclearAnswerIllustration />,
  },
  {
    title: 'No clear next step',
    description: "If the next step isn't obvious, people leave.",
    visual: <NoClearNextStepIllustration />,
  },
]

const DWELL = 7000
const SWIPE_THRESHOLD_PX = 40

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

type CoverflowSize = {
  diameter: number
  offsetStep: number
  zStep: number
  containerHeight: number
  iconBox: { w: number; h: number }
  badgeTopClass: string
  titleClass: string
  descClass: string
  textMaxWidth: number
  textPad: string
}

const MOBILE_SIZE: CoverflowSize = {
  diameter: 300,
  offsetStep: 200,
  zStep: 140,
  containerHeight: 340,
  iconBox: { w: 180, h: 125 },
  badgeTopClass: 'top-9',
  titleClass: 'text-base font-bold text-white mb-2 leading-snug',
  descClass: 'text-sm text-white/60 leading-relaxed',
  textMaxWidth: 220,
  textPad: 'px-5',
}

const DESKTOP_SIZE: CoverflowSize = {
  diameter: 420,
  offsetStep: 300,
  zStep: 190,
  containerHeight: 440,
  iconBox: { w: 190, h: 133 },
  badgeTopClass: 'top-11',
  titleClass: 'text-xl font-heading font-bold text-white mb-3 leading-snug',
  descClass: 'text-base text-white/60 leading-relaxed',
  textMaxWidth: 300,
  textPad: 'px-8',
}

function Coverflow({
  size,
  displayIndex,
  onSelect,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  dragDeltaPx,
  dragging,
}: {
  size: CoverflowSize
  displayIndex: number
  onSelect: (i: number) => void
  onPointerDown: (e: React.PointerEvent) => void
  onPointerMove: (e: React.PointerEvent) => void
  onPointerUp: (e: React.PointerEvent) => void
  dragDeltaPx: number
  dragging: boolean
}) {
  return (
    <div
      className="relative overflow-hidden touch-pan-y"
      style={{ height: `${size.containerHeight}px`, perspective: '1600px' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {problems.map((problem, i) => {
        const offset = ringOffset(i, displayIndex, problems.length)
        const abs = Math.abs(offset)
        const isActive = offset === 0
        const isNeighbor = abs === 1
        return (
          <div
            key={problem.title}
            onClick={() => !isActive && isNeighbor && onSelect(i)}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/10 shadow-sm flex flex-col items-center justify-center text-center overflow-hidden select-none"
            style={{
              width: size.diameter,
              height: size.diameter,
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)',
              backgroundSize: '22px 22px',
              backgroundColor: '#080e1c',
              transform: `translate(-50%, -50%) translateX(${offset * size.offsetStep + dragDeltaPx}px) translateZ(${-abs * size.zStep}px) rotateY(${-offset * 34}deg) scale(${1 - Math.min(abs, 2) * 0.16})`,
              opacity: isActive ? 1 : isNeighbor ? 0.45 : 0,
              zIndex: isActive ? 10 : 5,
              cursor: isActive ? 'default' : isNeighbor ? 'pointer' : 'default',
              pointerEvents: isNeighbor || isActive ? 'auto' : 'none',
              transition: dragging
                ? 'none'
                : 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease',
            }}
          >
            <span className={`absolute ${size.badgeTopClass} left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-widest text-white/40`}>
              {i + 1} / {problems.length}
            </span>

            <div className="mb-3" style={{ width: size.iconBox.w, height: size.iconBox.h }}>
              {problem.visual}
            </div>
            <div className={size.textPad} style={{ maxWidth: `${size.textMaxWidth}px` }}>
              <h3 className={size.titleClass}>{problem.title}</h3>
              <p className={size.descClass}>{problem.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ProgressControls({
  displayIndex,
  onSelect,
  onPrev,
  onNext,
  paused,
}: {
  displayIndex: number
  onSelect: (i: number) => void
  onPrev: () => void
  onNext: () => void
  paused: boolean
}) {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <button
        type="button"
        onClick={onPrev}
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
            onClick={() => onSelect(i)}
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
                  animation: `problemsFill ${DWELL}ms linear forwards`,
                  animationPlayState: paused ? 'paused' : 'running',
                }}
              />
            )}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next problem"
        className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
      >
        <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
          <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

export default function ProblemsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dragDeltaPx, setDragDeltaPx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragState = useRef({ startX: 0, dragging: false, pointerId: -1 })

  const goTo = useCallback((idx: number) => setDisplayIndex(idx), [])
  const goNext = useCallback(() => setDisplayIndex((i) => (i + 1) % problems.length), [])
  const goPrev = useCallback(() => setDisplayIndex((i) => (i - 1 + problems.length) % problems.length), [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, dragging: true, pointerId: e.pointerId }
    setDragging(true)
    setPaused(true)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.dragging || e.pointerId !== dragState.current.pointerId) return
    setDragDeltaPx(e.clientX - dragState.current.startX)
  }, [])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.dragging || e.pointerId !== dragState.current.pointerId) return
    const delta = e.clientX - dragState.current.startX
    dragState.current.dragging = false
    setDragging(false)
    setDragDeltaPx(0)
    setPaused(false)
    if (delta > SWIPE_THRESHOLD_PX) goPrev()
    else if (delta < -SWIPE_THRESHOLD_PX) goNext()
  }, [goNext, goPrev])

  // Only auto-advance while the section is actually on screen, so the
  // carousel isn't several cards in by the time someone scrolls to it.
  useEffect(() => {
    if (paused || !inView) return
    const id = setTimeout(() => {
      setDisplayIndex((i) => (i + 1) % problems.length)
    }, DWELL)
    return () => clearTimeout(id)
  }, [displayIndex, paused, inView])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-subtle py-16 md:py-24 px-6" style={{ scrollSnapAlign: 'start' }}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10 md:mb-12 pl-4 border-l-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Common mistakes</h2>
          <p className="text-sm text-secondary mt-1">Have you made any of these?</p>
        </div>

        {/* Mobile coverflow: full-bleed to the actual screen edge, breaking
            out of the section's own px-6 padding, so the side cards genuinely
            go off screen instead of clipping at the padded content edge. */}
        <div className="md:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
            <Coverflow size={MOBILE_SIZE} displayIndex={displayIndex} onSelect={goTo} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} dragDeltaPx={dragDeltaPx} dragging={dragging} />
          </div>
          <ProgressControls displayIndex={displayIndex} onSelect={goTo} onPrev={goPrev} onNext={goNext} paused={paused || !inView} />
        </div>

        {/* Desktop coverflow */}
        <div className="hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Coverflow size={DESKTOP_SIZE} displayIndex={displayIndex} onSelect={goTo} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} dragDeltaPx={dragDeltaPx} dragging={dragging} />
          <ProgressControls displayIndex={displayIndex} onSelect={goTo} onPrev={goPrev} onNext={goNext} paused={paused || !inView} />
        </div>

        <div className="mt-10 border-t border-border-light pt-8 flex justify-center md:justify-end">
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

      <style jsx global>{`
        @keyframes problemsFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
