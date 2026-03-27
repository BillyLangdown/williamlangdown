export default function FrictionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900">
            Small moments of doubt cause friction.
          </h2>
        </div>
        <div className="flex flex-col gap-6 pt-2">
          <p className="text-base text-gray-500 leading-relaxed">
            Every hesitation a visitor feels — a confusing layout, an unclear
            message, a product page that doesn&apos;t answer their questions —
            is a moment where they might leave. Most people don&apos;t
            abandon websites out of disinterest. They leave because something
            felt slightly off.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            These lost moments are invisible in your analytics. But they show
            up clearly in your conversion rate. The good news is that with the
            right approach — rooted in how real customers think and behave —
            these moments can be found and fixed.
          </p>
        </div>
      </div>
    </section>
  )
}
