import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function PromoSection() {
  return (
    <section className="py-16 px-6 bg-subtle border-t border-border-light" style={{ scrollSnapAlign: 'start' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-6">Also built by me</p>

          <div className="rounded-sm border border-border-light bg-white p-6 md:p-7 flex flex-col max-w-md">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 self-start"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
            >
              My own product
            </span>
            <Image src="/images/orla-logo.png" alt="Orla" height={24} width={80} className="object-contain mb-3" />
            <p className="text-sm text-secondary leading-relaxed mb-5">
              Booking software with an AI assistant, Google Calendar sync, and Gmail integration. Built by me.
            </p>
            <Link
              href="/orla"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors self-start"
            >
              Find out more
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
