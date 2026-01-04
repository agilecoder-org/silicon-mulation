"use client";

import { BarChart, Activity, Thermometer, Laptop } from "lucide-react";

const CHIP_SCORES = [
    { name: "M1 Air", score: 100, color: "bg-muted" },
    { name: "M2 Air", score: 118, color: "bg-muted-foreground" },
    { name: "M1 Pro", score: 145, color: "bg-blue-500/50" },
    { name: "M2 Pro", score: 165, color: "bg-blue-500" },
    { name: "M3 Pro", score: 185, color: "bg-primary" },
    { name: "M3 Max", score: 240, color: "bg-primary" },
    { name: "M4 Pro", score: 280, color: "bg-accent" },
];

export default function BenchmarksPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Performance Index</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Understanding how relative performance scales across Apple Silicon generations when running translation layers like Rosetta 2 and GPTK.
                    </p>
                </div>

                {/* Main Chart */}
                <div className="bg-card/30 border border-border/40 rounded-3xl p-8 md:p-12 mb-16">
                    <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <BarChart className="w-5 h-5 text-primary" />
                        Relative Emulation Performance
                    </h2>

                    <div className="space-y-6">
                        {CHIP_SCORES.map((chip) => (
                            <div key={chip.name} className="relative">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <span>{chip.name}</span>
                                    <span className="font-mono text-muted-foreground">{chip.score}%</span>
                                </div>
                                <div className="h-4 bg-muted/20 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${chip.color} transition-all duration-1000`}
                                        style={{ width: `${(chip.score / 280) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 text-right">
                        * Based on aggregate frame-rates in RPCS3 & Ryujinx (1080p target)
                    </p>
                </div>

                {/* Methodology Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Activity className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Real Gameplay</h3>
                        <p className="text-sm text-muted-foreground">
                            We don't just run title screens. We test dense areas, shader compilation events, and extended play sessions.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Thermometer className="w-8 h-8 text-accent mb-4" />
                        <h3 className="font-bold text-lg mb-2">Thermal Soak</h3>
                        <p className="text-sm text-muted-foreground">
                            Tests are run after 15 minutes of load to ensure the scores reflect sustained performance, not just burst speed.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-muted/10 border border-border/40">
                        <Laptop className="w-8 h-8 text-secondary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Native Resolution</h3>
                        <p className="text-sm text-muted-foreground">
                            All tests target a minimum of 1080p internal resolution, scaling up to 4K where hardware allows.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
