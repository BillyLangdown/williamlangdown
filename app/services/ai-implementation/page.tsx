import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import { AiLanes, ExtractionPanel } from '@/components/service/visuals'
import { SimpleServiceHero, SectionHead, PriceProcess, ReviewOffer, AlsoLinks, TextLink } from '@/components/service/parts'
import { contactHref } from '@/lib/site'
import { graph, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

const PATH = '/services/ai-implementation'
const title = 'AI Implementation Consultant UK | William Langdown'
const description =
  'Practical AI implementation for specific business tasks: document processing, enquiry triage and draft replies with human approval, built into workflows you already run. Somerset-based, working UK-wide.'

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
    name: 'Practical AI implementation',
    serviceType: 'AI implementation for business workflows',
    description,
    path: PATH,
  }),
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AI implementation', path: PATH },
  ]),
)

export default function AiImplementationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-bone">
        <SimpleServiceHero
          image={{ src: '/images/hero-ai-implementation.jpg' }}
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'AI implementation' },
          ]}
          name="AI implementation"
          outcome="for specific tasks, with a person in charge of the result."
          intro="I add AI to workflows where it genuinely helps, such as reading documents, sorting messages and drafting replies."
          cta={{ href: contactHref('ai-implementation'), label: 'Discuss an AI project' }}
        />

        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHead
              title="A typical use: a messy message becomes a tidy record"
              lead="The AI reads and drafts, rules check the result, and a person approves it before anything is sent or saved."
            />
            <ScrollReveal>
              <ExtractionPanel />
            </ScrollReveal>
            <ScrollReveal className="mt-8 max-w-2xl text-base leading-relaxed text-secondary">
              The same approach covers documents, enquiry triage and drafted replies. Connecting it
              to your systems is covered under{' '}
              <TextLink href="/services/workflow-automation">workflow automation</TextLink> and{' '}
              <TextLink href="/services/software-integrations">software integrations</TextLink>.
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-subtle px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHead
              title="Choosing the right tool for each step"
              lead="AI is one option among several, and often not the best. Most good solutions mix all three."
            />
            <ScrollReveal>
              <AiLanes />
            </ScrollReveal>
          </div>
        </section>

        <section data-nav-theme="dark" className="bg-navy px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-2xl leading-[1.15] text-bone md:text-3xl">Accuracy</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">
                AI makes mistakes and can sound sure when it does. I do not promise guaranteed
                accuracy or complete autonomy. Outputs are checked against rules where possible,
                doubtful cases go to a person, and each step is tested on your own real examples
                before it goes live.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-display text-2xl leading-[1.15] text-bone md:text-3xl">Privacy</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">
                Using AI usually means sending text to an outside provider. We decide what is sent,
                remove or mask what we can, and read the provider&apos;s data terms. I cannot give legal
                advice or guarantee compliance, so if UK GDPR or sector rules apply, take advice on
                your own situation too.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <ScrollReveal className="max-w-6xl mx-auto">
            <p className="max-w-3xl font-display text-xl leading-[1.45] text-ink md:text-2xl">
              I have not published an AI case study yet. My work to date is in software and web
              development, and any AI step is tested on your examples before it goes live.{' '}
              <TextLink href="/case-studies">See delivered work</TextLink>.
            </p>
          </ScrollReveal>
        </section>

        <PriceProcess
          amount="From £1,500"
          steps={[
            { title: 'Pick the task', body: 'Where AI would help and where it would not.' },
            { title: 'Written scope and price', body: 'Including estimated AI usage costs.' },
            { title: 'Test on your examples', body: 'See how it behaves before relying on it.' },
            { title: 'Hand over', body: 'With the checks, alerts and documentation in place.' },
          ]}
        >
          <p>
            AI implementation is priced like other automation work, which typically starts from
            £1,500 for a properly scoped project. The final price depends on the task, the volume and
            how much testing it needs. AI provider usage is paid directly by you.
          </p>
        </PriceProcess>

        <ReviewOffer />

        <AlsoLinks
          links={[
            { href: '/services/workflow-automation', label: 'workflow automation' },
            { href: '/services/software-integrations', label: 'software integrations' },
            { href: '/blog', label: 'insights' },
          ]}
        />

        <CTABanner
          heading="Thinking about AI for a specific task?"
          description="Describe the task and the information involved, and I will tell you whether AI looks sensible or whether something simpler would do."
          cta="Discuss an AI project"
          href={contactHref('ai-implementation')}
        />
      </main>
      <Footer />
    </>
  )
}
