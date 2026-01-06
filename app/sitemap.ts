import { MetadataRoute } from 'next';
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://silicon-mulation.vercel.app';

    // 1. Get all blog posts
    const posts = await client.fetch(`
    *[_type == "post"] {
      slug,
      publishedAt
    }
  `);

    const blogUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blogs/${post.slug.current}`,
        lastModified: new Date(post.publishedAt || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 2. Define static routes
    const staticRoutes = [
        '',
        '/blogs',
        '/community',
        '/emulation',
        '/tools/controller',
        '/benchmarks',
        // Emulators
        '/emulators/pcsx2',
        '/emulators/rpcs3',
        '/emulators/mesen',
        '/emulators/ppsspp',
        '/emulators/retroarch',
        '/emulators/shadps4',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    return [...staticRoutes, ...blogUrls];
}
