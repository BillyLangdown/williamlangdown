import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'William Langdown | UX Designer & Web Consultant',
  description:
    'I audit, design, and build websites guided by customer insight. Helping ecommerce stores convert more visitors into buyers.',
  openGraph: {
    title: 'William Langdown | UX Designer & Web Consultant',
    description:
      'I audit, design, and build websites guided by customer insight.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body className="font-sans antialiased bg-surface text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
