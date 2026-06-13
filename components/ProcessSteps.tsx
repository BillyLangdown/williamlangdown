'use client'

type Step = {
  title: string
  description: string
  bullets?: string[]
}

const steps: Step[] = [
  {
    title: 'Discuss',
    description: "A short call to understand your business, goals, and what you need from the site. No commitment required. Just to make sure we're a good fit.",
  },
  {
    title: 'Design',
    description: "I'll send you a questionnaire covering the specifics: who your target audience is, what you sell, the mood and feel you want to get across, and any pages or features you have in mind. We can go into anything the questionnaire doesn't cover too.",
  },
  {
    title: 'Build',
    description: "I'm a trained software developer writing in JavaScript, with no page-builder limits. I'll use whatever stack fits best:",
    bullets: [
      'Custom databases & content management systems',
      'Booking systems & AI integrations',
      'E-commerce via Shopify or similar',
      'Can work with existing third-party sites, though some builders add complexity',
    ],
  },
  {
    title: 'Launch',
    description: "Once you're happy, the site goes live. I manage deployment and stay on hand for the first few days.",
  },
]

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <div
            className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
            style={{ background: '#2563EB', opacity: 0.55 }}
          />
          <span className="text-sm text-secondary leading-relaxed">{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12">
      {steps.map((step, i) => (
        <div key={i}>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-5"
            style={{
              background: 'rgba(37,99,235,0.08)',
              color: '#2563EB',
              border: '2px solid rgba(37,99,235,0.22)',
            }}
          >
            {i + 1}
          </div>
          <h3 className="text-base font-semibold text-ink mb-2 leading-snug">{step.title}</h3>
          <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
          {step.bullets && <BulletList bullets={step.bullets} />}
        </div>
      ))}
    </div>
  )
}
