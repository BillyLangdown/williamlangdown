import Link from 'next/link'
import { ClientWork } from '@/components/ClientWork'
import ScrollReveal from '@/components/ScrollReveal'

interface Item {
  index: string
  name: string
  tag: string
  note: string
  media: { src: string; caption: string }
  href: string
  external?: boolean
}

const items: Item[] = [
  {
    index: '02',
    name: 'The Garden Tablecloth Co.',
    tag: 'Audit / Digital',
    note: 'Enquiries up 75%, bounce rate down 21%.',
    media: { src: '/images/showcase-gtc-desktop.png', caption: 'gardentablecloth.co.uk' },
    href: '/case-studies/the-garden-tablecloth-co',
  },
  {
    index: '03',
    name: 'Axiom',
    tag: 'Self-directed / Motion',
    note: 'A concept exploring interface motion, not a client project.',
    media: { src: '/images/showcase-axiom-desktop.jpg', caption: 'Concept' },
    href: 'https://axiom-showcase.vercel.app',
    external: true,
  },
]

export default function SecondaryWork() {
  return (
    <section className="py-16 md:py-20 px-6 bg-bone border-t border-border-light">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-8">Also</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {items.map((item) => {
            const inner = (
              <>
                <ClientWork media={{ src: item.media.src }} alt={item.name} caption={item.media.caption} aspect="4 / 3" />
                <p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary mt-4">{item.index} / {item.tag}</p>
                <p className="text-base font-semibold text-ink mt-1 group-hover:text-terracotta transition-colors">{item.name}</p>
                <p className="text-sm text-secondary mt-1">{item.note}</p>
              </>
            )
            return (
              <ScrollReveal key={item.name}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="group block">
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className="group block">
                    {inner}
                  </Link>
                )}
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
