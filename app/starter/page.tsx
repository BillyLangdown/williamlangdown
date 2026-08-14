import { redirect } from 'next/navigation'

// Starter Websites is retired from this brand; the preview/order
// sub-pages stay in the repo for a future Orla migration (see
// app/robots.ts) but this entry point now sends visitors to /pricing
// instead of the old £495 page.
export default function StarterPage() {
  redirect('/pricing')
}
