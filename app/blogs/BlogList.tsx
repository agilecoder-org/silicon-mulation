"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { User, ArrowRight, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

// Re-using the Sanity Post type or creating a shared one
// For now, defining props interface
interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    author: string;
    category: string;
    publishedAt: string;
    readTime: string;
    mainImage?: any;
}

const CATEGORIES = ["All", "Deep Dive", "Tutorial", "News", "Community"];

export default function BlogList({ posts }: { posts: Post[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter Logic
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory, posts]);

    return (
        <div className="section-container">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                    <h1 className="heading-section mb-6">
                        Insights & <span className="text-primary"> Updates</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Deep dives into emulation technology, tutorials for optimization, and the latest news from the Silicon ecosystem.
                    </p>
                </div>

                {/* Search Bar (Desktop) */}
                <div className="hidden md:block w-full max-w-sm">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search articles..."
                            className="pl-10 h-12 bg-card/50 border-border/50 focus:bg-card transition-all rounded-xl"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Controls Section */}
            <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl py-4 mb-10 -mx-6 px-6 md:mx-0 md:px-0 border-b border-border/40 md:border-none md:bg-transparent md:static">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                    {/* Category Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar mask-gradient-right">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                                    activeCategory === cat
                                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                                        : "bg-card/50 border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar (Mobile) */}
                    <div className="md:hidden w-full relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search articles..."
                            className="pl-10 bg-card/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredPosts.map((post) => (
                        <Link href={`/blogs/${post.slug.current}`} key={post._id} className="block h-full">
                            <article
                                className="group flex flex-col h-full bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                            >
                                {/* Image Area */}
                                <div className={cn("aspect-video w-full relative overflow-hidden bg-muted")}>
                                    {post.mainImage ? (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${urlFor(post.mainImage).width(800).url()})` }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                                            <Sparkles className="w-12 h-12 text-primary/20" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none shadow-sm">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                        <span className="w-1 h-1 rounded-full bg-border" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <User className="w-3 h-3" />
                                            </div>
                                            {post.author}
                                        </div>
                                        <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Read <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 bg-muted/30 rounded-full flex items-center justify-center mb-6">
                        <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No results found</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                        We couldn't find any articles matching "{searchQuery}".
                    </p>
                    <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                    >
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
}
