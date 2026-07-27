import Link from 'next/link'
import { Barlow_Condensed } from 'next/font/google'
import type { Metadata } from 'next'
import { MotionConfig } from 'framer-motion'
import PreviewNav from './PreviewNav'
import PageIntro from '../_shared/PageIntro'
import CallBar from './CallBar'
import KeystoneLogo from './KeystoneLogo'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-keystone-display',
  display: 'swap',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Keystone Plumbing & Heating Preview | William Langdown',
  robots: { index: false, follow: false },
}

export default function Preview6Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`${barlow.variable} min-h-dvh flex flex-col pb-16 sm:pb-0`}
        style={{ background: '#FFFFFF', color: '#132A3D' }}
      >
        <PageIntro bg="#132A3D" textColor="#FFFFFF" accentColor="#F2A93B" label="Keystone" />

        <div className="sticky top-0 z-50">
          <PreviewBanner />
          <PreviewNav />
        </div>

        <main className="flex-1">{children}</main>

        <footer className="border-t px-6 py-10" style={{ borderColor: '#E4E9EE', background: '#F5F7F9' }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <KeystoneLogo size={15} className="opacity-60" />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#5C6B78' }}>Keystone Plumbing &amp; Heating · Bristol</p>
            </div>
            <p className="text-xs" style={{ color: '#8A98A5' }}>Example content for preview purposes only</p>
          </div>
        </footer>

        {/* Mobile-only sticky call bar, a real trade-site convention: the
            phone number should never be more than a thumb's reach away. */}
        <CallBar />
      </div>
    </MotionConfig>
  )
}

function PreviewBanner() {
  return (
    <div className="px-4 py-2.5 text-center text-xs font-medium" style={{ background: '#F2A93B', color: '#132A3D' }}>
      Design preview: <Link href="/starter" className="underline underline-offset-2 font-semibold">back to the Starter package</Link>
    </div>
  )
}
