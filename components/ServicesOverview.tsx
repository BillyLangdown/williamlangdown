'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Layout, TreeStructure } from '@phosphor-icons/react'
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import SectionNav from '@/components/SectionNav'

const wordClass = 'font-display leading-[1.12] tracking-tight text-ink'

const pathways = [
  {
    heading: 'Improve how your business works.',
    description:
      'Save time, reduce repetitive work and make better use of your existing systems. I can help identify opportunities and put practical solutions in place.',
    cta: 'Explore business technology',
    href: '/services#technology-automation',
    Mark: TreeStructure,
    glyph: 'h-[72px] w-[72px]',
  },
  {
    heading: 'Improve how your business looks online.',
    description:
      'Make your business easier to understand, trust and choose through better websites and digital experiences.',
    cta: 'Explore digital experiences',
    href: '/services#web-digital',
    Mark: Layout,
    glyph: 'h-[64px] w-[64px]',
  },
]

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-terracotta md:text-base"
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
      >
        <path d="M2 10 L10 2 M3.5 2 H10 V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}

type Geom = {
  w: number
  h: number
  startY: number
  boundary: number
  junction: number
  desktop: boolean
  i1: { cx: number; top: number; bottom: number }
  i2: { cx: number; top: number }
  t1Bottom: number
}

