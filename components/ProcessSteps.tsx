'use client'

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Understand',
    description: 'Your business, audience, competition and what actually needs to change.',
  },
  {
    title: 'Define',
    description: 'Turn the research into a clear strategy and direction.',
  },
  {
    title: 'Create',
    description: 'Explore ideas and develop a creative direction with reason behind every decision.',
  },
  {
    title: 'Build',
    description: 'Bring the chosen direction to life, from design through to a finished product.',
  },
  {
    title: 'Evolve',
    description: "Launch, learn and improve where there's more value to add.",
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
