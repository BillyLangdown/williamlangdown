'use client'

import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    title: 'Visitors who don\'t enquire',
    description:
      "People land on your site, look around, and leave without getting in touch. Something in the journey is putting them off — and it's usually fixable.",
  },
  {
    title: 'No trust signals',
    description:
      "No reviews, a thin contact page, vague policies. Customers notice these gaps even when they can't name them, and they move on to someone else.",
  },
  {
    title: 'Copy that doesn\'t sell',
    description:
      "If your website doesn't clearly explain what you do, who it's for, and why you're the right choice, visitors won't stick around long enough to find out.",
  },
  {
    title: 'Navigation that gets in the way',
    description:
      'If someone has to think about where to go next, that\'s friction. Too much friction and they leave. Good structure makes the next step obvious.',
  },
  {
    title: 'A design that doesn\'t reflect your quality',
    description:
      'If your website looks like it could belong to anyone, it\'s harder to build confidence. Design shapes how people feel about you before they read a word.',
  },
  {
    title: 'Technical issues quietly costing you',
    description:
      'Slow load times, broken mobile layouts, images that don\'t load. These happen quietly and cost more in lost business than most people realise.',
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
    <section className="py-20 px-6 bg-subtle">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">Common problems</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">
            Sound familiar?
          </h2>
        </div>

        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`border-t border-border-light py-8 ${
                i % 2 === 0 ? 'md:pr-14' : 'md:pl-14 md:border-l md:border-border-light'
              }`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <h3 className="text-base font-semibold text-ink mb-2">
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
