import AskWilliamBanner from '../../AskWilliamBanner'
import Reveal from '../../_shared/Reveal'

export default function Preview1Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#DC2626' }}>Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight max-w-xl">
            Come train with us
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 max-w-3xl">
          <div className="pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Address</p>
            <p className="text-white/70 leading-relaxed">Unit 12, Ancoats Works<br />Manchester, M4 5AN</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Get in touch</p>
            <p className="text-white/70 leading-relaxed">hello@ironcladstrength.example<br />0161 000 0000</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Opening hours</p>
            <p className="text-white/70 leading-relaxed">Mon–Fri: 6am – 10pm<br />Weekends: 7am – 3pm</p>
          </div>
        </Reveal>
        <div className="mt-14">
          <AskWilliamBanner />
        </div>
      </div>
    </section>
  )
}
