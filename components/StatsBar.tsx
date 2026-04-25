'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 0.1,
    suffix: 's',
    label: 'is how quickly users form a first impression',
  },
  {
    value: 15,
    suffix: 's',
    label: 'is how long users stay if they don\'t find value or trust in your messaging',
  },
  {
    value: 88,
    suffix: '%',
    label: 'of users won\'t return after a poor experience.',
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
}: {
  value: number
  suffix: string
  label: string
  animate: boolean
}) {
  const count = useCountUp(value, animate)
  const display = value === 0.1 ? count.toFixed(1) : Math.floor(count)

  return (
    <div className="py-14 md:px-10 first:pl-0 last:pr-0 text-center flex flex-col items-center">
      <div className="w-8 h-0.5 bg-accent mb-5 rounded-full" />
      <span className="block text-5xl font-heading font-bold text-white mb-3 tracking-tight">
        {display}
        {suffix}
      </span>
      <span className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto block">
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
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-ink" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            animate={visible}
          />
        ))}
      </div>
    </section>
  )
}
