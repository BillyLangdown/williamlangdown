export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

// The Google library loads at idle time (see app/layout.tsx), so calls made
// before it arrives must be queued rather than dropped. gtag.js replays
// whatever is already in dataLayer when it loads.
export function ensureGtag() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }
}

export function gtagEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  ensureGtag()
  window.gtag('event', action, params)
}
