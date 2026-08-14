import Link from 'next/link'

export default function NavCTA({ light = false }: { light?: boolean }) {
  const fg = light ? '#F6F3EE' : '#10233F'

  return (
    <Link
      href="/contact"
      className="text-sm font-medium underline decoration-2 underline-offset-[6px] transition-opacity hover:opacity-70"
      style={{ color: fg, textDecorationColor: '#C1613D' }}
    >
      Get in touch
    </Link>
  )
}
