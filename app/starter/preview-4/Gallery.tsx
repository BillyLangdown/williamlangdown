'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PhotoPlaceholder from '../PhotoPlaceholder'
import { staggerGrid, gridItem } from '../_shared/Reveal'
import Lightbox, { type LightboxImage } from '../_shared/Lightbox'

export type ArtworkTile = {
  key: string
  src: string
  alt: string
  caption?: string
}

const EMPTY_TILES = Array.from({ length: 6 })

export default function Gallery({ artworks }: { artworks: ArtworkTile[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const lightboxImages: LightboxImage[] = artworks.map(a => ({ src: a.src, alt: a.alt, caption: a.caption }))

  if (artworks.length === 0) {
    return (
      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
      >
        {EMPTY_TILES.map((_, i) => (
          <motion.div key={i} variants={gridItem}>
            <PhotoPlaceholder
              label="Artwork will appear here"
              className="aspect-[3/4]"
              style={{ borderColor: '#D9D2C7' }}
              iconColor="#A8683D"
            />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <>
      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
      >
        {artworks.map((art, i) => (
          <motion.button
            key={art.key}
            type="button"
            variants={gridItem}
            onClick={() => setOpenIndex(i)}
            className="group text-left cursor-zoom-in"
          >
            <div className="relative overflow-hidden aspect-[3/4]" style={{ background: '#F1EFEA' }}>
              <Image
                src={art.src}
                alt={art.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: 'rgba(28,27,25,0.15)' }}>
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/90">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#1C1B19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
            {art.caption && (
              <figcaption className="mt-2.5 text-sm" style={{ color: '#6B6560' }}>{art.caption}</figcaption>
            )}
          </motion.button>
        ))}
      </motion.div>

      <Lightbox images={lightboxImages} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </>
  )
}
