import Link from 'next/link'

// Deliberately styled with William's own site tokens (bg-accent, text-ink,
// border-border-light, etc.) rather than the surrounding template's brand
// colors. This is an upsell from William, not part of what the £495
// package includes, so it should read as visibly separate from the demo.
export default function AskWilliamBanner() {
  return (
    <Link
      href="/contact?service=starter"
      className="group mt-10 flex items-center gap-4 max-w-md rounded-sm border border-border-light bg-white px-5 py-4 shadow-sm transition-colors hover:border-accent/50"
    >
      <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 bg-accent/10 text-accent">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M2 4h12M2 8h8M2 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-ink">Want a working form or booking here?</p>
        <p className="text-xs text-secondary">Not included at £495, just ask.</p>
      </div>
      <span className="flex items-center gap-1 text-sm font-medium text-accent shrink-0">
        Ask me
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  )
}
