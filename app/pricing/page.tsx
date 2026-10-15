import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing: Automation from £1,500 | William Langdown',
  description:
    'How automation, software, web and digital projects are scoped and priced. Automation implementations typically start from £1,500; reviews from £149. Independent consultant in Somerset.',
  alternates: {
    canonical: 'https://williamlangdown.com/pricing',
  },
  openGraph: {
    title: 'Pricing: Automation from £1,500 | William Langdown',
    description:
      'How automation, software, web and digital projects are scoped and priced.',
    url: 'https://williamlangdown.com/pricing',
  },
}

const engagements = [
  {
    title: 'Focused projects',
    body:
      'A clearly defined piece of work, such as an integration, an automation, a piece of software, a website or an identity.',
  },
  {
    title: 'Broader engagements',
    body:
      'Several pieces of work that need to fit together, such as an integration, a custom tool and a new website, scoped and delivered as one engagement.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />

      <main className="overflow-hidden bg-bone">

        {/* HERO */}
        <section
          data-nav-theme="light"
          className="px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h1 className="max-w-[17ch] font-display text-4xl leading-[1.05] tracking-[-0.025em] text-ink md:text-5xl lg:text-6xl">
                Projects shaped around what actually needs to change.
              </h1>

              <div className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:items-end md:justify-between">
                <p className="max-w-xl text-base leading-relaxed text-secondary">
                  Focused projects or broader engagements, scoped around
                  the problem rather than a fixed package. The two fixed-price
                  reviews are a good place to begin.
                </p>

                <p className="shrink-0 text-sm font-medium text-ink">
                  <Link href="/business-automation-review" className="underline underline-offset-4 hover:text-terracotta transition-colors">Business Automation Review, £395</Link>
                  <br />
                  <Link href="/website-audit" className="underline underline-offset-4 hover:text-terracotta transition-colors">UX &amp; Conversion Audit, £149</Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ENGAGEMENT TYPES */}
        <section
          data-nav-theme="light"
          className="px-6 pb-24 md:px-10 md:pb-28 lg:px-12"
        >
          <div className="mx-auto max-w-5xl border-t border-border-light">
            {engagements.map((engagement, index) => (
              <ScrollReveal key={engagement.title} delay={index * 50}>
                <div className="grid grid-cols-1 gap-4 border-b border-border-light py-8 md:grid-cols-[220px_1fr] md:gap-16 md:py-10">
                  <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                    {engagement.title}
                  </h2>

                  <p className="max-w-lg text-base leading-relaxed text-secondary">
                    {engagement.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <p className="ml-auto mt-6 max-w-lg text-sm leading-relaxed text-secondary">
                One discipline or several. The scope follows the problem
                rather than forcing the work into a package.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* PRICING */}
        <section
          data-nav-theme="dark"
          className="bg-[#10233F] px-6 py-20 md:px-10 md:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-16">

                <div className="hidden md:block" />

                <div className="max-w-2xl">
                  <p className="max-w-[20ch] font-display text-3xl leading-[1.05] tracking-[-0.02em] text-bone md:text-4xl">
                    Focused projects are often around
                  </p>

                  <p className="mt-3 font-sans text-6xl font-extrabold leading-none tracking-[-0.055em] text-bone md:text-7xl">
                    £2,500
                  </p>

                  <p className="mt-8 max-w-xl border-t border-bone/15 pt-6 text-sm leading-relaxed text-bone/60 md:text-base">
                    Some come in below, others above. The final cost depends
                    on scope, complexity and what the project actually needs.
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/60 md:text-base">
                    Automation projects start from £1,500 for a properly scoped
                    implementation. It is a starting point rather than a fixed
                    package, and the final price depends on the workflows and
                    systems involved.
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/60 md:text-base">
                    Broader engagements are scoped individually, with the
                    scope, timing and cost agreed before any work begins.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* STARTING A PROJECT */}
        <section
          data-nav-theme="light"
          className="px-6 py-24 md:px-10 md:py-28 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-16">

                <div className="hidden md:block" />

                <div className="max-w-2xl">
                  <h2 className="max-w-[16ch] font-display text-3xl leading-[1.05] tracking-[-0.025em] text-ink md:text-4xl">
                    You don&apos;t need a finished brief.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
                    A first conversation is enough to understand the business,
                    what&apos;s changing and where the problem might actually
                    sit.
                  </p>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary">
                    If there&apos;s a good fit, I&apos;ll recommend the scope,
                    timing and cost before any work begins.
                  </p>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary">
                    If you commission a project within 60 days of a Business
                    Automation Review, the £395 review fee is deducted from the
                    agreed price.
                  </p>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary">
                    See what each project involves:{' '}
                    <Link href="/services/workflow-automation" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">workflow automation</Link>,{' '}
                    <Link href="/services/software-integrations" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">software integrations</Link>,{' '}
                    <Link href="/services/ai-implementation" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">AI implementation</Link> and{' '}
                    <Link href="/services/custom-software" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">custom software</Link>.
                    For a closer look at automation costs, read{' '}
                    <Link href="/blog/how-much-does-business-workflow-automation-cost-uk" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">the UK cost guide</Link>.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div data-nav-theme="light">
          <CTABanner />
        </div>
      </main>

      <Footer />
    </>
  )
}