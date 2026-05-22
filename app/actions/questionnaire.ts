'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SECTIONS = [
  {
    id: 'about',
    title: 'About the Business',
    fields: [
      { id: 'businessName', label: 'Business name' },
      { id: 'businessOverview', label: 'What they do and what they offer' },
      { id: 'differentiation', label: 'What makes them different' },
      { id: 'currentWorking', label: 'Current website - what is working well' },
    ],
  },
  {
    id: 'goals',
    title: 'Project Goals',
    fields: [
      { id: 'mainReason', label: 'Main reason for the project' },
      { id: 'successDefinition', label: 'What success looks like' },
      { id: 'visitorActions', label: 'Actions visitors should take' },
      { id: 'priorityAction', label: 'Highest priority action' },
    ],
  },
  {
    id: 'audience',
    title: 'Target Audience',
    fields: [
      { id: 'idealCustomers', label: 'Ideal customers and who to attract more of' },
      { id: 'bToB', label: 'B2B, B2C, or both' },
      { id: 'customerValues', label: 'What matters most to customers' },
      { id: 'customerDecision', label: 'Decided vs. comparing / guidance-seeking' },
      { id: 'avoidCustomers', label: 'Customers to avoid' },
    ],
  },
  {
    id: 'pages',
    title: 'Website Pages',
    fields: [
      { id: 'homePage', label: 'Home page' },
      { id: 'aboutPage', label: 'About page' },
      { id: 'servicesPage', label: 'Services page(s)' },
      { id: 'portfolioPage', label: 'Portfolio / Projects page' },
      { id: 'contactPage', label: 'Contact page' },
      { id: 'additionalPages', label: 'Additional pages' },
    ],
  },
  {
    id: 'branding',
    title: 'Branding and Visuals',
    fields: [
      { id: 'overallFeel', label: 'Overall feel / tone' },
      { id: 'colours', label: 'Colours to include or avoid' },
      { id: 'logoGuidelines', label: 'Existing logo / brand guidelines' },
      { id: 'fontsStyles', label: 'Font or style preferences' },
      { id: 'inspiration', label: 'Websites they like (with links)' },
      { id: 'designAvoid', label: 'Design approaches to avoid' },
      { id: 'existingMedia', label: 'Photography and media available' },
      { id: 'mediaLink', label: 'Link to files, photos, or brand assets' },
    ],
  },
  {
    id: 'features',
    title: 'Features and Technical',
    fields: [
      { id: 'functionality', label: 'Specific functionality needed' },
      { id: 'integrations', label: 'Third-party integrations' },
      { id: 'seoTargets', label: 'SEO targets (services, locations)' },
      { id: 'analyticsAndSeo', label: 'Analytics setup and ongoing SEO plans' },
      { id: 'domainHosting', label: 'Domain and hosting situation' },
      { id: 'launchTimeframe', label: 'Preferred launch timeframe' },
    ],
  },
  {
    id: 'final',
    title: 'Final Notes',
    fields: [
      { id: 'anythingElse', label: 'Anything else useful to know' },
      { id: 'frustrations', label: 'Previous bad experiences / frustrations' },
    ],
  },
]

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>')
}

function buildEmailHtml(
  clientName: string,
  clientEmail: string,
  answers: Record<string, string>,
  skipped: string[]
): string {
  const sectionBlocks = SECTIONS.map((section) => {
    const isSkipped = skipped.includes(section.id)

    const rows = isSkipped
      ? `<tr><td colspan="2" style="padding: 12px 0; color: #999; font-size: 12px; font-style: italic;">Section skipped</td></tr>`
      : section.fields
          .map((f) => {
            const val = answers[f.id]?.trim()
            if (!val) return ''
            return `
              <tr>
                <td style="padding: 8px 16px 8px 0; color: #888; font-size: 12px; vertical-align: top; min-width: 200px;">${esc(f.label)}</td>
                <td style="padding: 8px 0; font-size: 13px; color: #1A1A1A; line-height: 1.6;">${esc(val)}</td>
              </tr>`
          })
          .join('')

    const hasContent = !isSkipped && section.fields.some((f) => answers[f.id]?.trim())
    if (!hasContent && !isSkipped) return ''

    return `
      <div style="margin-bottom: 32px;">
        <h3 style="font-size: 14px; font-weight: 600; color: #1A1A1A; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 1px solid #E2DDD7;">
          ${esc(section.title)}
        </h3>
        <table style="width: 100%; border-collapse: collapse;">${rows}</table>
      </div>`
  }).join('')

  const completedCount = SECTIONS.filter(
    (s) => !skipped.includes(s.id) && s.fields.some((f) => answers[f.id]?.trim())
  ).length

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; color: #1A1A1A;">
      <div style="background: #F0EBE3; padding: 24px 28px; margin-bottom: 28px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">New project brief</p>
        <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 600;">${esc(clientName)}</h2>
        <table style="border-collapse: collapse; font-size: 13px;">
          <tr>
            <td style="color: #888; padding-right: 16px;">Email</td>
            <td><a href="mailto:${esc(clientEmail)}" style="color: #C17A3A;">${esc(clientEmail)}</a></td>
          </tr>
          <tr>
            <td style="color: #888; padding-right: 16px; padding-top: 4px;">Sections completed</td>
            <td style="padding-top: 4px;">${completedCount} of ${SECTIONS.length}</td>
          </tr>
        </table>
      </div>

      ${sectionBlocks}

      <p style="font-size: 11px; color: #bbb; margin-top: 32px; padding-top: 16px; border-top: 1px solid #E2DDD7;">
        Submitted via williamlangdown.com/client-brief
      </p>
    </div>
  `
}

export async function submitQuestionnaire(
  clientName: string,
  clientEmail: string,
  answers: Record<string, string>,
  skipped: string[]
): Promise<{ success: boolean; error?: string }> {
  if (!clientName.trim() || !clientEmail.trim()) {
    return { success: false, error: 'Name and email are required.' }
  }

  try {
    const { error } = await resend.emails.send({
      from: 'William Langdown Website <noreply@williamlangdown.com>',
      to: 'hello@williamlangdown.com',
      replyTo: clientEmail,
      subject: `New project brief — ${clientName}`,
      html: buildEmailHtml(clientName, clientEmail, answers, skipped),
    })

    if (error) {
      console.error('[Questionnaire] Resend error:', error)
      return { success: false, error: 'Failed to send. Please email hello@williamlangdown.com directly.' }
    }

    return { success: true }
  } catch (err) {
    console.error('[Questionnaire] Threw:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
