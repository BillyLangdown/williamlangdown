import Link from 'next/link'
import { Fraunces } from 'next/font/google'
import type { Metadata } from 'next'
import PreviewNav from './PreviewNav'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['italic', 'normal'],
})

export const metadata: Metadata = {
  title: 'Willow & Bloom Preview | William Langdown',
  robots: { index: false, follow: false },
}

// Fine grain texture so the cream sections don't read as flat solid color.
const grain = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
}

export default function Preview2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${fraunces.variable} min-h-dvh flex flex-col`}
      style={{ background: '#FBF6EF', color: '#3A322A', ...grain }}
    >
      <PreviewBanner />

      <PreviewNav />

      <main className="flex-1">{children}</main>

      <footer className="px-6 py-10 mt-10" style={{ background: '#F1E7D8' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: '#8A7A65' }}>Willow &amp; Bloom · Est. 2021</p>
          <p className="text-xs" style={{ color: '#B5A78D' }}>Example content for preview purposes only</p>
        </div>
      </footer>
    </div>
  )
}

function PreviewBanner() {
  return (
    <div className="sticky top-0 z-50 px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#C97B5A', color: '#FFFFFF' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
