import { client } from "@/sanity/lib/client";
import BlogList from "./BlogList";

// Revalidate every 60 seconds (1 minute)
export const revalidate = 60;

async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      category,
      publishedAt,
      readTime,
      mainImage
    }
  `);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <BlogList posts={posts} />
    </div>
  );
}
