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

// Preview and local builds must never be indexed (production is the only
// deployment where VERCEL_ENV is "production"; unset means a local build).
const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'

export const metadata: Metadata = {
  metadataBase: new URL('https://williamlangdown.com'),
  ...(isProduction ? {} : { robots: { index: false, follow: false } }),
  title: 'Workflow Automation & Software Consultant | William Langdown',
  description:
    'Independent consultant in Somerset working UK-wide. Workflow automation, software integrations, practical AI and custom software, plus websites and UX.',
  alternates: {
    canonical: 'https://williamlangdown.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Workflow Automation & Software Consultant | William Langdown',
    description:
      'Independent consultant in Somerset working UK-wide. Workflow automation, software integrations, practical AI and custom software, plus websites and UX.',
    url: 'https://williamlangdown.com',
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Automation & Software Consultant | William Langdown',
    description:
      'Independent consultant in Somerset working UK-wide. Workflow automation, software integrations, practical AI and custom software, plus websites and UX.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
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
          // Loads once the page has finished loading, so Google's script does
          // not compete with first paint. Events queue in dataLayer until then.
          strategy="lazyOnload"
        />

        <Script id="gtag-init" strategy="beforeInteractive">
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
        className="font-sans antialiased bg-surface text-ink"
        suppressHydrationWarning
      >
        <GaPageTracker />
        {children}
      </body>
    </html>
  )
}