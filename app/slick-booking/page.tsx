import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Slick Booking | William Langdown',
  description: 'Slick Booking is online booking software for small businesses. Take bookings, confirm from your phone, no app needed.',
}

const points = [
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
    title: 'Confirm or decline from your inbox',
    body: 'New booking? You get an email. Hit confirm or decline and that is it. Or switch on auto-confirm and it handles itself.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Simple to set up',
    body: 'Share your booking link and you are done. No training, no technical setup.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Stop the text chain',
    body: 'Customers pick a slot, you get notified. No more going back and forth over text and email to find a time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 6h12M4 10h8M4 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function SlickBookingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section className="pt-28 pb-16 px-6" style={{ background: '#0F172A' }}>
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/images/slick-booking.png" alt="Slick Booking" height={44} width={180} className="object-contain" />
            </div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border text-[11px] font-medium uppercase tracking-wider"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Coming soon
            </div>
            <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 leading-snug">
              Take bookings online. Cut out the back and forth.
            </h1>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Booking software for small businesses. Customers book, you confirm from your phone.
            </p>
            <a
              href="mailto:hello@williamlangdown.com?subject=Slick Booking"
              className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-sm px-5 py-3 rounded-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get in touch
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* Key points */}
        <section className="py-14 px-6 bg-surface">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-ink mb-8">What it does</h2>
            <div className="flex flex-col">
              {points.map((point, i) => (
                <div
                  key={point.title}
                  className={`flex gap-4 py-6 ${i < points.length - 1 ? 'border-b border-border-light' : ''}`}
                >
                  <div className="w-9 h-9 shrink-0 rounded-sm bg-[#0F172A] text-white flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-1">{point.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap note */}
        <section className="py-10 px-6 bg-subtle border-t border-border-light">
          <div className="max-w-2xl mx-auto flex gap-4 items-start">
            <div className="w-9 h-9 shrink-0 rounded-sm bg-[#0F172A] text-white flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M3 9a6 6 0 1012 0A6 6 0 003 9z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 5v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink mb-1">WhatsApp confirmations coming</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Managing bookings over WhatsApp is on the roadmap, so you can confirm and decline without opening a laptop.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-border-light" style={{ background: '#0F172A' }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-heading font-bold text-white mb-2">Interested?</h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Not publicly available yet. Drop me a message and I will fill you in.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@williamlangdown.com?subject=Slick Booking"
                className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-sm px-5 py-3 rounded-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Message me
              </a>
              <Link
                href="/"
                className="inline-flex items-center text-sm px-5 py-3 rounded-sm border transition-colors"
                style={{ color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.15)' }}
              >
                Back to site
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
