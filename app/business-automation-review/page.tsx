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

const focus = [
  {
    title: 'Selected workflows',
    body: 'We agree which workflows are worth examining, and I work out how each one runs in practice, from the first request to the final outcome.',
  },
  {
    title: 'Repetitive manual tasks',
    body: 'Work that follows the same steps each time, such as retyping details between systems, preparing routine documents or chasing updates.',
  },
  {
    title: 'How existing software is used',
    body: 'Features you already pay for but do not use, and the workarounds that have built up around the tools you have.',
  },
  {
    title: 'Automation opportunities',
    body: 'Steps that a rule or a script could handle reliably, and steps that are better left with a person.',
  },
  {
    title: 'Integrations between systems',
    body: 'Places where information is copied by hand and could pass between your systems directly.',
  },
  {
    title: 'Practical AI tools',
    body: 'Whether an AI tool would genuinely help with a particular task, and what it would need in order to do so safely.',
  },
  {
    title: 'Feasibility, cost and security',
    body: 'What each idea would involve technically, roughly what it would cost, and what it means for your data.',
  },
  {
    title: 'Prioritised recommendations',
    body: 'A ranked set of recommendations, so it is clear where to start and what can wait.',
  },
]

const steps = [
  {
    title: 'An initial conversation',
    body: 'We talk through the business and the workflows that involve the most manual effort, and agree which of them the review will cover.',
  },
  {
    title: 'Conversations with your team',
    body: 'Where it helps, I speak to the people who carry out the work, because they know best where the manual effort is.',
  },
  {
    title: 'Observation',
    body: 'I watch selected tasks being done, remotely or in person where that is practical, and look at how information moves between people and systems.',
  },
  {
    title: 'Investigation',
    body: 'I examine the software involved and investigate possible automations and integrations, along with any AI tools that look suitable.',
  },
  {
    title: 'Assessment',
    body: 'For each opportunity I consider technical feasibility, indicative cost, likely benefit and security.',
  },
  {
    title: 'Report and follow-up',
    body: 'You receive a written report with prioritised recommendations, followed by a conversation to go through it.',
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
                <div className="flex flex-col gap-5">
                  <p className="font-display text-lg md:text-2xl leading-[1.4] text-ink">
                    A focused review of selected workflows in your business, to find where
                    automation, integrations or better use of your existing software could remove
                    repetitive manual work.
                  </p>
                  <p className="text-base text-secondary leading-relaxed">
                    It is intended for businesses that want to investigate where automation,
                    integrations or better use of existing software could improve their workflows.
                    Sometimes the answer is an automation or an integration, sometimes it is a
                    change to how existing software is used, and sometimes it is that nothing needs
                    to change. The report says which, and why.
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact?service=business-automation-review"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Arrange an introductory conversation
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="px-6 py-20 md:py-28 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What the review looks at</h2>
              <p className="text-sm md:text-base text-secondary leading-relaxed max-w-xl mb-12">
                The review is limited to the workflows we agree at the start, and within those it
                covers the following.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
              {focus.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 40}>
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-secondary leading-relaxed max-w-sm">{item.body}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-12 md:mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">How the review works</h2>
              <p className="text-sm md:text-base text-secondary leading-relaxed max-w-xl">
                The review starts with understanding how the work is done today, so recommendations
                are made only after the workflows have been properly examined.
              </p>
            </ScrollReveal>

            <ol className="border-t border-border-light">
              {steps.map((step, i) => (
                <li key={step.title} className="border-b border-border-light">
                  <ScrollReveal
                    delay={i * 30}
                    className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[4rem_1fr_1.4fr] md:gap-10 md:py-9"
                  >
                    <span className="font-display text-2xl text-tertiary/50">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-xl md:text-2xl text-ink">{step.title}</h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed max-w-lg">{step.body}</p>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SCOPE + DELIVERABLE */}
        <section className="px-6 py-20 md:py-28 bg-subtle">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What the review covers</h2>
              <p className="text-base text-secondary leading-relaxed max-w-md">
                This is a review of selected workflows, chosen with you at the start. It is not
                an audit of how the whole organisation operates, and I do not offer management or
                general operational consultancy. If I notice something outside the agreed
                workflows that looks important I will mention it, but I will not investigate it as
                part of the review.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What you receive</h2>
              <p className="text-base text-secondary leading-relaxed max-w-md">
                A written report with practical recommendations in priority order. For each one it
                sets out what would be involved, the indicative implementation cost, the potential benefit and any
                security or data privacy points to consider. A follow-up conversation is included,
                so we can go through the findings together.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* OPTIONAL */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink">You do not need a review first</h2>
            </ScrollReveal>
            <ScrollReveal delay={60} className="max-w-xl">
              <p className="text-base text-secondary leading-relaxed">
                If you already know what you need, whether that is an automation, an integration,
                custom software or a website, you can contact me directly and we can scope the
                project without a review.
              </p>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                The review is for businesses that would like help finding out where technology
                could make a difference, or deciding what would be worth implementing.
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
            </ScrollReveal>
          </div>
        </section>

        {/* AFTERWARDS */}
        <section className="px-6 py-20 md:py-28 bg-subtle">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink">What happens afterwards</h2>
            </ScrollReveal>
            <ScrollReveal delay={60} className="max-w-xl">
              <p className="text-base text-secondary leading-relaxed">
                The recommendations are yours whether or not you go ahead, and there is no
                commitment to proceed. You can carry them out yourself, give them to another
                provider or ask me to do the work.
              </p>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                If you decide to go ahead with an implementation project within 60 days of
                completing the review, I&apos;ll deduct the £395 review fee from the agreed project
                price.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section data-nav-theme="light" className="px-6 py-20 md:py-28 border-t border-border-light">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1] mb-3">
                  Begin with a conversation.
                </h2>
                <p className="text-base text-secondary leading-relaxed">
                  We will talk about the workflows that take up the most manual effort, then
                  decide together whether a review would be worthwhile.
                </p>
              </div>
              <Link
                href="/contact?service=business-automation-review"
                className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium shrink-0 hover:bg-ink/85 transition-colors"
              >
                Arrange an introductory conversation
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
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
