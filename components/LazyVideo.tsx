'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  src?: string
  poster?: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
  'aria-hidden'?: boolean | 'true' | 'false'
}

/**
 * Muted looping video that only downloads once it is near the viewport,
 * and pauses when it scrolls away. The poster shows until then, so the
 * layout is identical to an eager autoplay video, but a page with several
 * videos below the fold no longer downloads all of them up front.
 */
export default function LazyVideo({ src, poster, className, style, width, height, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          v.muted = true
          const p = v.play()
          if (p !== undefined) p.catch(() => {})
        } else {
          v.pause()
        }
      },
      { rootMargin: '300px 0px' }
    )
    observer.observe(v)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      style={style}
      {...rest}
    />
  )
}
