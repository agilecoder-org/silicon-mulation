import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/write-client';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { topicId, authorName, content } = body;

        if (!topicId || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const doc = {
            _type: 'comment',
            topic: {
                _type: 'reference',
                _ref: topicId,
            },
            authorName: authorName || 'Anonymous',
            content,
            publishedAt: new Date().toISOString(),
        };

        const result = await writeClient.create(doc);
        return NextResponse.json({ message: 'Comment added', id: result._id }, { status: 201 });

    } catch (error) {
        console.error('Error adding comment:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
