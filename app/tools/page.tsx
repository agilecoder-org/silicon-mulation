"use client";

import { Wrench, Download, ExternalLink, Command, Package } from "lucide-react";

const TOOLS = [
    {
        name: "CrossOver 24",
        developer: "CodeWeavers",
        type: "Translation Layer",
        cost: "Paid (Trial)",
        description: "The most user-friendly way to run Windows games on Mac. Based on Wine, it includes pre-configured bottles for thousands of games.",
        icon: Package,
    },
    {
        name: "Whisky",
        developer: "Isaac Marovitz",
        type: "GPTK Wrapper",
        cost: "Free (Open Source)",
        description: "A modern, clean graphical wrapper for Apple's Game Porting Toolkit. It makes setting up GPTK bottles accessible to everyone.",
        icon: Wrench,
    },
    {
        name: "Heroic Games Launcher",
        developer: "Heroic Team",
        type: "Launcher",
        cost: "Free (Open Source)",
        description: "An open-source alternative to the Epic Games Store and GOG Galaxy. It has built-in support for running Windows games via Wine/Crossover.",
        icon: Command,
    },
    {
        name: "Mythic Game Manager",
        developer: "Mythic Team",
        type: "Launcher",
        cost: "Free",
        description: "A native macOS game launcher designed specifically for managing Windows games running through GPTK and Crossover.",
        icon: Package,
    },
];

export default function ToolsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Essential Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The software ecosystem that powers Mac gaming.
                        From translation layers to library managers.
                    </p>
                </div>

                {/* Compatibility Tool Teaser */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl p-8 mb-20 relative overflow-hidden text-center">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-2">Compatibility Checker</h2>
                        <p className="text-muted-foreground mb-6">
                            Our interactive database tool is currently in beta.
                            Check back soon to instantly verify support for your library.
                        </p>
                        <button disabled className="px-6 py-2 rounded-full border border-primary/30 text-primary/50 text-sm font-medium cursor-not-allowed">
                            Coming Soon
                        </button>
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {TOOLS.map((tool) => (
                        <div
                            key={tool.name}
                            className="bg-card/40 border border-border/40 rounded-2xl p-8 hover:bg-card/60 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-muted/20 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <tool.icon className="w-8 h-8" />
                                </div>
                                <span className={`text-xs px-3 py-1 rounded-full border ${tool.cost.includes("Free") ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" : "text-amber-400 border-amber-500/20 bg-amber-500/10"
                                    }`}>
                                    {tool.cost}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-1">{tool.name}</h3>
                            <p className="text-xs text-primary font-mono mb-4">{tool.type} • by {tool.developer}</p>

                            <p className="text-muted-foreground leading-relaxed mb-8 min-h-[80px]">
                                {tool.description}
                            </p>

                            <div className="flex gap-4">
                                <button className="cta-secondary h-10 px-6 text-sm flex-1">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                </button>
                                <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
