export default function BackgroundWord({
  word,
  color = '#10233F',
  opacity = 0.05,
  className = '',
}: {
  word: string
  color?: string
  opacity?: number
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
      }}
    >
      {word}
    </span>
  )
}
