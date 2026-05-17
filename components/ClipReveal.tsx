'use client'

import { useEffect, useRef, useState, CSSProperties } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ClipReveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0 }
    )
    observer.observe(el)
    // Fire immediately if already in viewport
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      observer.disconnect()
    }
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = {
    clipPath: visible ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
    transitionProperty: visible ? 'clip-path' : 'none',
    transitionDuration: '0.8s',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
