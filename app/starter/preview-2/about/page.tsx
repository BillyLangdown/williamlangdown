export default function Preview2About() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm mb-5" style={{ color: '#C97B5A' }}>Our story</p>
        <h1
          style={{ fontFamily: 'var(--font-fraunces)', color: '#3A322A' }}
          className="text-4xl md:text-5xl font-medium leading-tight italic"
        >
          Started on a kitchen table
        </h1>
        <div className="mt-9 flex flex-col gap-5 text-left leading-relaxed" style={{ color: '#8A7A65' }}>
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
      </div>
    </section>
  )
}
