'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wrench, Droplets, Siren, FileCheck, ShieldCheck, BadgeCheck, Award, Clock } from 'lucide-react'
import PhotoPlaceholder from '../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem, EASE } from '../_shared/Reveal'
import StatCounter from '../_shared/StatCounter'

const services = [
  { icon: Wrench, name: 'Boiler repair & servicing', desc: 'Fast diagnostics and fixed-price servicing, same week.' },
  { icon: Droplets, name: 'Bathroom & kitchen plumbing', desc: 'From a dripping tap to a full re-plumb.' },
  { icon: Siren, name: 'Emergency call-outs', desc: 'Burst pipe or no heating? We answer, day or night.' },
  { icon: FileCheck, name: 'Gas safety certificates', desc: 'Landlord CP12 certificates, done properly.' },
]

const badges = [
  { icon: ShieldCheck, label: 'Gas Safe Registered', sub: 'No.123456' },
  { icon: BadgeCheck, label: 'Fully Insured', sub: '£2m public liability' },
  { icon: Award, label: 'Checkatrade Approved', sub: '5.0 average rating' },
  { icon: Clock, label: '10-Year Guarantee', sub: 'On all installations' },
]

const areas = ['Bristol', 'Bath', 'Keynsham', 'Portishead', 'Nailsea', 'Clevedon', 'Yate', 'Thornbury']

const reviews = [
  { name: 'Sarah Coombes', meta: 'Emergency call-out', text: 'Boiler went out on a Sunday morning in December. They picked up, and someone was here within the hour.' },
  { name: 'Dave Tranter', meta: 'Bathroom re-plumb', text: 'Straight quote, no upselling, turned up when they said they would. Rare these days.' },
  { name: 'Priya Malhotra', meta: 'Gas safety certificate', text: 'Explained exactly what they were checking and why. Certificate landed in my inbox the same day.' },
]

