'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GA_ID, ensureGtag } from '@/lib/gtag'

export default function GaPageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    ensureGtag()
    window.gtag('config', GA_ID, { page_path: pathname })
  }, [pathname])

  return null
}
