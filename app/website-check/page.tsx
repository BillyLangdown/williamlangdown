import type { Metadata } from 'next'
import WebsiteCheck from '../../components/WebsiteCheck'

export const metadata: Metadata = {
  title: 'Website Check | William Langdown',
  description:
    'A quick website check to find out where your site may be losing clarity, trust or action.',
}

export default function WebsiteCheckPage() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <WebsiteCheck />
    </main>
  )
}