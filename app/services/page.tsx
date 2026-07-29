import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import ProcessSteps from '@/components/ProcessSteps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Services in Taunton & Somerset | William Langdown',
  description: 'Website audits from £145, design and development from £1,495, and hourly development from £30/hour. Based in Taunton, Somerset, working across the South West. Clear pricing, no surprises.',
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Web Design Services in Taunton & Somerset | William Langdown',
    description: 'Website audits from £145, design and development from £1,495, and hourly development from £30/hour. Based in Taunton, Somerset, working across the South West.',
    url: 'https://williamlangdown.com/services',
  },
}

const tiers = [
  {
    id: 'audit',
    name: 'Website Audit',
    price: '£145',
    priceNote: '',
    description:
      'A thorough written review of your site covering UX, messaging, structure, trust signals, responsiveness, performance, and SEO basics.',
    features: [
      'UX and conversion review',
      'Messaging and trust signals',
      'Performance and SEO basics',
      'Written report with video walkthrough',
    ],
    cta: 'Get an audit',
    href: '/contact?service=audit',
    learnMoreHref: '/services/website-audits',
    featured: false,
  },
  {
    id: 'build',
    name: 'Design & Build',
    price: 'From £1,495',
    priceNote: '',
    description:
      "Not a template. A complete website designed and built around how your customers actually find and buy from you. From 5 pages, with optional custom extras. No idea too big or small.",
    features: [
      'From 5 pages, fully responsive',
      'Contact forms, SEO and analytics',
      '2 rounds of refinements',
      'Launch support included',
    ],
    cta: 'Start a project',
    href: '/contact?service=build',
    learnMoreHref: '/services/web-design',
    featured: true,
  },
  {
    id: 'development',
    name: 'Development Help',
    price: 'From £30 / hour',
    priceNote: 'Returning Design & Build clients: £30/hr · New clients: £60/hr',
    description:
      'Ongoing help with your existing website. Updates, fixes, new content, and improvements. No retainer, no contract.',
    features: [
      'Copy, content, and new pages',
      'Design tweaks and refreshes',
      'Bug fixes and maintenance',
      'No retainer, no contract',
    ],
    cta: 'Get in touch',
    href: '/contact?service=development',
    learnMoreHref: '/services/website-support',
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
                  Three ways to work together, from a quick audit if you want a second opinion first, to a complete design and build.
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
                /* Featured: dark card with blob layer */
                <ScrollReveal key={tier.id} delay={i * 80}>
                  <div className="relative overflow-hidden rounded-sm flex flex-col h-full" style={{ background: '#080e1c' }}>
                    {/* Blob: accent blue only, no off-brand indigo */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 68%)' }} />
                    </div>
                    <div className="relative z-10 p-8 flex flex-col gap-7 h-full">
                      <div>
                        <Link href={tier.learnMoreHref} className="inline-block text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-4 hover:text-white/60 transition-colors">
                          {tier.name}
                        </Link>
                        <p className="text-4xl font-heading font-bold tracking-tight text-white mb-4">{tier.price}</p>
                        {tier.priceNote && (
                          <div className="-mt-2 mb-3 flex flex-col gap-0.5">
                            {tier.priceNote.split(' · ').map((note, k) => (
                              <p key={k} className="text-xs text-white/75 font-medium leading-snug">{note}</p>
                            ))}
                          </div>
                        )}
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
                        <Link href={tier.learnMoreHref} className="inline-block text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-4 hover:text-accent transition-colors">
                          {tier.name}
                        </Link>
                        <p className="text-4xl font-heading font-bold tracking-tight text-ink mb-4">{tier.price}</p>
                        {tier.priceNote && (
                          <div className="-mt-2 mb-3 flex flex-col gap-0.5">
                            {tier.priceNote.split(' · ').map((note, k) => (
                              <p key={k} className="text-xs text-secondary font-medium leading-snug">{note}</p>
                            ))}
                          </div>
                        )}
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

        {/* ── Starter package ── */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="rounded-sm overflow-hidden">
                <div
                  className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 px-8 py-10 md:px-12"
                  style={{ background: '#080e1c' }}
                >
                  <div className="flex-1">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 bg-white/10 text-white">
                      Fast & straightforward
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                      Just need something simple? £495 starter sites.
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed max-w-lg">
                      Three pages: home, about, contact. Pick one of five ready-made designs, send your content, and see it live before you pay.
                    </p>
                  </div>
                  <Link
                    href="/starter"
                    className="inline-flex items-center justify-center gap-2 text-white text-sm px-6 py-3.5 rounded-sm font-medium transition-opacity hover:opacity-90 shrink-0"
                    style={{ background: '#2563EB' }}
                  >
                    See the Starter package
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
                  <div className="p-6 pt-7 border-t border-border-light sm:border-r">
                    <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-3">Choose Starter if</p>
                    <ul className="flex flex-col gap-2.5">
                      {['You just need something online', "You don't have a website yet", "You don't expect it to change much"].map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-tertiary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-7 border-t border-border-light" style={{ background: 'rgba(37,99,235,0.03)' }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Choose Design &amp; Build if</p>
                    <ul className="flex flex-col gap-2.5">
                      {['You want the site to actually bring in business', 'You need room to grow: blog, shop, more pages later', "Your current site is costing you customers"].map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-ink">
                How a Design & Build project works
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
