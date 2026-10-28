import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import { SpreadsheetToTool } from '@/components/service/visuals'
import { SimpleServiceHero, SectionHead, Evidence, ReviewOffer, AlsoLinks, TextLink } from '@/components/service/parts'
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
    body: 'One or two people use it and mistakes are cheap. A spreadsheet like that is fine.',
  },
  {
    word: 'Connect it',
    body: 'Each system works but they do not share data. Usually cheaper than a rebuild.',
    href: '/services/software-integrations',
    link: 'Software integrations',
  },
  {
    word: 'Extend it',
    body: 'Your software mostly fits and supports add-ons or custom fields. Easier to support.',
  },
  {
    word: 'Build it',
    body: 'The process is specific to you, nothing off the shelf fits, and it happens often.',
  },
]

const examples = ['Internal dashboards', 'Administrative systems', 'Data-entry forms', 'Small customer portals', 'Tools built on your existing software’s API']

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">
        <SimpleServiceHero
          image={{ src: '/images/hero-custom-software.jpg' }}
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'Custom software' },
          ]}
          name="Custom software"
          outcome="built around your business."
          intro="Internal tools and applications that simplify work when off-the-shelf software doesn't quite fit."
          cta={{ href: contactHref('custom-software'), label: 'Discuss your project' }}
        />

        <section className="px-6 pt-16 md:pt-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">What I build</h2>
            </ScrollReveal>
            <ScrollReveal delay={80} className="max-w-xl space-y-4 text-base leading-relaxed text-secondary md:text-lg">
              <p>
                I design and build focused custom software for the parts of a business that standard products
                handle badly: internal tools, administrative systems and applications shaped around how you
                actually work.
              </p>
              <p>
                Building is not always the right answer. Where a simpler alternative fits, I will recommend it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
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

        <section className="bg-subtle px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <ScrollReveal>
              <SpreadsheetToTool />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">What a focused tool looks like</h2>
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

        <section data-nav-theme="dark" className="bg-navy px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr] md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-bone md:text-4xl lg:text-[2.75rem]">
                I am one developer, so I build focused tools for a team, not large platforms.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/70">
                We start with the smallest version that solves the real problem and add to it once it
                has proved itself.
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
                <span className="font-semibold text-bone">Pricing.</span> Focused projects are often
                around £2,500, some below and some above, agreed in writing after we settle what the
                first version does. See{' '}
                <Link href="/pricing" className="text-bone underline underline-offset-4 hover:text-terracotta transition-colors">
                  how projects are priced
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        <ReviewOffer>
          Want help identifying opportunities before committing to development? The Business Automation Review is
          a £395 look at the work you choose, credited against implementation commissioned within 60 days.
        </ReviewOffer>

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
