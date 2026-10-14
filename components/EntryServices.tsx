import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    name: 'Business Automation Review',
    price: '£395',
    detail: 'Focused review of selected workflows',
    body: [
      'I’ll examine selected workflows to identify where automation, software integrations or better use of existing technology could save time. You’ll receive a written report with practical recommendations, estimated costs and potential benefits.',
    ],
    href: '/business-automation-review',
    cta: 'How the review works',
  },
  {
    name: 'UX & Conversion Audit',
    price: '£149',
    detail: 'Approx. 15-minute recorded review',
    body: [
      'A review of your website’s usability, messaging, navigation, trust signals and conversion journey. You receive a recorded review with practical recommendations for improving the visitor experience and encouraging more enquiries.',
    ],
    href: '/website-audit',
    cta: 'What the audit covers',
  },
]

export default function EntryServices() {
  return (
    <section data-nav-theme="light" className="relative z-10 bg-subtle px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-10 md:mb-14">
          <h2 className="max-w-2xl font-display text-3xl leading-[1.1] text-ink md:text-4xl lg:text-[2.75rem]">
            Not sure where to start?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            If you’re unsure what needs improving, I offer two focused reviews to help identify
            opportunities and recommend practical next steps.
          </p>
        </ScrollReveal>

        <div className="border-t border-border-light">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.name}
              delay={i * 60}
              className="grid grid-cols-1 gap-5 border-b border-border-light py-9 md:grid-cols-[1fr_1.5fr] md:gap-16 md:py-12"
            >
              <div>
                <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">{s.name}</h3>
                <p className="mt-3 text-sm font-medium text-ink md:text-base">
                  {s.price} <span className="text-terracotta">&middot;</span>{' '}
                  <span className="font-normal text-secondary">{s.detail}</span>
                </p>
              </div>
              <div className="max-w-xl">
                {s.body.map((para) => (
                  <p key={para} className="text-base leading-relaxed text-secondary md:text-lg [&:not(:first-child)]:mt-4">
                    {para}
                  </p>
                ))}
                <div className="mt-6">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
                  >
                    {s.cta}
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="grid grid-cols-1 gap-5 pt-9 md:grid-cols-[1fr_1.5fr] md:gap-16 md:pt-12">
          <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">Already know what you need?</h3>
          <div className="max-w-xl">
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              If you have a project in mind, whether it’s a new website, custom software or an
              automation, you’re welcome to get in touch directly.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
              >
                Discuss a project
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
