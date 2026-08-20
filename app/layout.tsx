import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import Script from 'next/script'
import GaPageTracker from '@/components/GaPageTracker'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: 'variable',
  axes: ['opsz', 'SOFT', 'WONK'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'William Langdown | Brand, Digital & Technology Practice',
  description:
    'An independent practice combining brand strategy, digital design and software development for established UK businesses. Somerset-based, working nationwide.',
  alternates: { canonical: 'https://williamlangdown.com' },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'William Langdown | Brand, Digital & Technology Practice',
    description:
      'An independent practice combining brand strategy, digital design and software development for established UK businesses. Somerset-based, working nationwide.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Langdown | Brand, Digital & Technology Practice',
    description:
      'An independent practice combining brand strategy, digital design and software development for established UK businesses.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#10233F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
            gtag('config', 'AW-11171125987');
          `}
        </Script>
      </head>

      <body
        className="font-sans antialiased text-ink"
        suppressHydrationWarning
      >
        <GaPageTracker />
        {children}
      </body>
    </html>
  )
}