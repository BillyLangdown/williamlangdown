import Link from 'next/link'

// Plain text link with the arrow immediately beside the label. The arrow
// nudges up and to the right on hover.
export default function ArrowLink({ href, children, stretch = false }: { href: string; children: React.ReactNode; stretch?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-terracotta md:text-base ${
        stretch ? 'outline-none after:absolute after:inset-0' : ''
      }`}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
      >
        <path d="M2 10 L10 2 M3.5 2 H10 V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}
