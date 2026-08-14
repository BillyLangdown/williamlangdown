export default function BackgroundWord({
  word,
  color = '#10233F',
  opacity = 0.05,
  vertical = false,
  className = '',
}: {
  word: string
  color?: string
  opacity?: number
  /** Lays the word out top-to-bottom via writing-mode instead of a CSS
   * rotate transform, so its box has real width/height (no oversized
   * rotated bounding box to miscalculate position against). */
  vertical?: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none select-none absolute font-sans font-extrabold uppercase leading-none whitespace-nowrap ${className}`}
      style={{
        fontSize: 'clamp(4.5rem, 17vw, 14rem)',
        color,
        opacity,
        letterSpacing: '-0.02em',
        ...(vertical ? { writingMode: 'vertical-rl' as const, textOrientation: 'sideways' as const } : {}),
      }}
    >
      {word}
    </span>
  )
}
