import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | William Langdown',
  description: 'An independent practice combining a background in advertising and branding with professional software development. Somerset-based, working with UK businesses nationwide.',
  alternates: { canonical: 'https://williamlangdown.com/about' },
  openGraph: {
    title: 'About | William Langdown',
    description: 'An independent practice combining a background in advertising and branding with professional software development. Somerset-based, working with UK businesses nationwide.',
    url: 'https://williamlangdown.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >
        {/* Header */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">About</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-ink mb-6">
                Two disciplines that don&apos;t usually sit in one person.
              </h1>
              <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
                Most people specialise in strategy and creative, or in software. William Langdown is
                built around doing both, so the thinking behind a project and the thing that actually
                gets shipped come from the same place.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Portrait + intro */}
        <section className="px-6 pb-20 md:pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
            <ScrollReveal>
              <div
                className="relative w-full overflow-hidden shadow-lg"
                style={{ aspectRatio: '801 / 1022', borderRadius: '4px 40px 4px 40px', borderLeft: '3px solid #2563EB' }}
              >
                <Image src="/images/portrait.png" alt="William Langdown" fill className="object-cover object-top" sizes="280px" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="pt-2">
              <p className="text-lg md:text-xl text-ink leading-relaxed mb-6">
                I&apos;m William. I have a BA (Hons) in Advertising &amp; Branding, and I&apos;ve spent
                the years since as a working software developer, building websites, digital products
                and internal tools professionally.
              </p>
              <p className="text-base text-secondary leading-relaxed mb-6">
                Those two backgrounds usually belong to different people on different sides of a
                project: a strategist who briefs a brand or creative team, and a separate developer
                who builds whatever gets handed over. I do both, which means research, positioning and
                creative direction stay connected to the build all the way through, rather than
                getting reinterpreted, or lost, somewhere in the handover.
              </p>
              <p className="text-base text-secondary leading-relaxed">
                In practice, that looks like understanding a business and its market properly before
                touching a design file, and understanding the software well enough to know what&apos;s
                actually possible before promising it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Two disciplines */}
        <section className="px-6 py-20 md:py-24 bg-white border-t border-border-light">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="mb-14 max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1]">Where it comes from.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <ScrollReveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-3">Brand &amp; creative</p>
                <p className="text-base text-secondary leading-relaxed">
                  Advertising &amp; Branding gave me the habit of starting with research and market
                  understanding rather than a blank page: competitor analysis, positioning, and
                  translating a strategic argument into something visual that actually holds up.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-3">Software</p>
                <p className="text-base text-secondary leading-relaxed">
                  Professional development experience, largely in React and Next.js, across websites,
                  APIs, databases and internal tools. It means the creative direction is grounded in
                  what can actually be built well, not just what renders nicely in a deck.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How I work */}
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1] mb-6">How projects work.</h2>
              <p className="text-base text-secondary leading-relaxed mb-5">
                Strategic thinking and implementation stay connected throughout a project. I bring in
                specialists and collaborators where a project genuinely calls for it, and I&apos;m
                upfront about that when it happens, rather than presenting it as a bigger operation
                than it is.
              </p>
              <p className="text-base text-secondary leading-relaxed">
                I&apos;m Somerset-based, and I work with businesses across the UK remotely. That&apos;s
                a deliberate way of working, not a workaround: most of a project, from research through
                design reviews to development, works well over a call and a shared screen. Where
                being in the room adds something, we make that happen too.
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
