import ScrollReveal from '@/components/ScrollReveal'

/**
 * A single line/short passage set large, treated typographically rather
 * than boxed as a card — used for the handful of moments in a case
 * study that should read as a beat, not a paragraph.
 */
export default function EditorialStatement({
  children,
  tone = 'light',
  size = 'lg',
  align = 'left',
}: {
  children: React.ReactNode
  tone?: 'light' | 'dark'
  size?: 'lg' | 'md'
  align?: 'left' | 'center'
}) {
  const bg = tone === 'dark' ? 'bg-navy' : 'bg-bone'
  const fg = tone === 'dark' ? 'text-bone' : 'text-ink'
  const textSize =
    size === 'lg'
      ? 'text-[1.75rem] md:text-5xl lg:text-6xl leading-[1.1]'
      : 'text-2xl md:text-4xl leading-[1.2]'

  return (
    <section
      data-nav-theme={tone === 'dark' ? 'dark' : 'light'}
      className={`relative z-10 ${bg} px-6 py-20 md:py-28`}
    >
      <div className={`mx-auto max-w-4xl ${align === 'center' ? 'text-center' : ''}`}>
        <ScrollReveal>
          <p className={`font-display ${textSize} ${fg}`}>{children}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
