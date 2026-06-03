import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slick Booking | William Langdown',
  description: 'Slick Booking is online booking software for small businesses. Take bookings online, confirm from your phone. No app needed.',
  alternates: { canonical: 'https://williamlangdown.com/slick-booking' },
}

const features = [
  {
    title: 'Works on your phone. No app.',
    body: 'Manage bookings from your phone or laptop. Customers book from theirs. Nobody downloads anything.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="6" y="2" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 14.5h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Confirm from your inbox',
    body: 'New booking? You get an email. Hit confirm or decline — or switch on auto-confirm and it handles itself.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Simple to set up',
    body: 'Share your booking link and you are done. No training, no technical setup, no learning curve.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cut out the back and forth',
    body: 'Customers pick a slot, you get notified. No more going back and forth over text to find a time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 6h12M4 10h8M4 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

export default function SlickBookingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-36 md:pb-28"
          style={{ background: '#080e1c' }}
        >
          {/* Blob layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 68%)' }} />
            <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 68%)' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">

              {/* Left — text */}
              <div className="flex-1">
                {/* Logo */}
                <div className="mb-8 flex justify-center lg:justify-start">
                  <Image
                    src="/images/slick-booking.png"
                    alt="Slick Booking"
                    height={36}
                    width={148}
                    className="object-contain"
                  />
                </div>

                {/* Coming soon badge */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider"
                    style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Coming soon
                  </div>
                </div>

                <div className="pl-4 border-l-4 border-accent mb-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.06] tracking-tight">
                    Online booking without the headache.
                  </h1>
                </div>

                <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Booking software built for small businesses. Customers pick a time, you get notified. Confirm from your phone. No app, no contract, no faff.
                </p>

                <Link
                  href="/contact"
                  className="flex lg:inline-flex justify-center items-center gap-2 text-sm px-6 py-3.5 rounded-sm font-medium transition-opacity hover:opacity-90"
                  style={{ background: '#2563EB', color: '#fff' }}
                >
                  Get in touch — I&apos;d love to hear from you
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Right — booking card mockup */}
              <div className="hidden lg:flex flex-col shrink-0 w-[340px]">
                <div
                  className="rounded-sm p-6 flex flex-col gap-5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>New booking</p>
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                  <div className="border-b pb-5" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                    <p className="text-white font-semibold text-sm mb-1">Sarah Mitchell</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>sarah@example.com</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>
                        <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M1 6h12M4.5 1v2M9.5 1v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <p className="text-sm text-white/60">Tuesday 10 June, 2:00 pm</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-sm text-white/60">60 minutes</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 py-2.5 text-sm font-medium rounded-sm transition-opacity" style={{ background: '#2563EB', color: '#fff' }}>
                      Confirm
                    </button>
                    <button className="flex-1 py-2.5 text-sm font-medium rounded-sm border" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.1)' }}>
                      Decline
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Confirm or decline — straight from your email</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink tracking-tight">What it does</h2>
              <p className="text-sm text-secondary mt-1">Everything you need. Nothing you don&apos;t.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 60}>
                  <div
                    className="p-6 rounded-sm flex gap-4 h-full"
                    style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(15,23,42,0.07)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink mb-1.5">{feature.title}</h3>
                      <p className="text-sm text-secondary leading-relaxed">{feature.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roadmap ── */}
        <section className="px-6 py-16 bg-subtle border-t border-border-light">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex gap-4 items-start">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#0F172A', color: '#fff' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                      <path d="M3 9a6 6 0 1012 0A6 6 0 003 9z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M9 5v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-1">On the roadmap</p>
                    <h3 className="text-sm font-semibold text-ink mb-1">WhatsApp confirmations</h3>
                    <p className="text-sm text-secondary leading-relaxed max-w-md">
                      Confirm and decline bookings directly over WhatsApp — no need to open a laptop or dig through email.
                    </p>
                  </div>
                </div>
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
