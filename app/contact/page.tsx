import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24">
        <section className="px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left */}
            <div>
              <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-6">
                Contact
              </p>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-ink mb-8">
                Let&apos;s talk about your website.
              </h1>
              <p className="text-base text-secondary leading-relaxed mb-8">
                Fill in the form and I&apos;ll come back to you within one
                business day. Alternatively, book a free call directly using
                the Calendly link below.
              </p>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@williamlangdown.com"
                    className="text-sm text-ink hover:text-gray-600 transition-colors underline underline-offset-4"
                  >
                    hello@williamlangdown.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-1">
                    Book a call
                  </p>
                  <a
                    href="https://calendly.com/williamlangdown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink hover:text-gray-600 transition-colors underline underline-offset-4"
                  >
                    calendly.com/williamlangdown
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
