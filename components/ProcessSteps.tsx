'use client'

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Understand',
    description: 'The business, its customers, competitors and the evidence behind them. What the actual problem is, not just the symptom that prompted the call.',
  },
  {
    title: 'Define',
    description: "Priorities and direction. What needs to change first, and what doesn't need touching at all.",
  },
  {
    title: 'Create',
    description: 'Identity, content and experience, built on the direction agreed above.',
  },
  {
    title: 'Build',
    description: 'Websites, systems and technology, implemented properly.',
  },
]

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
      {steps.map((step, i) => (
        <div key={i} className="lg:border-l lg:border-border-light lg:pl-5 lg:first:pl-0 lg:first:border-l-0">
          <p className="font-display text-2xl text-tertiary/50 mb-3">{String(i + 1).padStart(2, '0')}</p>
          <h3 className="text-base font-semibold text-ink mb-2 leading-snug">{step.title}</h3>
          <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
