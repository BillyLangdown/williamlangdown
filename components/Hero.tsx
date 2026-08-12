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
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const sectionRectRef = useRef<DOMRect | null>(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
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
      className="relative overflow-hidden"
      style={dotGrid}
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

      <div
        className="relative z-[2] max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              <span className="inline-block w-6 h-px bg-accent" aria-hidden />
              Brand, digital &amp; technology practice
            </p>

            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl mb-7">
              Built for who you were.
              <br />
              <span className="italic text-secondary">Not who you&apos;ve become.</span>
            </h1>

            <p className="text-base md:text-lg text-secondary leading-relaxed max-w-xl mb-9">
              Established businesses tend to outgrow their brand, website and internal systems
              faster than they replace them. I work through the research and strategy first, then
              build the identity, digital experience or software to carry it.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm px-6 py-3 rounded-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Discuss a project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-ink text-sm px-6 py-3 rounded-sm transition-colors"
                style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(15,23,42,0.1)' }}
              >
                View selected work
              </Link>
            </div>
          </div>

          {/* Founder credential + small portrait crop: supporting element,
              not the visual focal point of the hero */}
          <div className="flex items-center gap-4 shrink-0">
            <div
              className="relative shrink-0 overflow-hidden shadow-lg hidden sm:block"
              style={{ width: '84px', aspectRatio: '801 / 1022', borderRadius: '3px 20px 3px 20px', borderLeft: '3px solid #2563EB' }}
            >
              <Image
                src="/images/portrait.png"
                alt="William Langdown"
                fill
                className="object-cover object-top"
                sizes="84px"
              />
            </div>
            <div className="max-w-[220px]">
              <p className="text-sm font-semibold text-ink leading-snug">William Langdown</p>
              <p className="text-xs text-tertiary leading-relaxed mt-1">
                BA (Hons) Advertising &amp; Branding, and a working software developer. Somerset-based, working UK-wide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
