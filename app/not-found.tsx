import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text */}
          <div>
            <p className="text-xs font-medium tracking-widest text-tertiary uppercase mb-6">
              404
            </p>

            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-ink mb-6">
              Page not found.
            </h1>

            <p className="text-base text-gray-500 mb-10">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>

            <Link
              href="/"
              className="inline-block border border-gray-900 text-gray-900 text-sm px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Back to home
            </Link>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full max-w-sm mx-auto md:ml-auto">
            <Image
              src="/images/not-found.png" // replace with your image
              alt="Not found illustration"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-[10px]"
              priority
            />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}