import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Web Design & Development, Taunton, Somerset | William Langdown',
  description: 'Clear, upfront pricing for websites, booking software and quoting tools. Starter Websites from £495, Growth Websites £1,500 to £4,000, Custom Software from £3,000. Based in Taunton, Somerset.',
  alternates: { canonical: 'https://williamlangdown.com/pricing' },
  openGraph: {
    title: 'Pricing | Web Design & Development, Taunton, Somerset | William Langdown',
    description: 'Clear, upfront pricing for websites, booking software and quoting tools for commercial trades, contractors and small businesses. Based in Taunton, Somerset.',
    url: 'https://williamlangdown.com/pricing',
  },
}

const priceList = [
  {
    name: 'Starter Websites',
    price: 'From £495',
    description: 'A simple three-page site, live in about a week. Good for getting a new or small business online quickly.',
    href: '/starter',
  },
  {
    name: 'Growth Websites',
    price: '£1,500 – £4,000',
    priceQualifier: 'Typically',
    description: 'Custom websites built around your customers’ journey, with strategy, conversion and SEO foundations included. The starting point for most trades and contractor projects.',
    href: '/services/growth-websites',
    featured: true,
  },
  {
    name: 'Custom Software',
    price: 'From £3,000',
    description: 'Customer portals, quoting tools, job-sheet systems, dashboards and internal tools built around how your business works.',
    href: '/services/custom-software',
  },
  {
    name: 'Booking Systems & Automation',
    price: 'Priced individually',
    description: 'Booking, quoting and job-scheduling systems, automated reminders and enquiry workflows that cut admin.',
    href: '/services/booking-systems-automation',
  },
  {
    name: 'Website Audit',
    price: 'From £145',
    description: 'A written review of what’s putting visitors off your current site, and how to fix it.',
    href: '/services/website-audits',
  },
  {
    name: 'Website Support',
    price: '£60 – £90 / hour',
    description: 'Ongoing development and consulting for an existing website or system.',
    href: '/services/website-support',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Header */}
        <section
          className="px-6 pt-32 pb-16 md:pt-36 md:pb-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink">
                  Pricing
                </h1>
                <p className="text-base text-secondary mt-3 max-w-xl leading-relaxed">
                  Clear, upfront pricing for web design and website development in Taunton, Somerset.
                  Built for commercial trades and contractors, and for any small business that needs a
                  site, booking system or quoting tool that actually works.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Price list */}
        <section
          className="px-6 pb-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div className="max-w-4xl mx-auto flex flex-col rounded-sm border border-border-light overflow-hidden bg-white">
            {priceList.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 60}>
                <Link
                  href={item.href}
                  className={`group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-6 transition-colors hover:bg-accent/5 ${
                    i !== 0 ? 'border-t border-border-light' : ''
                  }`}
                  style={item.featured ? { background: 'rgba(37,99,235,0.03)' } : undefined}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-heading font-semibold text-ink">{item.name}</p>
                    <p className="text-sm text-secondary leading-relaxed mt-1 max-w-xl">{item.description}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-4">
                    <div className="text-left sm:text-right">
                      {item.priceQualifier && (
                        <p className="text-[11px] font-medium text-tertiary">{item.priceQualifier}</p>
                      )}
                      <p className="text-lg font-heading font-bold text-ink whitespace-nowrap">{item.price}</p>
                    </div>
                    <svg
                      className="text-tertiary group-hover:text-accent transition-colors shrink-0"
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                    >
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={priceList.length * 60} className="max-w-4xl mx-auto mt-6">
            <p className="text-sm text-secondary">
              Not sure which fits? See the full breakdown on the{' '}
              <Link href="/services" className="underline underline-offset-4 hover:text-ink transition-colors">
                Services page
              </Link>
              , or{' '}
              <Link href="/contact" className="underline underline-offset-4 hover:text-ink transition-colors">
                get in touch
              </Link>{' '}
              and tell me what you need.
            </p>
          </ScrollReveal>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
