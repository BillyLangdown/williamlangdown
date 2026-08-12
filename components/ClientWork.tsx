interface Media {
  video?: string
  src: string
}

/**
 * The one visual convention used everywhere client work appears: a thin
 * bordered inset with a small caption underneath, sitting inside William's
 * bone page rather than bleeding to the edge. This is what keeps client
 * screenshots legible as "evidence placed on the page" instead of merging
 * into the site chrome — no browser frame, no device mockup, just a
 * deliberate crop and a domain caption.
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
  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: aspect, border: '1px solid rgba(16,35,63,0.14)' }}
      >
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
      {caption && (
        <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-tertiary">{caption}</p>
      )}
    </div>
  )
}
