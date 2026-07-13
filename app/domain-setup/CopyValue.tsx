'use client'

import { useState } from 'react'

export default function CopyValue({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
      className="group flex w-full items-center justify-between gap-4 rounded-sm border border-border-light bg-white px-5 py-4 text-left transition-colors hover:border-accent/50"
    >
      <span className="font-mono text-base text-ink">{value}</span>
      <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent">
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="5.5" y="5.5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2.5 10.5v-7a1 1 0 0 1 1-1h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Copy
          </>
        )}
      </span>
    </button>
  )
}
