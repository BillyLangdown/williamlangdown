import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import { ViewTransitions } from 'next-view-transitions'
import GaPageTracker from '@/components/GaPageTracker'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'William Langdown | Web Designer & Consultant',
  description:
    'I build websites that turn visitors into customers. Fast, clear, and designed to get enquiries for small businesses across the UK.',
  alternates: { canonical: 'https://williamlangdown.com' },
  openGraph: {
    title: 'William Langdown | Web Designer & Consultant',
    description:
      'I build websites that turn visitors into customers. Fast, clear, and designed to get enquiries.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Langdown | Web Designer & Consultant',
    description: 'I build websites that turn visitors into customers.',
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
        <link rel="icon" href="/favicon.ico" />
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
        <ViewTransitions>
          <GaPageTracker />
          {children}
        </ViewTransitions>
      </body>
    </html>
  )
}
