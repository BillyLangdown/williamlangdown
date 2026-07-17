'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const VARIANT_NAMES: Record<string, string> = {
  'preview-1': 'Forge (Bold & modern)',
  'preview-2': 'Willow (Warm & personal)',
  'preview-3': 'Hartley (Minimal & professional)',
  'preview-4': 'Ochre (Image-led & gallery-style)',
}

const MAX_PHOTOS = 6

function esc(v: string) {
  return v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function row(label: string, value: string) {
  if (!value.trim()) return ''
  return `
    <tr>
      <td style="padding: 8px 12px; background: #F4F4F4; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #888; white-space: nowrap; width: 160px; vertical-align: top;">${label}</td>
      <td style="padding: 8px 12px; font-size: 13px; color: #1A1A1A; vertical-align: top; white-space: pre-wrap;">${esc(value)}</td>
    </tr>`
}

type StarterOrderInput = {
  clientName?: string
  clientEmail?: string
  businessName?: string
  variant?: string
  colourNote?: string
  homeHeadline?: string
  homeIntro?: string
  aboutText?: string
  address?: string
  phone?: string
  contactEmail?: string
  logoUrl?: string | null
  photoUrls?: string[]
}

export async function submitStarterOrder(input: StarterOrderInput): Promise<{ success: boolean; error?: string }> {
  const clientName    = input.clientName ?? ''
  const clientEmail   = input.clientEmail ?? ''
  const businessName  = input.businessName ?? ''
  const variant        = input.variant ?? ''
  const colourNote     = input.colourNote ?? ''
  const homeHeadline   = input.homeHeadline ?? ''
  const homeIntro      = input.homeIntro ?? ''
  const aboutText      = input.aboutText ?? ''
  const address        = input.address ?? ''
  const phone          = input.phone ?? ''
  const contactEmail   = input.contactEmail ?? ''
  const logoUrl        = input.logoUrl ?? null
  const photoUrls      = (input.photoUrls ?? []).filter(Boolean)

  if (!clientName.trim() || !clientEmail.trim()) {
    return { success: false, error: 'Name and email are required.' }
  }
  if (!variant) {
    return { success: false, error: 'Please pick a design.' }
  }
  if (photoUrls.length > MAX_PHOTOS) {
    return { success: false, error: `Please attach at most ${MAX_PHOTOS} photos.` }
  }

  const assetLinks = [
    ...(logoUrl ? [{ label: 'Logo', url: logoUrl }] : []),
    ...photoUrls.map((url, i) => ({ label: `Photo ${i + 1}`, url })),
  ]

  const assetsHtml = assetLinks.length > 0
    ? `
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          ${assetLinks.map(a => `
            <td style="padding: 6px; vertical-align: top;">
              <a href="${esc(a.url)}" style="display: block; text-decoration: none;">
                <img src="${esc(a.url)}" alt="${esc(a.label)}" width="120" style="display: block; width: 120px; height: 120px; object-fit: cover; border: 1px solid #E2DDD7; border-radius: 4px;" />
                <span style="display: block; margin-top: 4px; font-size: 11px; color: #888; text-align: center;">${esc(a.label)}</span>
              </a>
            </td>`).join('')}
        </tr>
      </table>`
    : `<p style="font-size: 12px; color: #888;">No logo or photos provided.</p>`

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; color: #1A1A1A;">
      <div style="background: #F0EBE3; padding: 24px 28px; margin-bottom: 28px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">New Starter package order (£495)</p>
        <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 600;">${esc(businessName || clientName)}</h2>
        <table style="border-collapse: collapse; font-size: 13px;">
          <tr><td style="color: #888; padding-right: 16px;">Name</td><td>${esc(clientName)}</td></tr>
          <tr><td style="color: #888; padding-right: 16px; padding-top: 4px;">Email</td><td style="padding-top: 4px;"><a href="mailto:${esc(clientEmail)}" style="color: #2563EB;">${esc(clientEmail)}</a></td></tr>
          <tr><td style="color: #888; padding-right: 16px; padding-top: 4px;">Design chosen</td><td style="padding-top: 4px;">${esc(VARIANT_NAMES[variant] ?? variant)}</td></tr>
        </table>
      </div>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #E2DDD7; margin-bottom: 20px;">
        ${row('Colour note', colourNote)}
        ${row('Home headline', homeHeadline)}
        ${row('Home intro', homeIntro)}
        ${row('About text', aboutText)}
        ${row('Address', address)}
        ${row('Phone', phone)}
        ${row('Contact email', contactEmail)}
      </table>

      <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Logo &amp; photos</p>
      ${assetsHtml}

      <p style="font-size: 11px; color: #bbb; margin-top: 24px; padding-top: 16px; border-top: 1px solid #E2DDD7;">
        Submitted via williamlangdown.com/starter/order
      </p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: 'William Langdown Website <noreply@williamlangdown.com>',
      to: 'hello@williamlangdown.com',
      replyTo: clientEmail,
      subject: `New Starter order: ${businessName || clientName}`,
      html,
    })

    if (error) {
      console.error('[starter-order] Resend error:', error)
      return { success: false, error: 'Failed to send. Please email hello@williamlangdown.com directly.' }
    }

    return { success: true }
  } catch (err) {
    console.error('[starter-order] Threw:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
