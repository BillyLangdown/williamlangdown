import Image from 'next/image'

interface Props {
  /** Future Artlist brand film goes here, swap in without touching Hero's layout. */
  videoSrc?: string
  imageSrc?: string
  imageAlt?: string
}

/**
 * Temporary hero visual. No licensed abstract-architectural photography
 * exists in this repo yet, and the brief is explicit: don't reach for an
 * unlicensed stock photo. So the placeholder is a generated structural
 * graphic (line-work + light field) rather than a photograph, swap in
 * `imageSrc` or `videoSrc` later and this layout doesn't change.
 */
export default function HeroMedia({ videoSrc, imageSrc, imageAlt = '' }: Props) {
  if (videoSrc) {
    return (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    )
  }

  if (imageSrc) {
    return <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
  }

  return (
    <div className="absolute inset-0" style={{ background: 'linear-gradient(150deg, #0A1830 0%, #10233F 58%, #17284A 100%)' }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="hero-light" cx="80%" cy="14%" r="62%">
            <stop offset="0%" stopColor="#F6F3EE" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F6F3EE" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-light-2" cx="8%" cy="92%" r="50%">
            <stop offset="0%" stopColor="#C1613D" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#C1613D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#hero-light)" />
        <rect width="1600" height="900" fill="url(#hero-light-2)" />
        <g stroke="#F6F3EE" strokeOpacity="0.1" strokeWidth="1">
          <line x1="0" y1="110" x2="1600" y2="20" />
          <line x1="0" y1="330" x2="1600" y2="250" />
          <line x1="0" y1="640" x2="1600" y2="740" />
          <line x1="0" y1="880" x2="1600" y2="920" />
          <line x1="200" y1="0" x2="30" y2="900" />
          <line x1="640" y1="0" x2="570" y2="900" />
          <line x1="1060" y1="0" x2="1150" y2="900" />
          <line x1="1460" y1="0" x2="1580" y2="900" />
        </g>
        <line x1="1060" y1="0" x2="1150" y2="900" stroke="#C1613D" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
