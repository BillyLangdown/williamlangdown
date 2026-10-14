import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const wordClass = 'font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-ink'
const wordStyle = { fontSize: 'clamp(2.25rem, 7vw, 5.5rem)' }

function OutputsList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-border-light">
      {items.map((item) => (
        <li key={item} className="border-b border-border-light py-3">
          <p className="text-sm text-ink">{item}</p>
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
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" data-nav-theme="light" className="relative z-10 py-16 md:py-24 px-6 bg-bone">
      <div className="max-w-6xl mx-auto">

        {/* TECHNOLOGY & AUTOMATION */}
        <ScrollReveal threshold={0.15} className="border-t border-border-light py-12 md:py-16">
          <h3 className={wordClass} style={wordStyle}>Technology &amp; Automation</h3>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="max-w-2xl">
              <p className="font-display text-2xl md:text-3xl leading-[1.25] text-ink">
                Practical technology that makes everyday work easier.
              </p>
              <p className="mt-6 text-base text-secondary leading-relaxed max-w-xl">
                I help businesses automate repetitive tasks, connect existing software and
                introduce technology that reduces unnecessary manual work. This can include AI
                tools, integrations and custom software developed around specific needs.
              </p>
              <p className="mt-4 text-base text-secondary leading-relaxed max-w-xl">
                If you already know what you need, you can contact me directly and we can scope the
                project. If you would first like help finding where automation or better use of
                your software would be worthwhile, the Business Automation Review is a focused way
                of doing that.
              </p>
              <p className="mt-8 font-display text-xl md:text-2xl text-ink">
                Automation projects from £1,500
              </p>
              <p className="mt-2 text-sm text-secondary leading-relaxed max-w-xl">
                This is a starting price for a properly scoped implementation, not a fixed package.
                The final price depends on the complexity of the project, the number of workflows,
                the systems and integrations involved, the technical requirements, testing and
                implementation, and any ongoing support.
              </p>
              <div className="mt-6">
                <ProofLink href="/business-automation-review">Business Automation Review, £395</ProofLink>
              </div>
            </div>
            <div className="max-w-sm md:pt-2">
              <OutputsList
                items={[
                  'Workflow automation',
                  'Software integrations',
                  'Practical AI implementation',
                  'Custom internal tools',
                  'Software development',
                  'Business Automation Reviews',
                ]}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* WEB & DIGITAL */}
        <ScrollReveal threshold={0.15} className="border-t border-border-light py-12 md:py-16">
          <h3 className={wordClass} style={wordStyle}>Web &amp; Digital</h3>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="max-w-2xl">
              <p className="font-display text-2xl md:text-3xl leading-[1.25] text-ink">
                Websites and digital experiences designed around your customers.
              </p>
              <p className="mt-6 text-base text-secondary leading-relaxed max-w-xl">
                I design and develop websites and digital experiences that are clear, easy to use
                and built around what customers need. My work also covers UX, conversion
                optimisation and branding.
              </p>
              <p className="mt-4 text-base text-secondary leading-relaxed max-w-xl">
                If you already have a website, the UX &amp; Conversion Audit gives an outside view
                of how well it communicates and where visitors are lost.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <ProofLink href="/website-audit">UX &amp; Conversion Audit, £149</ProofLink>
                <ProofLink href="/case-studies/planning-enforcement-advisory">
                  The Planning Enforcement Advisory
                </ProofLink>
              </div>
            </div>
            <div className="max-w-sm md:pt-2">
              <OutputsList
                items={[
                  'Website design and development',
                  'UX design',
                  'Conversion optimisation',
                  'Branding',
                  'Digital experiences',
                  'UX & Conversion Audits',
                ]}
              />
            </div>
          </div>

          <div className="mt-12 max-w-xl" style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
            <Image
              src="/images/showcase-gtc-desktop.jpg"
              alt="The Garden Tablecloth Co. website"
              width={1280}
              height={800}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="h-auto w-full"
            />
            <div className="flex items-end justify-between gap-6 px-4 py-4" style={{ borderTop: '1px solid rgba(16,35,63,0.1)' }}>
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-xl text-ink">+75%</p>
                  <p className="text-xs text-tertiary mt-0.5">Enquiries</p>
                </div>
                <div>
                  <p className="font-display text-xl text-ink">-21%</p>
                  <p className="text-xs text-tertiary mt-0.5">Bounce rate</p>
                </div>
              </div>
              <ProofLink href="/case-studies/the-garden-tablecloth-co">The Garden Tablecloth Co.</ProofLink>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-border-light" />
      </div>
    </section>
  )
}
