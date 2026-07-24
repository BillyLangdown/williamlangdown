import PhotoPlaceholder from '../../PhotoPlaceholder'
import Reveal from '../../_shared/Reveal'

export default function Preview2About() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal className="order-2 md:order-1">
          <p className="text-sm mb-5" style={{ color: '#C97B5A' }}>Our story</p>
          <h1
            style={{ fontFamily: 'var(--font-willow-sans)', color: '#3A322A', fontWeight: 600 }}
            className="text-4xl md:text-5xl leading-tight tracking-tight"
          >
            Started on a kitchen table
          </h1>
          <div className="mt-9 flex flex-col gap-5 leading-relaxed" style={{ color: '#8A7A65' }}>
            <p>
              Willow &amp; Bloom began in 2021, arranging flowers on a kitchen table for friends and neighbours.
              Word spread, and three years later we&apos;re a small shop on the edge of Bristol still doing
              things the same way: by hand, in small batches, with whatever&apos;s in season.
            </p>
            <p>
              We work with a handful of local growers whenever we can, and we never arrange more than we can do
              properly in a day. That&apos;s the whole philosophy, really.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="order-1 md:order-2">
          <PhotoPlaceholder
            label="A photo of the florist or shop goes here"
            className="w-full aspect-[4/5] rounded-lg"
            style={{ borderColor: 'rgba(58,50,42,0.18)' }}
            iconColor="#8A7A65"
          />
        </Reveal>
      </div>
    </section>
  )
}
