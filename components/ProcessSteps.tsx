'use client'

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Discuss the requirement',
    description: 'You tell me what you are trying to build or fix, or describe the problem if you do not yet know the answer. A rough idea is enough to start.',
  },
  {
    title: 'Agree the scope and price',
    description: 'I confirm what the work will involve and what it will cost, so both are agreed before anything is built.',
  },
  {
    title: 'Build, test and hand over',
    description: 'I build it, test it and hand it over to you, explaining how it works.',
  },
]

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8">
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
