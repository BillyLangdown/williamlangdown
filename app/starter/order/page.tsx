import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import OrderForm from './OrderForm'

export const metadata: Metadata = {
  title: 'Order: Starter Package | William Langdown',
  description: 'Order your £495 starter website. Pick a design, send your content, live in about a week.',
  robots: { index: false, follow: false },
}

export default function StarterOrderPage() {
  return (
    <>
      <Nav />
      <main
        className="pt-16 min-h-screen"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <OrderForm />
      </main>
      <Footer />
    </>
  )
}
