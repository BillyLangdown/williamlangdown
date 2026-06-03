import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: '#080e1c', scrollSnapAlign: 'start' }}>

      {/* Blob layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.38) 0%, transparent 68%)' }} />
        <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, transparent 68%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-10 md:gap-20">

            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-white mb-4">
                Get in touch
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">
                No commitment needed. Message if you have any questions.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="flex md:inline-flex items-center justify-center gap-2 bg-white text-ink text-sm px-7 py-3.5 rounded-sm hover:bg-white/90 transition-colors font-medium"
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
