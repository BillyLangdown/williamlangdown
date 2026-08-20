'use client'

import ScrollReveal from '@/components/ScrollReveal'

// Just the text: positioning (fixed, centered, over the image) is
// handled by the wrapper in Hero.tsx that mounts this.
export default function IntroStatement() {
  return (
    <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
      <ScrollReveal>
        <p className="font-display text-2xl md:text-3xl lg:text-[2.25rem] text-bone leading-[1.35]">
          Research-led strategy, design and software, shaped around business, audience and market.
        </p>
      </ScrollReveal>
    </div>
  )
}
