import { defineField, defineType } from 'sanity'

export const topic = defineType({
    name: 'topic',
    title: 'Forum Topic',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
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
            rows: 4,
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
            title: 'title',
            author: 'authorName',
            date: 'publishedAt',
        },
        prepare({ title, author, date }) {
            return {
                title: title,
                subtitle: `${author} - ${new Date(date).toLocaleDateString()}`,
            }
        },
    },
})
