"use client";

import { useState } from "react";
import { Cpu, Zap, Thermometer, Monitor } from "lucide-react";

const chips = [
    { name: "M1", variant: "Air" },
    { name: "M2", variant: "Pro" },
    { name: "M3", variant: "Max" },
    { name: "M4", variant: "Pro" },
];

const chipProfiles = [
    {
        chip: "M1",
        tier: "Entry-level emulation",
        summary: "Stable for PS2, GameCube, and lighter workloads.",
        signals: ["Playable", "Occasional dips", "Thermals manageable"],
    },
    {
        chip: "M2",
        tier: "Mid-range emulation",
        summary: "Consistent performance across most supported emulators.",
        signals: ["Smooth", "Good frame pacing", "Cool under load"],
    },
    {
        chip: "M3",
        tier: "High-performance emulation",
        summary: "Handles demanding titles with minimal compromise.",
        signals: ["Very smooth", "High resolutions", "Stable thermals"],
    },
    {
        chip: "M4",
        tier: "Best possible experience",
        summary: "Maximum headroom for modern and experimental emulation.",
        signals: ["Near-native feel", "High scaling", "Excellent stability"],
    },
];

export default function ChipPerformanceSection() {
    const [active, setActive] = useState(0);
    const profile = chipProfiles[active];

    return (
        <section className="relative py-36 overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[180px] rounded-full" />

            <div className="relative z-10 section-container max-w-5xl mx-auto space-y-16 text-center">

                {/* Header */}
                <div className="space-y-4">
                    <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
                        Apple Silicon
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        Performance, realistically
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We don’t rely on synthetic scores.
                        Each chip is evaluated based on real gameplay behaviour and stability.
                    </p>
                </div>

                {/* Chip selector */}
                <div className="flex flex-wrap justify-center gap-3">
                    {chips.map((chip, index) => (
                        <button
                            key={chip.name}
                            onClick={() => setActive(index)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${active === index
                                    ? "bg-foreground text-background"
                                    : "border border-border/50 text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {chip.name} {chip.variant}
                        </button>
                    ))}
                </div>

                {/* Profile */}
                <div className="max-w-3xl mx-auto space-y-8">

                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground">
                            {profile.tier}
                        </p>
                        <p className="text-xl md:text-2xl font-medium">
                            {profile.summary}
                        </p>
                    </div>

                    {/* Signals */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                        <Signal icon={Monitor} label="Frame behaviour" value={profile.signals[0]} />
                        <Signal icon={Zap} label="Consistency" value={profile.signals[1]} />
                        <Signal icon={Thermometer} label="Thermals" value={profile.signals[2]} />
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                    <button className="cta-secondary">
                        Explore Tested Games
                    </button>
                    <button className="cta-secondary">
                        See Emulator Support
                    </button>
                </div>
            </div>
        </section>
    );
}

/* Helper */
function Signal({
    icon: Icon,
    label,
    value,
}: {
    icon: any;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-muted/20">
            <Icon className="w-5 h-5 text-primary mt-1" />
            <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                </p>
                <p className="text-base font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}
