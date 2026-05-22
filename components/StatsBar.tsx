'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 75,
    suffix: '%',
    label: 'judge credibility by design',
  },
  {
    value: 38,
    suffix: '%',
    label: 'leave if the design is poor',
  },
  {
    value: 88,
    suffix: '%',
    label: "won't return after a bad experience",
  },
]

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(target * progress)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])

  return count
}

function StatItem({
  value,
  suffix,
  label,
  animate,
  last,
}: {
  value: number
  suffix: string
  label: string
  animate: boolean
  last: boolean
}) {
  const count = useCountUp(value, animate)
  const display = Math.floor(count)

  return (
    <div className={`flex-1 flex flex-col items-center justify-center py-6 px-8 text-center ${!last ? 'border-b md:border-b-0 md:border-r border-[#e8e4dd]' : ''}`}>
      <span className="block text-4xl font-heading font-bold text-ink tracking-tight leading-none mb-1.5">
        {display}{suffix}
      </span>
      <span className="text-[11px] text-secondary leading-snug max-w-[110px] block">
        {label}
      </span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="px-6 py-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-sm overflow-hidden">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              animate={visible}
              last={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
