import Image from 'next/image'
import PhotoPlaceholder from '../PhotoPlaceholder'
import { getPortfolioGallery } from '@/lib/queries'
import { urlForPortfolio } from '@/sanity/portfolioClient'

export const revalidate = 60

const EMPTY_TILES = Array.from({ length: 6 })

export default async function Preview4Home() {
  const gallery = await getPortfolioGallery().catch(() => null)
  const artworks = gallery?.artworks ?? []

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-14 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: '#A8683D' }}>Painter, Bristol</p>
          <h1
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1B19' }}
            className="text-4xl md:text-5xl font-semibold leading-tight text-balance"
          >
            Selected work
          </h1>
          <p className="mt-6 text-base leading-relaxed" style={{ color: '#6B6560' }}>
            Oil and mixed media, mostly landscapes and quiet interiors. New pieces added as they leave the studio.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {artworks.length > 0
            ? artworks.map((art) => (
                <figure key={art._key} className="group">
                  <div className="relative overflow-hidden aspect-[3/4]" style={{ background: '#F1EFEA' }}>
                    <Image
                      src={urlForPortfolio(art.image).width(600).height(800).url()}
                      alt={art.image.alt || art.title || 'Artwork'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {(art.title || art.medium) && (
                    <figcaption className="mt-2.5 text-sm" style={{ color: '#6B6560' }}>
                      {art.title}
                      {art.title && art.medium ? ', ' : ''}
                      {art.medium}
                      {art.year ? `, ${art.year}` : ''}
                    </figcaption>
                  )}
                </figure>
              ))
            : EMPTY_TILES.map((_, i) => (
                <PhotoPlaceholder
                  key={i}
                  label="Artwork will appear here"
                  className="aspect-[3/4]"
                  style={{ borderColor: '#D9D2C7' }}
                  iconColor="#A8683D"
                />
              ))}
        </div>
      </section>
    </>
  )
}
