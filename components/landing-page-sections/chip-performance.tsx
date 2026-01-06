"use client";

import { useState } from "react";
import { Cpu, Zap, Thermometer, Monitor } from "lucide-react";
import Link from "next/link";

const chips = [
    { name: "M1 Family" },
    { name: "M2 Family" },
    { name: "M3 Family" },
    { name: "M4 Family" },
];

const chipProfiles = [
    {
        chip: "M1",
        tier: "The Foundation",
        summary: "Still incredibly capable. Perfect for retro emulation up to PS2/GameCube/Switch.",
        signals: ["Solid 1080p gaming", "Efficient thermal profile", "Great entry point"],
    },
    {
        chip: "M2",
        tier: "The Refinement",
        summary: "Better GPU scaling allows for higher resolutions and more stable Switch emulation.",
        signals: ["Improved shader cache", "Higher sustained clocks", "Reliable 1440p potential"],
    },
    {
        chip: "M3",
        tier: "The Powerhouse",
        summary: "Hardware ray-tracing support opens new doors. Crushes modern titles.",
        signals: ["Mesh shading support", "Excellent FPS stability", "AAA gaming ready"],
    },
    {
        chip: "M4",
        tier: "The Future",
        summary: "Unmatched single-core speed. The definitive way to experience translation layers.",
        signals: ["Maximum compatibility", "Future-proof performance", "Desktop-class gaming"],
    },
];

export default function ChipPerformanceSection() {
    const [active, setActive] = useState(0);
    const profile = chipProfiles[active];

    return (
        <section className="relative py-24 md:py-36 overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/10 blur-[120px] md:blur-[180px] rounded-full" />

            <div className="relative z-10 section-container max-w-5xl mx-auto space-y-12 md:space-y-16 text-center px-4">

                {/* Header */}
                <div className="space-y-4">
                    <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
                        Apple Silicon
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        Performance, realistically
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                        We don’t rely on synthetic scores.
                        Each chip family is evaluated based on real gameplay behaviour and stability.
                    </p>
                </div>

                {/* Chip selector */}
                <div className="flex flex-wrap justify-center gap-3">
                    {chips.map((chip, index) => (
                        <button
                            key={chip.name}
                            onClick={() => setActive(index)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${active === index
                                ? "bg-foreground text-background"
                                : "border border-border/50 text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {chip.name}
                        </button>
                    ))}
                </div>

                {/* Profile */}
                <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500 key={active}">

                    <div className="space-y-2">
                        <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                            {profile.tier}
                        </p>
                        <p className="text-xl md:text-2xl font-medium px-4">
                            {profile.summary}
                        </p>
                    </div>

                    {/* Signals */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-left">
                        <Signal icon={Monitor} label="Frame behaviour" value={profile.signals[0]} />
                        <Signal icon={Zap} label="Consistency" value={profile.signals[1]} />
                        <Signal icon={Thermometer} label="Thermals" value={profile.signals[2]} />
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                    <Link href="/games" className="cta-secondary">
                        Explore Tested Games
                    </Link>
                    <Link href="/emulation" className="cta-secondary">
                        See Emulator Support
                    </Link>
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
