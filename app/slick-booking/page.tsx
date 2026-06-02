import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Slick Booking | William Langdown',
  description: 'Slick Booking is online booking software for small businesses. Take bookings, confirm them from your phone, and cut out the back-and-forth.',
}

const points = [
  {
    title: 'Runs on your phone, no app needed',
    body: 'You manage your bookings from your phone or laptop, whichever is closer. Customers book from theirs. Nobody downloads anything.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="6" y="2" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 14.5h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Confirm bookings straight from your inbox',
    body: 'When a customer books, you get an email with all the details. One click to confirm, one click to decline. No logging in. Or turn on auto-confirm and it handles itself.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'No technical knowledge needed',
    body: "You set up your availability, share your booking link, and that's it. It's built for people who want to run their business, not figure out software.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cut out the back and forth',
    body: 'No more text chains trying to pin down a time. No more reply-all emails. Customers pick a slot, you get notified, everyone moves on.',
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
        <section className="pt-32 pb-20 px-6" style={{ background: '#0F172A' }}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/slick-booking.png"
                alt="Slick Booking"
                height={48}
                width={200}
                className="object-contain"
              />
            </div>
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border text-xs font-medium uppercase tracking-wider"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.45)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Coming soon
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5 leading-tight">
              Take bookings online and cut out the back and forth
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Slick Booking is booking software for small businesses. Customers book online, you confirm from your phone, and everyone gets on with their day.
            </p>
            <a
              href="mailto:hello@williamlangdown.com?subject=Slick Booking"
              className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-sm px-6 py-3.5 rounded-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Message me to find out more
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* Key points */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-12">How it works</h2>
            <div className="flex flex-col">
              {points.map((point, i) => (
                <div key={point.title} className={`flex gap-5 py-8 ${i < points.length - 1 ? 'border-b border-border-light' : ''}`}>
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-[#0F172A] text-white flex items-center justify-center mt-0.5">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink mb-2">{point.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming soon note */}
        <section className="py-16 px-6 bg-subtle border-t border-border-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-heading font-bold text-ink mb-3">What&apos;s coming</h2>
            <p className="text-sm text-secondary leading-relaxed max-w-xl">
              The first version is being built for motorbike training schools. WhatsApp booking confirmations are on the roadmap, so you can manage everything without leaving your phone.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-border-light" style={{ background: '#0F172A' }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">Want to know more?</h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Not publicly available yet. Message me and I will tell you more.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="mailto:hello@williamlangdown.com?subject=Slick Booking"
                className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-sm px-5 py-3 rounded-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Message me
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm px-5 py-3 rounded-sm border transition-colors whitespace-nowrap"
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
