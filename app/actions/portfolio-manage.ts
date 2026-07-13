'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { randomUUID } from 'crypto'
import { portfolioWriteClient } from '@/sanity/portfolioClient'
import type { Artwork } from '@/lib/types'
import { MAX_ARTWORKS } from '@/lib/portfolioConfig'

const PORTFOLIO_DOC_ID = 'portfolio-demo'
const AUTH_COOKIE = 'portfolio_manage_auth'
const MANAGE_PATH = '/starter/preview-4/manage'
const GALLERY_PATH = '/starter/preview-4'
const MAX_FILES = 10
const MAX_FILE_BYTES = 10 * 1024 * 1024 // 10MB

async function isAuthorized(): Promise<boolean> {
  const store = await cookies()
  return store.get(AUTH_COOKIE)?.value === 'granted'
}

function revalidateGallery() {
  revalidatePath(GALLERY_PATH)
  revalidatePath(MANAGE_PATH)
}

export async function checkPortfolioPasscode(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const passcode = String(formData.get('passcode') ?? '')
  const expected = process.env.STARTER_PORTFOLIO_MANAGE_PASSCODE

  if (!expected) {
    return { success: false, error: 'Passcode is not configured.' }
  }
  if (passcode !== expected) {
    return { success: false, error: 'Incorrect passcode.' }
  }

  const store = await cookies()
  store.set(AUTH_COOKIE, 'granted', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: MANAGE_PATH,
    maxAge: 60 * 60 * 24 * 30,
  })

  return { success: true }
}

export async function uploadArtworks(
  formData: FormData
): Promise<{ success: boolean; error?: string; count?: number }> {
  if (!(await isAuthorized())) {
    return { success: false, error: 'Not authorized.' }
  }

  const files = (formData.getAll('images') as File[]).filter((f) => f && f.size > 0)
  if (files.length === 0) {
    return { success: false, error: 'No images provided.' }
  }
  if (files.length > MAX_FILES) {
    return { success: false, error: `Upload at most ${MAX_FILES} images at a time.` }
  }
  const oversized = files.find((f) => f.size > MAX_FILE_BYTES)
  if (oversized) {
    return { success: false, error: `"${oversized.name}" is over the 10MB limit.` }
  }

  try {
    const currentCount = await portfolioWriteClient.fetch<number>(
      `count(*[_id == $id][0].artworks)`,
      { id: PORTFOLIO_DOC_ID }
    )
    if (currentCount + files.length > MAX_ARTWORKS) {
      const remaining = Math.max(0, MAX_ARTWORKS - currentCount)
      return {
        success: false,
        error:
          remaining === 0
            ? `You've reached the ${MAX_ARTWORKS}-image limit for this gallery. Delete something to add more.`
            : `Only room for ${remaining} more image${remaining === 1 ? '' : 's'} (${MAX_ARTWORKS}-image limit).`,
      }
    }

    const newArtworks: Artwork[] = []

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const asset = await portfolioWriteClient.assets.upload('image', buffer, {
        filename: file.name,
        contentType: file.type,
      })
      const baseName = file.name.replace(/\.[^.]+$/, '')
      newArtworks.push({
        // Sanity does not auto-generate array-item _key values for API-driven
        // patches (only Studio's editing UI does that client-side), so it must
        // be set explicitly here or later actions can't reference this item.
        _key: randomUUID(),
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
          alt: baseName,
        } as Artwork['image'],
      })
    }

    await portfolioWriteClient.createIfNotExists({
      _id: PORTFOLIO_DOC_ID,
      _type: 'portfolioGallery',
      artworks: [],
    })

    await portfolioWriteClient
      .patch(PORTFOLIO_DOC_ID)
      .setIfMissing({ artworks: [] })
      .append(
        'artworks',
        newArtworks.map((a) => ({ _type: 'artwork', ...a }))
      )
      .commit()

    revalidateGallery()
    return { success: true, count: newArtworks.length }
  } catch (err) {
    console.error('[portfolio-manage] uploadArtworks failed:', err)
    return { success: false, error: 'Upload failed. Please try again.' }
  }
}

export async function deleteArtwork(key: string): Promise<{ success: boolean; error?: string }> {
  if (!(await isAuthorized())) {
    return { success: false, error: 'Not authorized.' }
  }
  if (!key) {
    return { success: false, error: 'Missing artwork key.' }
  }

  try {
    await portfolioWriteClient
      .patch(PORTFOLIO_DOC_ID)
      .unset([`artworks[_key=="${key}"]`])
      .commit()

    revalidateGallery()
    return { success: true }
  } catch (err) {
    console.error('[portfolio-manage] deleteArtwork failed:', err)
    return { success: false, error: 'Delete failed. Please try again.' }
  }
}

export async function reorderArtwork(
  key: string,
  direction: 'up' | 'down'
): Promise<{ success: boolean; error?: string }> {
  if (!(await isAuthorized())) {
    return { success: false, error: 'Not authorized.' }
  }

  try {
    const doc = await portfolioWriteClient.fetch<{ artworks?: Artwork[] } | null>(
      `*[_id == $id][0]{ artworks[]{ _key, image, title, medium, year } }`,
      { id: PORTFOLIO_DOC_ID }
    )
    const artworks = doc?.artworks ?? []
    const index = artworks.findIndex((a) => a._key === key)
    if (index === -1) {
      return { success: false, error: 'Artwork not found.' }
    }
    const swapWith = direction === 'up' ? index - 1 : index + 1
    if (swapWith < 0 || swapWith >= artworks.length) {
      return { success: true } // already at the edge, no-op
    }

    const reordered = [...artworks]
    ;[reordered[index], reordered[swapWith]] = [reordered[swapWith], reordered[index]]

    await portfolioWriteClient
      .patch(PORTFOLIO_DOC_ID)
      .set({ artworks: reordered.map((a) => ({ ...a, _type: 'artwork' })) })
      .commit()

    revalidateGallery()
    return { success: true }
  } catch (err) {
    console.error('[portfolio-manage] reorderArtwork failed:', err)
    return { success: false, error: 'Reorder failed. Please try again.' }
  }
}
