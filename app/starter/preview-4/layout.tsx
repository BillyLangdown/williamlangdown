import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'
import type { Metadata } from 'next'
import PreviewNav from './PreviewNav'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['500', '600'],
})

export const metadata: Metadata = {
  title: 'Maren Voss Preview | William Langdown',
  robots: { index: false, follow: false },
}

export default function Preview4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} min-h-dvh flex flex-col`} style={{ background: '#FAFAF8', color: '#1C1B19' }}>
      <PreviewBanner />

      <PreviewNav />

      <main className="flex-1">{children}</main>

      <footer className="px-6 py-10 mt-10 border-t" style={{ borderColor: '#E5E2DC' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: '#6B6560' }}>Maren Voss · Painter, Bristol</p>
          <p className="text-xs" style={{ color: '#A39C93' }}>Example content for preview purposes only</p>
        </div>
      </footer>
    </div>
  )
}

function PreviewBanner() {
  return (
    <div className="sticky top-0 z-50 px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#A8683D', color: '#FFFFFF' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
