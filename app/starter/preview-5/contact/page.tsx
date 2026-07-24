import AskWilliamBanner from '../../AskWilliamBanner'
import Reveal from '../../_shared/Reveal'

export default function Preview5Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: '#22D3EE' }}>Contact</p>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)' }} className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white max-w-xl">
            Talk to the team
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Sales</p>
            <p className="text-slate-300 leading-relaxed">hello@axium.example<br />Mon–Fri, 9am–6pm</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Support</p>
            <p className="text-slate-300 leading-relaxed">support@axium.example<br />24/7, under 15 min response</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Status</p>
            <p className="text-slate-300 leading-relaxed">status.axium.example<br />Live incident history</p>
          </div>
        </Reveal>
        <AskWilliamBanner />
      </div>
    </section>
  )
}
