'use client'

import { useRef } from 'react'
import Link from 'next/link'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const badges = [
  { label: '99.98% uptime', top: '8%', left: '-6%', depth: 18 },
  { label: '<40ms p95', top: '68%', left: '-10%', depth: 28 },
  { label: 'SOC 2 Type II', top: '84%', left: '52%', depth: 14 },
]

const chartPoints = '0,64 24,52 48,58 72,34 96,40 120,20 144,26 168,8 192,14'

export default function InteractiveHero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Raw pointer position, normalized to -0.5..0.5 across the hero bounds.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 })
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 })

  const rotateX = useTransform(smy, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(smx, [-0.5, 0.5], [-10, 10])

  const spotlightX = useTransform(smx, [-0.5, 0.5], ['20%', '80%'])
  const spotlightY = useTransform(smy, [-0.5, 0.5], ['20%', '80%'])
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(99,102,241,0.20), transparent 65%)`

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-6 pt-28 pb-24 md:pt-36 md:pb-32"
      style={{ background: '#05060A' }}
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)',
        }}
        aria-hidden
      />

      {/* Cursor-tracked spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} aria-hidden />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wide px-3 py-1.5 rounded-full mb-7"
            style={{ background: 'rgba(99,102,241,0.12)', color: '#A5B4FC', border: '1px solid rgba(99,102,241,0.25)' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#22D3EE' }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#22D3EE' }} />
            </span>
            All systems operational
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } } }}
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white max-w-xl"
          >
            Infrastructure that gets out of your way
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-7 text-base text-slate-400 max-w-md leading-relaxed"
          >
            One dashboard for deploys, monitoring, and billing. Built for small teams who&apos;d rather ship than
            babysit config files.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="/starter/preview-5/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-md transition-all hover:scale-[1.02] active:scale-95"
              style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)', color: '#05060A' }}
            >
              Start free trial
            </Link>
            <span className="inline-flex items-center gap-2 text-sm font-mono text-slate-500">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              No card required
            </span>
          </motion.div>
        </motion.div>

        {/* Interactive tilting dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          style={{ perspective: 1200 }}
          className="relative"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative rounded-xl overflow-hidden"
          >
            <div
              className="relative rounded-xl border"
              style={{
                background: 'linear-gradient(180deg, #0B0D14 0%, #05060A 100%)',
                borderColor: 'rgba(148,163,255,0.14)',
                boxShadow: '0 30px 80px -20px rgba(0,0,0,0.7)',
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: 'rgba(148,163,255,0.1)' }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
                <span className="ml-3 text-[11px] font-mono text-slate-500">app.axium.dev/overview</span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-500">Request latency</p>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded" style={{ background: 'rgba(52,211,153,0.12)', color: '#34D399' }}>live</span>
                </div>

                <svg viewBox="0 0 192 72" className="w-full h-24" fill="none">
                  <defs>
                    <linearGradient id="axium-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                  <motion.polyline
                    points={chartPoints}
                    fill="none"
                    stroke="url(#axium-line)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: EASE, delay: 0.6 }}
                  />
                </svg>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[['41ms', 'p50'], ['38ms', 'p95'], ['112', 'req/s']].map(([val, label]) => (
                    <div key={label} className="rounded-lg px-3 py-3" style={{ background: 'rgba(148,163,255,0.05)', border: '1px solid rgba(148,163,255,0.08)' }}>
                      <p className="text-sm font-semibold text-white">{val}</p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating tech badges with mouse-parallax */}
            {badges.map(b => (
              <FloatingBadge key={b.label} label={b.label} top={b.top} left={b.left} depth={b.depth} smx={smx} smy={smy} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingBadge({
  label,
  top,
  left,
  depth,
  smx,
  smy,
}: {
  label: string
  top: string
  left: string
  depth: number
  smx: ReturnType<typeof useSpring>
  smy: ReturnType<typeof useSpring>
}) {
  const x = useTransform(smx, v => v * depth)
  const y = useTransform(smy, v => v * depth)

  return (
    <motion.div
      className="absolute hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap"
      style={{
        top,
        left,
        x,
        y,
        background: 'rgba(11,13,20,0.9)',
        border: '1px solid rgba(148,163,255,0.16)',
        color: '#CBD5F5',
        backdropFilter: 'blur(6px)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22D3EE' }} />
      {label}
    </motion.div>
  )
}
