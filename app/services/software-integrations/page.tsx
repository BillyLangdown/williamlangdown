import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import { IntegrationMap, RecordTimeline } from '@/components/service/visuals'
import {
  SimpleServiceHero,
  SectionHead,
  Evidence,
  ReviewOffer,
  AlsoLinks,
  TextLink,
} from '@/components/service/parts'
import { contactHref } from '@/lib/site'
import { graph, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

const PATH = '/services/software-integrations'
const title = 'Software Integration Consultant UK | William Langdown'
const description =
  'Connect the software your business already uses. Independent integration work for UK organisations: synchronised records, no duplicate entry, validated data and clear error handling. Based in Somerset.'

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
    name: 'Software integrations',
    serviceType: 'Software integration',
    description,
    path: PATH,
  }),
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Software integrations', path: PATH },
  ]),
)

const connections = [
  ['Website form', 'CRM'],
  ['Approved quote', 'Invoice'],
  ['Online payment', 'Booking and calendar'],
  ['Shop orders', 'Stock and dispatch'],
  ['CRM', 'Email marketing list'],
  ['Timesheets', 'Project record'],
]

const methods = [
  {
    name: 'A built-in connector',
    note: 'Many tools already link to each other. When one does the job, it is the cheapest to keep running.',
  },
  {
    name: 'An automation platform',
    note: 'Hosted tools pass data between apps with little code. They suit simple flows, though cost grows with volume.',
  },
  {
    name: 'Custom code against an API',
    note: 'When the rules are involved, a small purpose-written service controls how data is matched, checked and retried.',
  },
]

export default function SoftwareIntegrationsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">
        <SimpleServiceHero
          image={{ src: '/images/hero-software-integrations.jpg' }}
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Software integrations' },
          ]}
          name="Software integrations"
          outcome="so the same information is never typed twice."
          intro="I connect the software your business already uses, so a customer, order or invoice entered in one place appears correctly in the others."
          cta={{ href: contactHref('software-integrations'), label: 'Discuss an integration' }}
        />

        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">Where the copying happens</h2>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-secondary md:text-lg">
                <li>A website enquiry that has to be re-entered into the CRM.</li>
                <li>An approved quote that is retyped into the invoicing tool.</li>
                <li>Orders exported from one system and imported into another every morning.</li>
              </ul>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-secondary">
                Each copy is a chance for a typo or a missed update, and the systems slowly stop agreeing.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <IntegrationMap />
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-subtle px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHead
              title="Typical connections"
              lead="Common pairings, described by type of software. They illustrate the work and are not completed client projects."
            />
            <ul className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
              {connections.map(([a, b], i) => (
                <li key={a} className="border-t border-border-light py-4">
                  <ScrollReveal delay={i * 40} className="flex flex-wrap items-baseline gap-x-3 font-display text-xl text-ink md:text-2xl">
                    <span>{a}</span>
                    <span aria-hidden="true" className="text-terracotta">&rarr;</span>
                    <span className="sr-only">to</span>
                    <span>{b}</span>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHead
              title="Three ways to connect two systems"
              lead="I recommend the simplest one that will be reliable for your volume."
            />
            <ScrollReveal>
              <ol className="relative grid grid-cols-1 gap-10 border-t-2 border-ink pt-8 md:grid-cols-3 md:gap-10">
                {methods.map((m, i) => (
                  <li key={m.name} className="relative pl-8 md:pl-0 md:pt-6">
                    <span aria-hidden="true" className="absolute left-0 top-1 block h-3.5 w-3.5 bg-ink md:-top-[22px]" />
                    <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">{m.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">{m.note}</p>
                    {i === 0 && <p className="mt-3 text-xs text-tertiary">Simplest</p>}
                    {i === methods.length - 1 && <p className="mt-3 text-xs text-tertiary">Most control</p>}
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        <section data-nav-theme="dark" className="bg-navy px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-bone md:text-4xl lg:text-[2.75rem]">What keeps an integration dependable</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">
                Moving data is the simple part. The effort goes into agreeing which system leads,
                avoiding duplicates and handling the awkward record. Who looks after the integration
                is agreed before the project begins.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <RecordTimeline
                steps={[
                  { title: 'A customer is saved in the CRM', body: 'This is the trigger.' },
                  { title: 'Details are checked', body: 'Missing or odd values are held for a person.' },
                  { title: 'Matched against existing records', body: 'So a duplicate is not created.' },
                  { title: 'Written to the other system', body: 'Accounting, bookings or a spreadsheet.' },
                ]}
                failure="It is retried, then a named person is alerted with the record and the reason."
              />
              <p className="mt-6 text-xs text-bone/50">Illustrative example, not a client project.</p>
            </ScrollReveal>
          </div>
        </section>

        <Evidence
          imageSide="right"
          image={{
            src: '/images/showcase-bvs-mobile.jpg',
            alt: 'The Building Ventilation Services website on a mobile screen',
            width: 1200,
            height: 2134,
            className: 'max-h-[560px] object-cover object-top',
          }}
          title="Technical background"
          href="/case-studies/building-ventilation-services-ltd"
          hrefLabel="Read the Building Ventilation Services case study"
        >
          <p>
            My background is in software development, including working with APIs and building
            websites and applications that exchange data with other systems. I have not published an
            integration case study yet.
          </p>
          <p>
            I work independently and I am not an official partner of any software vendor. If I have
            not used a product before, I will say so and read its documentation before I quote.
          </p>
        </Evidence>

        <section className="px-6 pt-14 md:pt-20">
          <ScrollReveal className="mx-auto max-w-6xl">
            <p className="max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
              Integrations are scoped individually and priced with automation projects, which typically start from
              £1,500. The aim is fewer manual copies and fewer mismatches.
            </p>
          </ScrollReveal>
        </section>

        <ReviewOffer>
          Unsure how many systems are really involved? The £395 Business Automation Review maps them
          first, and the fee is credited against implementation commissioned within 60 days.
        </ReviewOffer>

        <AlsoLinks
          links={[
            { href: '/services/workflow-automation', label: 'workflow automation' },
            { href: '/services/custom-software', label: 'custom software' },
            { href: '/blog/when-should-a-business-replace-spreadsheets-with-custom-software', label: 'when to replace spreadsheets' },
          ]}
        />

        <CTABanner
          heading="Systems that need to talk?"
          description="Tell me what you use and where information gets re-entered, and I will say what is realistic."
          cta="Discuss an integration"
          href={contactHref('software-integrations')}
        />
      </main>
      <Footer />
    </>
  )
}
