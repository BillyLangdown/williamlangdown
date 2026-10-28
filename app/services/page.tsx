import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import Link from 'next/link'
import { PathwayHero } from '@/components/service/pathway'
import { textLinkClass } from '@/components/service/parts'
import { graph, breadcrumbSchema } from '@/lib/schema'
import { pathways } from '@/lib/pathways'
import { Layout, TreeStructure } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'

const description =
  'Technology, automation and web & digital services for UK businesses: workflow automation, integrations, AI implementation, custom software, websites and UX. Independent consultant based in Somerset.'

export const metadata: Metadata = {
  title: 'Services: Technology, Automation, Web & Digital | William Langdown',
  description,
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Services: Technology, Automation, Web & Digital | William Langdown',
    description,
    url: 'https://williamlangdown.com/services',
  },
}

const marks = { technology: TreeStructure, digital: Layout } as const

// Only routes that exist. "Website design and development" is the Web & Digital
// page itself; UX & conversion work lives in the UX & Conversion Audit.
const links = {
  technology: [
    { href: '/services/workflow-automation', label: 'Workflow automation' },
    { href: '/services/software-integrations', label: 'Software integrations' },
    { href: '/services/ai-implementation', label: 'AI implementation' },
    { href: '/services/custom-software', label: 'Custom software' },
  ],
  digital: [
    { href: '/services/web-digital', label: 'Website design and development' },
    { href: '/website-audit', label: 'UX & conversion improvements' },
  ],
} as const

const panels = pathways.map((p) => ({ ...p, links: links[p.key] }))

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]))} />
      <Nav />
      <main>
        <PathwayHero
          trail={[{ name: 'Home', href: '/' }, { name: 'Services' }]}
          heading="How can I help your business?"
          intro="There are two ways I can help. Choose the one that fits where you are."
          image={{ src: '/images/hero-services.jpg', alt: '' }}
        />

        <section data-nav-theme="light" className="bg-bone px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[1.12fr_1fr] md:gap-8 lg:gap-10">
            {panels.map((p, i) => {
              const Mark = marks[p.key]
              const primary = p.key === 'technology'
              return (
                <ScrollReveal key={p.href} delay={i * 80} className="flex">
                  {/* The whole panel is one click target via the CTA's stretched
                      link; the service links sit above it so they stay separate. */}
                  <article
                    className={`group relative flex flex-1 flex-col rounded-[2px] p-6 outline-offset-4 transition-[transform,background-color] duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ink/50 motion-safe:hover:-translate-y-[3px] md:p-8 lg:p-10 ${
                      primary
                        ? 'bg-terracotta/[0.2] hover:bg-terracotta/[0.27] md:pb-10 lg:pb-12 lg:pt-12'
                        : 'bg-stone/[0.22] hover:bg-stone/[0.3]'
                    }`}
                  >
                    <Mark
                      weight="light"
                      aria-hidden="true"
                      className={`absolute right-5 top-5 text-ink md:right-8 md:top-8 lg:right-10 lg:top-10 ${
                        primary ? 'h-[72px] w-[72px] md:h-28 md:w-28 lg:h-[8.5rem] lg:w-[8.5rem]' : 'h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28'
                      }`}
                    />
                    <h2
                      className="max-w-[16ch] pr-16 font-display leading-[1.1] tracking-tight text-ink md:pr-28 lg:pr-36"
                      style={{ fontSize: primary ? 'clamp(1.9rem, 2.9vw, 3rem)' : 'clamp(1.75rem, 2.5vw, 2.6rem)' }}
                    >
                      {p.heading}
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-ink/80 md:mt-8 md:text-[1.05rem] lg:text-lg">
                      {p.description}
                    </p>
                    <ul className="relative z-10 mt-6 space-y-2 pb-8 text-sm md:mt-8 md:text-base">
                      {p.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className={textLinkClass}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto border-t border-ink/15 pt-5 md:pt-6">
                      <Link
                        href={p.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink outline-none after:absolute after:inset-0 md:text-base"
                      >
                        {p.cta}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                          className="transition-transform duration-200 motion-safe:group-hover:-translate-y-[3px] motion-safe:group-hover:translate-x-[3px]"
                        >
                          <path d="M2 10 L10 2 M3.5 2 H10 V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </section>

        <CTABanner
          heading="Not sure which fits?"
          description="Tell me what you're trying to improve, and I'll help you work out where to start."
          cta="Discuss your business"
          href="/contact"
          diagonal
        />
      </main>
      <Footer />
    </>
  )
}
