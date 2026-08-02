import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import GaPageTracker from '@/components/GaPageTracker'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Web Developer & Web Designer in Taunton, Somerset | William Langdown',
  description:
    'Web developer and designer based in Taunton, Somerset, working with businesses from Bristol to Exeter. I build websites, booking software and quoting tools for commercial trades and contractors, and for any growing business, backed by a degree in branding and a real understanding of how people decide to trust a business.',
  alternates: { canonical: 'https://williamlangdown.com' },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Web Developer & Web Designer in Taunton, Somerset | William Langdown',
    description:
      'Web developer and designer based in Taunton, Somerset, working with businesses from Bristol to Exeter. I build websites that turn visitors into customers.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer & Web Designer in Taunton, Somerset | William Langdown',
    description: 'Web developer and designer based in Taunton, Somerset, working with businesses from Bristol to Exeter.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
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
      <body className="font-sans antialiased bg-surface text-ink" suppressHydrationWarning>
        <GaPageTracker />
        {children}
      </body>
    </html>
  )
}
