import Link from 'next/link'
import PhotoPlaceholder from '../PhotoPlaceholder'

const offerings = [
  {
    name: 'Weekly bouquets',
    desc: 'Fresh, seasonal, delivered every Friday.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21c0-5 0-9 0-13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 12c-3-1-4.5-3.5-4.5-6.5C10.5 5.5 12 8 12 12z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 12c3-1 4.5-3.5 4.5-6.5C13.5 5.5 12 8 12 12z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Weddings & events',
    desc: 'From a single arch to a full venue.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9" cy="13" r="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="13" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 5.5l1-2 1 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Gifting',
    desc: 'Same-day delivery across Bristol.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="10" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 10h16M12 10v10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 10c-2 0-3.5-1-3.5-2.75S9.5 4.5 12 6.5c2.5-2 3.5-.5 3.5 0.75S14 10 12 10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Preview2Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-14 md:gap-16 items-center">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="text-sm mb-5" style={{ color: '#C97B5A' }}>Bristol&apos;s independent florist</p>
            <h1
              style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A', fontWeight: 600 }}
              className="text-4xl md:text-5xl leading-[1.1] tracking-tight text-balance"
            >
              Flowers, done gently
            </h1>
            <p className="mt-7 text-base max-w-md mx-auto md:mx-0 leading-relaxed" style={{ color: '#8A7A65' }}>
              Seasonal, locally grown where we can, and arranged by hand for every occasion, big or small.
            </p>
            <Link
              href="/starter/preview-2/contact"
              className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 text-sm font-medium rounded-full transition-opacity hover:opacity-90"
              style={{ background: '#C97B5A', color: '#FFFFFF' }}
            >
              Get in touch
            </Link>
          </div>

          <div className="relative shrink-0 w-full max-w-sm mx-auto md:w-[26rem] md:max-w-none md:mx-0 order-1 md:order-2">
            {/* Organic blob backdrop instead of a flat offset rectangle */}
            <svg
              className="absolute pointer-events-none"
              style={{ top: '-8%', left: '-10%', width: '120%', height: '120%', zIndex: 0 }}
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
            >
              <path
                fill="#C97B5A"
                opacity="0.22"
                d="M45.8,-58.3C58.7,-49.6,67.9,-34.5,71.4,-18.1C74.9,-1.7,72.7,16,64.5,30.4C56.3,44.8,42.1,55.9,26.2,62.3C10.3,68.7,-7.3,70.4,-23.4,65.7C-39.5,61,-54.1,49.9,-62.6,35.1C-71.1,20.3,-73.5,1.8,-69.6,-14.6C-65.7,-31,-55.5,-45.3,-42.1,-54.1C-28.7,-62.9,-14.3,-66.2,1.6,-68.4C17.6,-70.6,33,-67,45.8,-58.3Z"
                transform="translate(100 100)"
              />
            </svg>

            <PhotoPlaceholder
              label="A tall photo of your work, shop, or flowers goes here"
              src="/images/starter/willow-hero.jpg"
              className="relative w-full aspect-[4/5] rounded-lg"
              style={{ zIndex: 1 }}
              darken={0.15}
              overlayLabel="Your photo"
            />

            {/* Rotated stamp-style badge for a hand-made, personal touch */}
            <div
              className="absolute flex flex-col items-center justify-center text-center rounded-full"
              style={{
                top: '-14px',
                left: '-18px',
                width: '92px',
                height: '92px',
                background: '#FBF6EF',
                border: '1px solid rgba(58,50,42,0.15)',
                transform: 'rotate(-9deg)',
                zIndex: 2,
                boxShadow: '0 6px 16px rgba(58,50,42,0.12)',
              }}
            >
              <span
                style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: '#3A322A' }}
                className="text-[11px] leading-tight px-2"
              >
                Bristol&apos;s own
              </span>
              <span className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: '#C97B5A' }}>
                Est. 2021
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings: deep contrast block so the page has a real beat, not more cream */}
      <section className="px-6 py-20" style={{ background: '#2F3B2C' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {offerings.map(o => (
            <div
              key={o.name}
              className="flex flex-col items-center text-center px-6 py-8 rounded-lg"
              style={{ background: 'rgba(251,246,239,0.06)', border: '1px solid rgba(251,246,239,0.12)' }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-full mb-4"
                style={{ background: 'rgba(201,123,90,0.18)', color: '#E3A785' }}
              >
                {o.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', color: '#FBF6EF', fontWeight: 600 }} className="text-xl mb-2">
                {o.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,246,239,0.6)' }}>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-24">
        <div className="relative max-w-2xl mx-auto text-center pt-14">
          <span
            aria-hidden
            style={{ fontFamily: 'var(--font-fraunces)', color: '#C97B5A', opacity: 0.35 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] leading-none select-none"
          >
            &ldquo;
          </span>
          <p
            style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A', fontWeight: 600 }}
            className="relative text-2xl md:text-3xl leading-snug"
          >
            Every bunch feels like it was picked just for the person receiving it.
          </p>
          <p className="relative mt-5 text-sm" style={{ color: '#8A7A65' }}>A regular customer</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-28 overflow-hidden">
        <PhotoPlaceholder
          label="A photo for the closing CTA goes here"
          src="/images/starter/willow-hero.jpg"
          className="absolute inset-0"
          darken={0.55}
          objectPosition="50% 30%"
          overlayPosition="corner"
        />
        <div className="relative max-w-xl mx-auto text-center">
          <h2 style={{ fontFamily: 'var(--font-fraunces)', color: '#FBF6EF', fontWeight: 600 }} className="text-3xl md:text-4xl">
            Order this week&apos;s bouquet
          </h2>
          <Link
            href="/starter/preview-2/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 text-sm font-medium rounded-full transition-opacity hover:opacity-90"
            style={{ background: '#C97B5A', color: '#FFFFFF' }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
