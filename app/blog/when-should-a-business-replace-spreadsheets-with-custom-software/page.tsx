import Link from 'next/link'
import ArticleShell from '@/components/article/ArticleShell'
import { getGuide } from '@/lib/guides'
import { contactHref } from '@/lib/site'
import type { Metadata } from 'next'

const guide = getGuide('when-should-a-business-replace-spreadsheets-with-custom-software')!
const url = `https://williamlangdown.com/blog/${guide.slug}`

export const metadata: Metadata = {
  title: `${guide.title} | William Langdown`,
  description: guide.description,
  alternates: { canonical: url },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url,
    siteName: 'William Langdown',
    locale: 'en_GB',
    type: 'article',
    publishedTime: guide.publishedAt,
    authors: ['William Langdown'],
  },
  twitter: { card: 'summary_large_image', title: guide.title, description: guide.description },
}

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      cta={{
        heading: 'Unsure whether your spreadsheet needs replacing?',
        description: 'Tell me what it does and what is going wrong, and I will give you an honest view, including when the answer is to leave it alone.',
        label: 'Discuss a project',
        href: contactHref('spreadsheet-guide'),
      }}
    >
      <h2>The short answer</h2>
      <p>
        Replace a spreadsheet when the cost of working around its limits is clearly higher than the
        cost of something better, and when simpler fixes have been considered. Many spreadsheets should
        stay. Others only need to be connected to the rest of the business, or to have the manual steps
        around them automated.
      </p>

      <h2>When a spreadsheet is still the right tool</h2>
      <p>A spreadsheet is usually fine when:</p>
      <ul>
        <li>One or two people maintain it.</li>
        <li>The structure rarely changes.</li>
        <li>Nothing else depends on it to run.</li>
        <li>Mistakes are easy to spot and cheap to fix.</li>
        <li>It is for analysis or planning, rather than a record the business relies on.</li>
      </ul>
      <p>
        Spreadsheets are flexible and familiar, which is why they spread. That is a strength, not a
        fault, and replacing a working one can create more work than it saves.
      </p>

      <h2>When connecting your tools is enough</h2>
      <p>
        If the spreadsheet is fine but the same information is typed into it and somewhere else,
        the problem is the copying, not the spreadsheet. An integration that keeps the two in step can
        remove most of the pain for much less effort than a rebuild. See{' '}
        <Link href="/services/software-integrations">software integrations</Link> for how that works.
      </p>

      <h2>When automation around the spreadsheet will do</h2>
      <p>
        Sometimes the sheet is a sound place to keep data, but people do repetitive things around it:
        chasing updates, sending emails when a status changes, producing a weekly report. Automating
        those steps leaves the familiar tool in place.{' '}
        <Link href="/services/workflow-automation">Workflow automation</Link> covers this kind of
        work.
      </p>

      <h2>When an internal tool becomes worthwhile</h2>
      <p>A purpose-built tool starts to make sense when several of these are true:</p>
      <ul>
        <li>Multiple people edit the same data and overwrite or duplicate each other&apos;s work.</li>
        <li>The business needs different access for different people.</li>
        <li>You need a trustworthy history of who changed what and when.</li>
        <li>The process has stages, approvals or deadlines that the sheet cannot enforce.</li>
        <li>No off-the-shelf product fits, or the ones that do force you to change how you work.</li>
        <li>The work is repeated often enough that small inefficiencies add up.</li>
      </ul>

      <h2>Common warning signs</h2>
      <ul>
        <li>People ask which version is the latest.</li>
        <li>Only one person understands the formulas, and they are leaving or going on holiday.</li>
        <li>The file is slow, crashes or is split into several copies to keep it usable.</li>
        <li>Errors have already cost money, time or a customer&apos;s trust.</li>
        <li>Data is re-keyed into other systems every week.</li>
        <li>You would struggle to say who has seen sensitive information in it.</li>
      </ul>

      <h2>Costs and complexity</h2>
      <p>
        A custom tool costs more than a spreadsheet to create, and it costs something to keep running.
        Hosting, backups, security updates and occasional changes are part of owning software. Weigh
        those against the time lost and risk carried today, and against the subscription for an
        existing product that might do the job.
      </p>
      <p>
        Complexity grows with the number of users, the number of rules and the number of other systems
        involved. A tool that helps a small team do one job well is cheaper and safer than one that
        tries to cover everything. Starting small, and extending it once it proves useful, is usually
        the sensible route.
      </p>

      <h2>Data migration and reliability</h2>
      <p>Moving from a spreadsheet to anything else needs planning:</p>
      <ul>
        <li>
          <strong>Clean the data first.</strong> Duplicates, inconsistent spellings and free-text
          fields need decisions before they go into a stricter structure.
        </li>
        <li>
          <strong>Run both for a while.</strong> Keeping the old sheet alongside the new tool for a
          short period lets you compare results before relying on the new one.
        </li>
        <li>
          <strong>Plan backups and access.</strong> Decide where the data lives, who can see it and
          how it is restored if something goes wrong.
        </li>
        <li>
          <strong>Keep a way back.</strong> Make sure data can be exported in a usable format, so you
          are never locked in.
        </li>
      </ul>

      <h2>A sensible approach</h2>
      <p>
        Work out which part of the spreadsheet is causing the pain, and fix that first. Often it is one
        screen, one report or one handover. Replacing only that part keeps the cost down and shows
        quickly whether the idea works.
      </p>

      <h2>Next steps</h2>
      <p>
        If you think an internal tool is warranted, the{' '}
        <Link href="/services/custom-software">custom software and internal tools</Link> page explains
        what I build and how projects are scoped. If you would like an outside view of a few selected
        workflows before deciding, the{' '}
        <Link href="/business-automation-review">Business Automation Review</Link> costs £395 and is
        deducted from implementation work commissioned within 60 days. You can also{' '}
        <Link href={contactHref('spreadsheet-guide')}>get in touch</Link> directly.
      </p>
    </ArticleShell>
  )
}
