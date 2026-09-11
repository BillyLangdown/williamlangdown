'use client'

import type { CSSProperties } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    word: 'Understand',
    clause:
      'Your business, audience, competition and what actually needs to change.',
    area: 'understand',
    accent: false,
  },
  {
    word: 'Define',
    clause: 'Turn the research into a clear strategy and direction.',
    area: 'define',
    accent: false,
  },
  {
    word: 'Create',
    clause:
      'Develop a creative direction with reason behind every decision.',
    area: 'create',
    accent: false,
  },
  {
    word: 'Build',
    clause: 'Bring the chosen direction to life, from design to finished product.',
    area: 'build',
    accent: true,
  },
  {
    word: 'Evolve',
    clause: "Launch, learn and improve where there's more value to add.",
    area: 'evolve',
    accent: false,
  },
] as const

// 12-column editorial grid: Understand takes the left seven columns across
// two rows (the dominant cell), Define/Create stack in the remaining five
// columns beside it, then Build/Evolve split the final row 5/7. Deliberately
// asymmetric so the section reads as a spread rather than five equal tiles.
// display is intentionally left to the "hidden md:grid" classes below —
// setting it here would override the mobile "hidden" state, since inline
// styles always beat class-based rules regardless of media query.
const desktopGridStyle: CSSProperties = {
  gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
  gridTemplateRows: 'minmax(16rem, auto) minmax(16rem, auto) minmax(15rem, auto)',
  gridTemplateAreas:
    '"understand understand understand understand understand understand understand define define define define define" ' +
    '"understand understand understand understand understand understand understand create create create create create" ' +
    '"build build build build build evolve evolve evolve evolve evolve evolve evolve"',
}

// Purely decorative: no href/click-through, just the corner-radius hover
// morph as an art moment. Rendered as divs, not links, so no pointer
// cursor or focus affordance implies a destination that doesn't exist.
export default function ProcessStrip() {
  return (
    <section
      data-nav-theme="dark"
      className="relative z-10 overflow-hidden bg-[#10233F]"
    >
      <ScrollReveal>

        {/* Mobile: full-bleed editorial vertical stack */}
        <div className="flex flex-col md:hidden">
          {steps.map((step, index) => {
            const isFirst = index === 0
            const isLast = index === steps.length - 1

            return (
              <div
                key={step.word}
                className={`
                  flex flex-col justify-center px-6
                  border-white/10
                  ${!isLast ? 'border-b' : ''}
                  ${isFirst ? 'py-9' : 'py-7'}
                  ${step.accent ? 'bg-terracotta' : ''}
                `}
              >
                <h3
                  className={`
                    font-heading font-medium leading-[0.98] tracking-[-0.035em]
                    ${isFirst ? 'text-[2.4rem]' : 'text-[1.9rem]'}
                    ${step.accent ? 'text-navy-deep' : 'text-bone'}
                  `}
                >
                  {step.word}
                </h3>

                <p
                  className={`
                    mt-3 max-w-[28ch] text-[13px] leading-[1.55]
                    ${step.accent ? 'text-navy-deep/70' : 'text-bone/55'}
                  `}
                >
                  {step.clause}
                </p>
              </div>
            )
          })}
        </div>

        {/* Desktop: grid stays flush left; a side rail on the right carries
            the oversized "Process" section label, rotated to run down the
            margin, so the grid stops short of the right edge instead of
            going fully full-bleed on both sides. */}
        <div className="hidden md:flex md:items-stretch">
          <div
            className="grid flex-1 gap-px bg-bone"
            style={desktopGridStyle}
          >
            {steps.map((step) => (
              <div
                key={step.word}
                style={{ gridArea: step.area }}
                className={`
                  group relative flex flex-col justify-end
                  overflow-hidden rounded-none p-8 lg:p-10
                  transition-[border-radius] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  md:hover:rounded-[28px]
                  ${step.accent ? 'bg-terracotta' : 'bg-navy'}
                `}
              >
                <div>
                  <h3
                    className={`
                      mb-3 font-heading font-medium leading-[0.94] tracking-[-0.04em]
                      transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      motion-reduce:transition-none md:group-hover:-translate-y-1
                      ${step.area === 'understand' ? 'text-[3.4rem] lg:text-[4.4rem]' : 'text-[2.1rem] lg:text-[2.6rem]'}
                      ${step.accent ? 'text-navy-deep' : 'text-bone'}
                    `}
                  >
                    {step.word}
                  </h3>

                  <p
                    className={`
                      max-w-[26ch] text-[13.5px] leading-[1.55]
                      ${step.accent ? 'text-navy-deep/70' : 'text-bone/55'}
                    `}
                  >
                    {step.clause}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-28 shrink-0 items-center justify-center bg-bone lg:w-36 xl:w-44">
            <span
              className="
                -rotate-90 whitespace-nowrap font-heading font-medium uppercase
                tracking-[-0.01em] text-navy/20
                text-6xl lg:text-7xl xl:text-8xl
              "
            >
              The Process
            </span>
          </div>
        </div>

      </ScrollReveal>
    </section>
  )
}
