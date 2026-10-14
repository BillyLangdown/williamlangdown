'use client'

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Understand',
    description: 'The business, how its work is done today and what is actually causing the problem, which is not always what prompted the call.',
  },
  {
    title: 'Define',
    description: "Priorities and direction: what needs to change first, and what can be left as it is.",
  },
  {
    title: 'Create',
    description: 'The solution itself, whether that is an automation, a system, a website or an identity, based on the direction agreed.',
  },
  {
    title: 'Build',
    description: 'Integrations, automation, software and websites, implemented carefully and checked in use.',
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
