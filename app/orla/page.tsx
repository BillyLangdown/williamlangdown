import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orla | William Langdown',
  description: 'Orla is a booking system with an AI assistant, Google Calendar sync, and Gmail integration. Built for small businesses.',
  alternates: { canonical: 'https://williamlangdown.com/orla' },
}

const features = [
  {
    title: 'Bookings without the back and forth',
    body: 'Customers pick a slot, you get notified, confirm from your phone. No more chasing messages to find a time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Google Calendar sync',
    body: 'Every confirmed booking goes straight into your Google Calendar. Cancellations remove it automatically.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="3" width="16" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8h16M6.5 2v2M13.5 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI assistant built in',
    body: 'Orla reads your bookings and Gmail to answer questions, surface context, and help you stay on top of your schedule.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10.5s.8 1.5 3 1.5 3-1.5 3-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7.5" cy="8.5" r="1" fill="currentColor" />
        <circle cx="12.5" cy="8.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Multi-tenant, built to scale',
    body: 'Each business gets their own booking page, dashboard, and settings. One platform, many clients.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '22px 22px',
  backgroundColor: '#F8FAFC',
}

export default function OrlaPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-36 md:pb-28"
          style={{ background: '#080e1c' }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 68%)' }} />
            <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 68%)' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">

              {/* Left */}
              <div className="flex-1">
                <div className="mb-8 flex justify-center lg:justify-start">
                  <Image
                    src="/images/orla-logo-light.png"
                    alt="Orla"
                    height={40}
                    width={130}
                    className="object-contain"
                  />
                </div>

                <div className="flex justify-center lg:justify-start mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider"
                    style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    In development
                  </div>
                </div>

                <div className="pl-4 border-l-4 border-accent mb-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.06] tracking-tight">
                    Booking software with a brain.
                  </h1>
                </div>

                <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Orla handles bookings, syncs with Google Calendar, and reads your Gmail to keep you in the loop. An AI assistant that actually knows your schedule.
                </p>

                <Link
                  href="/contact"
                  className="flex lg:inline-flex justify-center items-center gap-2 text-sm px-6 py-3.5 rounded-sm font-medium transition-opacity hover:opacity-90"
                  style={{ background: '#2563EB', color: '#fff' }}
                >
                  Interested? Get in touch
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
                <p className="mt-3 text-center text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Confirm or decline, straight from your email</p>
              </div>

            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-20" style={dotGrid}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="pl-4 border-l-4 border-accent mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink tracking-tight">What it does</h2>
              <p className="text-sm text-secondary mt-1">Built to handle the admin so you don't have to.</p>
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

        {/* Roadmap */}
        <section className="px-6 py-16 bg-subtle border-t border-border-light">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
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
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary mb-1">Coming soon</p>
                  <h3 className="text-sm font-semibold text-ink mb-1">iOS admin app</h3>
                  <p className="text-sm text-secondary leading-relaxed max-w-md">
                    Manage bookings, check your schedule, and stay on top of enquiries from your iPhone. Also available now as a web app. Visit it directly in Safari or Chrome.
                  </p>
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
