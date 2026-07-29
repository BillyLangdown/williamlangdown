import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Booking Systems & Automation | William Langdown',
  description:
    'Booking systems, automated reminders, customer management and enquiry workflows that reduce admin and save time. Priced individually based on scope.',
  alternates: { canonical: 'https://williamlangdown.com/services/booking-systems-automation' },
  openGraph: {
    title: 'Booking Systems & Automation | William Langdown',
    description:
      'Booking systems, automated reminders, customer management and enquiry workflows that reduce admin and save time.',
    url: 'https://williamlangdown.com/services/booking-systems-automation',
  },
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

const examples = [
  { title: 'Online booking systems', body: 'Customers book straight into your calendar, no phone tag, no double-booking.' },
  { title: 'Automated reminders', body: 'Fewer no-shows, without you having to remember to chase anyone.' },
  { title: 'Customer management', body: "One place to see who your customers are and where they're at, instead of spread across email and notebooks." },
  { title: 'Enquiry workflows', body: 'New enquiries sorted, responded to and followed up automatically instead of sitting in an inbox.' },
  { title: 'AI automation', body: "AI handling the repetitive admin, like answering common questions or drafting replies, so you don't have to." },
]

const faqs = [
  {
    q: 'Is this the same as Orla?',
    a: "Orla is my own ready-made booking product, and it might already do what you need. This service is for something more specific to your business, built around your exact process rather than a general product.",
  },
  {
    q: 'What does a typical project look like?',
    a: "It starts with mapping out how enquiries or bookings currently move through your business, then automating the repetitive parts, whether that's a booking calendar, reminder emails, or sorting enquiries automatically.",
  },
  {
    q: 'How is this priced?',
    a: "Every project is scoped individually based on what you need automated. I'll talk it through with you and give you a clear quote before anything starts.",
  },
  {
    q: 'Do I need to replace my existing tools?',
    a: 'Not necessarily. A lot of automation work is about connecting the tools you already use so information moves between them automatically.',
  },
]

export default function BookingSystemsAutomationPage() {
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
                  Priced individually
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.06] tracking-tight text-ink max-w-3xl">
                  Booking systems and automation
                </h1>
                <p className="text-base text-secondary mt-4 max-w-xl leading-relaxed">
                  Reduce admin and save time with systems designed around your processes, not generic
                  software you have to bend your business around.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact?service=automation"
                    className="inline-flex items-center gap-2 bg-ink text-white text-sm px-7 py-3.5 rounded-sm font-medium hover:bg-ink/85 transition-colors"
                  >
                    Talk about your process
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Examples */}
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

        {/* Proof: Orla */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="rounded-sm border border-border-light bg-white/80 px-6 py-8 sm:px-8 flex flex-col sm:flex-row sm:items-center gap-6" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Built by someone who's built this before</p>
                  <p className="text-sm text-secondary leading-relaxed mb-3">
                    Orla is booking software I built myself, with an AI assistant, calendar sync and email
                    integration. If you want to see what&apos;s possible, it&apos;s live at orlabooking.com.
                  </p>
                  <Link href="https://orlabooking.com" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors">
                    Visit orlabooking.com
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <Image src="/images/orla-logo-long-accent.png" alt="Orla" height={28} width={82} className="object-contain shrink-0" />
              </div>
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

        {/* Cross-link to Custom Software */}
        <section className="px-6 pt-20 pb-0" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-sm border border-border-light bg-white/80 px-6 py-6 sm:px-8" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <p className="text-sm text-secondary flex-1">
                  Need something bigger than automation, like a full internal system?
                </p>
                <Link
                  href="/services/custom-software"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink border border-border-light rounded-sm px-5 py-2.5 shrink-0 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  See Custom Software
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
