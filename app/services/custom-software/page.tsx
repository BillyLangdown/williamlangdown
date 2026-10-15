import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import { SpreadsheetToTool } from '@/components/service/visuals'
import { ServiceHero, SectionHead, Evidence, ReviewOffer, AlsoLinks, TextLink } from '@/components/service/parts'
import { contactHref } from '@/lib/site'
import { graph, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

const PATH = '/services/custom-software'
const title = 'Custom Software & Internal Tools Developer | William Langdown'
const description =
  'Bespoke internal tools, dashboards and small business applications for UK organisations whose needs off-the-shelf software does not meet. Independent developer based in Somerset.'

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
    name: 'Custom software and internal tools',
    serviceType: 'Custom software development',
    description,
    path: PATH,
  }),
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Custom software', path: PATH },
  ]),
)

const options = [
  {
    word: 'Leave it',
    body: 'One or two people maintain it, nothing depends on it and mistakes are cheap. A spreadsheet like that is fine.',
  },
  {
    word: 'Connect it',
    body: 'Each system does its job but they do not share data. An integration is usually cheaper than a rebuild.',
    href: '/services/software-integrations',
    link: 'Software integrations',
  },
  {
    word: 'Extend it',
    body: 'Your current software mostly fits and supports custom fields, reports or add-ons. Adjusting it is easier to support.',
  },
  {
    word: 'Build it',
    body: 'The process is specific to you, nothing off the shelf fits, and the work happens often enough to justify it.',
  },
]

const examples = ['Internal dashboards', 'Administrative systems', 'Data-entry forms', 'Small customer portals', 'Tools built on your existing software’s API']

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">
        <ServiceHero
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Custom software' },
          ]}
          name="Custom software"
          outcome="and internal tools for work that off-the-shelf software does not cover."
          intro="I design and build focused software for the parts of a business that standard products handle badly: internal tools, admin systems and applications shaped around how you actually work. Building is not always the right answer, and I will say so."
          price="Scoped individually"
          priceNote="Focused projects are often around £2,500, some below and some above."
          cta={{ href: contactHref('custom-software'), label: 'Discuss a custom software project' }}
          secondary={
            <>
              Want an outside view first?{' '}
              <TextLink href="/business-automation-review">Business Automation Review, £395</TextLink>
            </>
          }
        />

        <section className="px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHead
              title="Leave it, connect it, extend it or build it"
              lead="Most of a first conversation is working out which of these applies. Not every spreadsheet needs replacing."
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {options.map((o, i) => (
                <ScrollReveal key={o.word} delay={i * 60}>
                  <p
                    className="font-sans font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
                    style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)' }}
                  >
                    {o.word}
                  </p>
                  <span aria-hidden="true" className={`mt-4 block h-[3px] w-10 ${i === 3 ? 'bg-terracotta' : 'bg-ink'}`} />
                  <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">{o.body}</p>
                  {o.href && (
                    <p className="mt-3 text-sm">
                      <TextLink href={o.href}>{o.link}</TextLink>
                    </p>
                  )}
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="mt-10 text-sm text-secondary">
              The full reasoning is in{' '}
              <TextLink href="/blog/when-should-a-business-replace-spreadsheets-with-custom-software">
                when to replace spreadsheets with custom software
              </TextLink>
              .
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-subtle px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <ScrollReveal>
              <SpreadsheetToTool />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl">What a focused tool looks like</h2>
              <ul className="mt-5 space-y-2 text-base leading-snug text-ink">
                {examples.map((e) => (
                  <li key={e} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.5em] block h-2 w-2 shrink-0 bg-terracotta" />
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-secondary">
                Typical examples, not specific client projects.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Evidence
          image={{
            src: '/images/bvs-service-after-2.jpg',
            alt: 'The Building Ventilation Services website, built as a React front end on WordPress',
            width: 2000,
            height: 1147,
          }}
          title="Software I have built"
          stats={[
            { value: '56 to 98', label: 'Mobile PageSpeed' },
            { value: '69 to 100', label: 'Desktop PageSpeed' },
          ]}
          href="/case-studies/building-ventilation-services-ltd"
          hrefLabel="Read the Building Ventilation Services case study"
        >
          <p>
            For Building Ventilation Services I built a fast React front end on top of WordPress, so
            their team manages case studies, services and product information themselves.
          </p>
          <p>
            It is a website rather than an internal tool, but the engineering is the same: a
            working system, built around how the people using it work, that stays fast and
            maintainable.
          </p>
        </Evidence>

        <section data-nav-theme="dark" className="bg-navy px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr] md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.2] text-bone md:text-[2.4rem]">
                I am one developer, so I build focused tools for a team, not platforms for hundreds of users.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/70">
                We start with the smallest version that solves the real problem, put it to use, and
                add to it once it has proved itself. You see working software early, and the cost and
                risk stay down.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80} className="space-y-5 text-sm leading-relaxed text-bone/70 md:text-base">
              <p>
                <span className="font-semibold text-bone">Ownership.</span> I use mainstream
                technology so another developer could take it on, and where possible the code, data
                and hosting sit in accounts you control.
              </p>
              <p>
                <span className="font-semibold text-bone">Ongoing care.</span> Hosting, backups and
                security updates are discussed during scoping, so you know what looking after it costs
                before you commit.
              </p>
              <p>
                <span className="font-semibold text-bone">Pricing.</span> Agreed in writing after we
                settle what the first version does. See{' '}
                <Link href="/pricing" className="text-bone underline underline-offset-4 hover:text-terracotta transition-colors">
                  how projects are priced
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        <ReviewOffer />

        <AlsoLinks
          links={[
            { href: '/services/workflow-automation', label: 'workflow automation' },
            { href: '/services/software-integrations', label: 'software integrations' },
            { href: '/case-studies', label: 'case studies' },
          ]}
        />

        <CTABanner
          heading="Need something that does not exist yet?"
          description="Tell me what the tool would do and who would use it, and I will say whether building, extending or connecting is the sensible route."
          cta="Discuss a custom software project"
          href={contactHref('custom-software')}
        />
      </main>
      <Footer />
    </>
  )
}
