import PhotoPlaceholder from '../../PhotoPlaceholder'
import Reveal from '../../_shared/Reveal'

export default function Preview4About() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: '#A8683D' }}>About</p>
          <h1
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1B19' }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Painting quiet things
          </h1>
          <div className="mt-7 flex flex-col gap-5 leading-relaxed" style={{ color: '#6B6560' }}>
            <p>
              Maren works in oil and mixed media from a small studio in Bristol, mostly landscapes
              and interiors that ask you to slow down and look twice.
            </p>
            <p>
              Trained at Falmouth, exhibited across the South West since 2015. Commissions and
              originals available. Enquire for current availability and pricing.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="order-1 md:order-2">
          <PhotoPlaceholder
            label="A photo of the artist or studio goes here"
            className="w-full aspect-[4/5]"
            style={{ borderColor: '#D9D2C7' }}
            iconColor="#A8683D"
          />
        </Reveal>
      </div>
    </section>
  )
}
