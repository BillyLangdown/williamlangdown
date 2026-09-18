import Image from 'next/image'
import Link from 'next/link'
import { ClientWork } from '@/components/ClientWork'
import ScrollReveal from '@/components/ScrollReveal'
import BackgroundWord from '@/components/BackgroundWord'

interface Item {
  name: string
  tag: string
  note?: string
  results?: { value: string; label: string }[]
  media: { src: string; video?: string; caption: string }
  href: string
  external?: boolean
  /** Media is already a framed device photo, so skip the synthetic browser chrome ClientWork adds. */
  deviceMockup?: boolean
  /** Show the video on its own, no device frame and no synthetic browser chrome. */
  rawVideo?: boolean
}

const items: Item[] = [
  {
    name: 'The Garden Tablecloth Co.',
    tag: 'Audit / Digital',
    results: [
      { value: '+75%', label: 'Enquiries' },
      { value: '-21%', label: 'Bounce rate' },
    ],
    media: { src: '/images/tctgc-mockup.jpg', caption: 'gardentablecloth.co.uk' },
    href: '/case-studies/the-garden-tablecloth-co',
    deviceMockup: true,
  },
  {
    name: 'Building Ventilation Services: Redesign Concept',
    tag: 'Self-initiated / Concept',
    note: 'Homepage redesign, unsolicited',
    media: {
      src: '/images/bvs-redesign-poster.jpg',
      video: '/videos/bvs-redesign-showcase.mp4',
      caption: 'Redesign concept',
    },
    href: '/case-studies/building-ventilation-services-redesign',
    rawVideo: true,
  },
  {
    name: 'Building Ventilation Services',
    tag: 'Audit / Design / Build',
    results: [
      { value: '98', label: 'Mobile PageSpeed' },
      { value: '100', label: 'Desktop PageSpeed' },
    ],
    media: {
      src: '/images/old-bvs-mockup.jpg',
      video: '/videos/bvs-original-mockup-video.mp4',
      caption: 'bvs-ltd.co.uk',
    },
    href: '/case-studies/building-ventilation-services-ltd',
    deviceMockup: true,
  },
]

export default function SecondaryWork() {
  return (
    <section data-nav-theme="light" className="relative z-10 overflow-hidden bg-bone border-t border-border-light">
      <BackgroundWord word="More" color="#10233F" opacity={0.045} parallax className="top-10 -left-1 md:top-12" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="text-sm font-semibold text-secondary mb-8">More work</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {items.map((item) => {
            const inner = (
              <>
                {item.rawVideo ? (
                  <div className="overflow-hidden" style={{ border: '1px solid rgba(16,35,63,0.14)', borderRadius: '6px' }}>
                    <video
                      className="h-auto w-full"
                      style={{ aspectRatio: '1920 / 1110' }}
                      src={item.media.video}
                      poster={item.media.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                ) : item.deviceMockup ? (
                  <div className="overflow-hidden" style={{ border: '1px solid rgba(16,35,63,0.14)', borderRadius: '6px' }}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
                      {item.media.video ? (
                        <video
                          className="absolute inset-0 h-full w-full object-cover"
                          src={item.media.video}
                          poster={item.media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={item.media.src}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 90vw, 800px"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <ClientWork media={{ src: item.media.src, video: item.media.video }} alt={item.name} caption={item.media.caption} aspect="8 / 5" />
                )}
                <p className="text-xs text-tertiary mt-4">{item.tag}</p>
                <p className="text-base font-semibold text-ink mt-1 group-hover:text-terracotta transition-colors">{item.name}</p>
                {item.results ? (
                  <div className="flex gap-6 mt-3">
                    {item.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-display text-xl md:text-2xl text-ink">{r.value}</p>
                        <p className="text-xs text-tertiary mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-secondary mt-1">{item.note}</p>
                )}
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
