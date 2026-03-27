export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface CaseStudy {
  _id: string
  _type: 'caseStudy'
  title: string
  slug: { current: string }
  client: string
  description: string
  services: string[]
  coverImage?: SanityImage
  beforeImage?: SanityImage
  afterImage?: SanityImage
  body?: any[]
  publishedAt: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: { current: string }
  description: string
  coverImage?: SanityImage
  body?: any[]
  tags?: string[]
  publishedAt: string
}
