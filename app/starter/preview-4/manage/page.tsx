import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PasscodeForm from './PasscodeForm'
import ManageDashboard from './ManageDashboard'
import { getPortfolioGallery } from '@/lib/queries'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

// Turned off while we're not ready for visitors to reach the upload flow.
// Flip back to true (and remove the notFound() below) to re-enable.
const MANAGE_ENABLED = false

export default async function ManagePage() {
  if (!MANAGE_ENABLED) {
    notFound()
  }

  const store = await cookies()
  const authorized = store.get('portfolio_manage_auth')?.value === 'granted'

  if (!authorized) {
    return (
      <section className="px-6 py-24">
        <div className="max-w-sm mx-auto">
          <PasscodeForm />
        </div>
      </section>
    )
  }

  const gallery = await getPortfolioGallery().catch(() => null)

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <ManageDashboard initialArtworks={gallery?.artworks ?? []} />
      </div>
    </section>
  )
}
