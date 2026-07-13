import { defineField, defineType, defineArrayMember } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export default defineType({
  name: 'portfolioGallery',
  title: 'Portfolio Gallery',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
    }),
    defineField({
      name: 'artworks',
      title: 'Artworks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'artwork',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'medium',
              title: 'Medium',
              type: 'string',
              description: 'e.g. "Oil on canvas"',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'medium',
              media: 'image',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'artistName',
      subtitle: 'artworks',
    },
    prepare({ title, subtitle }) {
      const count = Array.isArray(subtitle) ? subtitle.length : 0
      return {
        title: title || 'Portfolio Gallery',
        subtitle: `${count} artwork${count === 1 ? '' : 's'}`,
      }
    },
  },
})
