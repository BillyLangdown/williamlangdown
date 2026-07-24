'use client'

import { motion } from 'framer-motion'

export const EASE = [0.16, 1, 0.3, 1] as const

export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const gridItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}
