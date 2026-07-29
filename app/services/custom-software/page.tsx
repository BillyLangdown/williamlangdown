import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software & Digital Systems | William Langdown',
  description:
    'Customer portals, internal tools, dashboards and business systems built around how your business works. Projects usually start from £3,000.',
  alternates: { canonical: 'https://williamlangdown.com/services/custom-software' },
  openGraph: {
    title: 'Custom Software & Digital Systems | William Langdown',
    description:
      'Customer portals, internal tools, dashboards and business systems built around how your business works. Projects usually start from £3,000.',
    url: 'https://williamlangdown.com/services/custom-software',
  },
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

const examples = [
  { title: 'Customer portals', body: 'A private space for your customers to check orders, book in, or see their account, without emailing back and forth.' },
  { title: 'Internal tools', body: 'Software that replaces the spreadsheets and manual processes your team works around every day.' },
  { title: 'Dashboards', body: "A clear view of what's happening in the business, pulled from wherever your data actually lives." },
  { title: 'Custom applications', body: 'Anything from a small internal app to a full platform, built with real code and no page-builder limits.' },
  { title: 'Business systems', body: 'Joining up the tools you already use so information moves automatically instead of being re-typed.' },
]

const faqs = [
  {
    q: 'How is this different from a website?',
    a: 'A website is mostly about how customers find and understand your business. Custom software is about how the business itself runs day to day, whether that’s managing jobs, customers, stock or data.',
  },
  {
    q: "What if I'm not sure exactly what I need?",
    a: "That's normal for most software projects. We start with a conversation about how things work now and where the friction is, and the right solution usually becomes clear from there.",
  },
  {
    q: 'How much does a project like this cost?',
    a: "It depends entirely on scope, but most projects start from around £3,000. I'll give you a clear quote once we've talked through what you need.",
  },
  {
    q: "Do you maintain the system after it's built?",
    a: 'Yes, ongoing development and support is available through Website Support, billed hourly with no retainer.',
  },
]

export default function CustomSoftwarePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 md:pt-36 md:pb-24" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="pl-4 border-l-4 border-accent">
                <p
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                  style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                >
                  From £3,000
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink max-w-3xl">
                  Custom software and digital systems
                </h1>
                <p className="text-base text-secondary mt-4 max-w-xl leading-relaxed">
                  Software built around the way your business works, not the other way round. For when
                  a website isn&apos;t enough and off-the-shelf tools don&apos;t quite fit.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact?service=software"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Talk about a project
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What this covers */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-10 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">What this covers</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {examples.map((example, i) => (
                <ScrollReveal key={example.title} delay={i * 60}>
                  <div className="rounded-sm border border-border-light bg-white/80 p-6 h-full" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <h3 className="text-sm font-semibold text-ink mb-2">{example.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{example.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">Who this is for</h2>
              <p className="text-sm text-secondary leading-relaxed">
                Service businesses, construction and engineering companies, trades and professional
                services whose needs have outgrown a website, a spreadsheet, or an off-the-shelf tool
                that almost fits but not quite.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 bg-subtle">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="mb-12 pl-4 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Common questions</h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 60}>
                  <h3 className="text-base font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-sm text-secondary leading-relaxed max-w-2xl">{faq.a}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-link to Booking Systems & Automation */}
        <section className="px-6 pt-20 pb-0" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white/80 px-6 py-6 sm:px-8" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <p className="text-sm text-secondary flex-1">
                  Looking for something more specific, like a booking system or automated reminders?
                </p>
                <Link
                  href="/services/booking-systems-automation"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Booking Systems &amp; Automation
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
