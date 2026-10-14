'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

type Category = 'understand' | 'trust' | 'choose'
type AnswerValue = 0 | 1 | 2 | 3

type Question = {
  id: string
  category: Category
  question: string
  context: string
}

const QUESTIONS: Question[] = [
  {
    id: 'understand-1',
    category: 'understand',
    question:
      'Could a new visitor understand what your business does within a few seconds?',
    context:
      'Your homepage should make the nature of the business clear without making people work for it.',
  },
  {
    id: 'understand-2',
    category: 'understand',
    question:
      'Is it clear who your product or service is actually for?',
    context:
      'Visitors should be able to recognise whether the offer is relevant to them.',
  },
  {
    id: 'understand-3',
    category: 'understand',
    question:
      'Does your website explain why someone should choose you instead of an alternative?',
    context:
      'Listing services explains what you sell. It does not necessarily explain why you are the right choice.',
  },
  {
    id: 'understand-4',
    category: 'understand',
    question:
      'Does the language on your website sound specific to your business?',
    context:
      'Generic claims like quality, innovation and great service are difficult for customers to use when comparing options.',
  },

  {
    id: 'trust-1',
    category: 'trust',
    question:
      'Do you show convincing evidence that real customers trust your business?',
    context:
      'Reviews, testimonials, client names and case studies can reduce uncertainty when they are relevant and credible.',
  },
  {
    id: 'trust-2',
    category: 'trust',
    question:
      'Can visitors see the real people or organisation behind the website?',
    context:
      'Knowing who is behind a business can make it easier to judge its credibility.',
  },
  {
    id: 'trust-3',
    category: 'trust',
    question:
      'Do you support important claims with something concrete?',
    context:
      'Results, examples, credentials and specific evidence are usually stronger than unsupported claims.',
  },
  {
    id: 'trust-4',
    category: 'trust',
    question:
      'Does the website feel as considered and credible as the business itself?',
    context:
      'Presentation affects the expectations people form before they ever speak to you.',
  },

  {
    id: 'choose-1',
    category: 'choose',
    question:
      'Is the next step obvious when someone is ready to act?',
    context:
      'Visitors should not have to search for how to enquire, buy, book or continue.',
  },
  {
    id: 'choose-2',
    category: 'choose',
    question:
      'Does the site answer the main questions someone might have before contacting you?',
    context:
      'Unanswered questions create uncertainty at exactly the point someone is deciding what to do next.',
  },
  {
    id: 'choose-3',
    category: 'choose',
    question:
      'Is taking the next step simple on mobile?',
    context:
      'Forms, navigation and calls to action should remain easy to use on smaller screens.',
  },
  {
    id: 'choose-4',
    category: 'choose',
    question:
      'Have you removed unnecessary friction from contacting or buying from you?',
    context:
      'Every unnecessary field, decision or unclear instruction gives someone another opportunity to stop.',
  },
]

const ANSWERS: {
  label: string
  value: AnswerValue
}[] = [
  { label: 'Not really', value: 0 },
  { label: 'A little', value: 1 },
  { label: 'Mostly', value: 2 },
  { label: 'Yes', value: 3 },
]

const CATEGORY_LABELS: Record<Category, string> = {
  understand: 'Understand',
  trust: 'Trust',
  choose: 'Choose',
}

const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  understand:
    'How quickly people can understand what you do, who it is for and why it matters.',
  trust:
    'How much evidence and reassurance people have before they are asked to act.',
  choose:
    'How easily someone can move from interest to making a decision.',
}

const RECOMMENDATIONS: Record<Category, string[]> = {
  understand: [
    'Read your homepage as if you know nothing about the business. Check whether the first screen explains what you actually do.',
    'Replace broad claims with language that is specific to your customers, service and point of difference.',
    'Look at what competitors say. If your website could belong to any of them, your positioning probably needs more work.',
  ],
  trust: [
    'Put relevant evidence close to the claims it supports instead of hiding all of your proof on one testimonials page.',
    'Show the people, work, customers, credentials or results behind the business where they genuinely help someone judge you.',
    'Review vague claims such as trusted, leading or high quality and ask what evidence a visitor has for believing them.',
  ],
  choose: [
    'Go through the website with one question: what should someone do next from here?',
    'Review your enquiry or buying journey on a phone and remove questions or decisions that are not genuinely necessary.',
    'Identify the uncertainties customers commonly have before contacting you and answer them before the final call to action.',
  ],
}

