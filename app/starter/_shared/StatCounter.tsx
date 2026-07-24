'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

export default function StatCounter({
  value,
  label,
  numberColor,
  labelColor,
  className = 'px-6 py-10 text-center',
  numberClassName = 'text-4xl font-extrabold',
  labelClassName = 'mt-1 text-xs font-bold uppercase tracking-widest',
}: {
  value: string
  label: string
  numberColor: string
  labelColor: string
  className?: string
  numberClassName?: string
  labelClassName?: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLParagraphElement>(null)
  const inView = useInView(wrapRef, { once: true, amount: 0.6 })

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView) return
    const node = numberRef.current
    if (!node) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        node.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, target, suffix])

  return (
    <div ref={wrapRef} className={className}>
      <p ref={numberRef} className={numberClassName} style={{ color: numberColor }}>
        0{suffix}
      </p>
      <p className={labelClassName} style={{ color: labelColor }}>{label}</p>
    </div>
  )
}
