import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Working Together | William Langdown',
  description: 'How projects are scoped and priced. Bespoke, engagement-based work for established UK businesses, typically starting from around £5,000. Somerset-based, working nationwide.',
  alternates: { canonical: 'https://williamlangdown.com/pricing' },
  openGraph: {
    title: 'Working Together | William Langdown',
    description: 'How projects are scoped and priced. Bespoke, engagement-based work for established UK businesses.',
    url: 'https://williamlangdown.com/pricing',
  },
}

const engagementTypes = [
  {
    name: 'A focused project',
    description: 'One clear problem: a website, a piece of software, a rebrand. Scoped, delivered, and handed over.',
  },
  {
    name: 'A combined engagement',
    description: 'Strategy, design and build considered together, where the brand, the digital experience and the underlying system all need to move at once.',
  },
  {
    name: 'An ongoing relationship',
    description: 'Ongoing development, refinement and support once the initial work is live, for clients who want the thinking to continue past launch.',
  },
]

const scopeFactors = [
  'How many of the three capabilities the project actually needs',
  'The size and complexity of what\'s being built',
  'How much existing material there is to work from, versus starting from research',
  'Timeline',
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Header */}
        <section
          className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Working together</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-ink mb-6">
                Scoped around the problem, not a price list.
              </h1>
              <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
                Every project is different, so pricing works project by project rather than off a
                fixed menu. As a general guide, bespoke projects typically start from around £5,000,
                depending on scope.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Engagement types */}
        <section className="px-6 pb-20 md:pb-24">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="mb-10 max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl text-ink leading-[1.15]">Typically, this looks like one of three things.</h2>
            </ScrollReveal>
            <div className="flex flex-col">
              {engagementTypes.map((type, i) => (
                <ScrollReveal key={type.name} delay={i * 80}>
                  <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-10 py-8 border-t border-border-light items-start">
                    <h3 className="text-lg font-heading font-semibold text-ink">{type.name}</h3>
                    <p className="text-base text-secondary leading-relaxed max-w-xl">{type.description}</p>
                  </div>
                </ScrollReveal>
              ))}
              <div className="border-t border-border-light" />
            </div>
          </div>
        </section>

        {/* What affects scope */}
        <section className="px-6 pb-20 md:pb-24 bg-white border-t border-border-light">
          <div className="max-w-5xl mx-auto pt-16 md:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl text-ink leading-[1.15] mb-4">What affects the number.</h2>
                <p className="text-base text-secondary leading-relaxed">
                  A first call is enough to give a realistic range. A proper proposal follows once
                  there&apos;s a clear enough picture of what the project actually involves.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <ul className="flex flex-col gap-3">
                  {scopeFactors.map((factor) => (
                    <li key={factor} className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-accent" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How it starts */}
        <section className="px-6 py-20 md:py-24 bg-subtle">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink leading-[1.15] mb-5">How it starts.</h2>
              <p className="text-base text-secondary leading-relaxed mb-4">
                A short call first, to understand the business and what&apos;s prompting the enquiry.
                No obligation, and no proposal until there&apos;s enough to scope properly.
              </p>
              <p className="text-base text-secondary leading-relaxed">
                From there, if it&apos;s a fit, the next step is usually a short discovery phase
                before any design or build work begins, so the proposal is based on the real problem
                rather than a guess at one.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80} className="mt-8">
              <p className="text-sm text-secondary">
                Existing clients needing ongoing support or a smaller piece of work: just get in touch
                and we&apos;ll work out what makes sense.{' '}
                <Link href="/contact" className="underline underline-offset-4 hover:text-ink transition-colors">
                  Contact
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
