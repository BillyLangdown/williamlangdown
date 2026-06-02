'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

interface Ripple { id: number; x: number; y: number }

// How many pixels of scroll drive the full animation
const SCROLL_RANGE = 280

export default function Hero() {
  const [desktopVisible, setDesktopVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const heroScrollRef = useRef<HTMLDivElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const rippleId = useRef(0)
  const lastRipple = useRef(0)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDesktopVisible(true))

    const el = heroScrollRef.current
    const onScroll = () => {
      if (!el) return
      const p = Math.min(1, Math.max(0, el.scrollTop / SCROLL_RANGE))
      setScrollProgress(p)
    }
    el?.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      el?.removeEventListener('scroll', onScroll)
    }
  }, [])

  const spawnRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now()
    if (now - lastRipple.current < 80) return
    lastRipple.current = now
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const id = ++rippleId.current
    setRipples(prev => [...prev.slice(-12), { id, x: e.clientX - rect.left, y: e.clientY - rect.top }])
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1600)
  }, [])

  // Text is visible first; portrait enters from right as user scrolls, text exits left
  const portraitX = (1 - scrollProgress) * 100
  const textX = -scrollProgress * 100

  return (
    <section
      ref={sectionRef}
      className="relative lg:overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F8FAFC',
      }}
      onMouseMove={spawnRipple}
    >
      {ripples.map(r => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full border border-accent/20"
          style={{ left: r.x, top: r.y, animation: 'ripple-expand 1.6s cubic-bezier(0.2,0.8,0.4,1) forwards' }}
        />
      ))}

      {/* ── MOBILE HERO ──
          Scroll container snaps between the two panel states.
          scrollTop drives the horizontal slide animation. */}
      <div
        ref={heroScrollRef}
        className="lg:hidden"
        style={{
          height: '100svh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollbarWidth: 'none',
        }}
      >
        {/* snap point 1: text panel (scrollTop = 0) */}
        <div style={{ height: 0, scrollSnapAlign: 'start' }} />
        <div className="sticky top-0 overflow-hidden" style={{ height: '100svh' }}>

          {/* Portrait + badge — enters from right as user scrolls */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
            style={{
              padding: '20px',
              paddingTop: '84px',
              transform: `translateX(${portraitX}%)`,
              backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
              backgroundSize: '22px 22px',
              backgroundColor: '#F8FAFC',
            }}
          >
            {/* Wrapper without overflow-hidden so the Me arrow can sit outside the image */}
            <div className="relative" style={{ maxWidth: '260px', width: '100%' }}>

              <div
                className="relative w-full overflow-hidden rounded-[4px] shadow-lg"
                style={{ aspectRatio: '801 / 1022', borderLeft: '3px solid #2563EB' }}
              >
                <Image
                  src="/images/portrait.png"
                  alt="William Langdown"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="260px"
                />
              </div>

              {/* Me arrow annotation */}
              <div className="absolute top-3 right-3 flex flex-col items-end pointer-events-none select-none z-20">
                <span className="font-sans text-[17px] font-bold italic leading-none mb-1" style={{ color: '#0f172a' }}>Me</span>
                <Image
                  src="/images/Arrow 1.png"
                  alt=""
                  width={44}
                  height={62}
                  unoptimized
                />
              </div>
            </div>

            <p className="mt-10 font-sans text-base font-medium " style={{ color: '#0f172a' }}>Just me, no agency, start to finish.</p>

            {/* Down arrow — bottom centre of portrait panel */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 4v14M5 13l6 6 6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Text panel — visible on load, exits left as portrait enters */}
          <div
            className="absolute inset-0 flex flex-col justify-center px-6"
            style={{
              paddingTop: '40px',
              transform: `translateX(${textX}%)`,
              backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
              backgroundSize: '22px 22px',
              backgroundColor: '#F8FAFC',
            }}
          >
            <div className="mb-5 flex justify-center">
              <Image
                src="/images/laptop.png"
                alt=""
                width={160}
                height={160}
                unoptimized
              />
            </div>

            <h1 className="text-3xl font-heading font-extrabold leading-[1.08] tracking-tight text-ink mb-4 text-center">
  I build websites that turn visitors into customers
</h1>
            <p className="text-sm  leading-relaxed mb-8 text-center"  style={{ color: '#0f172a' }}>
            Fast, beautiful and effective. <br/> If yours isn&apos;t getting enquiries, I&apos;ll work out why and fix it.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://calendly.com/billy-langdown01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-accent text-white text-sm px-6 py-3.5 rounded-sm font-medium"
              >
               Lets talk!
               
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex justify-center items-center gap-2 border border-border-light text-ink text-sm px-6 py-3.5 rounded-sm"
              >
                My services
            
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-6 pointer-events-none">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11h14M13 5l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>


        </div>
        {/* snap point 2: portrait panel — end-aligns at scrollTop = SCROLL_RANGE */}
        <div style={{ height: `${SCROLL_RANGE}px`, scrollSnapAlign: 'end' }} />
      </div>

      {/* ── DESKTOP HERO ── */}
      <div className="hidden lg:block pt-8 relative max-w-6xl mx-auto px-6">
        {/* Portrait — outer div has no overflow-hidden so annotation can sit outside */}
        <div
          className="absolute right-6 top-8"
          style={{ aspectRatio: '801 / 1022', width: '36%' }}
        >
          {/* Me annotation — left of portrait, arrow flipped to point right */}
          
          {/* Image clipping wrapper */}
          <div className="relative w-full h-full overflow-hidden">
            <Image src="/images/portrait.png" alt="William Langdown" fill className="object-cover" priority sizes="35vw" />
            <div className="absolute inset-y-0 left-0 w-[3px] z-20 bg-accent pointer-events-none" />
          </div>
        </div>
        <div
          className="relative z-10 py-24"
          style={{
            opacity: desktopVisible ? 1 : 0,
            transform: desktopVisible ? 'none' : 'translateY(22px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          <div className="lg:max-w-[55%]">
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold leading-[1.06] tracking-tight text-ink mb-5">
            I build websites that turn visitors into customers
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-8">
              Fast, beautiful and effective. <br/> If yours isn&apos;t getting enquiries, I&apos;ll work out why and fix it.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://calendly.com/billy-langdown01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm px-6 py-3 rounded-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Book a free call
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border border-border-light text-ink text-sm px-6 py-3 rounded-sm hover:bg-subtle transition-colors"
              >
                My services
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <p className="font-sans text-sm font-medium italic" style={{ color: '#1e3a8a' }}>Just me, no agency, start to finish.</p>
          </div>
        </div>
      </div>

    </section>
  )
}
