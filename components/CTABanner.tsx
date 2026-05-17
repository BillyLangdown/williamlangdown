import ScrollReveal from '@/components/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="relative py-24 px-6 bg-ink overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-white mb-4">
              Feel free to schedule a quick call.
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              No commitment needed. Just a conversation to understand where you
              are and whether I can help.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <a
              href="https://calendly.com/billy-langdown01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ink text-sm px-7 py-4 rounded-sm hover:bg-white/90 transition-colors font-medium"
            >
              Book a free call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p className="text-white/40 text-xs">
              Response within 24 hours &middot; No sales pitch
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
