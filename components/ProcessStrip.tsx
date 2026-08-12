'use client'

import ScrollReveal from '@/components/ScrollReveal'

const steps = ['Understand', 'Define', 'Create', 'Build', 'Evolve']

export default function ProcessStrip() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#10233F' }}>
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-5">
            {steps.map((step, i) => (
              <span key={step} className="flex items-center gap-x-3 md:gap-x-5">
                <span className="text-lg md:text-2xl font-heading font-semibold uppercase tracking-wide text-bone">{step}</span>
                {i < steps.length - 1 && <span className="text-terracotta text-lg md:text-2xl">/</span>}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
