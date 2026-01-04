import { RichTextComponents } from "@/components/blog/RichTextComponents";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Revalidate every hour
export const revalidate = 3600;

async function getPost(slug: string) {
    return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      author,
      category,
      publishedAt,
      readTime,
      mainImage,
      body
    }
  `, { slug });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getPost(resolvedParams.slug);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <p className="text-muted-foreground mb-8">
                    The article you are looking for does not exist or has been removed.
                </p>
                <Link href="/blogs">
                    <Button>Return to Blogs</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
                {post.mainImage && (
                    <div
                        className="absolute inset-0 opacity-10 bg-cover bg-center blur-xl"
                        style={{ backgroundImage: `url(${urlFor(post.mainImage).width(1200).url()})` }}
                    />
                )}

                <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
                    <Link href="/blogs" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Link>

                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {post.category}
                        </Badge>
                    </div>

                    <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm md:text-base font-medium">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        {post.readTime && (
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="section-container max-w-4xl mx-auto pb-24">
                <div className="w-full">
                    <PortableText value={post.body} components={RichTextComponents} />
                </div>

                {/* Footer / Share */}
                <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                    <p className="text-muted-foreground italic">
                        Thanks for reading!
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share Article
                    </Button>
                </div>
            </article>
        </div>
    );
}
