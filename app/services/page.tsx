import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import ProcessSteps from '@/components/ProcessSteps'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | William Langdown',
  description: 'Growth Websites typically £1,500 to £4,000, Starter Websites from £495, Custom Software from £3,000, and Booking Systems & Automation priced individually. Based in Taunton, Somerset. Clear pricing, no surprises.',
  alternates: { canonical: 'https://williamlangdown.com/services' },
  openGraph: {
    title: 'Services | William Langdown',
    description: 'Growth Websites, Starter Websites, Custom Software, and Booking Systems & Automation for small businesses in Taunton, Somerset and the South West.',
    url: 'https://williamlangdown.com/services',
  },
}

const tiers = [
  {
    id: 'growth',
    name: 'Growth Websites',
    price: '£1,500–£4,000',
    priceQualifier: 'Typically',
    priceNote: '',
    description:
      'Custom websites designed around your customers’ journey, built to bring in enquiries and support the business as it grows.',
    features: [
      'Strategy and UX planning',
      'Custom design and conversion focus',
      'SEO foundations and analytics',
      'Built to scale with the business',
    ],
    cta: 'Learn more',
    href: '/services/growth-websites',
    learnMoreHref: '/services/growth-websites',
    featured: true,
  },
  {
    id: 'starter',
    name: 'Starter Websites',
    price: 'From £495',
    priceQualifier: '',
    priceNote: '',
    description:
      'Get your business online quickly with a professional starter website. Simple, affordable, and live in about a week.',
    features: [
      'Three pages: home, about, contact',
      'One of six ready-made designs',
      'Live in about a week',
      'See it live before you pay',
    ],
    cta: 'Learn more',
    href: '/starter',
    learnMoreHref: '/starter',
    featured: false,
  },
  {
    id: 'software',
    name: 'Custom Software',
    price: 'From £3,000',
    priceQualifier: '',
    priceNote: '',
    description:
      'Software built around the way your business works, for when a website isn’t enough.',
    features: [
      'Customer portals',
      'Internal tools and dashboards',
      'Custom applications',
      'Business systems',
    ],
    cta: 'Learn more',
    href: '/services/custom-software',
    learnMoreHref: '/services/custom-software',
    featured: false,
  },
  {
    id: 'automation',
    name: 'Booking Systems & Automation',
    price: 'Priced individually',
    priceQualifier: '',
    priceNote: '',
    description:
      'Reduce admin and save time with systems designed around your processes.',
    features: [
      'Online booking systems',
      'Automated reminders',
      'Enquiry workflows',
      'AI automation',
    ],
    cta: 'Learn more',
    href: '/services/booking-systems-automation',
    learnMoreHref: '/services/booking-systems-automation',
    featured: false,
  },
]

const secondary = [
  {
    title: 'Website Audit',
    price: 'From £145',
    description: "A proper look at what's putting visitors off, and how to fix it.",
    href: '/services/website-audits',
  },
  {
    title: 'Website Support',
    price: '£60–£90 / hour',
    description: 'Ongoing development and consulting for an existing website or system.',
    href: '/services/website-support',
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
                  Four ways to work together, from a simple starter site to a fully custom growth
                  website, software and automation built around your business.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Tiers ── */}
        <section
          className="px-6 pb-16"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tiers.map((tier, i) => (
              tier.featured ? (
                /* Featured: dark card with blob layer */
                <ScrollReveal key={tier.id} delay={i * 80}>
                  <div className="relative overflow-hidden rounded-sm flex flex-col h-full" style={{ background: '#080e1c' }}>
                    <div className="absolute inset-0 pointer-events-none">
                      <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 68%)' }} />
                    </div>
                    <div className="relative z-10 p-7 flex flex-col gap-6 h-full">
                      <div>
                        <Link href={tier.learnMoreHref} className="inline-block text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-4 hover:text-white/60 transition-colors">
                          {tier.name}
                        </Link>
                        {tier.priceQualifier && (
                          <p className="text-[11px] font-medium text-white/45 mb-0.5">{tier.priceQualifier}</p>
                        )}
                        <p className="text-2xl font-heading font-bold tracking-tight text-white mb-4 whitespace-nowrap">{tier.price}</p>
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
                    <div className="p-7 flex flex-col gap-6 h-full">
                      <div>
                        <Link href={tier.learnMoreHref} className="inline-block text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-4 hover:text-accent transition-colors">
                          {tier.name}
                        </Link>
                        {tier.priceQualifier && (
                          <p className="text-[11px] font-medium text-tertiary mb-0.5">{tier.priceQualifier}</p>
                        )}
                        <p className="text-2xl font-heading font-bold tracking-tight text-ink mb-4 whitespace-nowrap">{tier.price}</p>
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

        {/* ── Also available ── */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-tertiary">Also available</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {secondary.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Link
                    href={item.href}
                    className="group rounded-sm border border-border-light p-6 flex flex-col h-full transition-colors hover:border-ink/20 bg-white/80"
                    style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs font-medium text-secondary shrink-0">{item.price}</p>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">{item.description}</p>
                    <span className="self-end inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      Find out more
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Starter vs Growth: business outcome, not template vs custom ── */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-8 pl-4 border-l-4 border-accent">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink">Starter or Growth?</h2>
              <p className="text-sm text-secondary mt-1">
                The difference isn&apos;t template versus custom. It&apos;s what the site is there to do
                for your business.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-border-light rounded-sm overflow-hidden">
              <div className="p-6 pt-7 sm:border-r border-border-light">
                <p className="text-xs font-semibold uppercase tracking-widest text-tertiary mb-3">Starter Websites</p>
                <ul className="flex flex-col gap-2.5">
                  {['A professional online presence', 'A simple brochure website', 'Suitable for new or small businesses just getting started'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-tertiary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-7 border-t sm:border-t-0 border-border-light" style={{ background: 'rgba(37,99,235,0.03)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Growth Websites</p>
                <ul className="flex flex-col gap-2.5">
                  {["Designed around your customers' journey, from first click to enquiry", 'Built with conversion, SEO foundations and analytics from day one', 'Structured to scale as the business grows: more pages, features and traffic'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-ink">
                How a Growth Website project works
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
