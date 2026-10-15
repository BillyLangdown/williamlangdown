'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import LazyVideo from '@/components/LazyVideo'

/**
 * Pure identity/craft moment: the finished PEA logo animation, edge to
 * edge on its own baked-in charcoal field. No caption, no label — the
 * mark speaks for itself. Respects prefers-reduced-motion by swapping to
 * the resting frame instead of suppressing autoplay client-side (which
 * would still download/decode the video for nothing).
 */
export default function PeaLogoVideo({
  src,
  poster,
  width,
  height,
  alt,
}: {
  src: string
  poster: string
  width: number
  height: number
  alt: string
}) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden bg-[#222222]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <span className="sr-only">{alt}</span>

      {reducedMotion ? (
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      ) : (
        <LazyVideo
          src={src}
          poster={poster}
          width={width}
          height={height}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}
