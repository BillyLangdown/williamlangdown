import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | William Langdown',
  description: 'Get in touch about a brand, digital or technology project. Somerset-based, working with UK businesses nationwide.',
  alternates: { canonical: 'https://williamlangdown.com/contact' },
  openGraph: {
    title: 'Contact | William Langdown',
    description: 'Get in touch about a brand, digital or technology project. Somerset-based, working with UK businesses nationwide.',
    url: 'https://williamlangdown.com/contact',
  },
}

interface Props {
  searchParams: Promise<{ service?: string }>
}

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-bone">
        <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl leading-[1.06] text-ink mb-6">
              Start a project.
            </h1>

            <p className="text-base text-secondary leading-relaxed max-w-xl mb-6">
              Most projects start with a short call to talk through what&apos;s going on and see whether it&apos;s something I can help with, before anything gets written down formally.
            </p>

            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2 mb-6 text-base">
              <a
                href="tel:+447446856927"
                className="font-medium text-ink underline decoration-2 underline-offset-4"
                style={{ textDecorationColor: '#C1613D' }}
              >
                +44 7446 856927
              </a>
              <span className="text-secondary">or</span>
              <a
                href="mailto:hello@williamlangdown.com"
                className="font-medium text-ink underline decoration-2 underline-offset-4"
                style={{ textDecorationColor: '#C1613D' }}
              >
                hello@williamlangdown.com
              </a>
            </div>

            <p className="text-sm text-secondary max-w-xl mb-14">
              If cost is on your mind before you get into detail, the{' '}
              <Link href="/pricing" className="text-ink underline underline-offset-4 hover:text-terracotta transition-colors">
                pricing page
              </Link>{' '}
              gives a general sense of what projects usually run to.
            </p>

            <div id="contact-form">
              <ContactForm defaultService={service} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