function getLevel(score: number, max: number) {
  const ratio = score / max

  if (ratio >= 0.78) return 'Strong'
  if (ratio >= 0.5) return 'Worth reviewing'
  return 'Needs attention'
}

export default function WebsiteCheck() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({})
  const [finished, setFinished] = useState(false)

  const question = QUESTIONS[current]

  const scores = useMemo(() => {
    const result: Record<Category, number> = {
      understand: 0,
      trust: 0,
      choose: 0,
    }

    QUESTIONS.forEach((item) => {
      result[item.category] += answers[item.id] ?? 0
    })

    return result
  }, [answers])

  const weakestCategory = useMemo<Category>(() => {
    const categories: Category[] = ['understand', 'trust', 'choose']

    return categories.reduce((weakest, category) =>
      scores[category] < scores[weakest] ? category : weakest
    )
  }, [scores])

  function answerQuestion(value: AnswerValue) {
    const updatedAnswers = {
      ...answers,
      [question.id]: value,
    }

    setAnswers(updatedAnswers)

    if (current === QUESTIONS.length - 1) {
      setFinished(true)
      return
    }

    setCurrent((value) => value + 1)
  }

  function goBack() {
    if (current === 0) {
      setStarted(false)
      return
    }

    setCurrent((value) => value - 1)
  }

  function restart() {
    setAnswers({})
    setCurrent(0)
    setFinished(false)
    setStarted(false)
  }

  if (!started) {
    return <Introduction onStart={() => setStarted(true)} />
  }

  if (finished) {
    return (
      <Results
        scores={scores}
        weakestCategory={weakestCategory}
        onRestart={restart}
      />
    )
  }

  const progress = ((current + 1) / QUESTIONS.length) * 100

  return (
    <section className="min-h-screen px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col">
        <header className="flex items-center justify-between border-b border-ink/15 pb-5">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight transition-opacity hover:opacity-60"
          >
            William Langdown
          </Link>

          <span className="text-sm text-ink/50">
            Website check
          </span>
        </header>

        <div className="mt-5 h-px w-full bg-ink/10">
          <div
            className="h-full bg-terracotta transition-[width] duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid flex-1 items-center py-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-2">
            <p className="text-sm text-ink/45">
              {current + 1} / {QUESTIONS.length}
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="mb-5 text-sm font-medium text-terracotta">
              {CATEGORY_LABELS[question.category]}
            </p>

            <h1 className="max-w-4xl font-display text-[clamp(2.3rem,5vw,5.4rem)] leading-[0.98] tracking-tight">
              {question.question}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/60">
              {question.context}
            </p>
          </div>
        </div>

        <div className="border-t border-ink/15">
          <div className="grid md:grid-cols-12">
            <button
              type="button"
              onClick={goBack}
              className="py-6 text-left text-sm text-ink/50 transition-colors hover:text-ink md:col-span-2"
            >
              Back
            </button>

            <div className="grid border-t border-ink/15 md:col-span-10 md:grid-cols-4 md:border-t-0">
              {ANSWERS.map((answer) => {
                const selected = answers[question.id] === answer.value

                return (
                  <button
                    key={answer.value}
                    type="button"
                    onClick={() => answerQuestion(answer.value)}
                    className={`
                      border-b
                      border-ink/15
                      py-6
                      text-left
                      text-base
                      transition-colors
                      last:border-b-0
                      md:border-b-0
                      md:border-l
                      md:px-6
                      ${
                        selected
                          ? 'text-terracotta'
                          : 'text-ink hover:text-terracotta'
                      }
                    `}
                  >
                    {answer.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Introduction({
  onStart,
}: {
  onStart: () => void
}) {
  return (
    <section className="min-h-screen px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col">
        <header className="flex items-center justify-between border-b border-ink/15 pb-5">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight transition-opacity hover:opacity-60"
          >
            William Langdown
          </Link>

          <span className="text-sm text-ink/50">
            Website check
          </span>
        </header>

        <div className="grid flex-1 items-center py-16 md:grid-cols-12">
          <div className="md:col-span-9">
            <h1 className="max-w-5xl font-display text-[clamp(3.2rem,8vw,8.5rem)] leading-[0.9] tracking-tight">
              How well is your website actually working?
            </h1>

            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-ink/70">
                A quick check of the things that help people understand
                your business, trust it and decide what to do next.
              </p>

              <p className="mt-4 text-sm text-ink/45">
                12 questions. About 2 minutes. No email required.
              </p>

              <button
                type="button"
                onClick={onStart}
                className="
                  mt-9
                  inline-flex
                  items-center
                  bg-ink
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-bone
                  transition-colors
                  hover:bg-terracotta
                "
              >
                Check my website
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Results({
  scores,
  weakestCategory,
  onRestart,
}: {
  scores: Record<Category, number>
  weakestCategory: Category
  onRestart: () => void
}) {
  const categories: Category[] = [
    'understand',
    'trust',
    'choose',
  ]

  const weakestLabel = CATEGORY_LABELS[weakestCategory]

  return (
    <section className="px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between border-b border-ink/15 pb-5">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight transition-opacity hover:opacity-60"
          >
            William Langdown
          </Link>

          <span className="text-sm text-ink/50">
            Your website check
          </span>
        </header>

        <div className="py-16 md:py-24">
          <p className="text-sm font-medium text-terracotta">
            Start here
          </p>

          <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight">
            Your biggest opportunity is{' '}
            <span className="text-terracotta">
              {weakestLabel.toLowerCase()}.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
            Based on your answers, this is where I would start looking
            first. It doesn't mean everything else is solved. It gives
            you somewhere useful to begin.
          </p>
        </div>

        <div className="border-t border-ink/15">
          {categories.map((category) => {
            const score = scores[category]
            const max = QUESTIONS.filter(
              (question) => question.category === category
            ).length * 3

            return (
              <div
                key={category}
                className="
                  grid
                  gap-4
                  border-b
                  border-ink/15
                  py-8
                  md:grid-cols-12
                  md:gap-10
                "
              >
                <div className="md:col-span-3">
                  <h2 className="font-display text-3xl">
                    {CATEGORY_LABELS[category]}
                  </h2>
                </div>

                <div className="md:col-span-6">
                  <p className="max-w-xl leading-relaxed text-ink/60">
                    {CATEGORY_DESCRIPTIONS[category]}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p
                    className={
                      category === weakestCategory
                        ? 'text-terracotta'
                        : 'text-ink'
                    }
                  >
                    {getLevel(score, max)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl leading-tight">
              What I'd look at first.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {RECOMMENDATIONS[weakestCategory].map(
              (recommendation, index) => (
                <div
                  key={recommendation}
                  className="
                    border-t
                    border-ink/15
                    py-6
                    first:border-t-0
                    first:pt-0
                  "
                >
                  <p className="leading-relaxed text-ink/70">
                    {recommendation}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Paid audit progression */}
        <section className="border-t border-ink/15 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.95] tracking-tight">
                Want a human second opinion?
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-ink/65">
                I'll review your actual website and send you an
                approximately 15-minute recorded walkthrough with the
                problems I'd prioritise and what I'd do about them.
              </p>

              <p className="mt-5 font-display text-3xl">
                £149
              </p>

              <Link
                href="/website-audit"
                className="
                  mt-7
                  inline-flex
                  items-center
                  bg-ink
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-bone
                  transition-colors
                  hover:bg-terracotta
                "
              >
                See the UX &amp; Conversion Audit
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-ink/15 py-8">
          <button
            type="button"
            onClick={onRestart}
            className="text-sm text-ink/50 transition-colors hover:text-ink"
          >
            Start again
          </button>
        </div>
      </div>
    </section>
  )
}