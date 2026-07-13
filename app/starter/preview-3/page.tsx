import Link from 'next/link'
import PhotoPlaceholder from '../PhotoPlaceholder'

const services = [
  { name: 'Financial planning', desc: 'Clear, independent advice for individuals and small businesses.' },
  { name: 'Business advisory', desc: 'Structuring, forecasting, and decisions that hold up under scrutiny.' },
  { name: 'Ongoing support', desc: 'A named contact, not a call centre.' },
]

export default function Preview3Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-24 pb-28">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#D9B96C' }}>
              Independent Financial &amp; Business Consulting
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-2xl" style={{ color: '#1C2333' }}>
              Considered advice, without the jargon
            </h1>
            <p className="mt-7 text-base max-w-lg leading-relaxed" style={{ color: '#5B6478' }}>
              We work with a small number of clients at a time, so every recommendation is genuinely
              tailored, not a template with your name on it.
            </p>
            <Link
              href="/starter/preview-3/contact"
              className="inline-flex items-center gap-2 mt-9 px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: '#1C2333', color: '#FFFFFF' }}
            >
              Arrange a call
            </Link>
          </div>
          <PhotoPlaceholder
            label="Your headshot"
            src="/images/starter/hartley-headshot.jpg"
            className="relative shrink-0 w-72 sm:w-80 md:w-[26rem] aspect-[3/4] rounded-2xl mx-auto md:mx-0"
            overlayLabel="Your photo"
            darken={0.35}
            objectPosition="50% 20%"
          />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20" style={{ background: '#F7F8FA' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {services.map(s => (
            <div key={s.name}>
              <div className="w-8 h-px mb-5" style={{ background: '#D9B96C' }} />
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1C2333' }}>{s.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5B6478' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 py-16 border-b" style={{ borderColor: '#E7E9EE' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[['18 yrs', 'In practice'], ['FCA', 'Regulated'], ['120+', 'Clients advised']].map(([num, label]) => (
            <div key={label}>
              <p className="text-2xl font-semibold" style={{ color: '#1C2333' }}>{num}</p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: '#9AA2B2' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: '#1C2333' }}>
            Start with a no-obligation conversation
          </h2>
          <Link
            href="/starter/preview-3/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: '#1C2333', color: '#FFFFFF' }}
          >
            Arrange a call
          </Link>
        </div>
      </section>
    </>
  )
}
