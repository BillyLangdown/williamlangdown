// The two ways in from the homepage. Shared by the homepage section and
// the /services hub so the wording and destinations never drift apart.
export const pathways = [
  {
    key: 'technology',
    heading: 'Improve how your business works.',
    description:
      'Save time, reduce repetitive work and make better use of your existing systems. I can help identify opportunities and put practical solutions in place.',
    cta: 'Explore business technology',
    href: '/services/technology-automation',
  },
  {
    key: 'digital',
    heading: 'Improve how your business looks online.',
    description:
      'Make your business easier to understand, trust and choose through better websites and digital experiences.',
    cta: 'Explore digital experiences',
    href: '/services/web-digital',
  },
] as const
