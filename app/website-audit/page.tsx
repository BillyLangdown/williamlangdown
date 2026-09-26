import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Audit | William Langdown',
  description:
    'A personal review of an existing website, covering what is working, what is not, and what to prioritise first. A recorded walkthrough and a short written list of recommendations. £145.',
  alternates: { canonical: 'https://williamlangdown.com/website-audit' },
  openGraph: {
    title: 'Website Audit | William Langdown',
    description:
      'A personal review of an existing website, covering what is working, what is not, and what to prioritise first. A recorded walkthrough and a short written list of recommendations. £145.',
    url: 'https://williamlangdown.com/website-audit',
  },
}

const lookAt = [
  {
    title: 'Clarity',
    body: 'Can someone quickly understand what the business does, and why they should choose it?',
  },
  {
    title: 'Trust',
    body: 'Does the website give someone enough reason to believe the business is credible?',
  },
  {
    title: 'Messaging',
    body: 'Is the language specific to your business, or could it belong to almost anyone?',
  },
  {
    title: 'Customer journey',
    body: 'Can someone find what they need and take the next step easily?',
  },
  {
    title: 'Visual hierarchy and design',
    body: 'Does the page guide attention to what matters, or leave people to work it out themselves?',
  },
  {
    title: 'Mobile experience',
    body: 'Does it hold up on the device most visitors will actually use?',
  },
  {
    title: 'Technical, performance and SEO issues',
    body: 'Are there obvious problems quietly costing you visitors or search visibility?',
  },
]

export default function WebsiteAuditPage() {
  return (
    <>
      <Nav />
      <main className="bg-bone">

        {/* HERO */}
        <section className="px-6 pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20">
              <div className="flex flex-col gap-10 md:h-full md:gap-0 md:justify-between">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] text-ink">
                  Website audit
                </h1>

                <div>
                  <p className="text-lg md:text-xl text-ink">
                    <span className="font-semibold">£145</span>{' '}
                    <span className="text-terracotta">&middot;</span>{' '}
                    <span className="text-base md:text-lg text-secondary">Approx. 15 min</span>
                  </p>
                  <p className="mt-1 text-sm md:text-base text-secondary">
                    Recorded review + recommendations
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 md:h-full md:gap-0 md:justify-between max-w-xl">
                <p className="font-display text-lg md:text-2xl leading-[1.4] text-ink">
                  I&apos;ll review your website and tell you what I&apos;d change, what
                  I&apos;d leave alone and what I think matters most.
                </p>

                <div>
                  <Link
                    href="/contact?service=website-audit"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Request an audit
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* BODY: what I'll look at, then what you'll get / what happens afterwards */}
        <section className="px-6 py-20 md:py-28 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What I&apos;ll look at</h2>
              <p className="text-sm md:text-base text-secondary leading-relaxed max-w-xl mb-12">
                A general review, not a narrow technical scan. In fifteen minutes the aim is to
                identify what matters most for your business, not to work through every page
                line by line.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
              {lookAt.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 40}>
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-secondary leading-relaxed max-w-sm">{item.body}</p>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-border-light grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What you&apos;ll get</h2>
                <p className="text-base text-secondary leading-relaxed max-w-md">
                  A recorded walkthrough of your website, about fifteen minutes long, where I
                  explain what I found and why it matters. Alongside that, a short written list
                  of what I think you should prioritise first.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={60}>
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">What happens afterwards</h2>
                <p className="text-base text-secondary leading-relaxed max-w-md">
                  The recommendations are yours. You can make the changes yourself, hand them to
                  whoever already looks after your website, or come back and ask me to help with
                  some or all of it. What you do with them afterwards is entirely up to you.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
