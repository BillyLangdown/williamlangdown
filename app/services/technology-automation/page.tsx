import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import ArrowLink from '@/components/ArrowLink'
import { ProblemBand } from '@/components/service/pathway'
import { SimpleServiceHero } from '@/components/service/parts'
import ProcessSteps from '@/components/ProcessSteps'
import { AppWindow, ClipboardText, ShareNetwork } from '@phosphor-icons/react/dist/ssr'
import JsonLd from '@/components/JsonLd'
import { graph, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology & Automation: Workflow, Integrations, AI & Software | William Langdown',
  description: 'Workflow automation, software integrations, practical AI implementation and custom software for UK businesses. Independent consultant based in Somerset, working across the UK.',
  alternates: { canonical: 'https://williamlangdown.com/services/technology-automation' },
  openGraph: {
    title: 'Technology & Automation: Workflow, Integrations, AI & Software | William Langdown',
    description: 'Workflow automation, software integrations, practical AI implementation and custom software for UK businesses.',
    url: 'https://williamlangdown.com/services/technology-automation',
  },
}

const problems = [
  {
    Icon: ClipboardText,
    title: 'Too much manual admin?',
    body: 'Automate enquiries, documents, follow-ups and routine tasks.',
  },
  {
    Icon: ShareNetwork,
    title: 'Systems that don\u2019t talk?',
    body: 'Connect your existing tools and reduce duplicate data entry.',
  },
  {
    Icon: AppWindow,
    title: 'Software that doesn\u2019t quite fit?',
    body: 'Build practical internal tools around how your business operates.',
  },
]

const services = [
  {
    href: '/services/workflow-automation',
    name: 'Workflow automation',
    note: 'Enquiry handling, follow-ups, onboarding, documents and reporting.',
  },
  {
    href: '/services/software-integrations',
    name: 'Software integrations',
    note: 'Connect the systems you already use so data is entered once.',
  },
  {
    href: '/services/ai-implementation',
    name: 'AI implementation',
    note: 'AI for specific tasks, with a person approving the result.',
  },
  {
    href: '/services/custom-software',
    name: 'Custom software',
    note: 'Internal tools and dashboards where off-the-shelf software falls short.',
  },
]

const diagonal = (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]">
    <path d="M2 10 L10 2 M3.5 2 H10 V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function TechnologyAutomationPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Technology & Automation', path: '/services/technology-automation' }]))} />
      <Nav />
      <main>
        <SimpleServiceHero
          image={{ src: '/images/hero-automation.jpg' }}
          crumbs={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Technology & Automation' }]}
          name="Make better use of technology."
          intro="I help businesses automate repetitive work, connect existing systems and build software that makes everyday tasks easier."
          cta={{ href: '/contact', label: 'Discuss your business' }}
        />

        <ProblemBand heading="What could work better?" problems={problems} />

        {/* 3. Explore technology services */}
        <section data-nav-theme="light" className="bg-bone px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">
                Explore technology services
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <ul className="border-t border-border-light">
                {services.map((svc) => (
                  <li key={svc.href} className="border-b border-border-light">
                    <Link href={svc.href} className="group flex items-start justify-between gap-6 py-5 md:py-6">
                      <span>
                        <span className="block font-display text-2xl leading-tight text-ink transition-colors group-hover:text-terracotta md:text-3xl">
                          {svc.name}
                        </span>
                        <span className="mt-1.5 block max-w-sm text-sm leading-relaxed text-secondary">{svc.note}</span>
                      </span>
                      <span className="mt-2 text-ink transition-colors group-hover:text-terracotta">{diagonal}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* How a project works */}
        <section data-nav-theme="light" className="border-t border-border-light bg-bone px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-10 max-w-xl md:mb-14">
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">
                How a project works
              </h2>
            </ScrollReveal>
            <ProcessSteps />
          </div>
        </section>

        {/* 4. Pricing and getting started */}
        <section data-nav-theme="light" className="border-t border-border-light bg-subtle px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">
                Pricing and getting started
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-16 lg:gap-24">
              <ScrollReveal className="border-t border-ink/20 pt-6">
                <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                  Automation implementation from £1,500
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">
                  The final cost depends on the complexity of the work. I&rsquo;ll agree the scope and price with you before development begins.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80} className="border-t border-ink/20 pt-6">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">Business Automation Review</h3>
                  <p className="shrink-0 text-sm font-medium text-secondary md:text-base">£395</p>
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">
                  For businesses that want help identifying opportunities before committing to an implementation. The fee is credited against implementation commissioned within 60 days.
                </p>
                <div className="mt-6">
                  <ArrowLink href="/business-automation-review">Explore the review</ArrowLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 5. Final contact CTA */}
        <CTABanner
          heading="Have something in mind?"
          description="Tell me what you're trying to improve, and I'll help you work out where to start."
          cta="Discuss your project"
          href="/contact"
          diagonal
        />
      </main>
      <Footer />
    </>
  )
}
