import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

/**
 * Edge-to-edge image on its own coloured field, for the handful of
 * moments a case study needs to break the reading column entirely
 * (a large brand crop, a dark identity field). Not for routine images —
 * see CaseStudyMedia for those.
 */
export default function FullBleedMedia({
  src,
  alt,
  width,
  height,
  tone = 'light',
  caption,
  delay = 0,
}: {
  src: string
  alt: string
  width: number
  height: number
  tone?: 'light' | 'dark'
  caption?: string
  delay?: number
}) {
  return (
    <section
      data-nav-theme={tone === 'dark' ? 'dark' : 'light'}
      className={`relative z-10 ${tone === 'dark' ? 'bg-navy' : 'bg-bone-deep'}`}
    >
      <ScrollReveal delay={delay}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="100vw"
          className="h-auto w-full"
          loading="lazy"
        />
      </ScrollReveal>
      {caption && (
        <p className={`px-6 py-4 text-xs ${tone === 'dark' ? 'text-bone/50' : 'text-tertiary'}`}>
          {caption}
        </p>
      )}
    </section>
  )
}
