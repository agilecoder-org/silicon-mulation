"use client";

import { MessageSquare, Github, Twitter, Youtube } from "lucide-react";

export default function CommunityPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6 flex items-center justify-center">
            <div className="max-w-4xl w-full">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Lab</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Silicon M-ulation is more than a website. It's a collective effort to document
                        and improve the state of Mac gaming.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <a href="#" className="group p-8 rounded-3xl border border-border/40 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-all border-[#5865F2]/20 hover:border-[#5865F2]/50">
                        <MessageSquare className="w-10 h-10 text-[#5865F2] mb-4" />
                        <h2 className="text-2xl font-bold mb-2 text-foreground">Discord Server</h2>
                        <p className="text-muted-foreground">
                            Real-time support, game testing channels, and developer chats.
                            The heartbeat of our community.
                        </p>
                    </a>

                    <a href="#" className="group p-8 rounded-3xl border border-border/40 bg-card/30 hover:bg-card/50 transition-all hover:border-foreground/20">
                        <Github className="w-10 h-10 text-foreground mb-4" />
                        <h2 className="text-2xl font-bold mb-2 text-foreground">GitHub</h2>
                        <p className="text-muted-foreground">
                            Report bugs, suggest features, or contribute code to our open-source tools
                            and web platform.
                        </p>
                    </a>

                    <a href="#" className="group p-8 rounded-3xl border border-border/40 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 transition-all border-[#FF0000]/20 hover:border-[#FF0000]/50">
                        <Youtube className="w-10 h-10 text-[#FF0000] mb-4" />
                        <h2 className="text-2xl font-bold mb-2 text-foreground">YouTube</h2>
                        <p className="text-muted-foreground">
                            Deep dive benchmarks, setup guides, and news roundups in high-quality
                            4K HDR.
                        </p>
                    </a>

                    <a href="#" className="group p-8 rounded-3xl border border-border/40 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 transition-all border-[#1DA1F2]/20 hover:border-[#1DA1F2]/50">
                        <Twitter className="w-10 h-10 text-[#1DA1F2] mb-4" />
                        <h2 className="text-2xl font-bold mb-2 text-foreground">Twitter / X</h2>
                        <p className="text-muted-foreground">
                            Quick updates, hot takes, and community highlights. Follow us for the
                            latest breaking news.
                        </p>
                    </a>
                </div>

            </div>
        </div>
    );
}
