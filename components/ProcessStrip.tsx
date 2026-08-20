'use client'

import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    word: 'Understand',
    clause:
      'Your business, audience, competition and what actually needs to change.',
  },
  {
    word: 'Define',
    clause:
      'Turn the research into a clear strategy and direction.',
  },
  {
    word: 'Create',
    clause:
      'Explore ideas and develop a creative direction with reason behind every decision.',
  },
  {
    word: 'Build',
    clause:
      'Bring the chosen direction to life, from design through to a finished product.',
  },
  {
    word: 'Evolve',
    clause:
      "Launch, learn and improve where there's more value to add.",
  },
]

export default function ProcessStrip() {
  return (
    <section
      data-nav-theme="dark"
      className="relative z-10 bg-[#10233F] px-6 py-16 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>

          {/* Mobile */}
          <div className="grid grid-cols-2 md:hidden">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1

              return (
                <div
                  key={step.word}
                  className={`
                    py-7
                    ${index < 4 ? 'border-b border-white/10' : ''}
                    ${index % 2 === 0 && !isLast ? 'border-r border-white/10 pr-5' : ''}
                    ${index % 2 === 1 ? 'pl-5' : ''}
                    ${isLast ? 'col-span-2 pt-8' : ''}
                  `}
                >
                  <h3
                    className="
                      mb-3
                      font-heading
                      text-[1.55rem]
                      font-medium
                      leading-[0.98]
                      tracking-[-0.035em]
                      text-bone
                    "
                  >
                    {step.word}
                  </h3>

                  <p
                    className={`
                      text-[12.5px]
                      leading-[1.5]
                      text-bone/55
                      ${isLast ? 'max-w-[30ch]' : 'max-w-[21ch]'}
                    `}
                  >
                    {step.clause}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Desktop */}
          <div className="hidden divide-white/10 md:flex md:flex-row md:divide-x">
            {steps.map((step) => (
              <div
                key={step.word}
                className="
                  md:flex-1
                  md:px-8
                  md:first:pl-0
                  md:last:pr-0
                "
              >
                <h3
                  className="
                    mb-4
                    font-heading
                    text-[1.9rem]
                    font-medium
                    leading-[0.98]
                    tracking-[-0.035em]
                    text-bone
                  "
                >
                  {step.word}
                </h3>

                <p
                  className="
                    max-w-[23ch]
                    text-[13px]
                    leading-[1.55]
                    text-bone/55
                  "
                >
                  {step.clause}
                </p>
              </div>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  )
}