'use client'

import { useEffect, useRef, useState } from 'react'
import ClipReveal from '@/components/ClipReveal'

const problems = [
  {
    title: 'Visitors who don\'t convert',
    description:
      "People browse, read, maybe even add things to their basket, then leave. Something in the journey is creating hesitation, and that hesitation adds up.",
  },
  {
    title: 'Missing trust signals',
    description:
      "A vague returns policy, no reviews, a contact page that feels thin. Customers notice these gaps even when they can't name them.",
  },
  {
    title: 'Pages that don\'t answer the question',
    description:
      "Good copy and imagery do the job of a good salesperson. Without them, customers are left guessing, and guessing rarely leads to buying.",
  },
  {
    title: 'Navigation that slows people down',
    description:
      'If someone has to stop and think about where to go, that\'s a moment of friction. Too many of those moments and they leave.',
  },
  {
    title: 'A design that feels off-brand',
    description:
      'When a website looks like it could belong to anyone, it\'s harder to build confidence. Design shapes how people feel about you before they read a word.',
  },
  {
    title: 'Technical problems eroding trust',
    description:
      'Slow load times, broken layouts on mobile, images that fail to appear. These things happen quietly and cost more than most people realise.',
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
          <h2 className="text-7xl md:text-[7rem] font-heading font-bold leading-none tracking-tight text-ink">
            Problems
          </h2>
        </ClipReveal>

        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`group border-t border-border-light py-10 ${
                i % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:border-l md:border-border-light'
              }`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.6s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink group-hover:text-accent transition-colors duration-200 mb-3 leading-snug">
                {problem.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
