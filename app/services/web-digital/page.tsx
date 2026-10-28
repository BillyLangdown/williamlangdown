import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import ArrowLink from '@/components/ArrowLink'
import JsonLd from '@/components/JsonLd'
import { PathwayHero, ProblemBand } from '@/components/service/pathway'
import { graph, breadcrumbSchema } from '@/lib/schema'
import { ClockCounterClockwise, Compass, DeviceMobile } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

const description =
  'Websites and digital experiences, designed and built by the same person, with UX, conversion and branding as part of the work. Independent consultant in Somerset, working across the UK.'

export const metadata: Metadata = {
  title: 'Web & Digital: Websites, UX and Branding | William Langdown',
  description,
  alternates: { canonical: 'https://williamlangdown.com/services/web-digital' },
  openGraph: {
    title: 'Web & Digital: Websites, UX and Branding | William Langdown',
    description,
    url: 'https://williamlangdown.com/services/web-digital',
  },
}

const problems = [
  {
    Icon: ClockCounterClockwise,
    title: 'Built years ago?',
    body: 'Your website hasn’t kept up with your business.',
  },
  {
    Icon: DeviceMobile,
    title: 'Poor on a phone?',
    body: 'It doesn’t work properly on a phone, and most of your visitors are on one.',
  },
  {
    Icon: Compass,
    title: 'Not bringing in enquiries?',
    body: 'People land on it and aren’t sure what you do or why they should choose you.',
  },
]

const work = [
  {
    href: '/case-studies/the-garden-tablecloth-co',
    name: 'The Garden Tablecloth Co.',
    note: 'A redesign that lifted enquiries by 75% and cut bounce rate by 21%.',
  },
  {
    href: '/case-studies/planning-enforcement-advisory',
    name: 'The Planning Enforcement Advisory',
    note: 'A new identity and mobile-first digital experience for a specialist consultancy.',
  },
]

const diagonal = (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]">
    <path d="M2 10 L10 2 M3.5 2 H10 V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function WebDigitalPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Web & Digital', path: '/services/web-digital' },
          ]),
        )}
      />
      <Nav />
      <main>
        <PathwayHero
          trail={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Web & Digital' }]}
          heading="Make your business easier to choose."
          intro="Websites and digital experiences, designed and built by the same person, with UX, conversion and branding as part of the work."
          cta={{ href: '/contact', label: 'Discuss your website' }}
          image={{ src: '/images/hero-web-ux.jpg', alt: '' }}
        />

        <ProblemBand heading="Does this sound familiar?" problems={problems} />

        {/* Work */}
        <section data-nav-theme="light" className="bg-bone px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16">
            <ScrollReveal>
              <div className="relative border border-border-light">
                <Image
                  src="/images/showcase-gtc-desktop.jpg"
                  alt="The Garden Tablecloth Co. website"
                  width={1280}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="h-auto w-full"
                />
                <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] bg-terracotta" />
                <div className="flex items-end justify-between gap-4 border-t border-border-light bg-bone px-5 py-4">
                  <div className="flex gap-8">
                    <div>
                      <p className="font-display text-2xl text-ink">+75%</p>
                      <p className="mt-0.5 text-xs text-tertiary">Enquiries</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-ink">-21%</p>
                      <p className="mt-0.5 text-xs text-tertiary">Bounce rate</p>
                    </div>
                  </div>
                  <p className="text-xs text-tertiary">The Garden Tablecloth Co.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">Recent work</h2>
              <ul className="mt-8 border-t border-border-light">
                {work.map((w) => (
                  <li key={w.href} className="border-b border-border-light">
                    <Link href={w.href} className="group flex items-start justify-between gap-6 py-5 md:py-6">
                      <span>
                        <span className="block font-display text-2xl leading-tight text-ink transition-colors group-hover:text-terracotta md:text-3xl">
                          {w.name}
                        </span>
                        <span className="mt-1.5 block max-w-sm text-sm leading-relaxed text-secondary">{w.note}</span>
                      </span>
                      <span className="mt-2 text-ink transition-colors group-hover:text-terracotta">{diagonal}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing and getting started */}
        <section data-nav-theme="light" className="border-t border-border-light bg-subtle px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">
                Pricing and getting started
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-16 lg:gap-24">
              <ScrollReveal className="border-t border-ink/20 pt-6">
                <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">Website projects around £2,500</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">
                  Some below and some above, depending on the scope. The price is agreed before work begins.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80} className="border-t border-ink/20 pt-6">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">UX &amp; Conversion Audit</h3>
                  <p className="shrink-0 text-sm font-medium text-secondary md:text-base">£149</p>
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">
                  A review of how clearly your website communicates, builds trust and helps visitors get in touch, with a recorded walkthrough and practical recommendations.
                </p>
                <div className="mt-6">
                  <ArrowLink href="/website-audit">Explore the audit</ArrowLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTABanner
          heading="Have a website in mind?"
          description="Tell me what you want it to do for your business, and I'll help you work out where to start."
          cta="Discuss your website"
          href="/contact"
          diagonal
        />
      </main>
      <Footer />
    </>
  )
}
