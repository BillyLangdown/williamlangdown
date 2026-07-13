'use client'

import { useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { uploadArtworks, deleteArtwork, reorderArtwork } from '@/app/actions/portfolio-manage'
import { urlForPortfolio } from '@/sanity/portfolioClient'
import type { Artwork } from '@/lib/types'
import { MAX_ARTWORKS } from '@/lib/portfolioConfig'

export default function ManageDashboard({ initialArtworks }: { initialArtworks: Artwork[] }) {
  const router = useRouter()
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [busyKeys, setBusyKeys] = useState<Set<string>>(new Set())
  const [uploading, startUpload] = useTransition()
  const inputRef = useRef<HTMLInputElement>(null)
  const atCap = initialArtworks.length >= MAX_ARTWORKS

  function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return
    if (atCap) {
      setError(`You've reached the ${MAX_ARTWORKS}-image limit for this gallery. Delete something to add more.`)
      return
    }
    setError('')
    setMessage('')
    const formData = new FormData()
    Array.from(fileList).forEach((f) => formData.append('images', f))

    startUpload(async () => {
      const result = await uploadArtworks(formData)
      if (result.success) {
        setMessage(`Uploaded ${result.count} image${result.count === 1 ? '' : 's'}.`)
        router.refresh()
      } else {
        setError(result.error || 'Upload failed.')
      }
    })

    if (inputRef.current) inputRef.current.value = ''
  }

  function withBusy(key: string, fn: () => Promise<{ success: boolean; error?: string }>) {
    setBusyKeys((prev) => new Set(prev).add(key))
    setError('')
    fn().then((result) => {
      if (!result.success) setError(result.error || 'Something went wrong.')
      setBusyKeys((prev) => {
        const next = new Set(prev)
        next.delete(key)
        return next
      })
      router.refresh()
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-3">
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: '#A8683D' }}>Manage artwork</p>
        <p className="text-xs" style={{ color: atCap ? '#B4432F' : '#A39C93' }}>
          {initialArtworks.length} / {MAX_ARTWORKS} used
        </p>
      </div>
      <h1 style={{ fontFamily: 'var(--font-cormorant)', color: '#1C1B19' }} className="text-3xl font-semibold mb-8">
        Upload &amp; manage your work
      </h1>

      {/* Upload zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault()
          if (!atCap) setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          handleFiles(e.dataTransfer.files)
        }}
        className="border-2 border-dashed px-6 py-12 text-center mb-3 transition-colors"
        style={{
          borderColor: dragOver ? '#A8683D' : '#D9D2C7',
          background: dragOver ? '#FBF3EC' : 'transparent',
          opacity: atCap ? 0.5 : 1,
        }}
      >
        <p className="text-sm mb-3" style={{ color: '#6B6560' }}>
          {atCap ? `Gallery limit reached (${MAX_ARTWORKS} images)` : 'Drag and drop images here, or'}
        </p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading || atCap}
          className="px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          style={{ background: '#A8683D' }}
        >
          {uploading ? 'Uploading…' : 'Choose files'}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          disabled={atCap}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <p className="mt-3 text-xs" style={{ color: '#A39C93' }}>Up to 10 images at a time, 10MB each</p>
      </div>

      {error && <p className="text-sm mb-6" style={{ color: '#B4432F' }}>{error}</p>}
      {message && !error && <p className="text-sm mb-6" style={{ color: '#4A7A5A' }}>{message}</p>}

      {/* Current artworks */}
      {initialArtworks.length === 0 ? (
        <p className="text-sm" style={{ color: '#A39C93' }}>No artwork uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {initialArtworks.map((art, i) => {
            const busy = busyKeys.has(art._key)
            return (
              <div key={art._key} className="relative">
                <div className="relative aspect-[3/4] overflow-hidden" style={{ background: '#F1EFEA', opacity: busy ? 0.5 : 1 }}>
                  <Image
                    src={urlForPortfolio(art.image).width(300).height(400).url()}
                    alt={art.image.alt || art.title || 'Artwork'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-1">
                  <button
                    type="button"
                    disabled={busy || i === 0}
                    onClick={() => withBusy(art._key, () => reorderArtwork(art._key, 'up'))}
                    className="text-xs px-2 py-1 border disabled:opacity-30"
                    style={{ borderColor: '#D9D2C7', color: '#1C1B19' }}
                    aria-label="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    disabled={busy || i === initialArtworks.length - 1}
                    onClick={() => withBusy(art._key, () => reorderArtwork(art._key, 'down'))}
                    className="text-xs px-2 py-1 border disabled:opacity-30"
                    style={{ borderColor: '#D9D2C7', color: '#1C1B19' }}
                    aria-label="Move down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => withBusy(art._key, () => deleteArtwork(art._key))}
                    className="text-xs px-2 py-1 border ml-auto disabled:opacity-30"
                    style={{ borderColor: '#D9D2C7', color: '#B4432F' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
