'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

export default function Hero() {
  const [desktopVisible, setDesktopVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const sectionRectRef = useRef<DOMRect | null>(null)

  // Portrait drifts within its frame as the Hero scrolls past, classic
  // parallax: the photo moves slower/differently than the page itself.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 24])

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDesktopVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  // Rect is read once (on mount/resize) instead of on every mousemove,
  // since getBoundingClientRect() forces a synchronous layout.
  useEffect(() => {
    const measure = () => {
      sectionRectRef.current = sectionRef.current?.getBoundingClientRect() ?? null
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const onHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current
    const rect = sectionRectRef.current
    if (!el || !rect) return

    // Cheap spotlight-on-the-dot-grid effect: just moves a CSS custom
    // property, no JS animation loop or blend-mode compositing involved.
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
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
      <div
        className="relative flex lg:hidden flex-col justify-center px-6 overflow-hidden"
        style={{ height: '100svh', paddingTop: '110px', paddingBottom: '64px', ...dotGrid }}
      >
        <div className="mb-9 flex justify-center">
          <div className="relative" style={{ width: '220px' }}>
            <div
              className="relative w-full overflow-hidden shadow-lg"
              style={{ aspectRatio: '801 / 1022', borderRadius: '3px 32px 3px 32px', borderLeft: '3px solid #2563EB' }}
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
        </div>

        <h1 className="text-3xl font-heading font-extrabold leading-[1.08] tracking-tight text-ink mb-4 text-center">
         I build websites that win more work.
        </h1>
        <p className="text-sm leading-relaxed mb-8 text-center " style={{ color: '#0f172a' }}>
          Websites, software and automation for contractors and independent businesses.<br />If yours isn&apos;t performing, I&apos;ll work out why and fix it.
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
              I build websites that win more work.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-8">
              Websites, software and automation for contractors and independent businesses.<br />If yours isn&apos;t performing, I&apos;ll work out why and fix it.
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
              Websites · Custom Software · Automation
            </div>
          </div>
        </div>

        {/* Portrait: flex sibling, vertically centered by parent items-center */}
        <div className="shrink-0 w-[36%]" style={{ aspectRatio: '801 / 1022' }}>
          <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '4px 56px 4px 56px' }}>
            <motion.div className="absolute inset-x-0" style={{ top: '-5%', height: '110%', y: portraitY }}>
              <Image src="/images/portrait.png" alt="William Langdown" fill className="object-cover" priority sizes="35vw" />
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-[3px] z-20 bg-accent pointer-events-none" />
          </div>
        </div>
      </div>

    </section>
  )
}
