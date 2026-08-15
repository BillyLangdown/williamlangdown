import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
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

const sections = [
  {
    title: 'Projects',
    body: 'A focused piece of work (a website, a piece of software, a rebrand), or strategy, brand, digital and technology combined where the problem calls for it.',
  },
  {
    title: 'Investment',
    body: 'Scoped project by project rather than off a fixed menu. Bespoke projects typically start from around ',
    highlight: '£5,000',
    bodyEnd: ', depending on scope.',
  },
  {
    title: 'Timing',
    body: 'A first call is enough for a realistic range. A proposal follows once there\'s a clear picture of what the project involves, usually after a short discovery phase.',
  },
  {
    title: 'Working relationship',
    body: 'Direct, throughout. Strategic thinking and implementation stay connected from research to launch, and beyond it for clients who want that.',
  },
  {
    title: 'Start',
    body: 'A short call first, no obligation. Existing clients needing ongoing support or a smaller piece of work: get in touch and we\'ll work out what makes sense.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="bg-bone">

        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">Working together</p>
              <h1 className="font-display text-4xl md:text-5xl leading-[1.06] text-ink">
                Scoped around the problem, not a price list.
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto flex flex-col">
            {sections.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8 border-t border-border-light items-start">
                  <h2 className="font-display text-2xl text-ink">{s.title}</h2>
                  <p className="text-base text-secondary leading-relaxed max-w-lg">
                    {s.body}
                    {'highlight' in s && (
                      <span className="font-display text-lg font-semibold text-ink">{s.highlight}</span>
                    )}
                    {'bodyEnd' in s && s.bodyEnd}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border-light" />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
