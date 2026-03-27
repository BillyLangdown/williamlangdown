import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'William Langdown — UX Designer & Web Consultant',
  description:
    'I audit, design, and build websites guided by customer insight. Helping ecommerce stores convert more visitors into buyers.',
  openGraph: {
    title: 'William Langdown — UX Designer & Web Consultant',
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
