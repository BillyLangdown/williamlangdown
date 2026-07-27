import Link from 'next/link'

export default function CallBar() {
  return (
    <div
      className="sm:hidden fixed bottom-0 inset-x-0 z-40 flex items-stretch"
      style={{ boxShadow: '0 -8px 24px rgba(19,42,61,0.18)' }}
    >
      <a
        href="tel:01170000000"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wide"
        style={{ background: '#132A3D', color: '#FFFFFF' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Call now
      </a>
      <Link
        href="/starter/preview-6/contact"
        className="flex-1 flex items-center justify-center py-3.5 text-sm font-bold uppercase tracking-wide"
        style={{ background: '#F2A93B', color: '#132A3D' }}
      >
        Get a free quote
      </Link>
    </div>
  )
}
