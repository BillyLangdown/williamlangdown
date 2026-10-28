'use client'

import ScrollReveal from '@/components/ScrollReveal'

// Just the text: positioning is handled by the wrapper in Hero.tsx that
// mounts this. Colour is responsive because the two mounts sit on
// different backgrounds — ink on the bone mobile section, bone on the
// dark sticky hero image at md+.
export default function IntroStatement() {
  return (
    <div className="relative z-10 max-w-[750px] lg:max-w-[1400px] mx-auto text-center px-6">
      <ScrollReveal>
        <h2 className="font-display text-[clamp(2rem,7.5vw,3.75rem)] md:text-[clamp(2.75rem,1.5rem+2.4vw,5.5rem)] text-ink md:text-bone leading-[1.1] tracking-tight text-balance lg:text-nowrap">
          How can I help your business?
        </h2>
        <p className="mx-auto mt-6 max-w-[28rem] px-2 font-display text-[0.8rem] md:mt-7 md:max-w-[30em] md:px-0 md:text-[clamp(1.1rem,0.86rem+0.52vw,1.8rem)] text-ink md:text-bone leading-[1.65] md:leading-[1.55] text-pretty">
          I help businesses save time, simplify processes and make better use of technology, from identifying opportunities to putting solutions into practice.
        </p>
      </ScrollReveal>
    </div>
  )
}
