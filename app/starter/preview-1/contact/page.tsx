import AskWilliamBanner from '../../AskWilliamBanner'
import Reveal from '../../_shared/Reveal'

export default function Preview1Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#FF5A1F' }}>Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight max-w-xl">
            Come train with us
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Address</p>
            <p className="text-white/70 leading-relaxed">Unit 4, Old Market Yard<br />Bristol, BS2 0JA</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Get in touch</p>
            <p className="text-white/70 leading-relaxed">hello@forgefitness.example<br />0117 000 0000</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Opening hours</p>
            <p className="text-white/70 leading-relaxed">Mon–Fri: 6am – 9pm<br />Weekends: 8am – 2pm</p>
          </div>
        </Reveal>
        <AskWilliamBanner />
      </div>
    </section>
  )
}
