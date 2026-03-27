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
              <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">
                Contact
              </p>
              <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight text-gray-900 mb-8">
                Let&apos;s talk about your website.
              </h1>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Fill in the form and I&apos;ll come back to you within one
                business day. Alternatively, book a free call directly using
                the Calendly link below.
              </p>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@williamlangdown.co"
                    className="text-sm text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
                  >
                    hello@williamlangdown.co
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Book a call
                  </p>
                  <a
                    href="https://calendly.com/williamlangdown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
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
