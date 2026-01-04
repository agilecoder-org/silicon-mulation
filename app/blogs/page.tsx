"use client";

import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Deep Dives</h1>
                    <p className="text-muted-foreground text-lg">
                        Technical breakdowns, tutorials, and state-of-the-union reports.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Placeholder Articles */}
                    {[1, 2, 3].map((i) => (
                        <article key={i} className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-border/40 bg-card/30 hover:bg-card/50 transition-colors">
                            <div className="md:w-1/3 aspect-video bg-muted/20 rounded-xl relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
                                    IMG
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>Oct 12, 2025</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            <span>Admin</span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        Understanding GPTK 3.0 Performance Scaling
                                    </h2>
                                    <p className="text-muted-foreground line-clamp-2">
                                        We analyze how the latest Game Porting Toolkit handles AVX2 instructions on M4 chips compared to the previous generation.
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center text-primary font-medium text-sm">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
