'use client'

import { useEffect, useRef, useState } from 'react'
import { Layout, TreeStructure } from '@phosphor-icons/react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import SectionNav from '@/components/SectionNav'
import ArrowLink from '@/components/ArrowLink'
import { pathways } from '@/lib/pathways'

const wordClass = 'font-display leading-[1.12] tracking-tight text-ink'

const marks = {
  technology: { Mark: TreeStructure },
  digital: { Mark: Layout },
} as const

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
// Mobile: how far below a card's top edge its arrow stub meets it.
const STUB_Y = 36
const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
// Gentle ease in and out: half linear, half smoothstep, so each stroke starts
// and settles softly without feeling like it lags the scroll.
const soft = (t: number) => 0.5 * t + 0.5 * t * t * (3 - 2 * t)

export default function ServicesOverview() {
  const reduce = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const root = useRef<HTMLDivElement>(null)
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
  // vh is the viewport height at the last width change. On iPhone the toolbar
  // resizes innerHeight as you scroll, which would otherwise shift the line's
  // scroll window and make it jump when scrolling back up.
  const win = useRef({ from: 0, to: 1, f: 0.6, p0: 0, vh: 800 })
  // Cards pop only once the line has finished drawing: a short scroll
  // window that starts where the line's window ends.
  const popAt = (lag: number, span: number) => (y: number) => {
    const { to } = win.current
    const vh = win.current.vh
    return clamp01((y - to - vh * lag) / (vh * span))
  }
  const raw = useTransform(scrollY, (y) => {
    const { from, to, p0 } = win.current
    return p0 + (1 - p0) * clamp01((y - from) / Math.max(1, to - from))
  })
  // Scroll events arrive in uneven bursts on iPhone, which showed as the
  // line stepping forward in small jumps. A stiff spring fills in the frames
  // between events so the stroke glides to wherever the scroll has got to.
  const p = useSpring(raw, { stiffness: 380, damping: 46, mass: 0.5, restDelta: 0.0005 })

  const stem = useTransform(p, (n) => soft(clamp01(n / win.current.f)))
  const branch = useTransform(p, (n) => soft(clamp01((n - win.current.f) / (1 - win.current.f))))
  const tip = useTransform(branch, (n) => clamp01((n - 0.95) / 0.05))
  // Each card pops in as its branch arrives: rises, settles to full size
  // with the faintest overshoot, and fades up. Scroll-driven, so it
  // reverses cleanly.
  const t1 = useTransform(scrollY, popAt(0, 0.14))
  const t2 = useTransform(scrollY, popAt(0.06, 0.14))
  const ease = (t: number) => 1 - Math.pow(1 - t, 3)
  const y1 = useTransform(t1, (t) => (1 - ease(t)) * 36)
  const y2 = useTransform(t2, (t) => (1 - ease(t)) * 36)
  const sc1 = useTransform(t1, (t) => 0.94 + 0.06 * ease(t) + 0.012 * Math.sin(Math.PI * t))
  const sc2 = useTransform(t2, (t) => 0.94 + 0.06 * ease(t) + 0.012 * Math.sin(Math.PI * t))


  const v = (m: typeof one) => (reduce ? one : m)

  // A zero-length path with round caps still paints a dot, so each line
  // stays hidden until it has actually started drawing.
  const shown = (n: number): number => (n > 0.002 ? 1 : 0)
  const stemShow = useTransform(stem, shown)
  const branchShow = useTransform(branch, shown)
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
    let lastW = 0
    let stableVh = 0
    const measure = () => {
      const r = root.current
      const sec = section.current
      const t = text1.current
      const pn2 = panel2.current
      if (!r || !sec || !t || !pn2) return
      const isDesktop = window.matchMedia('(min-width: 768px)').matches
      const base = box(r)
      const rt = box(t)
      const intro = Array.from(document.querySelectorAll<HTMLElement>('[data-intro-end]')).find(
        (el) => el.offsetParent !== null,
      )
      const introBottom = intro ? box(intro).top + intro.offsetHeight : base.top
      const startY = Math.min(0, introBottom + (isDesktop ? 60 : 56) - base.top)
      if (window.innerWidth !== lastW || !stableVh) {
        lastW = window.innerWidth
        stableVh = window.innerHeight
      }
      const vh = stableVh
      const rp2 = box(pn2)
      // Desktop lines land on the top edge of each panel (the icon sits
      // inside it); mobile lines land on the copper dot above the icon.
      // On large screens the cards sit 28px lower so the arrow tips clear them.
      const gap = isDesktop && window.innerWidth >= 1024 ? 28 : 0
      const dotY = isDesktop ? rt.top - base.top - 4 - gap : rt.top - base.top + STUB_Y
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
          vh,
        }
      } else {
        win.current = { from: lineTop - vh * 0.95, to: base.top + base.height - vh * 0.7, f: 0.6, p0: 0, vh }
      }
      setGeom({
        w: base.width,
        h: base.height,
        startY,
        boundary: box(sec).top - base.top,
        junction,
        desktop: isDesktop,
        i1: {
          cx: (isDesktop ? rt.left + rt.width / 2 : rt.left) - base.left,
          top: dotY,
          bottom: 0,
        },
        i2: {
          cx: (isDesktop ? rp2.left + rp2.width / 2 : rp2.left) - base.left,
          top: isDesktop ? rp2.top - base.top - 4 - gap : rp2.top - base.top + STUB_Y,
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

  // Mobile: one spine runs down the left gutter with an arrow branching
  // off it into each card, so the two options read as two exits of one line.
  let spine = ''
  let stub1 = ''
  let tip1 = ''
  let tip2 = ''
  if (geom && !geom.desktop) {
    const { i1, i2, startY, w } = geom
    const sx = 12
    const r = 10
    const x1 = i1.cx - 7
    const x2 = i2.cx - 7
    const bend = Math.max(startY + 20, i1.top - 120)
    const mid = bend + (i1.top - 30 - bend) * 0.5
    spine =
      `M ${w / 2} ${startY} L ${w / 2} ${bend} C ${w / 2} ${mid}, ${sx} ${mid}, ${sx} ${i1.top - 30} ` +
      `L ${sx} ${i2.top - r} Q ${sx} ${i2.top} ${sx + r} ${i2.top} L ${x2} ${i2.top}`
    stub1 = `M ${sx} ${i1.top - r} Q ${sx} ${i1.top} ${sx + r} ${i1.top} L ${x1} ${i1.top}`
    tip1 = `M ${x1 - 8} ${i1.top - 7} L ${x1 + 1} ${i1.top} L ${x1 - 8} ${i1.top + 7}`
    tip2 = `M ${x2 - 8} ${i2.top - 7} L ${x2 + 1} ${i2.top} L ${x2 - 8} ${i2.top + 7}`
  }
  // Where along the spine the first branch leaves it, as a share of the
  // spine's real drawn length, so the arrow waits for the line to arrive.
  const spineEl = useRef<SVGPathElement>(null)
  const branchAt = useRef(0.5)
  useEffect(() => {
    const el = spineEl.current
    if (!el || !geom || geom.desktop) return
    const total = el.getTotalLength()
    const targetY = geom.i1.top - 10
    let lo = 0
    let hi = total
    for (let k = 0; k < 24; k++) {
      const mid = (lo + hi) / 2
      if (el.getPointAtLength(mid).y < targetY) lo = mid
      else hi = mid
    }
    branchAt.current = lo / total
  }, [geom])
  const spineP = useTransform(p, (n) => soft(clamp01(n / 0.95)))
  const spineShow = useTransform(spineP, shown)
  const stubP = useTransform(spineP, (n) => soft(clamp01((n - branchAt.current) / 0.08)))
  const stubShow = useTransform(stubP, shown)
  const spineTip = useTransform(spineP, (n) => clamp01((n - 0.97) / 0.03))
  const stubTip = useTransform(stubP, (n) => clamp01((n - 0.9) / 0.1))

  return (
    <section ref={section} id="capabilities" data-nav-theme="light" className="relative z-10 bg-bone">
      <div ref={root} className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:min-h-[100svh] md:pb-[14svh] md:pt-0">
        {/* Desktop: one line that begins inside the intro (copper on the
            dark image), stays copper as it crosses into this section, then
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
                <stop offset="0" stopColor={COPPER} />
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

        {/* Mobile: a spine down the gutter with an arrow into each card */}
        {geom && !geom.desktop && (
          <svg
            viewBox={`0 ${geom.startY} ${geom.w} ${geom.h - geom.startY}`}
            width={geom.w}
            height={geom.h - geom.startY}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 md:hidden"
            style={{ top: geom.startY, transform: 'translateZ(0)' }}
          >
            <motion.path ref={spineEl} d={spine} style={{ pathLength: v(spineP), opacity: show(spineShow) }} {...STROKE} />
            <motion.path d={stub1} style={{ pathLength: v(stubP), opacity: show(stubShow) }} {...STROKE} />
            <motion.path d={tip1} style={{ opacity: v(stubTip) }} {...STROKE} />
            <motion.path d={tip2} style={{ opacity: v(spineTip) }} {...STROKE} />
          </svg>
        )}

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10 md:pt-[216px] lg:gap-x-16 lg:pt-[244px]">
          {pathways.map((pw, i) => {
            const primary = i === 0
            const { Mark } = marks[pw.key]
            const pop = primary ? { opacity: t1, y: y1, scale: sc1 } : { opacity: t2, y: y2, scale: sc2 }
                        return (
              <article key={pw.href} className="flex flex-col">
                {(() => {
                  const card = (
                    <motion.div
                      ref={primary ? text1 : panel2}
                      style={desktop && !reduce ? { ...pop, transformOrigin: '50% 0%' } : undefined}
                      className={`group relative mx-4 flex flex-1 flex-col rounded-[2px] p-6 md:mx-0 transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-ink/50 md:p-8 lg:p-10 ${
                        primary ? 'bg-terracotta/[0.2] hover:bg-terracotta/[0.27] lg:pb-12 lg:pt-12' : 'bg-stone/[0.22] hover:bg-stone/[0.3]'
                      }`}
                    >
                      <Mark
                        weight="light"
                        aria-hidden="true"
                        className={`absolute right-5 top-5 text-ink md:right-8 md:top-8 lg:right-10 lg:top-10 ${
                          primary ? 'h-[72px] w-[72px] md:h-28 md:w-28 lg:h-[8.5rem] lg:w-[8.5rem]' : 'h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28'
                        }`}
                      />
                      <h2
                        className={`${wordClass} max-w-[16ch] pr-16 md:pr-28 lg:pr-36`}
                        style={{
                          fontSize: 'clamp(1.75rem, 2.5vw, 2.6rem)',
                        }}
                      >
                        {pw.heading}
                      </h2>
                      <p className="mt-5 max-w-md text-base leading-relaxed text-ink/80 md:mt-8 md:text-[1.05rem] lg:text-lg">
                        {pw.description}
                      </p>
                      <div className="mt-6 border-t border-ink/15 pt-5 md:mt-auto md:pt-6">
                        <ArrowLink href={pw.href} stretch>{pw.cta}</ArrowLink>
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
