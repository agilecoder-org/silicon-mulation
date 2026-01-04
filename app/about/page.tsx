"use client";

import { Target, Heart, Shield, Database } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="section-container max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="heading-section mb-6">Built for the <br /><span className="text-primary">Silicon Era.</span></h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        The definitive resource for gaming and emulation on Apple Silicon.
                        No clickbait. No rumors. Just tested data.
                    </p>
                </div>

                {/* Mission Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-20">
                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Database className="w-6 h-6 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Data First</h3>
                        <p className="text-muted-foreground text-sm">
                            We don't care if a game "launches". We care if it runs at 60FPS. All our reports include device specs, FPS averages, and thermal notes.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Shield className="w-6 h-6 text-emerald-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Verified Only</h3>
                        <p className="text-muted-foreground text-sm">
                            Every entry in our database is verified by a human moderator. We filter out conflicting reports to provide a single source of truth.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Heart className="w-6 h-6 text-red-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Community Driven</h3>
                        <p className="text-muted-foreground text-sm">
                            Apple Silicon is evolving fast. Our database relies on passionate users submitting their test results from new M3 and M4 chips.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Target className="w-6 h-6 text-secondary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Preservation</h3>
                        <p className="text-muted-foreground text-sm">
                            We believe emulation is key to preserving gaming history. We support development of open-source emulators on macOS.
                        </p>
                    </div>
                </div>

                {/* Story / Text Content */}
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
                    <p>
                        When the M1 chip launched in 2020, it changed everything. Suddenly, thin-and-light MacBooks had the power to rival dedicated gaming consoles.
                        But the software landscape was—and still is—confusing.
                    </p>
                    <p>
                        Information is scattered across Discords, Reddit threads, and Wiki tables.
                        <strong>Silicon M-ulation</strong> was built to centralize this knowledge. We want to answer one simple question: <em>"Can I play this on my Mac?"</em>
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-12">Join Us</h2>
                    <p>
                        This project is open source and community maintained. If you are a developer, designer, or just a passionate tester, come help us build the ultimate compatibility database.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-border/30 text-center">
                    <button className="cta-primary">
                        Contribute on GitHub
                    </button>
                </div>

            </div>
        </div>
    );
}
