'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PhotoPlaceholder from '../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem, EASE } from '../_shared/Reveal'
import StatCounter from '../_shared/StatCounter'

const classes = [
  { name: 'Squat Club', time: 'Mon / Wed / Fri, 6:00am' },
  { name: 'Deadlift Technique', time: 'Tue / Thu, 6:30am' },
  { name: 'Open Platform', time: 'Every day, 6am to 10pm' },
]

const reviews = [
  { name: 'Ellie Marsh', meta: 'Member since 2021', text: 'Finally a gym that takes strength training seriously. My squat is up 30kg in a year.' },
  { name: 'Dev Patel', meta: 'Member since 2020', text: 'Proper coaching, proper kit, no ego. Exactly what I was looking for.' },
  { name: 'Callum Reid', meta: 'Member since 2023', text: 'Small groups mean the coaches actually know your name and your numbers.' },
]

function Stars({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex gap-0.5 shrink-0 ${className ?? ''}`} style={{ color: '#DC2626' }} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L10 15l-5.5 3.1 1.4-6.1L1.2 7.8l6.2-.6L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function Preview1Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <>
      {/* Hero: full-bleed photo background with scroll parallax */}
      <section ref={heroRef} className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <PhotoPlaceholder
            label="Full-bleed hero photo"
            src="/images/starter/ironclad-hero.jpg"
            className="absolute inset-0"
            overlayPosition="corner"
            darken={0.55}
          />
        </motion.div>
        <motion.div variants={heroContainer} initial="hidden" animate="visible" className="relative max-w-5xl mx-auto">
          <motion.p variants={heroItem} className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#DC2626' }}>
            Manchester · Est. 2017
          </motion.p>
          <motion.h1 variants={heroItem} className="text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight max-w-3xl">
            Show up.<br />Lift heavy.
          </motion.h1>
          <motion.p variants={heroItem} className="mt-8 text-base text-white/85 max-w-md leading-relaxed">
            A powerlifting and strength gym for people serious about progress. Small groups, expert coaching, proper equipment.
          </motion.p>
          <motion.div variants={heroItem}>
            <Link
              href="/starter/remix-ironclad/contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-150 hover:opacity-85 active:scale-95"
              style={{ background: '#DC2626', color: '#0B0A0A' }}
            >
              Book a taster session
            </Link>
          </motion.div>
          <motion.div variants={heroItem} className="mt-6 flex items-center gap-2">
            <Stars />
            <span className="text-sm text-white/70">4.8 star reviews from members</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="border-y" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-5xl mx-auto grid grid-cols-3 divide-x"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          {[['8', 'Coaches'], ['220+', 'Members'], ['7', 'Years running']].map(([num, label]) => (
            <motion.div key={label} variants={gridItem}>
              <StatCounter value={num} label={label} numberColor="#DC2626" labelColor="rgba(255,255,255,0.5)" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Classes */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12">
              This week&apos;s classes
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col divide-y"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            {classes.map(c => (
              <motion.div key={c.name} variants={gridItem} className="py-6 flex items-center justify-between group">
                <span className="text-xl font-bold uppercase transition-transform duration-200 group-hover:translate-x-1">{c.name}</span>
                <span className="text-sm text-white/50">{c.time}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-24" style={{ background: '#0F0F0F' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Stars size={18} />
              <span className="text-lg font-extrabold">4.8</span>
              <span className="text-sm text-white/50">from our members</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12">
              What members say
            </h2>
          </Reveal>
          <div className="relative -mx-6 sm:mx-0">
            <motion.div
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:snap-none sm:px-0 sm:pb-0"
            >
              {reviews.map(review => (
                <motion.div
                  key={review.name}
                  variants={gridItem}
                  className="p-6 flex flex-col gap-4 shrink-0 w-[85%] snap-start sm:w-auto sm:shrink"
                  style={{ background: '#141414' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: 'rgba(220,38,38,0.15)', color: '#DC2626' }}>
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">{review.name}</p>
                      <p className="text-xs text-white/40">{review.meta}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">{review.text}</p>
                  <Stars size={12} />
                </motion.div>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:hidden" style={{ background: 'linear-gradient(to right, transparent, #0F0F0F)' }} aria-hidden />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12">
              Take a look inside
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[0, 1, 2].map(i => (
              <motion.div key={i} variants={gridItem} className="relative aspect-[3/4] overflow-hidden group">
                <PhotoPlaceholder label="Gym photo goes here" className="w-full h-full transition-transform duration-500 group-hover:scale-105" style={{ borderColor: 'rgba(255,255,255,0.15)' }} iconColor="#FFFFFF" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal className="max-w-5xl mx-auto px-8 py-14 text-center" style={{ background: '#141414' }}>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Your first session&apos;s free</h2>
          <p className="mt-3 text-sm text-white/50">No contract. No lock-in. Just lift.</p>
          <GlowLink href="/starter/remix-ironclad/contact">Get started</GlowLink>
        </Reveal>
      </section>
    </>
  )
}

function GlowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative inline-block mt-8">
      <motion.span
        className="absolute inset-0 rounded-none"
        animate={{ boxShadow: ['0 0 0px 0px rgba(220,38,38,0.45)', '0 0 32px 6px rgba(220,38,38,0.35)', '0 0 0px 0px rgba(220,38,38,0.45)'] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <span
        className="relative inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-150 hover:opacity-85 active:scale-95"
        style={{ background: '#DC2626', color: '#0B0A0A' }}
      >
        {children}
      </span>
    </Link>
  )
}
