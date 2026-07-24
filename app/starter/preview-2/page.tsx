'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PhotoPlaceholder from '../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem, EASE } from '../_shared/Reveal'
import StatCounter from '../_shared/StatCounter'

const offerings = [
  {
    name: 'Weekly bouquets',
    desc: 'Fresh, seasonal, delivered every Friday.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21c0-5 0-9 0-13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 12c-3-1-4.5-3.5-4.5-6.5C10.5 5.5 12 8 12 12z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 12c3-1 4.5-3.5 4.5-6.5C13.5 5.5 12 8 12 12z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Weddings & events',
    desc: 'From a single arch to a full venue.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9" cy="13" r="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="13" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 5.5l1-2 1 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Gifting',
    desc: 'Same-day delivery across Bristol.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="10" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 10h16M12 10v10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 10c-2 0-3.5-1-3.5-2.75S9.5 4.5 12 6.5c2.5-2 3.5-.5 3.5 0.75S14 10 12 10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const testimonials = [
  { name: 'A regular customer', text: 'Every bunch feels like it was picked just for the person receiving it.' },
  { name: 'A wedding client', text: 'They understood the mood we wanted before we could even explain it properly.' },
  { name: 'A local shop owner', text: 'Same-day delivery has saved me more than once. Always beautifully arranged.' },
]

const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const heroItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }

export default function Preview2Home() {
  const offeringsRef = useRef<HTMLElement>(null)
  const { scrollYProgress: offeringsProgress } = useScroll({ target: offeringsRef, offset: ['start end', 'end start'] })
  const blobAY = useTransform(offeringsProgress, [0, 1], ['-45%', '45%'])
  const blobBY = useTransform(offeringsProgress, [0, 1], ['50%', '-50%'])
  const blobRotate = useTransform(offeringsProgress, [0, 1], [0, 40])
  const cardsY = useTransform(offeringsProgress, [0, 1], ['4%', '-4%'])

  return (
    <>
      {/* Hero — the one place the botanical pattern appears, faded into the
          cream toward the bottom edge so it reads as a wallpapered nook
          rather than a wallpapered page. */}
      <section className="relative px-6 pt-16 pb-24 overflow-hidden" style={{ background: '#FAF7F1' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/starter/willow-hero-pattern.jpg')",
            backgroundSize: '640px 620px',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
            opacity: 0.55,
            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row gap-14 md:gap-16 items-center">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.p variants={heroItem} className="text-xs uppercase tracking-[0.25em] mb-6" style={{ color: '#8A7A65' }}>
              Independent florist · Bristol
            </motion.p>
            <motion.h1
              variants={heroItem}
              style={{ fontFamily: 'var(--font-willow-display)', color: '#263126' }}
              className="text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance"
            >
              Flowers made
              <br />
              for moments
            </motion.h1>
            <motion.p variants={heroItem} className="mt-7 text-base max-w-md mx-auto md:mx-0 leading-relaxed" style={{ color: '#716858' }}>
              Seasonal bouquets, wedding flowers and thoughtful gifts, arranged by hand with care.
            </motion.p>
            <motion.div variants={heroItem}>
              <Link
                href="/starter/preview-2/contact"
                className="inline-flex items-center gap-2 mt-9 px-8 py-4 text-sm font-medium rounded-full transition-all hover:opacity-90 hover:scale-[1.03] active:scale-95"
                style={{ background: '#536B4F', color: '#FFFFFF' }}
              >
                Explore bouquets
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative shrink-0 w-full max-w-sm mx-auto md:w-[26rem] md:max-w-none order-1 md:order-2"
          >
            <div
              className="relative w-full aspect-[4/5] rounded-sm overflow-hidden group"
              style={{ boxShadow: '0 30px 60px -20px rgba(38,49,38,0.25)' }}
            >
              <PhotoPlaceholder
                label="A tall photo of your work, shop, or flowers goes here"
                src="/images/starter/willow-hero.jpg"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                darken={0.08}
                overlayLabel="Your photo"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 py-4">
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-3xl mx-auto grid grid-cols-3 divide-x"
          style={{ borderColor: 'rgba(58,50,42,0.1)' }}
        >
          {[['3+', 'Years arranging'], ['500+', 'Bouquets a year'], ['40+', 'Weekly deliveries']].map(([num, label]) => (
            <motion.div key={label} variants={gridItem}>
              <StatCounter
                value={num}
                label={label}
                numberColor="#C97B5A"
                labelColor="#8A7A65"
                numberClassName="text-3xl leading-none"
                labelClassName="mt-2 text-xs uppercase tracking-widest"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Offerings: deep contrast block so the page has a real beat, not more cream */}
      <section ref={offeringsRef} className="relative px-6 py-20 overflow-hidden" style={{ background: '#2F3B2C' }}>
        <motion.div
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '-10%', left: '-8%', width: '380px', height: '380px',
            background: 'radial-gradient(circle, rgba(201,123,90,0.35), transparent 70%)',
            filter: 'blur(40px)', y: blobAY, rotate: blobRotate,
          }}
        />
        <motion.div
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            bottom: '-15%', right: '-6%', width: '420px', height: '420px',
            background: 'radial-gradient(circle, rgba(227,167,133,0.28), transparent 70%)',
            filter: 'blur(48px)', y: blobBY,
          }}
        />
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ y: cardsY }}
          className="relative max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {offerings.map(o => (
            <motion.div
              key={o.name}
              variants={gridItem}
              className="flex flex-col items-center text-center px-6 py-8 rounded-lg backdrop-blur-md transition-colors duration-300 hover:bg-[rgba(251,246,239,0.12)]"
              style={{
                background: 'rgba(251,246,239,0.08)',
                border: '1px solid rgba(251,246,239,0.16)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 30px -12px rgba(0,0,0,0.35)',
              }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full mb-4" style={{ background: 'rgba(201,123,90,0.18)', color: '#E3A785' }}>
                {o.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-willow-display)', color: '#FBF6EF' }} className="text-xl mb-2">
                {o.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,246,239,0.6)' }}>{o.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-willow-display)', color: '#263126' }} className="text-2xl md:text-3xl">
              Kind words
            </h2>
          </Reveal>
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {testimonials.map(t => (
              <motion.div key={t.name} variants={gridItem} className="relative p-6 rounded-lg" style={{ background: '#F1E7D8' }}>
                <span aria-hidden style={{ fontFamily: 'var(--font-willow-display)', color: '#C97B5A', opacity: 0.35 }} className="absolute -top-2 left-4 text-5xl leading-none select-none">
                  &ldquo;
                </span>
                <p style={{ fontFamily: 'var(--font-willow-display)', color: '#3A322A' }} className="relative text-base leading-snug mt-4">
                  {t.text}
                </p>
                <p className="relative mt-4 text-xs uppercase tracking-widest" style={{ color: '#8A7A65' }}>{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-28 overflow-hidden">
        <PhotoPlaceholder
          label="A photo for the closing CTA goes here"
          src="/images/starter/willow-hero.jpg"
          className="absolute inset-0"
          darken={0.55}
          objectPosition="50% 30%"
          overlayPosition="corner"
        />
        <Reveal className="relative max-w-xl mx-auto text-center">
          <h2 style={{ fontFamily: 'var(--font-willow-display)', color: '#FBF6EF' }} className="text-3xl md:text-4xl">
            Order this week&apos;s bouquet
          </h2>
          <Link
            href="/starter/preview-2/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 text-sm font-medium rounded-full transition-all hover:opacity-90 hover:scale-[1.03] active:scale-95"
            style={{ background: '#536B4F', color: '#FFFFFF' }}
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  )
}
