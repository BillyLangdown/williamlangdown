import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Questionnaire from './Questionnaire'

export const metadata: Metadata = {
  title: 'New Project Brief | William Langdown',
  description: 'Fill in a few details about your project so I can hit the ground running.',
  robots: { index: false, follow: false },
}

export default function ClientBriefPage() {
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
        <Questionnaire />
      </main>
      <Footer />
    </>
  )
}
