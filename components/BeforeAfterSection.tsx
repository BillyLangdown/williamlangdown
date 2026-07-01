'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

function useCountUp(from: number, to: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    if (!active) return
    const range = to - from
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(from + range * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setVal(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, from, to, duration])
  return val
}

interface Props { caseStudy: CaseStudy | null }

const SLIDE_COUNT = 2
const AUTO_INTERVAL = 8000

export default function BeforeAfterSection({ caseStudy }: Props) {
  const sectionRef    = useRef<HTMLElement>(null)
  const trackWrapRef  = useRef<HTMLDivElement>(null)
  const timerRef      = useRef<ReturnType<typeof setInterval> | null>(null)
  const [visible, setVisible]         = useState(false)
  const [statsActive, setStatsActive] = useState(false)
  const [parallaxY, setParallaxY]     = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [hovered, setHovered]         = useState(false)

  // Slide 1 stats
  const conversionUp = useCountUp(0, 75, statsActive)
  const bounceDown   = useCountUp(0, 21, statsActive, 1600)

  // Slide 2 stats — count up from the original score to the new one
  const mobileScore  = useCountUp(56, 98,  statsActive, 1600)
  const desktopScore = useCountUp(69, 100, statsActive, 1900)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const wh = window.innerHeight
      setParallaxY(((wh / 2) - (rect.top + rect.height / 2)) * 0.28)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setStatsActive(true), 250)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const goToSlide = useCallback((idx: number) => {
    setActiveSlide((idx + SLIDE_COUNT) % SLIDE_COUNT)
  }, [])

  // Auto-advance — pauses on hover
  useEffect(() => {
    if (hovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      goToSlide(activeSlide + 1)
    }, AUTO_INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [hovered, activeSlide, goToSlide])

  const clientName = caseStudy?.client ?? 'The Garden Tablecloth Co'
  const slug = caseStudy?.slug?.current ?? '#'
  const hasImages = !!(caseStudy?.beforeImage && caseStudy?.afterImage)

  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(16px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  const slides = [
    {
      client: clientName,
      subtitle: 'Two months post-redesign',
      href: slug === '#' ? '/case-studies' : `/case-studies/${slug}`,
      slider: hasImages ? (
        <BeforeAfterSlider
          beforeSrc={urlFor(caseStudy!.beforeImage!).width(1400).url()}
          afterSrc={urlFor(caseStudy!.afterImage!).width(1400).url()}
          beforeAlt={`${clientName} before`}
          afterAlt={`${clientName} after`}
        />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[16/9] bg-white/[0.03] border border-white/10 rounded-sm flex items-center justify-center">
            <span className="text-sm text-white/15">Before</span>
          </div>
          <div className="aspect-[16/9] bg-white/[0.06] border border-white/10 rounded-sm flex items-center justify-center">
            <span className="text-sm text-white/30">After</span>
          </div>
        </div>
      ),
      stats: [
        { value: `+${conversionUp}%`, label: 'more visitors got in touch' },
        { value: `-${bounceDown}%`,   label: 'fewer people left immediately' },
      ],
    },
    {
      client: 'Building Ventilation Services Ltd',
      subtitle: 'Google PageSpeed scores after redesign',
      href: '/case-studies/building-ventilation-services-ltd',
      slider: (
        <BeforeAfterSlider
          beforeSrc="/images/bvs-service-before.png"
          afterSrc="/images/bvs-service-after-2.png"
          beforeAlt="BVS website before redesign"
          afterAlt="BVS website after redesign"
        />
      ),
      stats: [
        { value: `${mobileScore}`, suffix: '/100', label: 'mobile speed (was 56/100)' },
        { value: `${desktopScore}`, suffix: '/100', label: 'desktop speed (was 69/100)' },
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-12 md:py-16 px-6"
      style={{ background: '#080e1c', scrollSnapAlign: 'start' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.8) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.8) 80%, transparent 100%)',
        }}
      />

      {/* Parallax blob layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxY}px)`, willChange: 'transform' }}
      >
        <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 68%)' }} />
        <div style={{ position: 'absolute', bottom: '-140px', left: '-100px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 68%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Nav: dots + arrows — fixed above the track */}
        <div className="flex items-center justify-end gap-2 mb-5" style={fadeIn(0)}>
          <button
            onClick={() => goToSlide(activeSlide - 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
            aria-label="Previous slide"
          >
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                height: '6px',
                width: i === activeSlide ? '20px' : '6px',
                background: i === activeSlide ? '#2563EB' : 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          <button
            onClick={() => goToSlide(activeSlide + 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
            aria-label="Next slide"
          >
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Sliding track */}
        <div ref={trackWrapRef} className="overflow-hidden" style={fadeIn(60)}>
          <div
            className="flex"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {slides.map((s, i) => (
              <div key={i} className="min-w-full">
                {/* Label */}
                <div className="mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Case study
                  </p>
                  <p className="text-sm font-semibold text-white">{s.client}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.subtitle}</p>
                </div>

                {/* Slider */}
                {s.slider}

                {/* Stats strip */}
                <div
                  className="mt-5 flex divide-x rounded-sm overflow-hidden border"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                >
                  {s.stats.map((stat) => (
                    <div key={stat.label} className="flex-1 px-5 py-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-heading font-bold text-white tabular-nums leading-none">{stat.value}</span>
                        {'suffix' in stat && <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.suffix}</span>}
                      </div>
                      <p className="text-xs mt-1.5 leading-snug" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-4 flex justify-end">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    View case study
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
