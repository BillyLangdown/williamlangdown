'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    word: 'Understand',
    clause:
      'Your business, audience, competition and what actually needs to change.',
    href: '/process#understand',
    area: 'understand',
    accent: false,
  },
  {
    number: '02',
    word: 'Define',
    clause: 'Turn the research into a clear strategy and direction.',
    href: '/process#define',
    area: 'define',
    accent: false,
  },
  {
    number: '03',
    word: 'Create',
    clause:
      'Develop a creative direction with reason behind every decision.',
    href: '/process#create',
    area: 'create',
    accent: false,
  },
  {
    number: '04',
    word: 'Build',
    clause: 'Bring the chosen direction to life, from design to finished product.',
    href: '/process#build',
    area: 'build',
    accent: true,
  },
  {
    number: '05',
    word: 'Evolve',
    clause: "Launch, learn and improve where there's more value to add.",
    href: '/process#evolve',
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

export default function ProcessStrip() {
  return (
    <section
      data-nav-theme="dark"
      className="relative z-10 bg-[#10233F] px-6 py-16 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>

          {/* Mobile: editorial vertical stack, no hover-dependent interaction */}
          <div className="flex flex-col md:hidden">
            {steps.map((step, index) => {
              const isFirst = index === 0
              const isLast = index === steps.length - 1

              return (
                <Link
                  key={step.word}
                  href={step.href}
                  className={`
                    group relative flex flex-col justify-center
                    border-white/10 transition-colors duration-200 active:bg-white/5
                    ${!isLast ? 'border-b' : ''}
                    ${isFirst ? 'py-9' : 'py-7'}
                    ${step.accent ? 'bg-terracotta -mx-6 px-6 md:mx-0' : ''}
                  `}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className={`
                        font-heading text-[11px] font-medium uppercase tracking-[0.22em]
                        ${step.accent ? 'text-navy-deep/70' : 'text-terracotta'}
                      `}
                    >
                      {step.number}
                    </span>
                    <span
                      aria-hidden
                      className={`
                        font-heading text-lg leading-none
                        ${step.accent ? 'text-navy-deep' : 'text-bone/70'}
                      `}
                    >
                      →
                    </span>
                  </div>

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
                </Link>
              )
            })}
          </div>

          {/* Desktop: asymmetric editorial grid with square-to-circle hover morph */}
          <div
            className="hidden gap-px bg-bone md:grid"
            style={desktopGridStyle}
          >
            {steps.map((step) => (
              <Link
                key={step.word}
                href={step.href}
                style={{ gridArea: step.area }}
                className={`
                  group relative isolate flex flex-col justify-between
                  overflow-hidden rounded-none p-8 outline-none
                  [container-type:size] lg:p-10
                  transition-[border-radius] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none
                  md:hover:rounded-[28px] md:focus-visible:rounded-[28px]
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-terracotta
                  ${step.accent ? 'bg-terracotta' : 'bg-navy'}
                `}
              >
                {/* Morph layer: rectangle at rest, circle contained in the
                    cell's own footprint on hover. Sized in container-query
                    units so it stays a true circle regardless of the cell's
                    aspect ratio, and never affects the grid/border layout. */}
                <span
                  aria-hidden
                  className={`
                    pointer-events-none absolute left-0 top-0 h-full w-full rounded-none
                    transition-[width,height,top,left,border-radius,transform,background-color]
                    duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    motion-reduce:transition-none
                    ${step.accent ? 'bg-navy-deep/0' : 'bg-bone/0'}
                    md:group-hover:left-1/2 md:group-hover:top-1/2
                    md:group-hover:h-[82cqmin] md:group-hover:w-[82cqmin]
                    md:group-hover:-translate-x-1/2 md:group-hover:-translate-y-1/2
                    md:group-hover:rounded-full
                    ${step.accent ? 'md:group-hover:bg-navy-deep/15' : 'md:group-hover:bg-bone/[0.07]'}
                  `}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`
                      font-heading text-[11px] font-medium uppercase tracking-[0.22em]
                      ${step.accent ? 'text-navy-deep/70' : 'text-terracotta'}
                    `}
                  >
                    {step.number}
                  </span>

                  <span
                    aria-hidden
                    className={`
                      font-heading text-xl leading-none opacity-0 transition-all
                      duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      motion-reduce:transition-none
                      translate-x-1 md:group-hover:translate-x-0 md:group-hover:opacity-100
                      ${step.accent ? 'text-navy-deep' : 'text-bone'}
                    `}
                  >
                    →
                  </span>
                </div>

                <div className="relative z-10">
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
              </Link>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  )
}