const COPPER = '#C1613D'
const STROKE = { stroke: COPPER, strokeWidth: 2.5, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

export default function ServicesOverview() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const root = useRef<HTMLDivElement>(null)
  const dot1 = useRef<HTMLSpanElement>(null)
  const dot2 = useRef<HTMLSpanElement>(null)
  const glyph1 = useRef<HTMLDivElement>(null)
  const text1 = useRef<HTMLDivElement>(null)
  const panel2 = useRef<HTMLDivElement>(null)
  const [geom, setGeom] = useState<Geom | null>(null)
  const one = useMotionValue(1)
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // One scroll window for the whole line, in document space: it starts
  // drawing when the intro is in view (the line begins inside it) and
  // finishes once the icons are on screen. `f` is the share of the draw
  // spent on the desktop stem before it branches.
  const { scrollY } = useScroll()
  const win = useRef({ from: 0, to: 1, f: 0.6, p0: 0 })
  const p = useTransform(scrollY, (y) => {
    const { from, to, p0 } = win.current
    return p0 + (1 - p0) * clamp01((y - from) / Math.max(1, to - from))
  })

  const stem = useTransform(p, (n) => clamp01(n / win.current.f))
  const branch = useTransform(p, (n) => clamp01((n - win.current.f) / (1 - win.current.f)))
  const tip = useTransform(branch, (n) => clamp01((n - 0.95) / 0.05))
  // Each card pops in as its branch arrives: rises, settles to full size
  // with the faintest overshoot, and fades up. Scroll-driven, so it
  // reverses cleanly.
  const t1 = useTransform(p, (n) => clamp01((n - 0.84) / 0.12))
  const t2 = useTransform(p, (n) => clamp01((n - 0.9) / 0.1))
  const ease = (t: number) => 1 - Math.pow(1 - t, 3)
  const y1 = useTransform(t1, (t) => (1 - ease(t)) * 36)
  const y2 = useTransform(t2, (t) => (1 - ease(t)) * 36)
  const sc1 = useTransform(t1, (t) => 0.94 + 0.06 * ease(t) + 0.012 * Math.sin(Math.PI * t))
  const sc2 = useTransform(t2, (t) => 0.94 + 0.06 * ease(t) + 0.012 * Math.sin(Math.PI * t))

  const m1 = useTransform(p, [0, 0.45], [0, 1])
  const m2 = useTransform(p, [0.5, 0.95], [0, 1])
  const mi1 = useTransform(p, [0.34, 0.46], [0, 1])
  const mi2 = useTransform(p, [0.88, 0.98], [0, 1])

  const v = (m: typeof one) => (reduce ? one : m)

  // A zero-length path with round caps still paints a dot, so each line
  // stays hidden until it has actually started drawing.
  const shown = (n: number): number => (n > 0.002 ? 1 : 0)
  const stemShow = useTransform(stem, shown)
  const branchShow = useTransform(branch, shown)
  const m1Show = useTransform(m1, shown)
  const m2Show = useTransform(m2, shown)
  const show = (m: typeof one) => (reduce ? one : m)

  // The line is routed from the real positions of the intro paragraph,
  // the icon nodes and the first text block, all measured in document
  // space (offset chains ignore scroll-reveal transforms). That keeps one
  // continuous line across the section boundary and clear of the copy.
  useEffect(() => {
    const box = (el: HTMLElement) => {
      let top = 0
      let left = 0
      let n: HTMLElement | null = el
      while (n) {
        top += n.offsetTop
        left += n.offsetLeft
        n = n.offsetParent as HTMLElement | null
      }
      return { top, left, width: el.offsetWidth, height: el.offsetHeight }
    }
    const measure = () => {
      const r = root.current
      const sec = section.current
      const d1 = dot1.current
      const d2 = dot2.current
      const g1 = glyph1.current
      const t = text1.current
      const pn2 = panel2.current
      if (!r || !sec || !d1 || !d2 || !g1 || !t || !pn2) return
      const isDesktop = window.matchMedia('(min-width: 768px)').matches
      const base = box(r)
      const rd1 = box(d1)
      const rd2 = box(d2)
      const rg = box(g1)
      const rt = box(t)
      const intro = Array.from(document.querySelectorAll<HTMLElement>('[data-intro-end]')).find(
        (el) => el.offsetParent !== null,
      )
      const introBottom = intro ? box(intro).top + intro.offsetHeight : base.top
      const startY = Math.min(0, introBottom + (isDesktop ? 60 : 56) - base.top)
      const vh = window.innerHeight
      const rp2 = box(pn2)
      // Desktop lines land on the top edge of each panel (the icon sits
      // inside it); mobile lines land on the copper dot above the icon.
      const dotY = isDesktop ? rt.top - base.top - 4 : rd1.top - base.top + 4
      const lineTop = base.top + startY
      let junction = 0
      if (isDesktop) {
        // The split happens early, a third of the way down, still inside the intro.
        junction = startY + (dotY - startY) * 0.35
        const stemLen = junction - startY
        const f = stemLen / (stemLen + (dotY - junction) * 1.25)
        win.current = {
          from: lineTop - vh * 0.6,
          to: base.top + dotY - vh * 0.45,
          f,
          // Already part-drawn when the intro is on screen.
          p0: f * 0.4,
        }
      } else {
        win.current = { from: lineTop - vh * 0.95, to: base.top + base.height - vh * 0.7, f: 0.6, p0: 0 }
      }
      setGeom({
        w: base.width,
        h: base.height,
        startY,
        boundary: box(sec).top - base.top,
        junction,
        desktop: isDesktop,
        i1: {
          cx: (isDesktop ? rt.left + rt.width / 2 : rd1.left + rd1.width / 2) - base.left,
          top: dotY,
          bottom: rg.top - base.top + rg.height,
        },
        i2: {
          cx: (isDesktop ? rp2.left + rp2.width / 2 : rd2.left + rd2.width / 2) - base.left,
          top: isDesktop ? rp2.top - base.top - 4 : rd2.top - base.top + 4,
        },
        t1Bottom: rt.top - base.top + rt.height,
      })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (root.current) ro.observe(root.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  let seg1 = ''
  let seg2 = ''
  if (geom && !geom.desktop) {
    const { w, i1, i2, t1Bottom, startY } = geom
    const gx = w - 26
    // Straight down through the rest of the intro, then ease towards icon 1.
    const bend = Math.max(startY + 20, i1.top - 90)
    const mid = bend + (i1.top - bend) * 0.55
    seg1 = `M ${w / 2} ${startY} L ${w / 2} ${bend} C ${w / 2} ${mid}, ${i1.cx} ${mid}, ${i1.cx} ${i1.top}`
    const y3 = t1Bottom + 8
    seg2 =
      `M ${i1.cx} ${i1.bottom} C ${i1.cx} ${i1.bottom + 40}, ${gx} ${i1.bottom + 20}, ${gx} ${i1.bottom + 64} ` +
      `L ${gx} ${y3} C ${gx} ${y3 + 56}, ${i2.cx} ${y3 + 24}, ${i2.cx} ${i2.top}`
  }

  return (
    <section ref={section} id="capabilities" data-nav-theme="light" className="relative z-10 bg-bone">
      <div ref={root} className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:min-h-[100svh] md:pb-[14svh] md:pt-0">
        {/* Desktop: one line that begins inside the intro (white on the
            dark image), turns copper as it crosses into this section, then
            branches onto the two icon nodes. Drawn in measured pixels. */}
        {geom && geom.desktop && (
          <svg
            viewBox={`0 ${geom.startY} ${geom.w} ${geom.i2.top - geom.startY + 12}`}
            width={geom.w}
            height={geom.i2.top - geom.startY + 12}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 z-30 hidden md:block"
            style={{ top: geom.startY }}
          >
            <defs>
              <linearGradient
                id="line-fade"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={geom.boundary - 30}
                y2={geom.boundary + 90}
              >
                <stop offset="0" stopColor="#F6F3EE" />
                <stop offset="1" stopColor={COPPER} />
              </linearGradient>
            </defs>
            <motion.path
              d={`M ${geom.w / 2} ${geom.startY} V ${geom.junction}`}
              style={{ pathLength: v(stem), opacity: show(stemShow) }}
              {...STROKE}
              stroke="url(#line-fade)"
            />
            {[geom.i1, geom.i2].map((t, k) => {
              const drop = t.top - geom.junction
              return (
                <g key={k}>
                <motion.path
                  d={`M ${geom.w / 2} ${geom.junction} C ${geom.w / 2} ${geom.junction + drop * 0.6}, ${t.cx} ${t.top - drop * 0.5}, ${t.cx} ${t.top}`}
                  style={{ pathLength: v(branch), opacity: show(branchShow) }}
                  {...STROKE}
                  stroke="url(#line-fade)"
                />
                <motion.path
                  d={`M ${t.cx - 7} ${t.top - 8} L ${t.cx} ${t.top + 1} L ${t.cx + 7} ${t.top - 8}`}
                  style={{ opacity: v(tip) }}
                  {...STROKE}
                />
                </g>
              )
            })}
          </svg>
        )}

        {/* Mobile: a single line travelling through both pathways */}
        {geom && !geom.desktop && (
          <svg
            viewBox={`0 ${geom.startY} ${geom.w} ${geom.h - geom.startY}`}
            width={geom.w}
            height={geom.h - geom.startY}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 md:hidden"
            style={{ top: geom.startY }}
          >
            <motion.path d={seg1} style={{ pathLength: v(m1), opacity: show(m1Show) }} {...STROKE} />
            <motion.path d={seg2} style={{ pathLength: v(m2), opacity: show(m2Show) }} {...STROKE} />
          </svg>
        )}

        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-10 md:pt-[216px] lg:gap-x-16">
          {pathways.map((pw, i) => {
            const primary = i === 0
            const Mark = pw.Mark
            const pop = primary ? { opacity: t1, y: y1, scale: sc1 } : { opacity: t2, y: y2, scale: sc2 }
            const mOpacity = primary ? mi1 : mi2
            return (
              <article key={pw.href} className="flex flex-col">
                {/* Icon node: a copper dot where the line lands, with the
                    icon beneath it. Right on mobile for the first, left for
                    the second; centred on its branch on desktop. */}
                <div className={`pt-[72px] md:hidden ${primary ? 'self-end pr-6' : 'self-start pl-6'}`}>
                  <div className="flex flex-col items-center">
                    <span ref={primary ? dot1 : dot2} aria-hidden="true" className="block h-2 w-2 rounded-full bg-terracotta" />
                    <motion.div
                      ref={primary ? glyph1 : undefined}
                      style={reduce ? undefined : { opacity: mOpacity }}
                      className="mt-3 text-ink"
                    >
                      <Mark weight="light" aria-hidden="true" className={pw.glyph} />
                    </motion.div>
                  </div>
                </div>

                {(() => {
                  const card = (
                    <motion.div
                      ref={primary ? text1 : panel2}
                      style={desktop && !reduce ? { ...pop, transformOrigin: '50% 0%' } : undefined}
                      className={`flex flex-1 flex-col rounded-[2px] bg-terracotta/[0.08] p-6 md:p-8 lg:p-10 ${primary ? 'mr-8 md:mr-0' : ''}`}
                    >
                      <div className="mb-6 hidden text-ink md:block">
                        <Mark weight="light" aria-hidden="true" className="h-24 w-24" />
                      </div>
                      <h2
                        className={wordClass}
                        style={{
                          fontSize: 'clamp(1.75rem, 2.5vw, 2.6rem)',
                        }}
                      >
                        {pw.heading}
                      </h2>
                      <p className="mt-5 max-w-md text-base leading-relaxed text-secondary md:mt-6 md:text-[1.05rem] lg:text-lg">
                        {pw.description}
                      </p>
                      <div className="mt-6 md:mt-auto md:pt-8">
                        <ArrowLink href={pw.href}>{pw.cta}</ArrowLink>
                      </div>
                    </motion.div>
                  )
                  return desktop ? (
                    <div className="flex flex-1 flex-col">{card}</div>
                  ) : (
                    <ScrollReveal threshold={0.15} delay={i * 80} className="mt-5 flex flex-1 flex-col">
                      {card}
                    </ScrollReveal>
                  )
                })()}
              </article>
            )
          })}
        </div>
      </div>
      <SectionNav />
    </section>
  )
}
