import { MessageSquare, Github, Twitter, Youtube, Hash, Clock, User } from "lucide-react";
import CreateTopicForm from "@/components/community/CreateTopicForm";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export const revalidate = 60; // Revalidate every minute

async function getTopics() {
    return await client.fetch(`
    *[_type == "topic"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      authorName,
      publishedAt,
      "commentCount": count(*[_type == "comment" && references(^._id)])
    }
  `);
}

export default async function CommunityPage() {
    const topics = await getTopics();

    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="section-container">

                <div className="mb-12 space-y-4">
                    <h1 className="heading-section">
                        Community <span className="text-primary">Hub</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        Silicon M-ulation is more than a website. It's a collective effort to document
                        and improve the state of Mac gaming.
                    </p>
                </div>

                {/* Compact Social Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <a href="#" className="group p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                        <MessageSquare className="w-5 h-5 text-indigo-500" />
                        <span className="font-semibold text-foreground text-sm">Discord</span>
                    </a>
                    <a href="#" className="group p-4 rounded-xl border border-border/40 bg-card/50 hover:bg-card/80 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                        <Github className="w-5 h-5 text-foreground" />
                        <span className="font-semibold text-foreground text-sm">GitHub</span>
                    </a>
                    <a href="#" className="group p-4 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                        <Youtube className="w-5 h-5 text-red-500" />
                        <span className="font-semibold text-foreground text-sm">YouTube</span>
                    </a>
                    <a href="#" className="group p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                        <Twitter className="w-5 h-5 text-sky-500" />
                        <span className="font-semibold text-foreground text-sm">Twitter</span>
                    </a>
                </div>

                {/* Forum Section */}
                <div className="border-t border-border/50 pt-12">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                    Recent Discussions
                                </h2>
                                <p className="text-muted-foreground text-sm">Join the conversation with other enthusiasts.</p>
                            </div>
                        </div>

                        <CreateTopicForm />
                    </div>

                    <div className="space-y-3 mt-8">
                        {topics.length === 0 ? (
                            <div className="text-center py-20 border border-dashed border-border rounded-xl bg-card/30">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <p className="text-muted-foreground font-medium">No topics yet</p>
                                <p className="text-xs text-muted-foreground/60 mt-1">Be the first to start a discussion!</p>
                            </div>
                        ) : (
                            topics.map((topic: any) => (
                                <Link
                                    key={topic._id}
                                    href={`/community/topic/${topic.slug.current}`}
                                    className="block group relative overflow-hidden bg-card/40 hover:bg-card/60 border border-border/50 hover:border-primary/30 rounded-lg p-5 transition-all hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-all duration-300" />

                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium group-hover:text-primary transition-colors mb-2 line-clamp-1">
                                                {topic.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground/80">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                                                        {topic.authorName?.[0]?.toUpperCase() || 'A'}
                                                    </div>
                                                    <span className="font-medium text-foreground/80">{topic.authorName}</span>
                                                </div>
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {new Date(topic.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-2">
                                            <div className="flex items-center gap-1.5 text-xs font-medium bg-muted/50 px-2.5 py-1 rounded-md text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                <MessageSquare className="w-3.5 h-3.5" />
                                                {topic.commentCount}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
