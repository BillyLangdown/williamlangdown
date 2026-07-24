'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PageIntro({
  bg,
  textColor,
  accentColor,
  label,
}: {
  bg: string
  textColor: string
  accentColor: string
  label: string
}) {
  const [done, setDone] = useState(false)

  if (done) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      style={{ background: bg }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: 'easeInOut' }}
      onAnimationComplete={() => setDone(true)}
      aria-hidden
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative text-lg sm:text-2xl font-semibold tracking-tight whitespace-nowrap"
        style={{ color: textColor }}
      >
        {label}
        <span style={{ color: accentColor }}>.</span>
      </motion.p>
    </motion.div>
  )
}
