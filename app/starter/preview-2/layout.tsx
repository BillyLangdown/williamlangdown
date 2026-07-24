import Link from 'next/link'
import { Manrope } from 'next/font/google'
import type { Metadata } from 'next'
import { MotionConfig } from 'framer-motion'
import PreviewNav from './PreviewNav'
import PageIntro from '../_shared/PageIntro'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-willow-sans',
  display: 'swap',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Willow & Bloom Preview | William Langdown',
  robots: { index: false, follow: false },
}

// Fine grain texture plus a soft botanical sprig pattern, both washed out
// to near-invisible so cream sections read as textured rather than flat,
// without competing with real photography.
const texture = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cg fill='none' stroke='%23C97B5A' stroke-width='1.2' stroke-linecap='round' opacity='0.07'%3E%3Cpath d='M20 40c8-14 22-18 34-10'/%3E%3Cpath d='M34 34c-2-8 2-16 10-20'/%3E%3Cpath d='M140 180c10-12 26-14 36-4'/%3E%3Cpath d='M158 172c0-8 6-14 14-16'/%3E%3Cpath d='M190 46c-6 10-18 14-28 8'/%3E%3Cpath d='M60 130c6-12 20-16 30-8'/%3E%3Ccircle cx='60' cy='140' r='2' fill='%23C97B5A' stroke='none'/%3E%3Ccircle cx='210' cy='120' r='2' fill='%23C97B5A' stroke='none'/%3E%3Ccircle cx='90' cy='210' r='2' fill='%23C97B5A' stroke='none'/%3E%3C/g%3E%3C/svg%3E\"), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
  backgroundSize: '240px 240px, 120px 120px',
}

export default function Preview2Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`${manrope.variable} min-h-dvh flex flex-col`}
        style={{ background: '#FBF6EF', color: '#3A322A', ...texture }}
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
