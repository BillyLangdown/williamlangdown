'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { urlFor } from '@/sanity/client'
import type { CaseStudy } from '@/lib/types'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setVal(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return val
}

interface Props { caseStudy: CaseStudy | null }

export default function BeforeAfterSection({ caseStudy }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [statsActive, setStatsActive] = useState(false)
  const [headingProgress, setHeadingProgress] = useState(0)

  const conversionUp = useCountUp(75, statsActive)
  const bounceDown = useCountUp(21, statsActive, 1600)

  // Scroll-driven heading: slides in from left, reverses on scroll up
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const wh = window.innerHeight
      const p = Math.min(1, Math.max(0, (wh - rect.top) / (wh * 0.6)))
      setHeadingProgress(p)
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

  const clientName = caseStudy?.client ?? 'The Garden Tablecloth Co'
  const slug = caseStudy?.slug?.current ?? '#'
  const hasImages = !!(caseStudy?.beforeImage && caseStudy?.afterImage)

  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(16px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">

        {/* Header — scroll-driven, slides in from left and reverses */}
        <div
          className="mb-12"
          style={{
            transform: `translateX(${(headingProgress - 1) * 60}px)`,
            opacity: headingProgress,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
            Results from real work
          </h2>
          <p className="text-sm text-white/40">{clientName}</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12" style={fadeIn(80)}>

          {/* Conversion rate */}
          <div className="bg-white/[0.04] border border-white/10 rounded-sm p-5 md:p-7">
            <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/35 mb-4 truncate">
              Conversion rate
            </p>
            <div className="flex items-end gap-2 mb-3">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-none tabular-nums"
                style={{ color: '#60a5fa' }}
              >
                +{conversionUp}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white/40 mb-1 leading-none">%</span>
            </div>
            <p className="text-xs text-white/30 mb-1">2.3% → 4.1%</p>
            <p className="text-xs text-white/25 leading-relaxed hidden sm:block">
              More visitors completing enquiry forms
            </p>
          </div>

          {/* Bounce rate */}
          <div className="bg-white/[0.04] border border-white/10 rounded-sm p-5 md:p-7">
            <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/35 mb-4 truncate">
              Bounce rate
            </p>
            <div className="flex items-end gap-2 mb-3">
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-none tabular-nums"
                style={{ color: '#4ade80' }}
              >
                -{bounceDown}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white/40 mb-1 leading-none">%</span>
            </div>
            <p className="text-xs text-white/30 mb-1">42% → 33%</p>
            <p className="text-xs text-white/25 leading-relaxed hidden sm:block">
              Fewer users leaving immediately after landing
            </p>
          </div>

        </div>

        {/* Before / After slider */}
        <div style={fadeIn(160)}>
          {hasImages ? (
            <BeforeAfterSlider
              beforeSrc={urlFor(caseStudy!.beforeImage!).width(1400).url()}
              afterSrc={urlFor(caseStudy!.afterImage!).width(1400).url()}
              beforeAlt={caseStudy!.beforeImage!.alt ?? `${clientName} before`}
              afterAlt={caseStudy!.afterImage!.alt ?? `${clientName} after`}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-3">Before</p>
                <div className="aspect-[16/9] bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-sm">
                  <span className="text-sm text-white/15">Before image</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-3">After</p>
                <div className="aspect-[16/9] bg-white/[0.06] border border-white/10 flex items-center justify-center rounded-sm">
                  <span className="text-sm text-white/30">After image</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 text-right" style={fadeIn(200)}>
          <Link
            href={slug === '#' ? '/case-studies' : `/case-studies/${slug}`}
            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white underline underline-offset-4 transition-colors"
          >
            View the case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
