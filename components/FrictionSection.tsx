import ScrollReveal from '@/components/ScrollReveal'

export default function FrictionSection() {
  return (
    <section className="relative py-28 px-6">

      {/* Top-right corner mark */}
      <div className="absolute top-6 right-6 pointer-events-none" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M2 2H26V26" stroke="#C17A3A" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </div>
      {/* Bottom-left corner mark */}
      <div className="absolute bottom-6 left-6 pointer-events-none" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M26 26H2V2" stroke="#C17A3A" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-12">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-heading font-semibold leading-[0.95] tracking-tight text-ink">
            <span className="italic">Small moments<br />of doubt</span> cause{' '}
            <span className="underline decoration-accent underline-offset-[6px]">friction.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150} className="flex flex-col gap-6 max-w-xl ml-auto">
          <p className="text-base text-secondary leading-relaxed">
            The gap between what a visitor expects and what they find is what creates hesitation. That can come from messaging that isn't quite right, a structure that doesn't guide them, or pages that don't answer what they came to find.
          </p>
          <p className="text-base text-secondary leading-relaxed">
            These things rarely look like problems. But they affect whether someone understands what you offer, feels confident enough to take action, and decides to come back.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
