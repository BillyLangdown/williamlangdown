'use client'

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Understand',
    description: 'The business, the market, the audience and the competitors. What the problem actually is, not just the symptom that prompted the call.',
  },
  {
    title: 'Define',
    description: "Priorities and strategic direction. What needs to change first, and what doesn't need touching at all.",
  },
  {
    title: 'Create',
    description: 'Identity, digital experience or system, developed around the direction agreed in the previous stage, not before it.',
  },
  {
    title: 'Build',
    description: 'Production implementation: designed, developed and tested properly, whether that\'s a brand system, a website or software.',
  },
  {
    title: 'Evolve',
    description: 'Measuring what changed, refining what didn\'t work as expected, and identifying what to tackle next.',
  },
]

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
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
