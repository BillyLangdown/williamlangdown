import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import WorkflowDiagram from '@/components/service/WorkflowDiagram'
import {
  ServiceHero,
  StatementBand,
  SectionHead,
  Evidence,
  PriceProcess,
  ReviewOffer,
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

const steps = [
  { label: 'Customer enquiry received', note: 'Form, email or shared inbox' },
  { label: 'Details captured', note: 'Saved to your CRM or spreadsheet' },
  { label: 'Enquiry categorised', note: 'By type, using rules you agree' },
  { label: 'Relevant person notified', note: 'With a summary, ready to reply', human: true },
  { label: 'Follow-up recorded', note: 'A reminder fires if nobody replies' },
]

const oversight = [
  {
    title: 'Approval where it matters',
    body: 'Quotes, replies and anything with financial or legal weight wait for a person before they go out.',
  },
  {
    title: 'Failures are visible',
    body: 'Incoming data is checked, temporary faults are retried, and a named person is alerted when something needs attention. Every run leaves a record.',
  },
  {
    title: 'A manual fallback',
    body: 'It is written down, so the work carries on while a fault is fixed.',
  },
  {
    title: 'You can run it without me',
    body: 'Where possible it lives in accounts you control, with documentation. Any ongoing care is agreed before the project starts.',
  },
]

export default function WorkflowAutomationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">
        <ServiceHero
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Workflow automation' },
          ]}
          name="Workflow automation"
          outcome="for the repetitive work that takes up your week."
          intro="I build automations that sort enquiries, send follow-ups, create documents and move information between the systems you already use. You work with me directly, from the first conversation to handover."
          price="From £1,500"
          priceNote="Scoped and agreed before work begins."
          cta={{ href: contactHref('workflow-automation'), label: 'Discuss an automation project' }}
          secondary={
            <>
              Not sure what to automate?{' '}
              <TextLink href="/business-automation-review">Business Automation Review, £395</TextLink>
            </>
          }
        />

        <StatementBand
          items={problems}
          note="If one of these sounds familiar, the job is probably well defined. Plenty of tasks are not worth automating, and I will say so."
        />

        <section className="px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHead
              title="What it looks like in practice"
              lead="An illustrative example, not a completed client project."
            />
            <ScrollReveal>
              <WorkflowDiagram
                steps={steps}
                failure="the enquiry is held, retried, and a named person is told, so nothing is lost silently."
              />
            </ScrollReveal>

            <ScrollReveal className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="text-sm font-semibold text-tertiary">By hand</h3>
                <p className="mt-3 font-display text-xl leading-[1.4] text-ink/75 md:text-2xl">
                  Someone reads the message, copies the details into a spreadsheet, works out who
                  should reply, emails them, and hopes it gets done.
                </p>
              </div>
              <div className="border-l-[3px] border-terracotta pl-6">
                <h3 className="text-sm font-semibold text-terracotta">Automated</h3>
                <p className="mt-3 font-display text-xl leading-[1.4] text-ink md:text-2xl">
                  The details are saved and sorted as the message arrives, the right person gets a
                  summary, and a reminder fires if nobody has replied.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12 max-w-3xl md:mt-16">
              <p className="font-display text-xl leading-[1.5] text-ink md:text-2xl">
                Other workflows follow the same shape:{' '}
                <span className="text-secondary">
                  client onboarding, document generation, status updates, administrative handovers,
                  data entry between systems and recurring reports.
                </span>
              </p>
              <p className="mt-4 text-sm text-secondary">
                These are illustrative examples. Where systems need to share data,{' '}
                <TextLink href="/services/software-integrations">software integrations</TextLink> covers it in more detail.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-subtle px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl">Where people stay in charge</h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-secondary">
                No automation is immune to a service going down or a form sending odd data. It is
                built so that you find out.
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

        <ReviewOffer />

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
