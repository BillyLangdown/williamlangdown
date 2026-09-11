'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function BackgroundWord({
  word,
  color = '#10233F',
  opacity = 0.05,
  vertical = false,
  parallax = false,
  className = '',
}: {
  word: string
  color?: string
  opacity?: number
  /** Lays the word out top-to-bottom via writing-mode instead of a CSS
   * rotate transform, so its box has real width/height (no oversized
   * rotated bounding box to miscalculate position against). */
  vertical?: boolean
  /** Drifts the word vertically as its own section scrolls through the
   * viewport, tracked against the word's own bounding box rather than
   * needing a ref threaded down from the parent section. */
  parallax?: boolean
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduceMotion ? [-50, 50] : [0, 0])

  return (
    <motion.span
      ref={ref}
      aria-hidden
      style={{
        y,
        fontSize: 'clamp(4.5rem, 17vw, 14rem)',
        color,
        opacity,
        letterSpacing: '-0.02em',
        ...(vertical ? { writingMode: 'vertical-rl' as const, textOrientation: 'sideways' as const } : {}),
      }}
      className={`pointer-events-none select-none absolute font-sans font-extrabold uppercase leading-none whitespace-nowrap ${className}`}
    >
      {word}
    </motion.span>
  )
}
