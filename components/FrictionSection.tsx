import ScrollReveal from '@/components/ScrollReveal'

export default function FrictionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <ScrollReveal>
  <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight tracking-tight text-ink">
    <span className="italic">Small moments of doubt</span> cause  <span className='underline decoration-accent underline-offset-4'>friction.</span> 
  </h2>
</ScrollReveal>

        <ScrollReveal delay={150} className="flex flex-col gap-6 pt-2">
          <p className="text-base text-secondary leading-relaxed">
            Small mismatches between what a visitor expects and what they see are what create hesitation. That can come from unclear messaging, structure that doesn’t guide them, or pages that don’t answer what they’re looking for.
          </p>

          <p className="text-base text-secondary leading-relaxed">
            These issues don’t usually look like problems on the surface, but they affect whether someone understands what you do and feels confident enough to take action.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}