import { client } from '@/sanity/client'
import type { CaseStudy, BlogPost } from './types'

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      client,
      description,
      services,
      coverImage,
      publishedAt
    }`
  )
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      client,
      description,
      services,
      coverImage,
      beforeImage,
      afterImage,
      body,
      publishedAt
    }`,
    { slug }
  )
}

export async function getFeaturedCaseStudy(): Promise<CaseStudy | null> {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc)[0] {
      _id,
      _type,
      title,
      slug,
      client,
      description,
      beforeImage,
      afterImage,
      publishedAt
    }`
  )
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      description,
      coverImage,
      tags,
      publishedAt
    }`
  )
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      description,
      coverImage,
      body,
      tags,
      publishedAt
    }`,
    { slug }
  )
}
