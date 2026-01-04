import { defineField, defineType } from 'sanity'

export const comment = defineType({
    name: 'comment',
    title: 'Forum Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
            initialValue: 'Anonymous',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'topic',
            title: 'Topic',
            type: 'reference',
            to: { type: 'topic' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'content',
            subtitle: 'authorName',
        },
    },
})
