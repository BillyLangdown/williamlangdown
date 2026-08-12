import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | William Langdown',
  description: 'Get in touch about a brand, digital or technology project. Somerset-based, working with UK businesses nationwide. I’ll reply within one business day.',
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
            <h1 className="font-display text-4xl md:text-5xl leading-[1.06] text-ink mb-10">
              Start a project.
            </h1>

            <div id="contact-form">
              <ContactForm defaultService={service} />
            </div>

            <div className="mt-14 pt-8 border-t border-border-light flex flex-wrap gap-x-8 gap-y-2 text-sm text-secondary">
              <a href="tel:+447446856927" className="hover:text-ink transition-colors">+44 7446 856927</a>
              <a href="mailto:hello@williamlangdown.com" className="hover:text-ink transition-colors">hello@williamlangdown.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
