'use client'

import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  { word: 'Understand', clause: "What's actually going on, not just what's been asked for." },
  { word: 'Define', clause: 'A scope that matches the real problem, not a fixed package.' },
  { word: 'Create', clause: 'Strategy and design worked through together, not handed off.' },
  { word: 'Build', clause: 'Implementation, tested and refined as it goes.' },
  { word: 'Evolve', clause: 'Support after launch, for as long as it stays useful.' },
]

export default function ProcessStrip() {
  return (
    <section data-nav-theme="dark" className="relative z-10 py-20 md:py-28 px-6" style={{ background: '#10233F' }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-y-0 md:divide-x">
            {steps.map((step) => (
              <div key={step.word} className="py-6 first:pt-0 last:pb-0 md:py-0 md:px-6 md:flex-1 md:first:pl-0 md:last:pr-0">
                <p className="text-lg md:text-xl font-heading font-semibold uppercase tracking-wide text-bone mb-1.5">
                  {step.word}
                </p>
                <p className="text-sm text-bone/50 leading-snug max-w-[26ch]">{step.clause}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
