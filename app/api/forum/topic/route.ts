import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/write-client';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, authorName, content } = body;

        if (!title || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').slice(0, 96);

        // Append random string to ensure uniqueness if needed, but Sanity handles slug uniqueness via validation usually. 
        // For API creation, we should check or just append a timestamp.
        const finalSlug = `${slug}-${Date.now()}`;

        const doc = {
            _type: 'topic',
            title,
            slug: { current: finalSlug },
            authorName: authorName || 'Anonymous',
            content,
            publishedAt: new Date().toISOString(),
        };

        const result = await writeClient.create(doc);
        return NextResponse.json({ message: 'Topic created', id: result._id, slug: result.slug.current }, { status: 201 });

    } catch (error) {
        console.error('Error creating topic:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
