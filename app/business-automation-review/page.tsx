import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

const title = 'Business Automation Review | William Langdown'
const description =
  'A focused review of selected business workflows to find opportunities for automation, integrations and better use of existing software, ending in a written report with prioritised recommendations. £395.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://williamlangdown.com/business-automation-review' },
  openGraph: {
    title,
    description,
    url: 'https://williamlangdown.com/business-automation-review',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Automation Review',
  serviceType: 'Workflow and automation review',
  description,
  url: 'https://williamlangdown.com/business-automation-review',
  provider: { '@id': 'https://williamlangdown.com/#person' },
  areaServed: 'GB',
  offers: {
    '@type': 'Offer',
    price: '395',
    priceCurrency: 'GBP',
  },
}

const included = [
  {
    title: 'The workflows we agree',
    body: 'We choose the processes worth examining at the start. The review covers those and nothing wider.',
  },
  {
    title: 'Conversations with your team',
    body: 'Where it helps, I speak to the people who do the work, because they know where the manual effort is.',
  },
  {
    title: 'Observation',
    body: 'I watch how selected tasks are done today, remotely or in person where practical, including the handovers between people and systems.',
  },
  {
    title: 'Technical assessment',
    body: 'I look at the software involved and assess possible automations, integrations and AI tools, covering feasibility, cost and security.',
  },
  {
    title: 'A written report',
    body: 'Practical recommendations in priority order, each with an indicative implementation cost and the potential benefit.',
  },
  {
    title: 'A follow-up conversation',
    body: 'We go through the findings together and I answer your questions.',
  },
]

export default function BusinessAutomationReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="bg-bone">

        {/* HERO */}
        <section className="px-6 pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20">
              <div className="flex flex-col gap-10 md:h-full md:gap-0 md:justify-between">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] text-ink">
                  Business Automation Review
                </h1>

                <div>
                  <p className="text-lg md:text-xl text-ink">
                    <span className="font-semibold">£395</span>{' '}
                    <span className="text-terracotta">&middot;</span>{' '}
                    <span className="text-base md:text-lg text-secondary">Fixed fee</span>
                  </p>
                  <p className="mt-1 text-sm md:text-base text-secondary">
                    A focused review of selected workflows
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:h-full md:gap-10 md:justify-between max-w-xl">
                <p className="font-display text-lg md:text-2xl leading-[1.4] text-ink">
                  A review of selected workflows to find where automation, integrations or better
                  use of your existing software could remove manual work.
                </p>

                <div>
                  <Link
                    href="/contact?service=business-automation-review"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Enquire about a review
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="px-6 py-16 md:py-20 bg-subtle">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink">Who it is for</h2>
            </ScrollReveal>
            <ScrollReveal delay={60} className="max-w-xl">
              <p className="text-base text-secondary leading-relaxed">
                Businesses that suspect some of their processes could be improved but are not sure
                what is technically possible, or what would be worth the cost. Sometimes the answer
                is an automation or an integration, sometimes it is better use of software you
                already have, and sometimes it is that nothing needs to change. The report says
                which, and why.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-8 md:mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">What is included</h2>
              <p className="max-w-xl text-sm md:text-base text-secondary leading-relaxed">
                The exact activities depend on the workflows we agree, so not every review will
                involve every item below.
              </p>
            </ScrollReveal>

            <ul className="border-t border-border-light">
              {included.map((item) => (
                <li key={item.title} className="border-b border-border-light">
                  <ScrollReveal className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[1fr_1.6fr] md:gap-16 md:py-6">
                    <h3 className="font-display text-xl md:text-2xl text-ink">{item.title}</h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed max-w-lg">{item.body}</p>
                  </ScrollReveal>
                </li>
              ))}
            </ul>

            <ScrollReveal className="mt-8">
              <p className="max-w-xl text-sm md:text-base text-secondary leading-relaxed">
                This is a review of selected workflows, not an audit of how your whole organisation
                operates, and I do not offer management or general operational consultancy.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* PRICE, CREDIT, OPTIONAL */}
        <section className="px-6 py-16 md:py-20 bg-subtle">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink">£395, and what happens next</h2>
            </ScrollReveal>
            <ScrollReveal delay={60} className="max-w-xl">
              <p className="text-base text-secondary leading-relaxed">
                The review is a standalone service. You receive the report and the follow-up
                conversation whatever you decide afterwards, and there is no commitment to proceed.
                You can carry out the recommendations yourself, give them to another provider or ask
                me to do the work.
              </p>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                If you decide to go ahead with an implementation project within 60 days, I&apos;ll
                deduct the £395 review fee from the agreed project price.
              </p>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                You do not need a review before commissioning automation or other work. If you
                already know what you need, you can{' '}
                <Link href="/contact" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">
                  discuss a project
                </Link>{' '}
                directly.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section data-nav-theme="light" className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1] mb-3">
                  Interested in a review?
                </h2>
                <p className="text-base text-secondary leading-relaxed">
                  Tell me a little about the workflows you have in mind and we can decide together
                  whether a review would be worthwhile.
                </p>
              </div>
              <Link
                href="/contact?service=business-automation-review"
                className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium shrink-0 hover:bg-ink/85 transition-colors"
              >
                Enquire about a review
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
