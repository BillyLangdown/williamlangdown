import Link from 'next/link'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { MotionConfig } from 'framer-motion'
import PreviewNav from './PreviewNav'
import PageIntro from '../_shared/PageIntro'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Axium Preview | William Langdown',
  robots: { index: false, follow: false },
}

export default function Preview5Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-dvh flex flex-col`}
        style={{ background: '#05060A', color: '#FFFFFF' }}
      >
        <PageIntro bg="#05060A" textColor="#FFFFFF" accentColor="#22D3EE" label="Axium" />

        <div className="sticky top-0 z-50">
          <PreviewBanner />
          <PreviewNav />
        </div>

        <main className="flex-1">{children}</main>

        <footer className="border-t px-6 py-10" style={{ borderColor: 'rgba(148,163,255,0.1)' }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-slate-500">Axium · Cloud infrastructure</p>
            <p className="text-xs font-mono text-slate-600">Example content for preview purposes only</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

function PreviewBanner() {
  return (
    <div className="px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#22D3EE', color: '#05060A' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
