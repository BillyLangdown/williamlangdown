import Link from 'next/link'
import type { Metadata } from 'next'
import PreviewNav from './PreviewNav'

export const metadata: Metadata = {
  title: 'Hartley & Co Preview | William Langdown',
  robots: { index: false, follow: false },
}

export default function Preview3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col" style={{ background: '#FFFFFF', color: '#1C2333' }}>
      <PreviewBanner />

      <PreviewNav />

      <main className="flex-1">{children}</main>

      <footer className="border-t px-6 py-10" style={{ borderColor: '#E7E9EE' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#9AA2B2' }}>Hartley &amp; Co Consulting Ltd</p>
          <p className="text-xs" style={{ color: '#C3C9D4' }}>Example content for preview purposes only</p>
        </div>
      </footer>
    </div>
  )
}

function PreviewBanner() {
  return (
    <div className="sticky top-0 z-50 px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#1C2333', color: '#D9B96C' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
