import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | William Langdown',
  description: 'Get in touch to discuss your website. Book a free 30-minute call or send a message and I will get back to you within one business day.',
  alternates: { canonical: 'https://williamlangdown.com/contact' },
  openGraph: {
    title: 'Contact | William Langdown',
    description: 'Get in touch to discuss your website. Book a free 30-minute call or send a message and I will get back to you within one business day.',
    url: 'https://williamlangdown.com/contact',
  },
}

interface Props {
  searchParams: Promise<{ service?: string }>
}

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams

  return (
    <>
      <Nav />
      <main
        className="min-h-screen"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <section className="px-6 pt-32 pb-24 md:pt-36 md:pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 lg:items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-32">
              <div className="pl-4 border-l-4 border-accent mb-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-[1.06] tracking-tight text-ink">
                  Let&apos;s talk about your website
                </h1>
                <p className="text-sm text-secondary mt-2">
                  Pick whichever works best for you.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Book a call */}
                <a
                  href="https://calendly.com/billy-langdown01/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-border-light rounded-sm px-5 py-4 transition-colors hover:border-accent/50"
                  style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                >
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: '#2563EB18', color: '#2563EB' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M5 1v4M11 1v4M2 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink">Book a free call</p>
                    <p className="text-xs text-secondary">30 minutes on Calendly</p>
                  </div>
                  <svg className="text-tertiary group-hover:text-accent transition-colors shrink-0" width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@williamlangdown.com"
                  className="group flex items-center gap-4 border border-border-light rounded-sm px-5 py-4 transition-colors hover:border-accent/50"
                  style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                >
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: '#2563EB18', color: '#2563EB' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M1.5 4.5l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink">Send an email</p>
                    <p className="text-xs text-secondary truncate">hello@williamlangdown.com</p>
                  </div>
                  <svg className="text-tertiary group-hover:text-accent transition-colors shrink-0" width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Form — active indicator */}
                <div
                  className="flex items-center gap-4 border rounded-sm px-5 py-4"
                  style={{ borderColor: 'rgba(37,99,235,0.3)', background: 'rgba(37,99,235,0.04)' }}
                >
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: '#2563EB18', color: '#2563EB' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M2 4h12M2 8h8M2 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Fill in the form</p>
                    <p className="text-xs text-secondary">Reply within one business day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="rounded-sm p-6 md:p-8"
              style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(15,23,42,0.08)',
              }}
            >
              <ContactForm defaultService={service} />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
