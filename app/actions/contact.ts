'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  website: string
  service: string
  message: string
  recaptchaToken: string
}

export interface ContactFormResult {
  success: boolean
  error?: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  // Skip verification in development — the Google endpoint hits SSL issues on localhost
  if (process.env.NODE_ENV !== 'production') {
    console.log('[ContactAction] Skipping reCAPTCHA verification in development')
    return true
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY ?? '',
      response: token,
    }),
  })

  const data = await res.json()
  console.log('[ContactAction] reCAPTCHA verify response:', data)
  // v3 returns a score 0.0–1.0; 0.5+ is a reasonable human threshold
  return data.success === true && data.score >= 0.5
}

const serviceLabels: Record<string, string> = {
  audit: 'Audit — £997',
  design: 'Design — £2,497',
  build: 'Build — From £4,997',
  unsure: 'Not sure yet',
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResult> {
  // 1. Verify reCAPTCHA
  console.log('[ContactAction] Verifying reCAPTCHA token...')
  const isHuman = await verifyRecaptcha(data.recaptchaToken)
  console.log('[ContactAction] reCAPTCHA result:', isHuman)
  if (!isHuman) {
    return {
      success: false,
      error: 'reCAPTCHA check failed. Please refresh the page and try again.',
    }
  }

  // 2. Basic server-side validation
  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const serviceLabel = serviceLabels[data.service] ?? data.service

  // 3. Send email via Resend
  try {
    const { data: sendData, error: sendError } = await resend.emails.send({
      from: 'William Langdown Website <noreply@williamlangdown.com>',
      to: 'hello@williamlangdown.com',
      replyTo: data.email,
      subject: `New enquiry from ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0a0a0a;">
          <h2 style="font-size: 20px; font-weight: 500; margin-bottom: 24px;">
            New website enquiry
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #666; width: 140px; font-size: 13px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #0a0a0a;">${escapeHtml(data.email)}</a>
              </td>
            </tr>
            ${data.website ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Website</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">
                <a href="${escapeHtml(data.website)}" style="color: #0a0a0a;">${escapeHtml(data.website)}</a>
              </td>
            </tr>` : ''}
            ${data.service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Interested in</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">${escapeHtml(serviceLabel)}</td>
            </tr>` : ''}
          </table>

          <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <p style="font-size: 13px; color: #666; margin: 0 0 8px 0;">Message</p>
            <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
          </div>

          <p style="font-size: 12px; color: #999;">
            Sent from williamlangdown.com/contact
          </p>
        </div>
      `,
    })

    if (sendError) {
      console.error('[Contact] Resend rejected the send:', sendError)
      return {
        success: false,
        error: 'Something went wrong sending your message. Please email hello@williamlangdown.com directly.',
      }
    }

    console.log('[Contact] Email sent successfully, id:', sendData?.id)
    return { success: true }
  } catch (err) {
    console.error('[Contact] Resend threw an error:', err)
    return {
      success: false,
      error: 'Something went wrong sending your message. Please email hello@williamlangdown.com directly.',
    }
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
