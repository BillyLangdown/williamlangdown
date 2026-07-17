'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

export default function Hero() {
  const [desktopVisible, setDesktopVisible] = useState(false)
  const [activePanel, setActivePanel] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const heroScrollRef = useRef<HTMLDivElement>(null)
  const sectionRectRef = useRef<DOMRect | null>(null)
  const portraitRectRef = useRef<DOMRect | null>(null)
  const tiltTargetRef = useRef({ px: 0, py: 0 })
  const tiltCurrentRef = useRef({ px: 0, py: 0 })

  const onHeroScroll = useCallback(() => {
    const el = heroScrollRef.current
    if (!el) return
    setActivePanel(el.scrollLeft > el.offsetWidth / 2 ? 1 : 0)
  }, [])

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDesktopVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  // Rects are read once (on mount/resize) instead of on every mousemove,
  // since getBoundingClientRect() forces a synchronous layout.
  useEffect(() => {
    const measure = () => {
      sectionRectRef.current = sectionRef.current?.getBoundingClientRect() ?? null
      portraitRectRef.current = portraitRef.current?.getBoundingClientRect() ?? null
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // The tilt lerps toward its target every animation frame instead of
  // snapping straight to the mousemove position with a CSS transition —
  // a transition that keeps getting retargeted mid-flight on a fast-firing
  // event is what made the old version feel glitchy and laggy.
  useEffect(() => {
    let raf: number
    const TILT_EASE = 0.12
    const tick = () => {
      const target = tiltTargetRef.current
      const current = tiltCurrentRef.current
      current.px += (target.px - current.px) * TILT_EASE
      current.py += (target.py - current.py) * TILT_EASE
      if (portraitRef.current) {
        portraitRef.current.style.transform =
          `perspective(1400px) rotateY(${current.px * 2}deg) rotateX(${current.py * -2}deg)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current
    const rect = sectionRectRef.current
    if (!el || !rect) return

    // Cheap spotlight-on-the-dot-grid effect: just moves a CSS custom
    // property, no JS animation loop or blend-mode compositing involved.
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)

    // Very subtle tilt on the portrait toward the cursor. Only the target
    // is updated here; the rAF loop above does the actual smoothing.
    const prect = portraitRectRef.current
    if (prect) {
      tiltTargetRef.current.px = (e.clientX - prect.left - prect.width / 2) / prect.width
      tiltTargetRef.current.py = (e.clientY - prect.top - prect.height / 2) / prect.height
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative lg:overflow-hidden"
      style={{ scrollSnapAlign: 'start', ...dotGrid }}
      onMouseMove={onHeroMouseMove}
    >
      {/* Cursor spotlight over the dot grid, desktop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.9) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          WebkitMaskImage: 'radial-gradient(circle 200px at var(--mx, -999px) var(--my, -999px), black, transparent 70%)',
          maskImage: 'radial-gradient(circle 200px at var(--mx, -999px) var(--my, -999px), black, transparent 70%)',
        }}
      />

      {/* ── MOBILE HERO ── */}
      <div className="relative flex lg:hidden flex-col" style={{ height: '100svh' }}>

        {/* Panel dots + swipe arrow: top centre */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-none">
          <div
            className="rounded-full transition-all duration-300"
            style={{ height: '6px', width: activePanel === 0 ? '20px' : '6px', backgroundColor: activePanel === 0 ? '#2563EB' : 'rgba(15,23,42,0.2)' }}
          />
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3, transition: 'opacity 0.3s' }}>
            {activePanel === 0
              ? <path d="M1 7h12M7 1l6 6-6 6" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              : <path d="M13 7H1M7 1L1 7l6 6" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            }
          </svg>
          <div
            className="rounded-full transition-all duration-300"
            style={{ height: '6px', width: activePanel === 1 ? '20px' : '6px', backgroundColor: activePanel === 1 ? '#2563EB' : 'rgba(15,23,42,0.2)' }}
          />

        </div>

        <div
          ref={heroScrollRef}
          onScroll={onHeroScroll}
          style={{
            flex: 1,
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
          } as React.CSSProperties}
        >

        {/* Panel 1: text */}
        <div
          className="relative flex flex-col justify-center px-6"
          style={{
            flexShrink: 0,
            width: '100vw',
            scrollSnapAlign: 'start',
            paddingTop: '72px',
            paddingBottom: '72px',
            ...dotGrid,
          }}
        >
          <div className="mb-5 flex justify-center">
            <Image src="/images/laptop.png" alt="" width={160} height={160} />
          </div>

          <h1 className="text-3xl font-heading font-extrabold leading-[1.08] tracking-tight text-ink mb-4 text-center">
            I build websites that turn visitors into customers
          </h1>
          <p className="text-sm leading-relaxed mb-8 text-center " style={{ color: '#0f172a' }}>
            Fast, beautiful and effective software solutions.<br />If yours isn&apos;t performing, I&apos;ll work out why and fix it.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 bg-accent text-white text-sm px-6 py-3.5 rounded-sm font-medium"
            >
              Let&apos;s talk
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center items-center gap-2 text-ink text-sm px-6 py-3.5 rounded-sm"
              style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(15,23,42,0.1)' }}
            >
              My services
            </Link>
          </div>


          {/* Down arrow: absolute bottom centre */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(15,23,42,0.35)' }}>Learn more</span>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path d="M11 4v14M5 13l6 6 6-6" stroke="rgba(15,23,42,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Panel 2: portrait + intro */}
        <div
          className="relative flex flex-col items-center justify-center px-6"
          style={{
            flexShrink: 0,
            width: '100vw',
            scrollSnapAlign: 'start',
            paddingTop: '84px',
            paddingBottom: '80px',
            ...dotGrid,
          }}
        >

          {/* Portrait */}
          <div className="relative" style={{ maxWidth: '220px', width: '100%' }}>
            <div
              className="relative w-full overflow-hidden rounded-[4px] shadow-lg"
              style={{ aspectRatio: '801 / 1022', borderLeft: '3px solid #2563EB' }}
            >
              <Image
                src="/images/portrait.png"
                alt="William Langdown, web designer and UX consultant"
                fill
                className="object-cover object-top"
                priority
                sizes="220px"
              />
            </div>
          </div>

          {/* Friendly intro */}
          <div className="mt-6 text-center" style={{ maxWidth: '260px' }}>
            <p className="text-sm text-left font-semibold text-ink mb-1.5">Hi, I&apos;m William.</p>
            <p className="text-sm text-left leading-relaxed" style={{ color: '#374151' }}>
            I&apos;m a developer and IT consultant based in the UK, helping businesses improve and build their digital presence. From UX and websites to custom systems and ongoing support. Handled directly by me from start to finish.
            </p>
          </div>

          {/* Down arrow: absolute bottom centre */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(15,23,42,0.35)' }}>Continue</span>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path d="M11 4v14M5 13l6 6 6-6" stroke="rgba(15,23,42,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        </div>
      </div>

      {/* ── DESKTOP HERO ── */}
      <div
        className="relative z-[2] hidden lg:flex items-center max-w-6xl mx-auto px-6 pt-8"
        style={{ minHeight: 'min(82vh, 820px)' }}
      >
        <div
          className="relative z-10 py-24 flex-1"
          style={{
            opacity: desktopVisible ? 1 : 0,
            transform: desktopVisible ? 'none' : 'translateY(22px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <div className="max-w-[90%]">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold leading-[1.06] tracking-tight text-ink mb-5">
              I build websites that turn visitors into customers
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-8">
              Fast, beautiful and effective.<br />If yours isn&apos;t getting enquiries, I&apos;ll work out why and fix it.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm px-6 py-3 rounded-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-ink text-sm px-6 py-3 rounded-sm transition-colors"
                style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(15,23,42,0.1)' }}
              >
                My services
              </Link>
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(37,99,235,0.07)', color: '#2563EB' }}
            >
              Solo freelancer · No agency · Start to finish
            </div>
          </div>
        </div>

        {/* Portrait: flex sibling, vertically centered by parent items-center */}
        <div className="shrink-0 w-[36%]" style={{ aspectRatio: '801 / 1022', perspective: '800px' }}>
          <div
            ref={portraitRef}
            className="relative w-full h-full overflow-hidden rounded-tr-[3.5rem] rounded-br-[3.5rem]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image src="/images/portrait.png" alt="William Langdown" fill className="object-cover" priority sizes="35vw" />
            <div className="absolute inset-y-0 left-0 w-[3px] z-20 bg-accent pointer-events-none" />
          </div>
        </div>
      </div>

    </section>
  )
}
