import AskWilliamBanner from '../../AskWilliamBanner'
import Reveal from '../../_shared/Reveal'

export default function Preview6Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#8A5E13' }}>Contact</p>
          <h1 style={{ fontFamily: 'var(--font-keystone-display)' }} className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight">
            Get in touch
          </h1>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex items-start gap-3 max-w-2xl p-4 rounded-sm" style={{ background: 'rgba(242,169,59,0.1)', border: '1px solid rgba(242,169,59,0.3)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" style={{ color: '#8A5E13' }}>
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-sm leading-relaxed" style={{ color: '#4B5A66' }}>
            <strong style={{ color: '#132A3D' }}>Burst pipe or no heating right now?</strong> Call{' '}
            <a href="tel:01170000000" className="font-semibold underline underline-offset-2" style={{ color: '#132A3D' }}>0117 000 0000</a>{' '}
            directly, we take emergency call-outs day or night.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">
          <div className="pt-6 border-t" style={{ borderColor: '#E4E9EE' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8A5E13' }}>Call or email</p>
            <p style={{ color: '#132A3D' }}>0117 000 0000<br />hello@keystoneplumbing.example</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: '#E4E9EE' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8A5E13' }}>Office</p>
            <p style={{ color: '#132A3D' }}>Unit 7, Kingswood Trade Park<br />Bristol, BS15 8JJ</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: '#E4E9EE' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8A5E13' }}>Hours</p>
            <p style={{ color: '#132A3D' }}>Mon–Fri: 7am – 6pm<br />Emergencies: 24/7</p>
          </div>
        </Reveal>

        <AskWilliamBanner />
      </div>
    </section>
  )
}
