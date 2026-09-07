import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

/**
 * One image, presented at a deliberate size rather than inside a
 * uniform card. `contain` keeps it inside the page's reading column;
 * `wide` lets it run past that column on larger screens without going
 * fully edge to edge (see FullBleedMedia for that).
 */
export default function CaseStudyMedia({
  src,
  alt,
  width,
  height,
  caption,
  bordered = true,
  size = 'contain',
  priority = false,
  delay = 0,
}: {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  bordered?: boolean
  size?: 'contain' | 'wide'
  priority?: boolean
  delay?: number
}) {
  const maxWidth = size === 'wide' ? 'max-w-4xl' : 'max-w-2xl'

  return (
    <ScrollReveal delay={delay} className={`mx-auto w-full ${maxWidth}`}>
      <div
        className={bordered ? 'overflow-hidden' : 'overflow-hidden'}
        style={bordered ? { border: '1px solid rgba(16,35,63,0.1)' } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={size === 'wide' ? '(max-width: 768px) 100vw, 900px' : '(max-width: 768px) 100vw, 672px'}
          className="h-auto w-full"
          loading={priority ? undefined : 'lazy'}
          priority={priority}
        />
      </div>
      {caption && <p className="mt-3 text-xs text-tertiary">{caption}</p>}
    </ScrollReveal>
  )
}
