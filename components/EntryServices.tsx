import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    name: 'Business Automation Review',
    price: '£395',
    body: 'Identify opportunities to improve selected workflows through automation and better use of technology.',
    href: '/business-automation-review',
    cta: 'Explore review',
  },
  {
    name: 'UX & Conversion Audit',
    price: '£149',
    body: 'Find out where your website could be clearer, easier to use and more effective at generating enquiries.',
    href: '/website-audit',
    cta: 'Explore audit',
  },
]

export default function EntryServices() {
  return (
    <section data-nav-theme="light" className="relative z-10 bg-subtle px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-ink">Not sure where to start?</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary">
            If you&rsquo;re unsure what needs improving, I offer two focused reviews to help identify
            opportunities and recommend practical next steps.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 border-y border-border-light md:grid-cols-2">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.name}
              delay={i * 60}
              className={
                i === 0
                  ? 'py-8 md:py-10 md:pr-10 lg:pr-14'
                  : 'border-t border-border-light py-8 md:border-l md:border-t-0 md:py-10 md:pl-10 lg:pl-14'
              }
            >
              <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">{s.name}</h3>
              <p className="mt-2 text-sm font-medium text-ink md:text-base">{s.price}</p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">{s.body}</p>
              <div className="mt-5">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
                >
                  {s.cta}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
