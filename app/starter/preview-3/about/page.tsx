export default function Preview3About() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#D9B96C' }}>About</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: '#1C2333' }}>
          Independent advice, since 2008
        </h1>
        <div className="mt-9 flex flex-col gap-5 leading-relaxed" style={{ color: '#5B6478' }}>
          <p>
            Hartley &amp; Co was founded on a simple idea: clients deserve advice that considers their
            whole situation, not a product someone&apos;s being incentivised to sell.
          </p>
          <p>
            We keep our client list deliberately small so that every recommendation gets the attention it
            needs. If we don&apos;t think we&apos;re the right fit for you, we&apos;ll say so.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {[
            ['Independent', 'No ties to any product provider or platform.'],
            ['Regulated', 'Authorised and regulated by the FCA.'],
            ['Transparent fees', 'A clear fee structure, agreed upfront.'],
            ['Direct access', 'A named advisor, not a rotating team.'],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold mb-1.5" style={{ color: '#1C2333' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5B6478' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
