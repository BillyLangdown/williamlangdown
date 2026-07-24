import Link from 'next/link'
import type { Metadata } from 'next'
import { MotionConfig } from 'framer-motion'
import PreviewNav from './PreviewNav'
import PageIntro from '../_shared/PageIntro'

export const metadata: Metadata = {
  title: 'Forge Fitness Preview | William Langdown',
  robots: { index: false, follow: false },
}

export default function Preview1Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div style={{ background: '#0A0A0A', color: '#FFFFFF' }} className="min-h-dvh flex flex-col">
        <PageIntro bg="#0A0A0A" textColor="#FFFFFF" accentColor="#FF5A1F" label="Forge" />

        <div className="sticky top-0 z-50">
          <PreviewBanner />
          <PreviewNav />
        </div>

        <main className="flex-1">{children}</main>

        <footer className="border-t px-6 py-10" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Forge Fitness · Bristol</p>
            <p className="text-xs text-white/30">Example content for preview purposes only</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

function PreviewBanner() {
  return (
    <div className="px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#FF5A1F', color: '#0A0A0A' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
