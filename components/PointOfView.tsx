'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const symptoms = [
  'The website still explains the business the way it worked five years ago.',
  'The team ends up re-explaining, in person, what the site should already make obvious.',
  'New work keeps arriving through word of mouth, never through the site itself.',
  'Every proposal has to work twice as hard to prove the business is as capable as it actually is.',
]

export default function PointOfView() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-16, 16])

  return (
    <section ref={sectionRef} className="bg-subtle py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
          <motion.div style={{ y }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">02 — What I&apos;ve noticed</p>
            <p className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-ink max-w-xl">
              Most businesses grow faster than the brand, website and systems built to represent them.
            </p>
          </motion.div>

          <div className="flex flex-col justify-center gap-6 lg:pt-14">
            {symptoms.map((s, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-border-light last:border-b-0 last:pb-0">
                <span className="text-xs font-semibold text-tertiary shrink-0 pt-0.5 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-base text-secondary leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-border-light max-w-2xl">
          <p className="text-base md:text-lg text-ink leading-relaxed">
            I don&apos;t think that&apos;s usually a design problem or a technology problem on its own.
            It&apos;s both, considered together, starting with what actually needs to change.
          </p>
        </div>
      </div>
    </section>
  )
}
