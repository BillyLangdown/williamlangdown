export default function FrictionSection() {
  return (
    <section className="py-20 px-6 border-t border-border-light">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">

        <div className="md:w-[38%] shrink-0">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink leading-snug">
            Most small business websites lose customers before they get a chance to say hello.
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-5 justify-center">
          <p className="text-sm text-secondary leading-relaxed">
            The issue usually isn&apos;t the product or service — it&apos;s the website. Unclear messaging, a layout that doesn&apos;t guide visitors, missing trust signals, and pages that don&apos;t answer the questions people actually have.
          </p>
          <p className="text-sm text-secondary leading-relaxed">
            These things don&apos;t look like problems on the surface. But they&apos;re why people land on your site, look around for a few seconds, and leave without getting in touch.
          </p>
        </div>

      </div>
    </section>
  )
}
