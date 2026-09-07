import ScrollReveal from '@/components/ScrollReveal'

type LeftWidth = '38%' | '42%' | '44%' | '50%'

const widthClass: Record<LeftWidth, string> = {
  '38%': 'md:w-[38%] lg:w-[36%]',
  '42%': 'md:w-[42%] lg:w-[40%]',
  '44%': 'md:w-[44%] lg:w-[42%]',
  '50%': 'md:w-[50%] lg:w-[48%]',
}

/**
 * Two media pieces placed asymmetrically — never an equal-card grid.
 * `leftWidth` sets the left column's share of the row at md+; the right
 * column takes the rest. Both stack full-width on mobile.
 */
export default function TwoUpMedia({
  left,
  right,
  leftWidth = '42%',
  reverse = false,
}: {
  left: React.ReactNode
  right: React.ReactNode
  leftWidth?: LeftWidth
  reverse?: boolean
}) {
  return (
    <div
      className={`flex flex-col gap-10 md:items-start md:gap-10 lg:gap-14 ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <ScrollReveal className={`w-full ${widthClass[leftWidth]}`}>{left}</ScrollReveal>
      <ScrollReveal delay={80} className="w-full flex-1">
        {right}
      </ScrollReveal>
    </div>
  )
}
