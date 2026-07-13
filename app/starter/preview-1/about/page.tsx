export default function Preview1About() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#FF5A1F' }}>About</p>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight max-w-2xl">
          We built the gym we couldn&apos;t find
        </h1>
        <div className="mt-10 max-w-2xl flex flex-col gap-5 text-white/60 leading-relaxed">
          <p>
            Forge started in 2019 because Bristol had plenty of gyms but nowhere that combined proper coaching
            with a space that didn&apos;t feel intimidating. So we built one.
          </p>
          <p>
            Every class is capped at 12 people. Every coach has a real qualification and actually watches your
            form. No judgement, no fluff, no six-month contracts you regret by February.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            ['Small classes', 'Capped at 12 so coaches can actually coach.'],
            ['Real qualifications', 'Every coach is certified and insured.'],
            ['No contracts', 'Pay monthly, leave whenever you want.'],
          ].map(([title, body]) => (
            <div key={title} className="p-6" style={{ background: '#141414' }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#FF5A1F' }}>{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
