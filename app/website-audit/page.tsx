import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { graph, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

const description =
  'A review of how clearly your website communicates, builds trust and helps visitors get in touch, with a recorded walkthrough and practical recommendations. £149.'

export const metadata: Metadata = {
  title: 'UX & Conversion Audit | William Langdown',
  description,
  alternates: { canonical: 'https://williamlangdown.com/website-audit' },
  openGraph: {
    title: 'UX & Conversion Audit | William Langdown',
    description,
    url: 'https://williamlangdown.com/website-audit',
  },
}

const jsonLd = graph(
  {
    ...serviceSchema({
      name: 'UX & Conversion Audit',
      serviceType: 'Website UX and conversion review',
      description,
      path: '/website-audit',
    }),
    offers: { '@type': 'Offer', price: '149', priceCurrency: 'GBP' },
  },
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'UX & Conversion Audit', path: '/website-audit' },
  ]),
)

const lookAt = [
  {
    title: 'Usability and navigation',
    body: 'Whether people can find what they need quickly, on a phone as well as on a desktop.',
  },
  {
    title: 'Clarity of messaging',
    body: 'Whether the site explains what you do and why someone should choose you.',
  },
  {
    title: 'Visual hierarchy',
    body: 'Whether each page guides attention to what matters most.',
  },
  {
    title: 'Trust and credibility',
    body: 'Whether a visitor has enough reason to believe the business is established and reliable.',
  },
  {
    title: 'Calls to action',
    body: 'Whether it is obvious what to do next, and whether the next step is in the right place.',
  },
  {
    title: 'The enquiry journey',
    body: 'Where people hesitate or give up between arriving and getting in touch.',
  },
]

export default function UxConversionAuditPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">

        {/* HERO */}
        <section className="px-6 pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20">
              <div className="flex flex-col gap-10 md:h-full md:gap-0 md:justify-between">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] text-ink">
                  UX &amp; Conversion Audit
                </h1>

                <div>
                  <p className="text-lg md:text-xl text-ink">
                    <span className="font-semibold">£149</span>{' '}
                    <span className="text-terracotta">&middot;</span>{' '}
                    <span className="text-base md:text-lg text-secondary">Approx. 15 min</span>
                  </p>
                  <p className="mt-1 text-sm md:text-base text-secondary">
                    Recorded review + recommendations
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:h-full md:gap-10 md:justify-between max-w-xl">
                <p className="font-display text-lg md:text-2xl leading-[1.4] text-ink">
                  I&apos;ll review how well your website explains what you do, earns trust and helps
                  visitors get in touch, and tell you what I&apos;d change and what I&apos;d leave
                  alone.
                </p>

                <div>
                  <Link
                    href="/contact?service=website-audit"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Request an audit
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* WHAT IT EXAMINES */}
        <section className="px-6 py-16 md:py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-8 md:mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">What I look at</h2>
              <p className="text-sm md:text-base text-secondary leading-relaxed max-w-xl">
                A general review of the website as a visitor experiences it, suited to any business
                that has a website and wants an outside view before changing anything.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-10">
              {lookAt.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 40}>
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-secondary leading-relaxed max-w-sm">{item.body}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET / AFTERWARDS */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What you get</h2>
              <p className="text-base text-secondary leading-relaxed max-w-md">
                A recorded walkthrough of your website, about fifteen minutes long, where I explain
                what I found and why it matters. Alongside it, a short written list of practical
                recommendations, with what I think you should prioritise first. I do not promise
                specific increases in enquiries, because that depends on what is done with the
                recommendations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What happens next</h2>
              <p className="text-base text-secondary leading-relaxed max-w-md">
                Send a request with your website address through the contact form. The
                recommendations are then yours: you can make the changes yourself, hand them to
                whoever looks after your website, or ask me to help with some or all of it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section data-nav-theme="light" className="px-6 py-16 md:py-24 border-t border-border-light">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-ink max-w-xl">
                Want an outside view of your website?
              </h2>
              <Link
                href="/contact?service=website-audit"
                className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium shrink-0 hover:bg-ink/85 transition-colors"
              >
                Request an audit
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
