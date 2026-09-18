import ScrollReveal from '@/components/ScrollReveal'

// Copy explains *why* each stage matters, not just what it is. The
// section's job is to argue for understanding-before-making, not to
// diagram five process steps.
const steps = [
  {
    word: 'Understand',
    clause: 'Your business, customers and competition before deciding what needs to change.',
  },
  {
    word: 'Define',
    clause: 'Turn what we learn into a clear position and direction.',
  },
  {
    word: 'Create',
    clause: 'Explore ideas with a reason behind every decision.',
  },
  {
    word: 'Build',
    clause: 'Turn the chosen direction into something real and useful.',
  },
  {
    word: 'Evolve',
    clause: 'Learn from what happens and improve what matters.',
  },
] as const

const philosophyNote = (
  <>
    The work starts <span className="text-terracotta">before</span> the design
    does: understanding comes first, and it decides what Define, Create,
    Build and Evolve actually do.
  </>
)

// Stage: title, clause, and (Understand only) the philosophy line. Every
// stage uses this exact same internal structure and spacing rule on both
// mobile and desktop; repetition is what tells the eye these five things
// belong to one system, not individual art direction per stage. No
// hover/active state, no background, no radius: the section is entirely
// static, on both breakpoints.
function Stage({
  word,
  clause,
  emphasis = false,
  note,
}: {
  word: string
  clause: string
  emphasis?: boolean
  note?: React.ReactNode
}) {
  return (
    <div>
      <h3
        className={`
          font-heading font-extrabold uppercase leading-[0.95] tracking-tight text-bone
          ${emphasis ? 'text-[2.1rem] md:text-[2.6rem] lg:text-[3.4rem]' : 'text-[1.6rem] md:text-[1.9rem] lg:text-[2.4rem]'}
        `}
      >
        {word}
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-bone/55">{clause}</p>
      {note && (
        <p className="mt-4 border-t border-bone/[0.08] pt-4 text-[14px] leading-[1.6] text-bone/55">
          {note}
        </p>
      )}
    </div>
  )
}

export default function ProcessStrip() {
  const [u, define, create, build, evolve] = steps

  return (
    <section
      data-nav-theme="dark"
      className="relative z-10 overflow-hidden bg-[#10233F]"
    >
      <ScrollReveal>

        {/* Mobile: the same system as desktop, rotated to match how a
            phone is actually read: a single vertical column in strict
            top-to-bottom order instead of a left-to-right row. One rule
            opens the list, one closes each stage, identically, so it
            still reads as one grid rather than five separate blocks.
            Understand gets the same one-step type emphasis and carries
            the philosophy line, exactly as it does on desktop. */}
        <div className="px-6 py-16 md:hidden">
          <p className="mb-6 text-sm font-semibold text-bone/70">My process</p>
          <div className="border-t border-bone/[0.08]">
            {steps.map((step) => (
              <div key={step.word} className="border-b border-bone/[0.08] py-8">
                <Stage
                  word={step.word}
                  clause={step.clause}
                  emphasis={step.word === 'Understand'}
                  note={step.word === 'Understand' ? philosophyNote : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: a single row, strict left-to-right reading order,
            one shared grid. Every stage sits in the same row at the same
            top baseline (grid-template-columns: 4fr 2fr 2fr 2fr 2fr) so
            Understand's column is exactly twice as wide as the other
            four, no more, and reading order is simply reading order,
            left to right. A single rule opens the row; a vertical
            hairline separates each column from the next, applied
            identically to all five, so it reads as one grid rather than
            bordered cards. */}
        <div className="hidden md:block md:px-12 md:py-24 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-[92rem]">
            <p className="mb-6 text-sm font-semibold text-bone/70">My process</p>
            <div className="border-t border-bone/[0.08] pt-10">
              <div className="grid grid-cols-[4fr_2fr_2fr_2fr_2fr] items-start gap-x-8">

                <div>
                  <Stage word={u.word} clause={u.clause} emphasis note={philosophyNote} />
                </div>

                <div className="border-l border-bone/[0.08] pl-8">
                  <Stage word={define.word} clause={define.clause} />
                </div>

                <div className="border-l border-bone/[0.08] pl-8">
                  <Stage word={create.word} clause={create.clause} />
                </div>

                <div className="border-l border-bone/[0.08] pl-8">
                  <Stage word={build.word} clause={build.clause} />
                </div>

                <div className="border-l border-bone/[0.08] pl-8">
                  <Stage word={evolve.word} clause={evolve.clause} />
                </div>

              </div>
            </div>
          </div>
        </div>

      </ScrollReveal>
    </section>
  )
}
