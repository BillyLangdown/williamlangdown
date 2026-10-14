import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const wordClass = 'font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-ink'
const wordStyle = { fontSize: 'clamp(2.1rem, 5vw, 4rem)' }

const technologySituations = [
  {
    title: 'Repetitive administration',
    body: 'Tasks that follow the same steps every time, such as preparing documents or sending routine emails.',
  },
  {
    title: 'Systems that do not talk to each other',
    body: 'Software that needs the same information entered in more than one place.',
  },
  {
    title: 'Manual enquiry handling',
    body: 'Customer enquiries that are sorted, copied across and followed up by hand.',
  },
  {
    title: 'Processes held in spreadsheets',
    body: 'Internal work that depends on spreadsheets that are hard to share or keep accurate.',
  },
  {
    title: 'Requirements existing software cannot meet',
    body: 'A need that off-the-shelf tools do not cover, where a custom internal tool may be the answer.',
  },
  {
    title: 'AI for a specific task',
    body: 'Practical AI tools, introduced only where they genuinely help.',
  },
]

const webSituations = [
  {
    title: 'An outdated website',
    body: 'A site that no longer reflects the business or the quality of its work.',
  },
  {
    title: 'Poor navigation or usability',
    body: 'Visitors who struggle to find services or information.',
  },
  {
    title: 'Content that is hard to update',
    body: 'A site that needs a developer for simple changes, or a platform your team finds awkward.',
  },
  {
    title: 'A weak enquiry journey',
    body: 'Visitors who read the site but do not get in touch.',
  },
  {
    title: 'Slow performance',
    body: 'Pages that load slowly, particularly on mobile.',
  },
  {
    title: 'A new website or platform',
    body: 'A new build, with branding where the identity needs to catch up.',
  },
]

function Situations({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="border-t border-border-light">
      {items.map((item) => (
        <li key={item.title} className="grid grid-cols-1 gap-1 border-b border-border-light py-4 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
          <p className="text-sm font-semibold text-ink">{item.title}</p>
          <p className="text-sm leading-relaxed text-secondary">{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

function ProofLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" data-nav-theme="light" className="relative z-10 py-12 md:py-16 px-6 bg-bone">
      <div className="max-w-6xl mx-auto">

        {/* TECHNOLOGY & AUTOMATION */}
        <ScrollReveal threshold={0.1} className="border-t border-border-light py-12 md:py-16">
          <h2 id="technology-automation" className={`${wordClass} scroll-mt-28`} style={wordStyle}>
            Technology &amp; Automation
          </h2>
          <p className="mt-6 max-w-2xl font-display text-xl leading-[1.3] text-ink md:text-2xl">
            Automations, integrations, AI tools and custom software, for work that currently takes
            more manual effort than it should.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-secondary">What I can help with</h3>
              <Situations items={technologySituations} />
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-secondary">
                Not every task is worth automating, and I will say so when it is not. Where
                possible I work with the software you already use.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  Automation projects from £1,500
                </p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  This is an indicative starting price for a properly scoped project, not a fixed
                  package. The final price depends on the complexity of the work and the systems
                  involved, and you will know it before work begins.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  You can commission this work directly. If you would rather start with a review,
                  there is an option further down.
                </p>
              </div>

              <div className="border-t border-border-light pt-6">
                <p className="text-sm leading-relaxed text-secondary">
                  My background is in software development. For Building Ventilation Services I
                  built a fast React website on top of WordPress, so their team can manage case
                  studies, services and product information themselves.
                </p>
                <div className="mt-4">
                  <ProofLink href="/case-studies/building-ventilation-services-ltd">
                    Building Ventilation Services
                  </ProofLink>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* WEB & DIGITAL */}
        <ScrollReveal threshold={0.1} className="border-t border-border-light py-12 md:py-16">
          <h2 id="web-digital" className={`${wordClass} scroll-mt-28`} style={wordStyle}>
            Web &amp; Digital
          </h2>
          <p className="mt-6 max-w-2xl font-display text-xl leading-[1.3] text-ink md:text-2xl">
            Websites and digital experiences, designed and built by the same person.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-secondary">What I can help with</h3>
              <Situations items={webSituations} />
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-secondary">
                UX, conversion improvements and branding are part of the same work, and I handle both
                design and development.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  Projects often around £2,500
                </p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  Some come in below and others above, depending on scope. The price is agreed
                  before work begins.
                </p>
              </div>

              <div className="border-t border-border-light pt-6">
                <div style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                  <Image
                    src="/images/showcase-gtc-desktop.jpg"
                    alt="The Garden Tablecloth Co. website"
                    width={1280}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-auto w-full"
                  />
                  <div className="flex items-end justify-between gap-4 px-4 py-4" style={{ borderTop: '1px solid rgba(16,35,63,0.1)' }}>
                    <div className="flex gap-6">
                      <div>
                        <p className="font-display text-xl text-ink">+75%</p>
                        <p className="mt-0.5 text-xs text-tertiary">Enquiries</p>
                      </div>
                      <div>
                        <p className="font-display text-xl text-ink">-21%</p>
                        <p className="mt-0.5 text-xs text-tertiary">Bounce rate</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <ProofLink href="/case-studies/the-garden-tablecloth-co">The Garden Tablecloth Co.</ProofLink>
                  <ProofLink href="/case-studies/planning-enforcement-advisory">
                    The Planning Enforcement Advisory
                  </ProofLink>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-border-light" />
      </div>
    </section>
  )
}
