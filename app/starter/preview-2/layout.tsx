import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'
import { MotionConfig } from 'framer-motion'
import PreviewNav from './PreviewNav'
import PageIntro from '../_shared/PageIntro'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-willow-display',
  display: 'swap',
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Willow & Bloom Preview | William Langdown',
  robots: { index: false, follow: false },
}

export default function Preview2Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`${playfair.variable} min-h-dvh flex flex-col`}
        style={{ background: '#FBF6EF', color: '#3A322A' }}
      >
        <PageIntro bg="#FBF6EF" textColor="#3A322A" accentColor="#C97B5A" label="Willow & Bloom" />

        <div className="sticky top-0 z-50">
          <PreviewBanner />
          <PreviewNav />
        </div>

        <main className="flex-1">{children}</main>

        <footer className="px-6 py-10 mt-10" style={{ background: '#F1E7D8' }}>
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm" style={{ color: '#8A7A65' }}>Willow &amp; Bloom · Est. 2021</p>
            <p className="text-xs" style={{ color: '#B5A78D' }}>Example content for preview purposes only</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

function PreviewBanner() {
  return (
    <div className="px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#C97B5A', color: '#FFFFFF' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
