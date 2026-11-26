'use client'

import dynamic from 'next/dynamic'

// sanity.config is imported inside ./Studio, not here, so the Studio stays out
// of the server bundle (it only ever renders in the browser).
const Studio = dynamic(() => import('./Studio'), { ssr: false })

export default function StudioPage() {
  return <Studio />
}
