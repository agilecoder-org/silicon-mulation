import { client } from "@/sanity/lib/client";
import { BackButton } from "@/components/ui/back-button";
import { Clock, User } from "lucide-react";
import CommentSection from "@/components/community/CommentSection";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ slug: string }>;
};

async function getData(slug: string) {
    return await client.fetch(`
    {
      "topic": *[_type == "topic" && slug.current == $slug][0] {
        _id,
        title,
        authorName,
        content,
        publishedAt,
        "comments": *[_type == "comment" && references(^._id)] | order(publishedAt asc) {
          _id,
          authorName,
          content,
          publishedAt
        }
      },
      "recentTopics": *[_type == "topic" && slug.current != $slug] | order(publishedAt desc)[0...5] {
        _id,
        title,
        slug,
        publishedAt
      }
    }
  `, { slug });
}

export default async function TopicPage({ params }: Props) {
    const { slug } = await params;
    const { topic, recentTopics } = await getData(slug);

    if (!topic) {
        return (
            <div className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
                    <BackButton href="/community" label="Back to Forum" />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="section-container max-w-7xl mx-auto p-4">

                <div className="mb-8">
                    <BackButton href="/community" label="Back to Forum" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content (3 cols) */}
                    <div className="lg:col-span-3">
                        {/* Topic Header */}
                        <div className="bg-card border border-border rounded-xl p-8 mb-8 shadow-sm">
                            <div className="flex justify-between items-start gap-4 mb-6">
                                <h1 className="text-3xl md:text-4xl font-bold gradient-text-cyan flex-1">{topic.title}</h1>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                        {topic.authorName?.[0]?.toUpperCase() || 'A'}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground flex items-center gap-2">
                                            {topic.authorName}
                                            <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">OP</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <Clock className="w-3 h-3" />
                                            <span>{new Date(topic.publishedAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-lg">
                                <p className="whitespace-pre-wrap text-muted-foreground">{topic.content}</p>
                            </div>
                        </div>

                        {/* Comments Section with Optimistic UI */}
                        <CommentSection
                            initialComments={topic.comments}
                            topicId={topic._id}
                            topicAuthorName={topic.authorName}
                        />
                    </div>

                    {/* Sidebar (1 col) */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card/50 border border-border/50 rounded-xl p-6 sticky top-24">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Recent Discussions
                            </h3>

                            <div className="space-y-4">
                                {recentTopics?.length > 0 ? (
                                    recentTopics.map((recent: any) => (
                                        <Link
                                            key={recent._id}
                                            href={`/community/topic/${recent.slug.current}`}
                                            className="block group p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                                {recent.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                <span>{new Date(recent.publishedAt).toLocaleDateString()}</span>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground">No other topics yet.</p>
                                )}
                            </div>

                            <div className="mt-6 pt-6 border-t border-border/50">
                                <Link
                                    href="/community"
                                    className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
                                >
                                    View all discussions
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
