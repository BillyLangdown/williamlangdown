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

export default function BeforeAfterSection({ caseStudy }: Props) {
  const sectionRef    = useRef<HTMLElement>(null)
  const trackWrapRef  = useRef<HTMLDivElement>(null)
  const [visible, setVisible]         = useState(false)
  const [statsActive, setStatsActive] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  // Slide 1 stats
  const conversionUp = useCountUp(0, 75, statsActive)
  const bounceDown   = useCountUp(0, 21, statsActive, 1600)

  // Slide 2 stats: count up from the original score to the new one
  const mobileScore  = useCountUp(56, 98,  statsActive, 1600)
  const desktopScore = useCountUp(69, 100, statsActive, 1900)

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
          <div className="aspect-[16/9] bg-subtle border border-border-light rounded-sm flex items-center justify-center">
            <span className="text-sm text-tertiary">Before</span>
          </div>
          <div className="aspect-[16/9] bg-subtle border border-border-light rounded-sm flex items-center justify-center">
            <span className="text-sm text-tertiary">After</span>
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
        { value: `${mobileScore}`, suffix: '/100', label: 'mobile speed (was 56)' },
        { value: `${desktopScore}`, suffix: '/100', label: 'desktop speed (was 69)' },
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-24 px-6"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F8FAFC',
        scrollSnapAlign: 'start',
      }}
    >

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="mb-8 pl-4 border-l-4 border-accent">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Results</h2>
          <p className="text-sm text-secondary mt-1">What changed after the redesign.</p>
        </div>

        {/* Nav: dots + arrows, fixed above the track */}
        <div className="flex items-center justify-end gap-2 mb-5" style={fadeIn(0)}>
          <button
            onClick={() => goToSlide(activeSlide - 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
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
                background: i === activeSlide ? '#2563EB' : 'rgba(15,23,42,0.12)',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          <button
            onClick={() => goToSlide(activeSlide + 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center border border-border-light text-tertiary hover:text-accent hover:border-accent/40 transition-colors"
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

                {/* Client + timeframe, tight above the stats, with a before/after tag */}
                <div className="mb-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-base font-heading font-semibold text-ink">{s.client}</p>
                    <p className="text-xs mt-0.5 text-tertiary">{s.subtitle}</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest shrink-0 text-tertiary">
                    Before &rarr; After
                  </span>
                </div>

                {/* Stats strip: dark navy (the logo's colour), so the numbers pop
                    without reaching for the CTA-only accent blue */}
                <div className="mb-5 flex divide-x divide-white/15 rounded-sm overflow-hidden" style={{ background: '#080e1c' }}>
                  {s.stats.map((stat) => (
                    <div key={stat.label} className="flex-1 px-3 py-3 sm:px-5 sm:py-4 text-center">
                      <div className="flex items-baseline justify-center gap-0.5">
                        <span className="text-lg sm:text-xl font-heading font-bold text-white tabular-nums leading-none">{stat.value}</span>
                        {'suffix' in stat && <span className="text-xs font-medium text-white/70">{stat.suffix}</span>}
                      </div>
                      <p className="text-[11px] mt-1.5 leading-snug text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Slider */}
                {s.slider}

                {/* CTA */}
                <div className="mt-4 flex justify-end">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs text-tertiary hover:text-accent transition-colors shrink-0"
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
