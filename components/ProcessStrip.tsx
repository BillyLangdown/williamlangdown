'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
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

// Mobile: same grid logic translated to 2 columns instead of 12 — Understand
// opens full-width, Define/Create pair up side by side, Build and Evolve
// close full-width. Text wraps naturally at narrower widths rather than
// needing a second breakpoint to collapse the 2-column row (verified no
// horizontal overflow at 320px in testing).
const mobileGridAreas =
  '"understand understand" "define create" "build build" "evolve evolve"'

// One shared heading size for all five mobile steps — sized to the
// narrowest cell (Define/Create, side by side) so nothing looks dominant
// or secondary; only the padding varies between the full-width and paired
// cells.
const mobileHeadingSize = 'text-[1.8rem]'

const mobileCellStyle: Record<string, { pad: string }> = {
  understand: { pad: 'px-6 py-8' },
  define: { pad: 'px-5 py-6' },
  create: { pad: 'px-5 py-6' },
  build: { pad: 'px-6 py-6' },
  evolve: { pad: 'px-6 py-6' },
}

// Scroll-triggered corner-radius reveal for mobile — the touch-device
// counterpart to the desktop hover morph, since there's no hover to react
// to. Each cell rounds itself once it's scrolled into view, staggered by
// index so cells round one after another as the section scrolls past,
// rather than all at once.
function MobileCell({
  index,
  accent,
  padding,
  gridArea,
  children,
}: {
  index: number
  accent: boolean
  padding: string
  gridArea: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [rounded, setRounded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer: ReturnType<typeof setTimeout> | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setRounded(true), index * 110)
          observer.disconnect()
        }
      },
      { threshold: 0.45 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [index])

  return (
    <div
      ref={ref}
      style={{ gridArea }}
      className={`
        flex flex-col justify-center overflow-hidden rounded-none
        ${padding}
        transition-[border-radius] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transition-none
        ${rounded ? 'rounded-[22px]' : ''}
        ${accent ? 'bg-terracotta' : 'bg-navy'}
      `}
    >
      {children}
    </div>
  )
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

        {/* Mobile: 2-column grid mirroring the desktop logic (Understand
            full-width and dominant, Define/Create paired, Build/Evolve
            close full-width) instead of five identical stacked rows. Same
            bone-gap-line technique as desktop so borders read as one
            connected grid, not separate cards. */}
        <div
          className="grid grid-cols-2 gap-px bg-bone md:hidden"
          style={{ gridTemplateAreas: mobileGridAreas }}
        >
          {steps.map((step, index) => {
            const { pad } = mobileCellStyle[step.area]
            const isPaired = step.area === 'define' || step.area === 'create'

            return (
              <MobileCell
                key={step.word}
                index={index}
                accent={step.accent}
                padding={pad}
                gridArea={step.area}
              >
                <h3
                  className={`
                    font-heading font-medium leading-[0.98] tracking-[-0.03em]
                    ${mobileHeadingSize}
                    ${step.accent ? 'text-navy-deep' : 'text-bone'}
                  `}
                >
                  {step.word}
                </h3>

                <p
                  className={`
                    mt-2.5 text-[12.5px] leading-[1.5]
                    ${isPaired ? '' : 'max-w-[28ch]'}
                    ${step.accent ? 'text-navy-deep/70' : 'text-bone/55'}
                  `}
                >
                  {step.clause}
                </p>
              </MobileCell>
            )
          })}
        </div>

        {/* Desktop: full-bleed asymmetric editorial grid with rounded-corner hover reveal */}
        <div
          className="hidden gap-px bg-bone md:grid"
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

      </ScrollReveal>
    </section>
  )
}
