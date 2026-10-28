import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import {
  SimpleServiceHero,
  StatementBand,
  Evidence,
  PriceProcess,
  AlsoLinks,
  TextLink,
} from '@/components/service/parts'
import { contactHref } from '@/lib/site'
import { graph, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

const PATH = '/services/workflow-automation'
const title = 'Workflow Automation Consultant UK | William Langdown'
const description =
  'Independent workflow automation for UK businesses: enquiry routing, follow-ups, onboarding, documents and reporting, built around the software you already use. From £1,500. Based in Somerset.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `https://williamlangdown.com${PATH}` },
  openGraph: {
    title,
    description,
    url: `https://williamlangdown.com${PATH}`,
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
}

const jsonLd = graph(
  serviceSchema({
    name: 'Workflow automation',
    serviceType: 'Business workflow automation',
    description,
    path: PATH,
    priceFrom: 1500,
  }),
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Workflow automation', path: PATH },
  ]),
)

const problems = [
  'Enquiries arrive in three places and get copied across by hand.',
  'Quotes go out and nobody remembers to chase them.',
  'The same client details are typed into two systems.',
  'Someone rebuilds the weekly report from scratch.',
]

const oversight = [
  {
    title: 'Approval where it matters',
    body: 'Quotes, replies and anything with financial or legal weight wait for a person.',
  },
  {
    title: 'Failures are visible',
    body: 'Data is checked, faults are retried, and a named person is alerted. Every run leaves a record.',
  },
  {
    title: 'A manual fallback',
    body: 'It is written down, so the work carries on while a fault is fixed.',
  },
  {
    title: 'You can run it without me',
    body: 'It lives in accounts you control, with documentation. Ongoing care is agreed first.',
  },
]

export default function WorkflowAutomationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">
        <SimpleServiceHero
          image={{ src: '/images/hero-workflow-automation.jpg' }}
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Workflow automation' },
          ]}
          name="Workflow automation"
          outcome="Less repetitive work. More time for your business."
          intro="I build automations that handle routine tasks, connect your existing systems and reduce manual admin."
          cta={{ href: contactHref('workflow-automation'), label: 'Discuss an automation project' }}
          subheadingOutsideH1
        />

        {/* Pricing, kept visible but out of the hero */}
        <section className="border-b border-border-light bg-subtle px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
            <ScrollReveal>
              <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                Automation implementation from £1,500
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-secondary">
                Scope and price agreed before work begins.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">Business Automation Review</h2>
                <p className="shrink-0 text-sm font-medium text-secondary md:text-base">£395</p>
              </div>
              <p className="mt-3 max-w-md text-base leading-relaxed text-secondary">
                For businesses that want help identifying automation opportunities before committing to a project.
              </p>
              <p className="mt-4 text-sm">
                <TextLink href="/business-automation-review">About the review</TextLink>
              </p>
            </ScrollReveal>
          </div>
        </section>

        <StatementBand
          items={problems}
          note="If one of these sounds familiar, the job is probably well defined. Plenty of tasks are not worth automating, and I will say so."
        />

        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="max-w-2xl">
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">
                What could automation look like?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-secondary md:text-lg">
                An example of handling customer enquiries.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
              <ScrollReveal className="rounded-[2px] bg-stone/[0.2] p-6 md:p-8 lg:p-10">
                <h3 className="text-sm font-semibold text-tertiary">Without automation</h3>
                <p className="mt-4 font-display text-xl leading-[1.4] text-ink/80 md:text-2xl">
                  Someone reads the enquiry, copies the details, decides who should reply and follows up manually.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80} className="rounded-[2px] bg-terracotta/[0.14] p-6 md:p-8 lg:p-10">
                <h3 className="text-sm font-semibold text-terracotta">With automation</h3>
                <p className="mt-4 font-display text-xl leading-[1.4] text-ink md:text-2xl">
                  Details are captured, the right person is notified and follow-ups are tracked automatically.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal className="mt-6 max-w-3xl md:mt-8">
              <p className="text-xs text-tertiary md:text-sm">Illustrative example, not a completed client project.</p>
              <p className="mt-6 font-display text-xl leading-[1.5] text-ink md:text-2xl">
                The same approach can help with onboarding, documents, reporting and other repetitive tasks.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-subtle px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">Where people stay in charge</h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-secondary">
                Any automation can hit a service outage or odd data. This one is built so you find out.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
              {oversight.map((o, i) => (
                <ScrollReveal key={o.title} delay={i * 50}>
                  <h3 className="text-base font-semibold text-ink">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">{o.body}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Evidence
          image={{
            src: '/images/bvs-service-after-2.jpg',
            alt: 'The Building Ventilation Services website, built as a React front end on WordPress',
            width: 2000,
            height: 1147,
          }}
          title="The experience behind it"
          stats={[
            { value: '56 to 98', label: 'Mobile PageSpeed' },
            { value: '69 to 100', label: 'Desktop PageSpeed' },
          ]}
          href="/case-studies/building-ventilation-services-ltd"
          hrefLabel="Read the Building Ventilation Services case study"
        >
          <p>
            I have not published an automation case study yet, and the workflows above are
            illustrations. What carries across is the engineering: I build and test software that
            has to keep working.
          </p>
          <p>
            For Building Ventilation Services I built a fast React site on top of WordPress, so their
            own team manages the content.
          </p>
        </Evidence>

        <PriceProcess
          amount="From £1,500"
          steps={[
            { title: 'Agree the workflow', body: 'What it should do, what counts as finished and what stays manual.' },
            { title: 'Written scope and price', body: 'Agreed before any work begins.' },
            { title: 'Build and test', body: 'Checked against real examples, including the awkward ones.' },
            { title: 'Handover', body: 'Documentation on what runs where and what to do if it stops.' },
          ]}
        >
          <p>
            Automation implementations typically start from £1,500. The price moves with the number
            of systems, whether they offer an API, the state of the data and how much testing the
            process needs. Subscriptions for the tools involved are paid to their suppliers.
          </p>
          <p>
            More detail in{' '}
            <Link href="/blog/how-much-does-business-workflow-automation-cost-uk" className="text-bone underline underline-offset-4 hover:text-terracotta transition-colors">
              how much workflow automation costs in the UK
            </Link>
            .
          </p>
        </PriceProcess>

        <AlsoLinks
          links={[
            { href: '/services/software-integrations', label: 'software integrations' },
            { href: '/services/ai-implementation', label: 'AI implementation' },
            { href: '/services/custom-software', label: 'custom software' },
            { href: '/pricing', label: 'how projects are priced' },
          ]}
        />

        <CTABanner
          heading="Know what you want automated?"
          description="Describe the process and the software involved, and I will tell you whether I can help and roughly what it involves."
          cta="Discuss an automation project"
          href={contactHref('workflow-automation')}
        />
      </main>
      <Footer />
    </>
  )
}
