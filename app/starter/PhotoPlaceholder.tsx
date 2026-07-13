import Image from 'next/image'

export default function PhotoPlaceholder({
  label,
  src,
  className = '',
  style,
  iconColor = 'currentColor',
  overlayLabel = 'Your photo here',
  overlayPosition = 'center',
  darken = 0.4,
  objectPosition = '50% 50%',
}: {
  label: string
  src?: string
  className?: string
  style?: React.CSSProperties
  iconColor?: string
  overlayLabel?: string
  overlayPosition?: 'center' | 'corner'
  darken?: number
  objectPosition?: string
}) {
  if (src) {
    return (
      <div className={`overflow-hidden ${className}`} style={style}>
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition }} priority />
        <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${darken})` }} />
        <div className={overlayPosition === 'corner' ? 'absolute bottom-4 right-4' : 'absolute inset-0 flex items-center justify-center'}>
          <span className="text-white text-[11px] sm:text-sm font-semibold uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/40 whitespace-nowrap" style={{ background: 'rgba(0,0,0,0.35)' }}>
            {overlayLabel}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-2.5 border-2 border-dashed ${className}`} style={style}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: iconColor, opacity: 0.5 }} aria-hidden>
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 17l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
      </svg>
      <span className="text-xs font-medium text-center px-4" style={{ color: iconColor, opacity: 0.6 }}>{label}</span>
    </div>
  )
}