function Stars({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex gap-0.5 shrink-0 ${className ?? ''}`} style={{ color: '#F2A93B' }} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L10 15l-5.5 3.1 1.4-6.1L1.2 7.8l6.2-.6L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }
const heroItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }

export default function Preview6Home() {
  return (
    <>
      {/* Hero: full-bleed photo, on-brand and simple rather than a gimmick */}
     <section className="relative px-5 sm:px-6 pt-24 pb-12 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28 overflow-hidden min-h-[65svh] sm:min-h-0 flex items-end sm:items-center">
        {/* Mobile crop keeps the shot below the head (gloves, tools, tile);
            desktop crop has room to show more of the frame. */}
        <div className="absolute inset-0 sm:hidden">
          <PhotoPlaceholder
            label="A photo of you or your team at work goes here"
            src="/images/starter/keystone-hero-mobile.jpg"
            className="absolute inset-0"
            overlayPosition="corner"
            darken={0.6}
  
            objectPosition="55% 30%"
          />
        </div>
        <div className="absolute inset-0 hidden sm:block">
          <PhotoPlaceholder
            label="A photo of you or your team at work goes here"
            src="/images/starter/keystone-hero.jpg"
            className="absolute inset-0"
            overlayPosition="corner"
            darken={0.6}
            objectPosition="45% 42%"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(19,42,61,0.85) 10%, rgba(19,42,61,0.15) 55%, transparent 75%)' }}
        />

        <motion.div variants={heroContainer} initial="hidden" animate="visible" className="relative max-w-5xl mx-auto w-full">
          <div className="max-w-2xl">
          <motion.p
            variants={heroItem}
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 sm:mb-6"
            style={{ background: 'rgba(242,169,59,0.2)', color: '#F2A93B' }}
          >
            Family-run · Bristol
          </motion.p>
          <motion.h1
            variants={heroItem}
            style={{ fontFamily: 'var(--font-keystone-display)' }}
            className="text-[2.75rem] leading-[0.98] sm:text-5xl md:text-6xl font-extrabold uppercase sm:leading-[0.98] tracking-tight text-balance text-white"
          >
            Plumbing &amp; heating<br className="hidden sm:block" /> you can{' '}
            <span style={{ color: '#F2A93B' }}>rely on</span>
          </motion.h1>
          <motion.p variants={heroItem} className="mt-5 sm:mt-6 text-[15px] sm:text-base max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Gas Safe registered, fully insured, and we actually answer the phone. Emergency call-outs,
            bathroom fits, and boiler servicing across Bristol.
          </motion.p>
          <motion.div variants={heroItem} className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="tel:01170000000"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm font-bold uppercase tracking-wide rounded-sm transition-transform hover:scale-[1.02] active:scale-95"
              style={{ background: '#F2A93B', color: '#132A3D' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              0117 000 0000
            </a>
            <Link
              href="/starter/preview-6/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm font-bold uppercase tracking-wide rounded-sm border-2 border-white/70 text-white transition-colors hover:bg-white hover:text-[#132A3D]"
            >
              Get a free quote
            </Link>
          </motion.div>
          <motion.p variants={heroItem} className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <Stars />
            <span>5.0 rated</span>
            <span aria-hidden className="opacity-50">·</span>
            <span>Gas Safe registered</span>
            <span aria-hidden className="opacity-50">·</span>
            <span>Fully insured</span>
          </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Trust strip */}
      <section className="border-y" style={{ borderColor: '#E4E9EE' }}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0"
          style={{ borderColor: '#E4E9EE' }}
        >
          {[['12+', 'Years trading'], ['800+', 'Jobs completed'], ['24/7', 'Emergency call-outs'], ['5.0', 'Google rating']].map(([num, label]) => (
            <motion.div key={label} variants={gridItem} style={{ borderColor: '#E4E9EE' }}>
              <StatCounter
                value={num}
                label={label}
                numberColor="#132A3D"
                labelColor="#5C6B78"
                numberClassName="text-3xl font-extrabold"
                labelClassName="mt-1 text-xs font-semibold uppercase tracking-widest"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8A5E13' }}>What we do</p>
            <h2 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight" >
              Straightforward trade work, done properly
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {services.map(({ icon: Icon, name, desc }) => (
              <motion.div
                key={name}
                variants={gridItem}
                className="flex items-start gap-4 p-6 rounded-sm transition-colors duration-300 hover:bg-[#F5F7F9]"
                style={{ border: '1px solid #E4E9EE' }}
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'rgba(19,42,61,0.06)', color: '#132A3D' }}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: '#132A3D' }}>{name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C6B78' }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accreditation badges */}
      <section className="px-6 py-16" style={{ background: '#132A3D' }}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {badges.map(({ icon: Icon, label, sub }) => (
            <motion.div key={label} variants={gridItem} className="flex flex-col items-center text-center gap-2.5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(242,169,59,0.15)', color: '#F2A93B' }}>
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <p className="text-sm font-bold text-white">{label}</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Recent work gallery */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8A5E13' }}>Recent jobs</p>
            <h2 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Take a look at recent work
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {[0, 1, 2, 3, 4, 5].map(i => (
              <motion.div key={i} variants={gridItem} className="relative aspect-square overflow-hidden">
                <PhotoPlaceholder label="Job photo goes here" className="w-full h-full" style={{ borderColor: '#D9DFE4' }} iconColor="#132A3D" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="px-6 py-20" style={{ background: '#F5F7F9' }}>
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8A5E13' }}>Areas we cover</p>
            <h2 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight" >
              Bristol and the surrounding area
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {areas.map(area => (
              <span
                key={area}
                className="px-4 py-2 text-sm font-semibold rounded-full"
                style={{ background: '#FFFFFF', border: '1px solid #D9DFE4', color: '#132A3D' }}
              >
                {area}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-6 text-sm" style={{ color: '#5C6B78' }}>
            Not sure if we cover your postcode? <Link href="/starter/preview-6/contact" className="font-semibold underline underline-offset-2" style={{ color: '#132A3D' }}>Just ask.</Link>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Stars size={18} />
              <span className="text-lg font-extrabold" style={{ color: '#132A3D' }}>5.0</span>
              <span className="text-sm" style={{ color: '#5C6B78' }}>from recent customers</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12">
              What customers say
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {reviews.map(review => (
              <motion.div key={review.name} variants={gridItem} className="p-6 flex flex-col gap-4" style={{ border: '1px solid #E4E9EE' }}>
                <Stars size={13} />
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#3F4C58' }}>{review.text}</p>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#132A3D' }}>{review.name}</p>
                  <p className="text-xs" style={{ color: '#8A98A5' }}>{review.meta}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24 overflow-hidden" style={{ background: '#132A3D' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 20%, rgba(242,169,59,0.18), transparent 60%)' }}
          aria-hidden
        />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Got a job that needs sorting?
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Call now, or send us a few details and we&apos;ll quote within 24 hours.</p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowCallButton />
            <Link
              href="/starter/preview-6/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide rounded-sm border-2 border-white/30 text-white transition-colors hover:bg-white/10"
            >
              Get a free quote
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function GlowCallButton() {
  return (
    <a href="tel:01170000000" className="relative inline-block">
      <motion.span
        className="absolute inset-0 rounded-sm"
        animate={{ boxShadow: ['0 0 0px 0px rgba(242,169,59,0.5)', '0 0 32px 6px rgba(242,169,59,0.35)', '0 0 0px 0px rgba(242,169,59,0.5)'] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <span
        className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide rounded-sm transition-all hover:scale-[1.02] active:scale-95"
        style={{ background: '#F2A93B', color: '#132A3D' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        0117 000 0000
      </span>
    </a>
  )
}
