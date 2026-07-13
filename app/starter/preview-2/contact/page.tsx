import AskWilliamBanner from '../../AskWilliamBanner'

export default function Preview2Contact() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm mb-5" style={{ color: '#C97B5A' }}>Get in touch</p>
        <h1
          style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A' }}
          className="text-4xl md:text-5xl font-medium leading-tight italic"
        >
          We&apos;d love to hear from you
        </h1>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C97B5A' }}>Visit</p>
            <p style={{ color: '#3A322A' }}>14 Cotham Hill<br />Bristol, BS6 6LA</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C97B5A' }}>Email &amp; phone</p>
            <p style={{ color: '#3A322A' }}>hello@willowandbloom.example<br />0117 000 0000</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C97B5A' }}>Hours</p>
            <p style={{ color: '#3A322A' }}>Tue–Sat: 9am – 5pm<br />Closed Sun &amp; Mon</p>
          </div>
        </div>
        <div className="flex justify-center">
          <AskWilliamBanner />
        </div>
      </div>
    </section>
  )
}
