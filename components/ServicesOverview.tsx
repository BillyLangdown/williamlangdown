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
  // Mobile card boxes, relative to the section root.
  c1: { x: number; y: number; w: number; h: number }
  c2: { x: number; y: number; w: number; h: number }
}

const COPPER = '#C1613D'
const STROKE = { stroke: COPPER, strokeWidth: 2.5, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
// Mobile: the outline sits this far outside each card, with small rounded corners.
const OFF = 5
const CR = 4
const LINE_W = 2
const MOBILE_LINE_W = 3
// Mobile: arrowhead size, and the small gap between an arrow tip and the outline it points at.
const ARROW = 7
const TIP_GAP = 6
// Mobile: how far below a card's top edge the desktop-style dot sits (unused on mobile).
const STUB_Y = 36
// Mobile: numbered node sitting on each card's top-left corner, breaking the outline.
const NODE_R = 11
const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
// Gentle ease in and out: half linear, half smoothstep, so each stroke starts
// and settles softly without feeling like it lags the scroll.
const soft = (t: number) => 0.5 * t + 0.5 * t * t * (3 - 2 * t)

// A card's outline: two halves from the top centre that wrap the card in step
// and meet underneath. Section-root pixels.
function outline(c: Geom['c1']) {
  const cx = c.x + c.w / 2
  const L = c.x - OFF
  const R = c.x + c.w + OFF
  const T = c.y - OFF
  const B = c.y + c.h + OFF
  const right = `M ${cx} ${T} H ${R - CR} Q ${R} ${T} ${R} ${T + CR} V ${B - CR} Q ${R} ${B} ${R - CR} ${B} H ${cx}`
  const left = `M ${cx} ${T} H ${L + CR} Q ${L} ${T} ${L} ${T + CR} V ${B - CR} Q ${L} ${B} ${L + CR} ${B} H ${cx}`
  const len = 2 * (R - cx - CR) + (B - T - 2 * CR) + 3 * CR
  return { cx, T, B, right, left, len }
}

// Mobile routing: all in section-root pixels, from the measured card boxes.
// A straight line drops down the card centres and ends in a small arrow just
// above each card. From the top centre of the outline, two halves wrap the
// card in step and meet underneath, where the connector to the next card starts.
function mobilePlan(g: Geom) {
  const ring = outline
  const r1 = ring(g.c1)
  const r2 = ring(g.c2)
  const tip = (r: { cx: number; T: number }) => r.T - TIP_GAP
  const arrow = (r: { cx: number; T: number }) =>
    `M ${r.cx - ARROW} ${tip(r) - ARROW} L ${r.cx} ${tip(r)} L ${r.cx + ARROW} ${tip(r) - ARROW}`
  return {
    node1: { x: g.c1.x - OFF, y: g.c1.y - OFF },
    node2: { x: g.c2.x - OFF, y: g.c2.y - OFF },
    vert: `M ${r1.cx} ${g.startY} V ${tip(r1)}`,
    arrow1: arrow(r1),
    right1: r1.right,
    left1: r1.left,
    link: `M ${r1.cx} ${r1.B} V ${tip(r2)}`,
    arrow2: arrow(r2),
    right2: r2.right,
    left2: r2.left,
    // Each stage's time covers the gap too, so the border starts the moment
    // the pen would have crossed it.
    len: {
      aLine: Math.max(1, tip(r1) - g.startY),
      a: Math.max(1, r1.T - g.startY),
      h1: r1.len,
      cLine: Math.max(1, tip(r2) - r1.B),
      c: Math.max(1, r2.T - r1.B),
      h2: r2.len,
    },
  }
}

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
  const win = useRef({ from: 0, to: 1, f: 0.6, p0: 0, vh: 800, mobile: false })
  // Cards pop only once the line has finished drawing: a short scroll
  // window that starts where the line's window ends.
  const popAt = (lag: number, span: number) => (y: number) => {
    const { to } = win.current
    const vh = win.current.vh
    return clamp01((y - to - vh * lag) / (vh * span))
  }
  // On mobile the line only ever draws forward: scrolling back up leaves it
  // as drawn, so there is nothing to redraw (or glitch) on the way up.
  const furthest = useRef(0)
  const raw = useTransform(scrollY, (y) => {
    const { from, to, p0, mobile } = win.current
    const n = p0 + (1 - p0) * clamp01((y - from) / Math.max(1, to - from))
    if (!mobile) return n
    furthest.current = Math.max(furthest.current, n)
    return furthest.current
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
      // Desktop arrows stop a small gap above each card's outline.
      const dotY = isDesktop ? rt.top - base.top - OFF - TIP_GAP : rt.top - base.top + STUB_Y
      const lineTop = base.top + startY
      let junction = 0
      if (isDesktop) {
        // The line runs on into the white section before it splits.
        const boundary = box(sec).top - base.top
        junction = boundary + Math.max(40, (dotY - boundary) * 0.3)
        const stemLen = junction - startY
        const f = stemLen / (stemLen + (dotY - junction) * 1.25)
        win.current = {
          from: lineTop - vh * 0.85,
          to: base.top + dotY - vh * 0.75,
          f,
          // Already part-drawn when the intro is on screen.
          p0: f * 0.4,
          vh,
          mobile: false,
        }
      } else {
        // The line runs down the card centres, wraps each card in turn and is
        // done once the second card's outline closes, which happens as that
        // card's centre reaches the middle of the screen.
        win.current = { from: lineTop - vh * 0.95, to: base.top + (rp2.top - base.top) + rp2.height * 0.5 - vh * 0.55, f: 0.6, p0: 0, vh, mobile: true }
      }
      const next: Geom = {
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
          top: isDesktop ? rp2.top - base.top - OFF - TIP_GAP : rp2.top - base.top + STUB_Y,
        },
        t1Bottom: rt.top - base.top + rt.height,
        c1: { x: rt.left - base.left, y: rt.top - base.top, w: rt.width, h: rt.height },
        c2: { x: rp2.left - base.left, y: rp2.top - base.top, w: rp2.width, h: rp2.height },
      }
      // Same geometry: keep the old object so nothing re-renders.
      setGeom((prev) => (prev && JSON.stringify(prev) === JSON.stringify(next) ? prev : next))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (root.current) ro.observe(root.current)
    // iPhone fires resize repeatedly as the toolbar slides in and out while
    // scrolling; only a width change can alter the layout, so ignore the rest.
    const onResize = () => {
      if (window.innerWidth !== lastW) measure()
    }
    window.addEventListener('resize', onResize)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Mobile: one line drops down the centre of the cards, runs straight into
  // the first card, where it splits into two halves that wrap the card in step
  // and meet underneath. A connector carries on to the second card and repeats.
  // Time along the line is shared out by real path length, so the scroll
  // feels like one continuous pen stroke.
  const plan = geom && !geom.desktop ? mobilePlan(geom) : null
  const segs = useRef({ aLine: 1, a: 1, h1: 1, cLine: 1, c: 1, h2: 1 })
  if (plan) segs.current = plan.len
  const along = (n: number) => {
    const { a, h1, c, h2 } = segs.current
    return n * (a + h1 + c + h2)
  }
  const vert = useTransform(p, (n) => clamp01(along(n) / segs.current.aLine))
  const wrap1 = useTransform(p, (n) => clamp01((along(n) - segs.current.a) / segs.current.h1))
  const link = useTransform(p, (n) => clamp01((along(n) - segs.current.a - segs.current.h1) / segs.current.cLine))
  const wrap2 = useTransform(p, (n) => clamp01((along(n) - segs.current.a - segs.current.h1 - segs.current.c) / segs.current.h2))
  const arrow1 = useTransform(vert, (n) => clamp01((n - 0.88) / 0.12))
  const arrow2 = useTransform(link, (n) => clamp01((n - 0.88) / 0.12))
  const vertShow = useTransform(vert, shown)
  const linkShow = useTransform(link, shown)
  // Finished outlines settle back a little so they do not overwhelm the card.
  const settle = (n: number) => (n > 0.002 ? 1 - 0.2 * clamp01((n - 0.96) / 0.04) : 0)
  const node1Show = useTransform(wrap1, (n) => clamp01((n - 0.1) / 0.1))
  const node2Show = useTransform(wrap2, (n) => clamp01((n - 0.1) / 0.1))
  const ring1 = useTransform(wrap1, settle)
  const ring2 = useTransform(wrap2, settle)
  const settled = useMotionValue(0.8)
  // Desktop: each card's outline wraps once its card has settled.
  const dring1 = useTransform(scrollY, popAt(0.12, 0.2))
  const dring2 = useTransform(scrollY, popAt(0.17, 0.2))
  const dop1 = useTransform(dring1, settle)
  const dop2 = useTransform(dring2, settle)

  return (
    <section ref={section} id="capabilities" data-nav-theme="light" className="relative z-10 bg-bone">
      <div ref={root} className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:min-h-[100svh] md:pb-[14svh] md:pt-0">
        {/* Desktop: one line that begins inside the intro (copper on the
            dark image), stays copper as it crosses into this section, then
            branches onto the two icon nodes. Drawn in measured pixels. */}
        {geom && geom.desktop && (
          <svg
            viewBox={`0 ${geom.startY} ${geom.w} ${Math.max(geom.c1.y + geom.c1.h, geom.c2.y + geom.c2.h) + OFF + 4 - geom.startY}`}
            width={geom.w}
            height={Math.max(geom.c1.y + geom.c1.h, geom.c2.y + geom.c2.h) + OFF + 4 - geom.startY}
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
            {[
              { o: outline(geom.c1), pl: dring1, op: dop1 },
              { o: outline(geom.c2), pl: dring2, op: dop2 },
            ].map(({ o, pl, op }, k) => (
              <motion.g key={k} style={{ opacity: reduce ? settled : op }}>
                <motion.path d={o.right} style={{ pathLength: v(pl) }} {...STROKE} strokeWidth={LINE_W} />
                <motion.path d={o.left} style={{ pathLength: v(pl) }} {...STROKE} strokeWidth={LINE_W} />
              </motion.g>
            ))}
          </svg>
        )}

        {/* Mobile: one line down the card centres. It ends in an arrow just above each
            card, then two halves wrap the card in step and the line carries on. */}
        {plan && geom && (
          <svg
            viewBox={`0 ${geom.startY} ${geom.w} ${geom.h - geom.startY}`}
            width={geom.w}
            height={geom.h - geom.startY}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 overflow-visible md:hidden"
            style={{ top: geom.startY, transform: 'translateZ(0)' }}
          >
            <defs>
              {[
                { id: 'node-gap-1', n: plan.node1 },
                { id: 'node-gap-2', n: plan.node2 },
              ].map(({ id, n }) => (
                <mask key={id} id={id} maskUnits="userSpaceOnUse" x={-20} y={geom.startY} width={geom.w + 40} height={geom.h - geom.startY}>
                  <rect x={-20} y={geom.startY} width={geom.w + 40} height={geom.h - geom.startY} fill="white" />
                  <circle cx={n.x} cy={n.y} r={NODE_R} fill="black" />
                </mask>
              ))}
            </defs>
            <motion.path d={plan.vert} style={{ pathLength: v(vert), opacity: show(vertShow) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
            <motion.path d={plan.arrow1} style={{ opacity: v(arrow1) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
            <motion.g mask="url(#node-gap-1)" style={{ opacity: reduce ? settled : ring1 }}>
              <motion.path d={plan.right1} style={{ pathLength: v(wrap1) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
              <motion.path d={plan.left1} style={{ pathLength: v(wrap1) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
            </motion.g>
            <motion.path d={plan.link} style={{ pathLength: v(link), opacity: show(linkShow) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
            <motion.path d={plan.arrow2} style={{ opacity: v(arrow2) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
            <motion.g mask="url(#node-gap-2)" style={{ opacity: reduce ? settled : ring2 }}>
              <motion.path d={plan.right2} style={{ pathLength: v(wrap2) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
              <motion.path d={plan.left2} style={{ pathLength: v(wrap2) }} {...STROKE} strokeWidth={MOBILE_LINE_W} />
            </motion.g>
            {[
              { n: plan.node1, label: '1', o: node1Show },
              { n: plan.node2, label: '2', o: node2Show },
            ].map(({ n, label, o }) => (
              <motion.g key={label} style={{ opacity: reduce ? one : o }}>
                <circle cx={n.x} cy={n.y} r={NODE_R} fill="none" stroke={COPPER} strokeWidth={2.5} />
                <text
                  x={n.x}
                  y={n.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={COPPER}
                  fontSize="12"
                  fontWeight="600"
                  style={{ fontFamily: 'inherit' }}
                >
                  {label}
                </text>
              </motion.g>
            ))}
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
                          primary ? 'h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24' : 'h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24'
                        }`}
                      />
                      <h2
                        className={`${wordClass} max-w-[16ch] pr-[4.75rem] md:pr-28 lg:pr-36`}
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
