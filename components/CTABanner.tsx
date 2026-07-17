import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
        backgroundColor: '#F8FAFC',
        scrollSnapAlign: 'start',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-10 md:gap-20">

            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-ink mb-4">
                Get in touch
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                No commitment needed. Message if you have any questions.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="flex md:inline-flex items-center justify-center gap-2 bg-accent text-white text-sm px-7 py-3.5 rounded-sm hover:bg-accent/90 transition-colors font-medium"
              >
                Let&apos;s talk
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
