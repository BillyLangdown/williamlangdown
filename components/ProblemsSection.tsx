'use client'

import { useEffect, useRef, useState } from 'react'
import ClipReveal from '@/components/ClipReveal'

const problems = [
  {
    title: 'Low conversion rates',
    description:
      "Visitors browse but don't buy. Something in the journey is creating doubt, and doubt kills conversions.",
  },
  {
    title: 'Weak trust signals',
    description:
      "No reviews, a vague returns policy, or a dated design. Customers leave before they commit when trust isn't established.",
  },
  {
    title: 'Weak product/service pages',
    description:
      "Thin copy and poor imagery fail to answer the questions customers need answered before they'll hand over their card.",
  },
  {
    title: 'Confusing shopping',
    description:
      'A navigation or checkout that makes people stop and think is a checkout that makes people leave.',
  },
  {
    title: 'Generic looking websites',
    description:
      'If you want the best experience for your customer, you need to have the website built with them in mind, not a generic template.',
  },
  {
    title: 'Technical issues',
    description:
      'Does your website look strange on mobile? Are the images loading slowly or pages taking ages to load? I can look into these problems and offer solutions.',
  },
]

export default function ProblemsSection() {
  const listRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (listRef.current) observer.observe(listRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-subtle">
      <div className="max-w-6xl mx-auto">
        <ClipReveal className="mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink">
            Problems I fix.
          </h2>
        </ClipReveal>

        <div ref={listRef} className="flex flex-col">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-3 md:gap-16 py-7 border-t border-border-light hover:border-tertiary transition-colors duration-200 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.6s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <h3 className="text-base font-medium text-ink group-hover:text-accent transition-colors duration-200">
                {problem.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
          <div className="border-t border-border-light" />
        </div>
      </div>
    </section>
  )
}
