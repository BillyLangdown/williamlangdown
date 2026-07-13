'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const VARIANT_NAMES: Record<string, string> = {
  'preview-1': 'Forge (Bold & modern)',
  'preview-2': 'Willow (Warm & personal)',
  'preview-3': 'Hartley (Minimal & professional)',
  'preview-4': 'Ochre (Image-led & gallery-style)',
}

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

export async function submitStarterOrder(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const clientName    = String(formData.get('clientName') ?? '')
  const clientEmail   = String(formData.get('clientEmail') ?? '')
  const businessName  = String(formData.get('businessName') ?? '')
  const variant        = String(formData.get('variant') ?? '')
  const colourNote     = String(formData.get('colourNote') ?? '')
  const homeHeadline   = String(formData.get('homeHeadline') ?? '')
  const homeIntro      = String(formData.get('homeIntro') ?? '')
  const aboutText      = String(formData.get('aboutText') ?? '')
  const address        = String(formData.get('address') ?? '')
  const phone          = String(formData.get('phone') ?? '')
  const contactEmail   = String(formData.get('contactEmail') ?? '')

  if (!clientName.trim() || !clientEmail.trim()) {
    return { success: false, error: 'Name and email are required.' }
  }
  if (!variant) {
    return { success: false, error: 'Please pick a design.' }
  }

  const logo  = formData.get('logo') as File | null
  const photos = formData.getAll('photos') as File[]

  const attachments: { filename: string; content: Buffer }[] = []

  if (logo && logo.size > 0) {
    attachments.push({ filename: `logo-${logo.name}`, content: Buffer.from(await logo.arrayBuffer()) })
  }
  for (const photo of photos) {
    if (photo && photo.size > 0) {
      attachments.push({ filename: `photo-${photo.name}`, content: Buffer.from(await photo.arrayBuffer()) })
    }
  }

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

      <p style="font-size: 12px; color: #888;">
        Attachments: ${attachments.length > 0 ? `${attachments.length} file(s), logo${logo && logo.size > 0 ? ' included' : ' not provided'}, ${photos.filter(p => p.size > 0).length} photo(s)` : 'None provided'}
      </p>

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
      attachments: attachments.length > 0 ? attachments : undefined,
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
