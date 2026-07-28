'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

const textReveal = {
  initial: { opacity: 0, scale: 0.94, y: 18 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Circle drifts as the section passes through the viewport, tracked over
  // its full time on screen rather than tied to the page's absolute scroll.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const circleY = useTransform(scrollYProgress, [0, 1], [-60, 60])

  return (
    <section ref={sectionRef} className="relative px-6 overflow-hidden" style={dotGrid}>
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border-light" />

        {/* Mobile: min-height fills most of the viewport so this section (plus
            the ticker above it) is what's visible on screen, without the next
            section peeking in. Circle bleeds off the right edge, large and
            mostly off screen, sitting behind the text column which stays
            comfortably narrow so the two never overlap. */}
        <div className="md:hidden flex flex-col justify-start pt-20" style={{ minHeight: '88svh' }}>
          <div className="relative">
            <motion.div
              className="absolute rounded-full bg-accent pointer-events-none"
              style={{ width: '260px', height: '260px', right: '-180px', top: '40px', y: circleY }}
            />
            <motion.div {...textReveal} className="relative py-14 max-w-[250px]">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Who am I?
              </p>
              <p className="font-heading text-3xl font-bold tracking-tight text-ink leading-[1.15] mb-4">
                Hi, I&apos;m William.
              </p>
              <p className="text-base text-secondary leading-relaxed">
             A web designer and software developer based in Taunton, Somerset, building websites, software and automation for businesses across Somerset and the UK.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Desktop: circle is a normal flex item, flush with the same left edge as
            the rest of the page, followed by the text with a fixed gap. */}
        <div className="py-24 hidden md:flex items-center gap-10">
          <motion.div
            className="rounded-full bg-accent flex-shrink-0"
            style={{ width: '170px', height: '170px', y: circleY }}
          />
          <motion.div {...textReveal} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Who am I?
            </p>
            <p className="font-heading text-5xl font-bold tracking-tight text-ink leading-[1.1] mb-5">
              Hi, I&apos;m William.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
            Based in Taunton, Somerset, I build websites, software and automation for businesses looking to save time, win more enquiries and improve their digital presence. Tell me about your project and i'll handle the boring stuff.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
