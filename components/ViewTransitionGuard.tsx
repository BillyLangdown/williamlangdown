'use client'

import { useEffect } from 'react'

export default function ViewTransitionGuard() {
  useEffect(() => {
    if (typeof document === 'undefined' || !('startViewTransition' in document)) return
    const original = document.startViewTransition.bind(document)
    // Suppress "aborted because of invalid state" DOMExceptions from overlapping transitions
    document.startViewTransition = (callback?: () => Promise<void> | void) => {
      const transition = original(callback)
      transition.finished.catch(() => {})
      return transition
    }
  }, [])

  return null
}
