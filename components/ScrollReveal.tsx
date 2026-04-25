'use client'

import { useEffect, useRef, useState, CSSProperties } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  // Scoped to opacity + transform only — does not interfere with
  // hover transitions (bg-color, color, etc.) on inner elements.
  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.65s',
    transitionTimingFunction: 'ease-out',
    transitionDelay: visible ? '0ms' : `${delay}ms`,
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
