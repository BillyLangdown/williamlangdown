'use client'

import ScrollReveal from '@/components/ScrollReveal'

// Just the text: positioning is handled by the wrapper in Hero.tsx that
// mounts this. Colour is responsive because the two mounts sit on
// different backgrounds — ink on the bone mobile section, bone on the
// dark sticky hero image at md+.
export default function IntroStatement() {
  return (
    <div className="relative z-10 max-w-[750px] mx-auto text-center px-6">
      <ScrollReveal>
        <p className="font-display text-base md:text-[1.45rem] lg:text-[1.75rem] text-ink md:text-bone leading-[1.55]">
          Whether you have a clear idea of what you need or just know something could be working better, I can help you figure out what&apos;s possible and put it into practice.
        </p>
      </ScrollReveal>
    </div>
  )
}
