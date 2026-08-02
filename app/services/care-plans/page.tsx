import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Care Plans | William Langdown',
  description:
    'Essential hosting from £19/month, or Tech Partner at £149/month with 2 hours of development work included. Clear monthly plans, no vague inclusions, no minimum term.',
  alternates: { canonical: 'https://williamlangdown.com/services/care-plans' },
  openGraph: {
    title: 'Care Plans | William Langdown',
    description:
      'Essential hosting from £19/month, or Tech Partner at £149/month with 2 hours of development work included. No minimum term.',
    url: 'https://williamlangdown.com/services/care-plans',
  },
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

const included = {
  essential: ['Hosting on reliable infrastructure', 'SSL, kept valid'],
  techPartner: [
    'Everything in Essential',
    '2 hours of development work a month',
    'Changes, updates and small fixes',
  ],
}

const notIncluded = [
  'Essential does not include any changes or support, that\'s Website Support, billed separately',
  'Tech Partner hours don\'t roll over, they reset each month',
  'Consulting, planning and strategy aren\'t included in either plan, that\'s £90/hour through Website Support',
]

const faqs = [
  {
    q: "If I don't use my Tech Partner hours, do they carry over?",
    a: "No, they reset each month. That's what keeps the plan sustainable and the price fair, it's not a bank of hours to save up.",
  },
  {
    q: 'What if I need more than 2 hours in a month?',
    a: 'Extra time is billed at the normal Website Support rate, £60/hour for development. The plan covers the first 2 hours, anything beyond that is business as usual.',
  },
  {
    q: 'Is there a minimum term?',
    a: 'No. Both plans are billed monthly with no contract, cancel whenever you like.',
  },
  {
    q: 'Does Tech Partner include hosting, or is that extra?',
    a: "It's included. Tech Partner covers everything Essential does, hosting is never a separate charge on top.",
  },
  {
    q: "What's the difference between this and Website Support?",
    a: 'Website Support is pay as you go, billed only for the hours you use. Care Plans are a fixed monthly cost: Essential for hosting only, or Tech Partner if you want a guaranteed couple of hours of work included every month instead of billing as you go.',
  },
]

export default function CarePlansPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-36 md:pb-24" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <p
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  From £19 / month
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink max-w-3xl">
                  Care plans
                </h1>
                <p className="text-base text-secondary mt-4 max-w-xl leading-relaxed">
                  Two honest monthly options for an existing website: pure hosting, or hosting plus a
                  modest amount of my time each month. No vague inclusions, no minimum term.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact?service=care-plans"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Get in touch
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing clarity */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="rounded-sm overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-border-light rounded-sm">
                  <div className="p-6 pt-7 sm:border-r border-border-light">
                    <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Essential</p>
                    <p className="text-3xl font-heading font-bold text-ink mb-2">£19 / month</p>
                    <p className="text-sm text-secondary leading-relaxed">
                      Hosting and SSL. Nothing else, if you need something changed, book Website Support
                      separately.
                    </p>
                  </div>
                  <div className="p-6 pt-7 border-t sm:border-t-0 border-border-light">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Tech Partner</p>
                    <p className="text-3xl font-heading font-bold text-ink mb-2">£149 / month</p>
                    <p className="text-sm text-secondary leading-relaxed">
                      Everything in Essential, plus 2 hours of development work a month for changes,
                      updates and fixes.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What's included */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-10 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What&apos;s included</h2>
              <p className="text-sm text-secondary mt-1 max-w-lg">
                Exactly what you&apos;re paying for, so there&apos;s nothing to guess at.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <ScrollReveal>
                <div className="rounded-sm border border-border-light bg-white/80 p-6" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-4">Essential</p>
                  <ul className="flex flex-col gap-3">
                    {included.essential.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-tertiary">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-secondary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={60}>
                <div className="rounded-sm border border-border-light bg-white/80 p-6" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Tech Partner</p>
                  <ul className="flex flex-col gap-3">
                    {included.techPartner.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" style={{ color: 'rgba(37,99,235,0.8)' }}>
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-secondary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={120}>
              <div className="rounded-sm border border-dashed border-border-light bg-white/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-4">Worth knowing</p>
                <ul className="flex flex-col gap-2.5">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-tertiary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-12 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Common questions</h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 60}>
                  <h3 className="text-base font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-sm text-secondary leading-relaxed max-w-2xl">{faq.a}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-link to Website Support */}
        <section className="px-6 pt-20 pb-0 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white px-6 py-6 sm:px-8">
                <p className="text-sm text-secondary flex-1">
                  Would rather pay only for the hours you actually use? Website Support is billed hourly
                  with no monthly commitment.
                </p>
                <Link
                  href="/services/website-support"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Website Support
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
