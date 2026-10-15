import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const wordClass = 'font-sans font-extrabold uppercase leading-[0.92] tracking-tight'
const wordStyle = { fontSize: 'clamp(2.1rem, 5vw, 4rem)' }

const technologyPages = [
  {
    href: '/services/workflow-automation',
    name: 'Workflow automation',
    note: 'Enquiry handling, follow-ups, onboarding, documents and reporting.',
    price: 'From £1,500',
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

const arrow = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ProofLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
    >
      {children}
      {arrow}
    </Link>
  )
}

export default function Capabilities() {
  return (
    <div id="capabilities">
      {/* TECHNOLOGY & AUTOMATION: primary */}
      <section data-nav-theme="dark" className="relative z-10 bg-navy px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.15fr] md:gap-16 lg:gap-24">
          <ScrollReveal threshold={0.1}>
            <h2 id="technology-automation" className={`${wordClass} scroll-mt-28 text-bone`} style={wordStyle}>
              Technology
              <br />
              &amp; Automation
            </h2>
            <p className="mt-6 max-w-md font-display text-xl leading-[1.3] text-bone md:text-2xl">
              For work that takes more manual effort than it should: enquiries handled by hand,
              systems that need the same data twice, a spreadsheet that has outgrown its job.
            </p>
            <p className="mt-6 font-display text-2xl text-bone md:text-3xl">Automation from £1,500</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-bone/65">
              A starting point for a properly scoped project. The price is agreed before work begins.
              Not sure where to start? The{' '}
              <Link href="/business-automation-review" className="text-bone underline underline-offset-4 hover:text-terracotta transition-colors">
                Business Automation Review
              </Link>{' '}
              is £395, credited against implementation within 60 days.
            </p>
          </ScrollReveal>

          <ScrollReveal threshold={0.1} delay={80}>
            <ul className="border-t border-bone/20">
              {technologyPages.map((p) => (
                <li key={p.href} className="border-b border-bone/20">
                  <Link href={p.href} className="group flex items-start justify-between gap-6 py-5 md:py-6">
                    <span>
                      <span className="block font-display text-2xl leading-tight text-bone transition-colors group-hover:text-terracotta md:text-3xl">
                        {p.name}
                      </span>
                      <span className="mt-1.5 block max-w-sm text-sm leading-relaxed text-bone/65">{p.note}</span>
                    </span>
                    <span className="mt-2 flex items-center gap-3 text-bone transition-colors group-hover:text-terracotta">
                      {p.price && <span className="hidden text-xs text-bone/60 sm:inline">{p.price}</span>}
                      {arrow}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* WEB & DIGITAL: secondary, led by real work */}
      <section data-nav-theme="light" className="relative z-10 bg-bone px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <ScrollReveal threshold={0.1}>
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

          <ScrollReveal threshold={0.1} delay={80}>
            <h2 id="web-digital" className={`${wordClass} scroll-mt-28 text-ink`} style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)' }}>
              Web &amp; Digital
            </h2>
            <p className="mt-5 max-w-md font-display text-xl leading-[1.3] text-ink md:text-2xl">
              Websites and digital experiences, designed and built by the same person, with UX,
              conversion and branding as part of the work.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-secondary">
              Projects are often around £2,500, some below and some above, agreed before work begins.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ProofLink href="/case-studies/the-garden-tablecloth-co">The Garden Tablecloth Co.</ProofLink>
              <ProofLink href="/case-studies/planning-enforcement-advisory">The Planning Enforcement Advisory</ProofLink>
              <ProofLink href="/website-audit">UX &amp; Conversion Audit, £149</ProofLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
