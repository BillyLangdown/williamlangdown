import AskWilliamBanner from '../../AskWilliamBanner'
import Reveal from '../../_shared/Reveal'

export default function Preview3Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#D9B96C' }}>Contact</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: '#1C2333' }}>
            Arrange a conversation
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">
          <div className="pt-6 border-t" style={{ borderColor: '#E7E9EE' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#D9B96C' }}>Office</p>
            <p style={{ color: '#1C2333' }}>32 Queen Square<br />Bristol, BS1 4ND</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: '#E7E9EE' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#D9B96C' }}>Contact</p>
            <p style={{ color: '#1C2333' }}>enquiries@hartleyco.example<br />0117 000 0000</p>
          </div>
          <div className="pt-6 border-t" style={{ borderColor: '#E7E9EE' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#D9B96C' }}>Hours</p>
            <p style={{ color: '#1C2333' }}>Mon–Fri: 9am – 5:30pm<br />By appointment</p>
          </div>
        </Reveal>
        <div className="mt-14">
          <AskWilliamBanner />
        </div>
      </div>
    </section>
  )
}
