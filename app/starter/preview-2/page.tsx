import Link from 'next/link'
import PhotoPlaceholder from '../PhotoPlaceholder'

const offerings = [
  { name: 'Weekly bouquets', desc: 'Fresh, seasonal, delivered every Friday.' },
  { name: 'Weddings & events', desc: 'From a single arch to a full venue.' },
  { name: 'Gifting', desc: 'Same-day delivery across Bristol.' },
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
              style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A' }}
              className="text-4xl md:text-5xl font-medium leading-[1.1] italic text-balance"
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
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-lg" style={{ background: '#C97B5A', opacity: 0.2 }} />
            <PhotoPlaceholder
              label="A tall photo of your work, shop, or flowers goes here"
              src="/images/starter/willow-hero.jpg"
              className="relative w-full aspect-[4/5] rounded-lg"
              darken={0.15}
              overlayLabel="Your photo"
            />
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="px-6 py-16" style={{ background: '#F1E7D8' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {offerings.map(o => (
            <div key={o.name} className="text-center">
              <h3 style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A' }} className="text-xl font-medium mb-2">
                {o.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A7A65' }}>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A' }} className="text-2xl md:text-3xl italic leading-snug">
            &ldquo;Every bunch feels like it was picked just for the person receiving it.&rdquo;
          </p>
          <p className="mt-5 text-sm" style={{ color: '#8A7A65' }}>A regular customer</p>
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
          <h2 style={{ fontFamily: 'var(--font-fraunces)', color: '#FBF6EF' }} className="text-3xl md:text-4xl font-medium italic">
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
