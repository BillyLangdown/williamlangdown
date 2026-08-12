'use client'

import { useRef } from 'react'
import Link from 'next/link'
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

        <div className="py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
          <motion.div
            className="rounded-full bg-accent shrink-0"
            style={{ width: '130px', height: '130px', y: circleY }}
          />
          <motion.div {...textReveal} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              05 — About
            </p>
            <p className="font-display text-3xl md:text-4xl text-ink leading-[1.15] mb-5">
              A degree in branding, and a career spent building software.
            </p>
            <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">
              I trained in advertising and branding before moving into professional software
              development. Most people specialise in one side of that or the other. Working across
              both means the strategic thinking and the implementation stay connected through a
              project, rather than getting handed off between people who never talk to each other.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              More about the practice
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
