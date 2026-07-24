import { getPortfolioGallery } from '@/lib/queries'
import { urlForPortfolio } from '@/sanity/portfolioClient'
import Reveal from '../_shared/Reveal'
import Gallery, { type ArtworkTile } from './Gallery'

export const revalidate = 60

export default async function Preview4Home() {
  const gallery = await getPortfolioGallery().catch(() => null)
  const artworks = gallery?.artworks ?? []

  const tiles: ArtworkTile[] = artworks.map((art) => ({
    key: art._key,
    src: urlForPortfolio(art.image).width(800).height(1000).url(),
    alt: art.image.alt || art.title || 'Artwork',
    caption: [[art.title, art.medium].filter(Boolean).join(', '), art.year ? String(art.year) : ''].filter(Boolean).join(', '),
  }))

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-16 pb-14 text-center">
        <Reveal className="max-w-2xl mx-auto">
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
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-20">
        <Gallery artworks={tiles} />
      </section>
    </>
  )
}
