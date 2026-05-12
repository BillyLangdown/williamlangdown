import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11171125987"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11171125987');
            gtag('config', 'G-0QS6RL1V09');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-surface text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
