interface Media {
  video?: string
  src: string
}

/**
 * The one visual convention used everywhere client work appears: a
 * lightweight browser-chrome frame (traffic lights + URL bar, home
 * indicator on portrait/mobile crops) around the screenshot, so it reads
 * as "a real site, in a real browser" rather than a bare cropped image.
 */
export function ClientWork({
  media,
  alt,
  caption,
  aspect = '2 / 1',
  objectPosition = 'top',
}: {
  media: Media
  alt: string
  caption?: string
  aspect?: string
  objectPosition?: string
}) {
  const [wRaw, hRaw] = aspect.split('/')
  const portrait = parseFloat(hRaw) > parseFloat(wRaw)

  return (
    <div
      className="overflow-hidden"
      style={{ border: '1px solid rgba(16,35,63,0.14)', borderRadius: portrait ? '18px' : '6px' }}
    >
      {/* Browser chrome: top bar */}
      <div
        className={`flex items-center ${portrait ? 'justify-center px-4 py-2.5' : 'gap-3 px-3 py-2'}`}
        style={{ background: '#ECE6D9', borderBottom: '1px solid rgba(16,35,63,0.1)' }}
      >
        {!portrait && (
          <span className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E0645A' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E8B33D' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5FB56C' }} />
          </span>
        )}
        {caption && (
          <span
            className={`text-[10px] font-medium text-secondary rounded-full truncate ${portrait ? 'max-w-[70%]' : 'flex-1 text-center'}`}
            style={{ background: '#FFFFFF', border: '1px solid rgba(16,35,63,0.08)', padding: '4px 12px' }}
          >
            {caption}
          </span>
        )}
      </div>

      <div className="relative overflow-hidden" style={{ aspectRatio: aspect }}>
        {media.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition }}
            src={media.video}
            poster={media.src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition }}
          />
        )}
      </div>

      {/* Home indicator, portrait/mobile crops only */}
      {portrait && (
        <div className="flex justify-center py-2.5" style={{ background: '#ECE6D9' }}>
          <span className="w-9 h-1 rounded-full" style={{ background: 'rgba(16,35,63,0.22)' }} />
        </div>
      )}
    </div>
  )
}
