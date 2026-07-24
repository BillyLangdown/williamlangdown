import AskWilliamBanner from '../../AskWilliamBanner'
import Reveal from '../../_shared/Reveal'

export default function Preview4Contact() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: '#A8683D' }}>Contact</p>
          <h1
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1B19' }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Enquire about a piece
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 text-left max-w-2xl mx-auto">
          <div className="pt-6 border-t" style={{ borderColor: '#E5E2DC' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#A8683D' }}>Studio</p>
            <p style={{ color: '#1C1B19' }}>Unit 4, Paintworks<br />Bristol, BS4 3EH</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: '#E5E2DC' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#A8683D' }}>Email</p>
            <p style={{ color: '#1C1B19' }}>hello@marenvoss.example<br />0117 000 0000</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: '#E5E2DC' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#A8683D' }}>Studio visits</p>
            <p style={{ color: '#1C1B19' }}>By appointment<br />Bristol &amp; South West</p>
          </div>
        </Reveal>
        <div className="mt-14 flex justify-center">
          <AskWilliamBanner />
        </div>
      </div>
    </section>
  )
}
