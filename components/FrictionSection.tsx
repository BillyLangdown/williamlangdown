export default function FrictionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink">
            Small moments of doubt cause friction.
          </h2>
        </div>
        <div className="flex flex-col gap-6 pt-2">
          <p className="text-base text-secondary leading-relaxed">
          Every hesitation a visitor feels is a moment they might leave. It could be a confusing layout, an unclear message, or a product page that doesn’t answer their questions.
          </p>
          <p className="text-base text-secondary leading-relaxed">
          These moments don’t show up in your analytics, but they appear clearly in your conversion rate. The good news is that with the right approach, based on how real customers think and behave, they can be identified and fixed.
          </p>
        </div>
      </div>
    </section>
  )
}
