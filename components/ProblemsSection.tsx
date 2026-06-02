'use client'

import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    title: 'People visit but never get in touch',
    description:
      "They find your site, look around, and leave. Something in the journey is putting them off. It is usually fixable once you know what it is.",
  },
  {
    title: 'Nothing to make them trust you',
    description:
      "No reviews, a thin contact page, no face behind the business. People notice these gaps even when they cannot name them, and they move on.",
  },
  {
    title: 'The writing does not explain what you do',
    description:
      "If someone lands on your site and cannot tell in ten seconds what you offer and who it is for, they will not stick around to find out.",
  },
  {
    title: 'Hard to know where to go next',
    description:
      "If the next step is not obvious, most people will not look for it. They will just leave. The layout should do that work for them.",
  },
  {
    title: 'Looks like every other website',
    description:
      "If your site could belong to any business in your space, it is harder to stand out. People form an opinion on design before they read anything.",
  },
  {
    title: 'Slow or broken on mobile',
    description:
      "Slow load times, layouts that break on phones, images that do not appear. Most of your visitors are on mobile. These things cost you enquiries.",
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
