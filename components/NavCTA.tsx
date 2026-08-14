'use client'

import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'

/**
 * The "Get in touch" button used in both nav bars. Italic display serif
 * instead of the nav's bold sans gives it a distinct, human voice against
 * the structural link list, and it borrows the unused MagneticButton for
 * a subtle cursor-follow instead of a flat, static box.
 */
export default function NavCTA({ light = false }: { light?: boolean }) {
  const bg = light ? '#F6F3EE' : '#10233F'
  const fg = light ? '#10233F' : '#F6F3EE'

  return (
    <MagneticButton strength={0.35}>
      <Link
        href="/contact"
        className="group inline-flex items-center gap-2.5 pl-6 pr-5 py-3 border-b-2 hover:border-b-[3px] border-[#C1613D] transition-[border-width] duration-200"
        style={{ background: bg }}
      >
        <span className="font-display italic text-[15px] leading-none" style={{ color: fg }}>
          Get in touch
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          style={{ color: fg }}
        >
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </MagneticButton>
  )
}
