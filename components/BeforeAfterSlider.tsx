'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const pct = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  useEffect(() => {
    const onUp = () => setDragging(false)
    const onMove = (e: MouseEvent) => { if (dragging) updatePosition(e.clientX) }
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mousemove', onMove)
    }
  }, [dragging, updatePosition])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] overflow-hidden select-none cursor-col-resize"
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* Before — full width underneath */}
      <div className="absolute inset-0">
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="100vw" draggable={false} />
      </div>

      {/* After — clipped to slider position */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="100vw" draggable={false} />
      </div>

      {/* Labels — fixed to container corners, never clipped */}
      <span className="absolute bottom-4 left-4 z-20 text-xs font-semibold uppercase tracking-widest text-white bg-black/70 px-3 py-1.5 rounded-sm pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-4 right-4 z-20 text-xs font-semibold uppercase tracking-widest text-white bg-black/70 px-3 py-1.5 rounded-sm pointer-events-none">
        After
      </span>

      {/* Divider */}
      <div
        className="absolute inset-y-0 z-10 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        {/* Line */}
        <div className="w-[3px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
        {/* Handle */}
        <div className="absolute w-12 h-12 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex items-center justify-center border-2 border-white/20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7 5l-5 5 5 5M13 5l5 5-5 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
