import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function AuditPrompt() {
  return (
    <section data-nav-theme="light" className="relative z-10 py-20 md:py-28 px-6 bg-subtle">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16 border-t border-border-light pt-10 md:pt-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-ink">
            Website audit
          </h2>
          <div className="max-w-xl">
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              I&apos;ll review your existing website and show you what I&apos;d change, what
              I&apos;d leave alone and what I think matters most.
            </p>
            <p className="mt-4 text-sm md:text-base text-ink font-medium">
              £145 <span className="text-terracotta">&middot;</span> Approx. 15-minute recorded review
            </p>
            <div className="mt-6">
              <Link
                href="/website-audit"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta transition-colors"
              >
                What I&apos;ll look at
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
