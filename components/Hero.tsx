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
  const [ripples, setRipples] = useState<Ripple[]>([])
  const rippleId = useRef(0)
  const lastRipple = useRef(0)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDesktopVisible(true))

    const onScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE))
      setScrollProgress(p)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
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

  // Text is visible first; portrait enters from left as user scrolls
  const portraitX = (scrollProgress - 1) * 100
  const textX = scrollProgress * 100

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface lg:overflow-hidden"
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
          Outer div is 100svh + SCROLL_RANGE tall so there's real scroll space.
          Inner div is sticky so the content stays pinned at the top while scroll
          drives the horizontal animation. Works forward and backward infinitely. */}
      <div className="lg:hidden" style={{ height: `calc(100svh + ${SCROLL_RANGE}px)` }}>
        <div className="sticky top-0 overflow-hidden" style={{ height: '100svh' }}>

          {/* Portrait + badge — enters from left as user scrolls */}
          <div
            className="absolute inset-0 bg-surface z-10 flex flex-col items-center justify-center"
            style={{
              padding: '20px',
              paddingTop: '84px',
              transform: `translateX(${portraitX}%)`,
            }}
          >
            <div
              className="relative w-full overflow-hidden rounded-[4px] shadow-lg"
              style={{ maxWidth: '260px', aspectRatio: '801 / 1022' }}
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
            <div className="mt-5 inline-flex items-center gap-2.5 px-3.5 py-2 bg-white border border-border-light rounded-sm">
              <div className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
              </div>
              <p className="text-xs text-secondary">Currently taking on new projects</p>
            </div>
          </div>

          {/* Text panel — visible on load, exits right as portrait enters */}
          <div
            className="absolute inset-0 bg-surface flex flex-col justify-center px-6"
            style={{
              paddingTop: '80px',
              transform: `translateX(${textX}%)`,
            }}
          >
            <h1 className="text-3xl font-heading font-extrabold leading-[1.08] tracking-tight text-ink mb-4">
              Websites that turn visitors into customers
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              I design and build websites for small businesses. If yours isn&apos;t getting enquiries, I&apos;ll work out why and fix it.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://calendly.com/billy-langdown01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-accent text-white text-sm px-6 py-3.5 rounded-sm font-medium"
              >
                Book a free call
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/case-studies"
                className="inline-flex justify-center items-center gap-2 border border-border-light text-ink text-sm px-6 py-3.5 rounded-sm"
              >
                See my work
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── DESKTOP HERO ── */}
      <div className="hidden lg:block pt-8 relative max-w-6xl mx-auto px-6">
        <div
          className="absolute right-6 top-3 bottom-0 overflow-hidden"
          style={{ aspectRatio: '801 / 1022' }}
        >
          <Image src="/images/portrait.png" alt="William Langdown" fill className="object-cover" priority sizes="35vw" />
          <div
            className="absolute inset-y-0 left-0 w-[3px] z-20 bg-accent/40 pointer-events-none"
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 96%)' }}
          />
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
              Websites that turn visitors into customers
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-8">
              I build fast, clean and effective websites. <br/> If yours isn&apos;t getting enquiries, I&apos;ll work out why and fix it.
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
              <Link href="/case-studies" className="inline-flex items-center gap-2 border border-border-light text-ink text-sm px-6 py-3 rounded-sm hover:bg-subtle transition-colors">
                See my work
              </Link>
            </div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-white border border-border-light rounded-sm">
              <div className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
              </div>
              <p className="text-xs text-secondary">Currently taking on new projects</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
