'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

type Variant = {
  id: string
  name: string
  style: string
  bg: string
  accent: string
  text: string
  desc: string
}

// Desktop width matches the modal panel's max-w-5xl (1024px) so it never
// needs horizontal scroll to view in full.
const DEVICES = {
  desktop: { label: 'Desktop', width: 1024, height: 800 },
  tablet: { label: 'Tablet', width: 768, height: 900 },
  mobile: { label: 'Mobile', width: 390, height: 800 },
} as const

type Device = keyof typeof DEVICES

export default function DesignPicker({ variants }: { variants: Variant[] }) {
  const [previewing, setPreviewing] = useState<Variant | null>(null)
  const [device, setDevice] = useState<Device>('desktop')

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {variants.map((v, i) => (
          <ScrollReveal key={v.id} delay={i * 100}>
            <div className="group rounded-sm overflow-hidden border border-border-light hover:shadow-lg transition-shadow">
              {/* Mini mockup */}
              <div style={{ background: v.bg }} className="aspect-[4/3] p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div style={{ background: v.text, opacity: 0.85 }} className="h-2 w-14 rounded-full" />
                  <div className="flex gap-1.5">
                    <div style={{ background: v.text, opacity: 0.35 }} className="h-1.5 w-6 rounded-full" />
                    <div style={{ background: v.text, opacity: 0.35 }} className="h-1.5 w-6 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div style={{ background: v.text, opacity: 0.9 }} className="h-3 w-3/4 rounded-full" />
                  <div style={{ background: v.text, opacity: 0.5 }} className="h-2 w-1/2 rounded-full" />
                  <div style={{ background: v.accent }} className="h-6 w-24 rounded-sm mt-2" />
                </div>
              </div>
              <div className="p-5 bg-white">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: v.accent }}>{v.style}</p>
                <h3 className="text-lg font-semibold text-ink mb-2">{v.name}</h3>
                <p className="text-sm text-secondary leading-relaxed">{v.desc}</p>
                {/* On mobile this just navigates to the real page — there's no
                    value in simulating "mobile" inside a shrunk iframe when
                    you're already on a phone. On larger screens it opens the
                    comparison modal instead, where switching device sizes is
                    actually useful. */}
                <Link
                  href={`/starter/${v.id}`}
                  onClick={(e) => {
                    if (window.innerWidth < 640) return
                    e.preventDefault()
                    setPreviewing(v)
                    setDevice(window.innerWidth < 1024 ? 'tablet' : 'desktop')
                  }}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-ink group-hover:text-accent transition-colors"
                >
                  Preview
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {previewing && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 sm:p-8"
          onClick={() => setPreviewing(null)}
        >
          <div
            className="bg-white rounded-sm shadow-xl w-full max-w-5xl flex flex-col overflow-hidden"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border-light shrink-0">
              <div className="flex items-baseline gap-3">
                <p className="text-sm font-semibold text-ink">{previewing.name}</p>
                <Link
                  href={`/starter/${previewing.id}`}
                  className="text-xs font-medium text-secondary hover:text-ink transition-colors hidden sm:inline"
                >
                  Open full page ↗
                </Link>
              </div>
              <div className="flex items-center gap-1.5">
                {(Object.keys(DEVICES) as Device[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setDevice(key)}
                    className="px-3 py-1.5 text-xs font-medium rounded-sm transition-colors"
                    style={
                      device === key
                        ? { background: '#111827', color: '#FFFFFF' }
                        : { background: 'transparent', color: '#6B7280' }
                    }
                  >
                    {DEVICES[key].label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPreviewing(null)}
                aria-label="Close preview"
                className="text-secondary hover:text-ink transition-colors shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-subtle flex justify-center py-6">
              <iframe
                key={`${previewing.id}-${device}`}
                src={`/starter/${previewing.id}`}
                title={`${previewing.name} preview`}
                style={{
                  width: DEVICES[device].width,
                  height: DEVICES[device].height,
                  border: 'none',
                  background: '#FFFFFF',
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
