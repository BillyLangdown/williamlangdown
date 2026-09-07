'use client'

import ScrollReveal from '@/components/ScrollReveal'

// Just the text: positioning is handled by the wrapper in Hero.tsx that
// mounts this. Colour is responsive because the two mounts sit on
// different backgrounds — ink on the bone mobile section, bone on the
// dark sticky hero image at md+.
export default function IntroStatement() {
  return (
    <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
      <ScrollReveal>
        <p className="font-display text-xl md:text-3xl lg:text-[2.25rem] text-ink md:text-bone leading-[1.35]">
          Research-led strategy, design and software, shaped around business, audience and market.
        </p>
      </ScrollReveal>
    </div>
  )
}
