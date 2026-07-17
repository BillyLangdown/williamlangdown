import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

// Token-exchange endpoint for the Starter order form's logo/photo uploads.
// Files go straight from the browser to Blob storage (never through this
// function's body), which sidesteps Vercel's fixed 4.5MB request body limit
// on Serverless Functions.
const MAX_FILE_BYTES = 15 * 1024 * 1024

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        // Wildcard covers phone photo formats too (iPhones default to HEIC).
        allowedContentTypes: ['image/*'],
        maximumSizeInBytes: MAX_FILE_BYTES,
        addRandomSuffix: true,
      }),
      onUploadCompleted: async () => {},
    })

    return NextResponse.json(jsonResponse)
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 })
  }
}
