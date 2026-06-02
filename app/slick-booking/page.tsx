import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Slick Booking — Online Booking Software | William Langdown',
  description: 'Slick Booking is a custom online booking platform for businesses — class schedules, appointment slots, and admin tools, all built around how you actually work.',
}

const features = [
  {
    title: 'Online booking for your customers',
    description: 'A clean, fast booking page your customers can use on any device. No logins required. Pick a slot, fill in their details, done.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 2v4M13 2v4M3 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Class schedules or appointment slots',
    description: 'Whether you run fixed classes with limited spaces, or one-to-one appointments — Slick handles both. Set your availability, and it takes care of the rest.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Admin dashboard',
    description: "See all your bookings in one place. Confirm or deny requests, manage availability, add resources like staff or locations — all from a simple dashboard.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Automated confirmation emails',
    description: 'When a booking comes in, you get an email to confirm or decline. Your customer gets a confirmation automatically — no manual follow-up needed.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 7l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Built for your business, not a template',
    description: "Every business works differently. Slick Booking is configured around how you actually run — your slot types, your resources, your flow. Not a generic out-of-the-box system.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Hosted and managed',
    description: 'No software to install, no servers to manage. I handle the hosting, updates, and technical side. You just run your business.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M5 9a5 5 0 0110 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="9" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 13v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/slick-booking.png"
                alt="Slick Booking"
                height={48}
                width={200}
                className="object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-medium uppercase tracking-wider" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Coming soon
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Online booking that works the way your business does
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Slick Booking is a booking platform I&apos;m building for businesses that need more than a generic scheduling tool. Class schedules, appointment slots, admin controls, and automated emails — all set up around how you actually run.
            </p>
            <a
              href="mailto:hello@williamlangdown.com?subject=Slick Booking enquiry"
              className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-sm px-6 py-3.5 rounded-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get in touch to find out more
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-3">What it does</h2>
              <p className="text-sm text-secondary">Built from the ground up — no third-party tools bolted together.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-subtle border border-border-light rounded-sm p-6">
                  <div className="w-9 h-9 rounded-sm bg-[#0F172A] text-white flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-ink mb-2 leading-snug">{feature.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 px-6 bg-subtle border-t border-border-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-6">Who it&apos;s for</h2>
            <p className="text-base text-secondary leading-relaxed mb-4">
              Slick Booking is built for small businesses that need a professional booking system without the enterprise price tag or the complexity of something like Bookwhen or Acuity.
            </p>
            <p className="text-base text-secondary leading-relaxed mb-4">
              If you run a training school, a studio, a clinic, or any service business where customers need to book a time — and you&apos;re currently managing it by email, phone, or a cobbled-together workaround — this is for you.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              It&apos;s currently in development. The first version is built specifically for motorbike training schools, with more business types coming soon.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-border-light" style={{ background: '#0F172A' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Interested?</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Slick Booking isn&apos;t publicly available yet, but I&apos;m taking on early businesses to set up on the platform. If you think it could work for you, drop me a message and I&apos;ll tell you more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:hello@williamlangdown.com?subject=Slick Booking enquiry"
                className="inline-flex justify-center items-center gap-2 bg-white text-[#0F172A] text-sm px-6 py-3.5 rounded-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Message me
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex justify-center items-center gap-2 border text-sm px-6 py-3.5 rounded-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.15)' }}
              >
                Back to main site
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
