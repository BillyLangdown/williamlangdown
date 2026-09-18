import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import TwoUpMedia from '@/components/case-study/TwoUpMedia'

const wordClass = 'font-sans font-extrabold uppercase leading-[0.9] tracking-tight text-ink'
const wordStyle = { fontSize: 'clamp(2.25rem, 9vw, 6.5rem)' }

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

        {/* BRAND: single vertical column, word left */}
        <ScrollReveal threshold={0.15} className="border-t border-border-light py-12 md:py-16">
          <h3 className={wordClass} style={wordStyle}>Brand</h3>
          <div className="mt-8 max-w-2xl">
            <p className="font-display text-2xl md:text-3xl leading-[1.25] text-ink">
              Why someone should choose this business, and why its identity should actually
              reflect the quality of what it does.
            </p>
            <p className="mt-6 text-base text-secondary leading-relaxed max-w-xl">
              That starts with understanding the business itself: its customers, its
              competitors, and where it actually stands, before any visual design gets involved.
            </p>
            <div className="mt-8 max-w-sm">
              <OutputsList items={['Positioning & messaging', 'Visual identity', 'Naming', 'Brand systems & guidelines']} />
            </div>
            <div className="mt-8">
              <ProofLink href="/case-studies/planning-enforcement-advisory">
                The Planning Enforcement Advisory
              </ProofLink>
            </div>
          </div>
        </ScrollReveal>

        {/* DIGITAL: asymmetric two-up, word right */}
        <ScrollReveal threshold={0.15} className="border-t border-border-light py-12 md:py-16">
          <TwoUpMedia
            leftWidth="42%"
            left={
              <div style={{ border: '1px solid rgba(16,35,63,0.1)' }}>
                <Image
                  src="/images/showcase-gtc-desktop.jpg"
                  alt="The Garden Tablecloth Co. website"
                  width={1280}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full"
                />
                <div className="flex gap-8 px-4 py-4" style={{ borderTop: '1px solid rgba(16,35,63,0.1)' }}>
                  <div>
                    <p className="font-display text-xl text-ink">+75%</p>
                    <p className="text-xs text-tertiary mt-0.5">Enquiries</p>
                  </div>
                  <div>
                    <p className="font-display text-xl text-ink">-21%</p>
                    <p className="text-xs text-tertiary mt-0.5">Bounce rate</p>
                  </div>
                </div>
              </div>
            }
            right={
              <div className="md:text-right md:flex md:flex-col md:items-end">
                <h3 className={wordClass} style={wordStyle}>Digital</h3>
                <div className="mt-8 max-w-xl md:text-right">
                  <p className="font-display text-2xl md:text-3xl leading-[1.25] text-ink">
                    Turning that understanding into a digital experience that makes a business
                    easier to understand, trust and act on.
                  </p>
                  <p className="mt-6 text-base text-secondary leading-relaxed">
                    UX and information architecture sit underneath the design, not after it,
                    along with the technical SEO foundations that let the work actually get found.
                  </p>
                  <div className="mt-8 max-w-sm md:ml-auto">
                    <OutputsList items={['UX & information architecture', 'Web design', 'Technical SEO foundations', 'Content systems']} />
                  </div>
                  <div className="mt-8">
                    <ProofLink href="/case-studies/the-garden-tablecloth-co">
                      The Garden Tablecloth Co.
                    </ProofLink>
                  </div>
                </div>
              </div>
            }
          />
        </ScrollReveal>

        {/* TECHNOLOGY: proof-led, word left */}
        <ScrollReveal threshold={0.15} className="border-t border-border-light py-12 md:py-16">
          <h3 className={wordClass} style={wordStyle}>Technology</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
            <div className="flex gap-8 md:flex-col md:gap-6">
              <div>
                <p className="font-display text-3xl md:text-4xl text-ink">98</p>
                <p className="text-xs text-tertiary mt-1">Mobile PageSpeed</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-ink">100</p>
                <p className="text-xs text-tertiary mt-1">Desktop PageSpeed</p>
              </div>
            </div>
            <div className="max-w-xl">
              <p className="font-display text-2xl md:text-3xl leading-[1.25] text-ink">
                Sometimes the problem isn&apos;t how a business looks. It&apos;s how it works.
              </p>
              <p className="mt-6 text-base text-secondary leading-relaxed">
                Custom development, booking systems, integrations and automation that remove
                friction, not features added for their own sake.
              </p>
              <div className="mt-8 max-w-sm">
                <OutputsList items={['Custom development', 'Booking systems & automation', 'Integrations', 'Technical performance']} />
              </div>
              <div className="mt-8">
                <ProofLink href="/case-studies/building-ventilation-services-ltd">
                  Building Ventilation Services
                </ProofLink>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-border-light" />
      </div>
    </section>
  )
}
