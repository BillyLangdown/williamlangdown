import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import ProcessSteps from '@/components/ProcessSteps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | William Langdown',
  description: 'Website audits from £145, design and development from £1,495, and hourly support at £30/hour. Clear pricing, no surprises.',
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Services | William Langdown',
    description: 'Website audits from £145, design and development from £1,495, and hourly support at £30/hour. Clear pricing, no surprises.',
    url: 'https://williamlangdown.com/services',
  },
}

const tiers = [
  {
    id: 'audit',
    name: 'Website Audit',
    price: '£145',
    description:
      'A thorough written review of your site covering UX, messaging, structure, trust signals, responsiveness, performance, and SEO basics.',
    features: [
      'UX and conversion review',
      'Messaging and clarity review',
      'Trust signals and structure',
      'Responsiveness and performance',
      'SEO basics',
      'Written report with prioritised recommendations',
      'Short video walkthrough',
    ],
    cta: 'Get an audit',
    href: '/contact?service=audit',
    featured: false,
  },
  {
    id: 'build',
    name: 'Design & Build',
    price: 'From £1,495',
    description:
      'A complete website designed and built around your customers. Everything included, ready to launch.',
    features: [
      'Up to 5 core pages',
      'Fully responsive design',
      'Contact forms',
      'Basic SEO setup',
      'Analytics integration',
      '2 rounds of refinements',
      'Launch support',
    ],
    cta: 'Start a project',
    href: '/contact?service=build',
    featured: true,
  },
  {
    id: 'development',
    name: 'Development Help',
    price: '£30 / hour',
    description:
      'Ongoing help with your existing website. Updates, fixes, new content, and improvements. No retainer, no contract.',
    features: [
      'Copy and content changes',
      'New pages or sections',
      'Design tweaks and refreshes',
      'Bug fixes and maintenance',
      'No retainer required',
    ],
    cta: 'Get in touch',
    href: '/contact?service=development',
    featured: false,
  },
]


export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Header ── */}
        <section
          className="px-6 pt-32 pb-20 md:pt-36 md:pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink">
                  Services
                </h1>
                <p className="text-base text-secondary mt-3 max-w-xl leading-relaxed">
                  Three ways to work together. Most clients start with an audit to find out exactly what&apos;s holding their site back.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Tiers ── */}
        <section
          className="px-6 pb-24"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((tier, i) => (
              tier.featured ? (
                /* Featured — dark card with blob layer */
                <ScrollReveal key={tier.id} delay={i * 80}>
                  <div className="relative overflow-hidden rounded-sm flex flex-col h-full" style={{ background: '#080e1c' }}>
                    {/* Blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 68%)' }} />
                      <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 68%)' }} />
                    </div>
                    <div className="relative z-10 p-8 flex flex-col gap-7 h-full" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-4">{tier.name}</p>
                        <p className="text-4xl font-heading font-bold tracking-tight text-white mb-4">{tier.price}</p>
                        <p className="text-sm leading-relaxed text-white/75">{tier.description}</p>
                      </div>
                      <ul className="flex flex-col gap-3 flex-1">
                        {tier.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" style={{ color: 'rgba(37,99,235,0.8)' }}>
                              <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-sm leading-relaxed text-white/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={tier.href}
                        className="inline-flex justify-center items-center gap-2 text-white text-sm px-6 py-3.5 rounded-sm font-medium transition-opacity hover:opacity-90"
                        style={{ background: '#2563EB' }}
                      >
                        {tier.cta}
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ) : (
                /* Standard card */
                <ScrollReveal key={tier.id} delay={i * 80}>
                  <div className="rounded-sm flex flex-col h-full" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(15,23,42,0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className="p-8 flex flex-col gap-7 h-full">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-4">{tier.name}</p>
                        <p className="text-4xl font-heading font-bold tracking-tight text-ink mb-4">{tier.price}</p>
                        <p className="text-sm leading-relaxed text-secondary">{tier.description}</p>
                      </div>
                      <ul className="flex flex-col gap-3 flex-1">
                        {tier.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-tertiary">
                              <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-sm leading-relaxed text-secondary">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={tier.href}
                        className="inline-flex justify-center items-center gap-2 bg-ink text-white text-sm px-6 py-3.5 rounded-sm font-medium hover:bg-ink/80 transition-colors"
                      >
                        {tier.cta}
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-ink">
                How a project works
              </h2>
            </ScrollReveal>

            <ProcessSteps />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
