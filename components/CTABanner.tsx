import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="relative py-20 px-6 bg-ink overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-20">

          {/* Heading + subtext — left */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl  lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-white mb-5">
              Book a call or send a message
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              No commitment neeeded. <br/> Message if you have any questions.
            </p>
          </div>

          {/* CTAs — bottom right */}
          <div className="flex flex-col items-start md:items-end gap-5 shrink-0">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://calendly.com/billy-langdown01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-ink text-sm px-6 py-3.5 rounded-sm hover:bg-white/90 transition-colors font-medium"
              >
                Book a free call
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white text-sm px-6 py-3.5 rounded-sm hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Send a message
              </Link>
            </div>
            <p className="text-white/25 text-xs">Response within 24 hours</p>
          </div>

        </ScrollReveal>
      </div>
    </section>
  )
}
