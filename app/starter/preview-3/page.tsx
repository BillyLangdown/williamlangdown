'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PhotoPlaceholder from '../PhotoPlaceholder'
import Reveal, { staggerGrid, gridItem, EASE } from '../_shared/Reveal'
import StatCounter from '../_shared/StatCounter'

const services = [
  { name: 'Financial planning', desc: 'Clear, independent advice for individuals and small businesses.' },
  { name: 'Business advisory', desc: 'Structuring, forecasting, and decisions that hold up under scrutiny.' },
  { name: 'Ongoing support', desc: 'A named contact, not a call centre.' },
]

function ArrowLink({ href, children, dark = true }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 mt-9 px-6 py-3.5 text-sm font-medium transition-all"
      style={{ background: dark ? '#1C2333' : 'transparent', color: dark ? '#FFFFFF' : '#1C2333' }}
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}

export default function Preview3Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-24 pb-28">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#D9B96C' }}>
              Independent Financial &amp; Business Consulting
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-2xl" style={{ color: '#1C2333' }}>
              Considered advice, without the jargon
            </h1>
            <p className="mt-7 text-base max-w-lg leading-relaxed" style={{ color: '#5B6478' }}>
              We work with a small number of clients at a time, so every recommendation is genuinely
              tailored, not a template with your name on it.
            </p>
            <ArrowLink href="/starter/preview-3/contact">Arrange a call</ArrowLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            <PhotoPlaceholder
              label="Your headshot"
              src="/images/starter/hartley-headshot.jpg"
              className="relative shrink-0 w-72 sm:w-80 md:w-[26rem] aspect-[3/4] rounded-2xl mx-auto md:mx-0"
              overlayLabel="Your photo"
              darken={0.35}
              objectPosition="50% 20%"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20" style={{ background: '#F7F8FA' }}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {services.map(s => (
            <motion.div key={s.name} variants={gridItem} className="group">
              <div className="h-px mb-5 w-8 transition-all duration-500 ease-out group-hover:w-14" style={{ background: '#D9B96C' }} />
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1C2333' }}>{s.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5B6478' }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust strip */}
      <section className="px-6 py-16 border-b" style={{ borderColor: '#E7E9EE' }}>
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center"
        >
          {[['18 yrs', 'In practice'], ['FCA', 'Regulated'], ['120+', 'Clients advised']].map(([num, label]) => (
            <motion.div key={label} variants={gridItem}>
              {num === 'FCA' ? (
                <>
                  <p className="text-2xl font-semibold" style={{ color: '#1C2333' }}>{num}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: '#9AA2B2' }}>{label}</p>
                </>
              ) : (
                <StatCounter
                  value={num}
                  label={label}
                  numberColor="#1C2333"
                  labelColor="#9AA2B2"
                  className=""
                  numberClassName="text-2xl font-semibold"
                  labelClassName="mt-1 text-xs uppercase tracking-widest"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quote */}
      <section className="px-6 py-24">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium leading-snug" style={{ color: '#1C2333' }}>
            &ldquo;The first advisor who explained our options clearly enough that we could actually decide.&rdquo;
          </p>
          <p className="mt-5 text-sm" style={{ color: '#9AA2B2' }}>A long-standing client</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: '#1C2333' }}>
            Start with a no-obligation conversation
          </h2>
          <div className="flex justify-center">
            <ArrowLink href="/starter/preview-3/contact">Arrange a call</ArrowLink>
          </div>
        </Reveal>
      </section>
    </>
  )
}
