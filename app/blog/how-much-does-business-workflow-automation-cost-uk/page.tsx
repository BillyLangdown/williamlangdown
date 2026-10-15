import Link from 'next/link'
import ArticleShell from '@/components/article/ArticleShell'
import { getGuide } from '@/lib/guides'
import { contactHref } from '@/lib/site'
import type { Metadata } from 'next'

const guide = getGuide('how-much-does-business-workflow-automation-cost-uk')!
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
        heading: 'Want a realistic figure for your own process?',
        description: 'Describe the workflow and the software involved, and I will tell you what is likely to affect the price.',
        label: 'Discuss an automation project',
        href: contactHref('cost-guide'),
      }}
    >
      <h2>The short answer</h2>
      <p>
        There is no single UK price for workflow automation, because the work ranges from connecting
        two tools with a notification to building a multi-step process across several systems with
        approvals. Anyone who quotes a fixed figure without knowing the workflow is guessing.
      </p>
      <p>
        For my own work, automation implementations typically start from £1,500 for a properly scoped
        project. That is a starting point, not a fixed package, and the final price is agreed in writing
        before work begins. Other consultants and agencies price differently, so treat this as one
        reference point.
      </p>

      <h2>Why prices vary so much</h2>
      <p>
        Most of the cost is not the act of connecting things. It is understanding the process properly,
        dealing with the awkward cases and checking that it works. Two automations that sound similar
        can differ enormously in effort, depending on the factors below.
      </p>

      <h2>Simple versus complex implementations</h2>
      <p>
        A simple automation has one trigger, a small number of steps and one or two systems. An example
        is sending a summary to the right person when a web form is submitted, and saving the details
        in a spreadsheet. The rules are clear, the data is predictable and failure is easy to spot.
      </p>
      <p>
        A complex automation involves several systems, conditional rules, approvals, documents and
        reporting. An example is onboarding a new client by creating records in several tools,
        generating paperwork, assigning tasks and keeping everything in step as details change. More
        systems and more exceptions mean more design, more testing and more to maintain.
      </p>

      <h2>What changes the price</h2>

      <h3>The number of systems involved</h3>
      <p>
        Every extra system adds its own login, data format and behaviour. Joining two tools is a
        different job from keeping five consistent, because each connection can fail separately.
      </p>

      <h3>Whether the software has a usable API</h3>
      <p>
        An API is the official way for software to exchange information. Where it exists and is well
        documented, work is faster and more reliable. Where a tool only offers file exports or email
        notifications, the work needs more care and the result is more fragile. Some API features are
        also limited to higher subscription tiers.
      </p>

      <h3>The quality of your data</h3>
      <p>
        Automation exposes inconsistencies that people quietly work around: duplicate customers,
        free-text fields, missing reference numbers. Cleaning up or defining rules for these can take
        longer than the automation itself, and skipping it makes the result untrustworthy.
      </p>

      <h3>Human review and exceptions</h3>
      <p>
        Steps where a person approves or corrects something need an interface or a notification, and a
        plan for what happens if nobody responds. They add effort, and they are often worth it where
        mistakes would be expensive.
      </p>

      <h3>Testing</h3>
      <p>
        Testing with real examples, including the unusual ones, is a significant part of any reliable
        project. Reducing it lowers the price and raises the risk, so I would rather agree an
        appropriate level than remove it.
      </p>

      <h2>Costs beyond the build</h2>
      <ul>
        <li>
          <strong>Software subscriptions.</strong> Many automations run on a platform or use paid
          features in your existing tools. These fees often depend on volume and change over time, so
          check each supplier&apos;s current pricing.
        </li>
        <li>
          <strong>Hosting.</strong> Custom code needs somewhere to run. This is usually a modest
          monthly cost, but it is a running cost.
        </li>
        <li>
          <strong>Maintenance.</strong> Connected software changes. APIs are updated, passwords
          expire and processes evolve. Decide who looks after the automation, and what that costs,
          before you start.
        </li>
        <li>
          <strong>Ownership and handover.</strong> You should know who owns the accounts, the code and
          the documentation, and be able to hand the system to someone else. Clarity on this is cheap
          at the start and expensive later.
        </li>
      </ul>

      <h2>Doing it yourself or hiring someone</h2>
      <p>
        No-code automation tools are a good way to learn and to build straightforward flows yourself.
        Bringing in help starts to pay off when the process touches several systems, when errors would
        be costly, or when nobody on your team has the time to build, test and maintain it. A fair
        approach is to ask whether the time you would spend is better used elsewhere.
      </p>

      <h2>How to get an accurate quote</h2>
      <p>You will receive a more useful quote, faster, if you can describe:</p>
      <ul>
        <li>The process as it works today, step by step.</li>
        <li>The software involved, and who administers it.</li>
        <li>Roughly how often the process runs.</li>
        <li>The exceptions: what goes wrong or needs a person&apos;s judgement.</li>
        <li>Who should be told, and who approves, at each stage.</li>
      </ul>

      <h2>If you are not sure what to automate</h2>
      <p>
        The optional{' '}
        <Link href="/business-automation-review">Business Automation Review</Link> costs £395. It is a
        focused review of workflows we agree, ending in a written report with prioritised
        recommendations and indicative costs. If you commission implementation within 60 days, the £395
        is deducted from the agreed price. There is no commitment to proceed, and you do not need a
        review before commissioning work.
      </p>

      <h2>Questions worth asking any provider</h2>
      <ul>
        <li>What happens when a step fails, and who is told?</li>
        <li>Whose accounts will it run in?</li>
        <li>What documentation will I receive?</li>
        <li>What are the ongoing costs, from you and from the software?</li>
        <li>What would you not automate here?</li>
      </ul>

      <h2>Next steps</h2>
      <p>
        See what I build on the{' '}
        <Link href="/services/workflow-automation">workflow automation</Link> page, or{' '}
        <Link href={contactHref('cost-guide')}>get in touch</Link> to talk through a specific process.
        If the main issue is systems that do not share data, the{' '}
        <Link href="/services/software-integrations">software integrations</Link> page may be more
        relevant.
      </p>
    </ArticleShell>
  )
}
