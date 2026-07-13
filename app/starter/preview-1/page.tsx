import Link from 'next/link'
import PhotoPlaceholder from '../PhotoPlaceholder'

const classes = [
  { name: 'Strength', time: 'Mon / Wed / Fri, 6:30am' },
  { name: 'Conditioning', time: 'Tue / Thu, 7:00am' },
  { name: 'Open Gym', time: 'Every day, 6am to 9pm' },
]

export default function Preview1Home() {
  return (
    <>
      {/* Hero — full-bleed photo background */}
      <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <PhotoPlaceholder
          label="Full-bleed hero photo"
          src="/images/starter/forge-hero.jpg"
          className="absolute inset-0"
          overlayPosition="corner"
          darken={0.55}
        />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#FF5A1F' }}>
            Bristol · Est. 2019
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight max-w-3xl">
            Train harder.<br />Recover better.
          </h1>
          <p className="mt-8 text-base text-white/85 max-w-md leading-relaxed">
            A no-nonsense strength and conditioning gym. Small classes, real coaching, no ego.
          </p>
          <Link
            href="/starter/preview-1/contact"
            className="inline-flex items-center gap-2 mt-10 px-7 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-85"
            style={{ background: '#FF5A1F', color: '#0A0A0A' }}
          >
            Book a free trial
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {[['6', 'Coaches'], ['150+', 'Members'], ['5', 'Years running']].map(([num, label]) => (
            <div key={label} className="px-6 py-10 text-center">
              <p className="text-4xl font-extrabold" style={{ color: '#FF5A1F' }}>{num}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Classes */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12">
            This week&apos;s classes
          </h2>
          <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            {classes.map(c => (
              <div key={c.name} className="py-6 flex items-center justify-between">
                <span className="text-xl font-bold uppercase">{c.name}</span>
                <span className="text-sm text-white/50">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto px-8 py-14 text-center" style={{ background: '#141414' }}>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">First session is free</h2>
          <p className="mt-3 text-sm text-white/50">No contract. Just turn up.</p>
          <Link
            href="/starter/preview-1/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-85"
            style={{ background: '#FF5A1F', color: '#0A0A0A' }}
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  )
}
