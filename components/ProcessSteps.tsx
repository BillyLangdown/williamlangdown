'use client'

import { useRef, useState } from 'react'

const steps = [
  {
    title: 'Discuss',
    description: 'A short call to understand what you need and whether we are a good fit. No commitment required.',
  },
  {
    title: 'Design & Build',
    description: 'I handle everything from page structure and visual design through to development. Two rounds of feedback included throughout.',
  },
  {
    title: 'Launch',
    description: 'The site goes live. I manage deployment and stay available for the first few days to make sure everything runs smoothly.',
  },
]

export default function ProcessSteps() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const step = el.offsetWidth - 48
    setActiveIndex(Math.min(Math.round(el.scrollLeft / step), steps.length - 1))
  }

  return (
    <>
      {/* Mobile: horizontal snap scroll */}
      <div className="md:hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #e8edf3, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #e8edf3, transparent)' }} />
          <div
            ref={scrollRef}
            onScroll={onScroll}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '24px',
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '4px',
              paddingBottom: '28px',
              gap: '16px',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{ flexShrink: 0, width: 'calc(100vw - 64px)', scrollSnapAlign: 'start' }}
              >
                <div className="bg-white border border-border-light rounded-sm p-6" style={{ minHeight: '160px' }}>
                  <div
                    className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold mb-5 shrink-0"
                    style={{ background: 'rgba(37,99,235,0.1)', color: '#2563EB' }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-1.5 px-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? '24px' : '6px',
                backgroundColor: i === activeIndex ? '#2563EB' : 'rgba(15,23,42,0.12)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: 3-col grid with dividers */}
      <div className="hidden md:grid md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className={[
              'py-10',
              i < 2 ? 'md:border-r border-border-light md:pr-10' : '',
              i > 0 ? 'md:pl-10' : '',
            ].join(' ')}
          >
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold mb-5 shrink-0"
              style={{ background: 'rgba(37,99,235,0.1)', color: '#2563EB' }}
            >
              {i + 1}
            </div>
            <h3 className="text-lg font-semibold text-ink mb-2 leading-snug">{step.title}</h3>
            <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
