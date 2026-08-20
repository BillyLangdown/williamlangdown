import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Working Together | William Langdown',
  description:
    'How brand, digital and technology projects are scoped, priced and started with William Langdown.',
  alternates: {
    canonical: 'https://williamlangdown.com/pricing',
  },
  openGraph: {
    title: 'Working Together | William Langdown',
    description:
      'Focused projects and broader engagements across brand, digital and technology.',
    url: 'https://williamlangdown.com/pricing',
  },
}

const engagements = [
  {
    title: 'Focused projects',
    body:
      'A clearly defined piece of work, such as a website, identity, digital experience or piece of software.',
  },
  {
    title: 'Broader engagements',
    body:
      'Research and strategy carried through brand, digital and technology where several things need to change together.',
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
                  Focused projects or broader engagements across brand,
                  digital and technology, scoped around the problem rather
                  than a fixed package.
                </p>

                <p className="shrink-0 text-sm font-medium text-ink">
                  Brand <span className="text-terracotta">/</span> Digital{' '}
                  <span className="text-terracotta">/</span> Technology
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
                    £2,000
                  </p>

                  <p className="mt-8 max-w-xl border-t border-bone/15 pt-6 text-sm leading-relaxed text-bone/60 md:text-base">
                    Some come in below, others above. The final cost depends
                    on scope, complexity and what the project actually needs.
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