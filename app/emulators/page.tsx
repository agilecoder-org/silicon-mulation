"use client";

import Image from "next/image";
import { Download, ExternalLink, Terminal, AlertTriangle, CheckCircle, Cpu } from "lucide-react";

// Reuse assets
import mesenLogo from "@/assets/emulators/mesen.png";
import pcsx2Logo from "@/assets/emulators/pcsx2.png";
import ppssppLogo from "@/assets/emulators/ppsspp.png";
import retroArchLogo from "@/assets/emulators/retro-arch.png";
import rpcs3Logo from "@/assets/emulators/rpcs3.png";
import shadps4Logo from "@/assets/emulators/shadps4.png";

const EMULATORS = [
    {
        name: "RPCS3",
        platform: "PlayStation 3",
        image: rpcs3Logo,
        status: "Demanding",
        version: "v0.0.32-15600",
        lastUpdated: "2 days ago",
        description: "The world's first open-source PlayStation 3 emulator. Performance on Apple Silicon varies heavily by title, but M3/M4 chips can handle many exclusives at playable framerates.",
        bestFor: ["Demon's Souls", "Persona 5", "God of War Collection"],
        pros: ["High compatibility", "Resolution scaling", "Active development"],
        cons: ["Heavy CPU usage", "Shader compilation stutters"],
    },
    {
        name: "PCSX2",
        platform: "PlayStation 2",
        image: pcsx2Logo,
        status: "Stable",
        version: "v1.7.5000 (Nightly)",
        lastUpdated: "Daily",
        description: "A mature PS2 emulator that runs flawlessly on almost all Apple Silicon chips. Supports 4K upscaling, texture replacement, and widescreen patches.",
        bestFor: ["MGS 3", "Gran Turismo 4", "Final Fantasy X"],
        pros: ["runs on M1 Air", "Great upscale quality", "RetroAchievements"],
        cons: ["Some graphical glitches in Software mode"],
    },
    {
        name: "shadPS4",
        platform: "PlayStation 4",
        image: shadps4Logo,
        status: "Experimental",
        version: "v0.0.1 (Alpha)",
        lastUpdated: "Active",
        description: "An emerging PS4 emulator. It is currently in very early stages but shows promise for 2D games and lighter 3D titles like Bloodborne (menu only).",
        bestFor: ["Indie titles", "Homebrew"],
        pros: ["First viable PS4 emulator", "Rapid progress"],
        cons: ["Very low compatibility", "Crashes frequently"],
    },
    {
        name: "PPSSPP",
        platform: "PSP",
        image: ppssppLogo,
        status: "Excellent",
        version: "v1.16",
        lastUpdated: "1 month ago",
        description: "The gold standard for portable emulation. It runs native on ARM (Apple Silicon) and can push resolutions to 8K+ without breaking a sweat.",
        bestFor: ["God of War: CoO", "Crisis Core", "Tekken 6"],
        pros: ["Extremely efficient", "Great UI", "Multiplayer support"],
        cons: ["None really"],
    },
    {
        name: "RetroArch",
        platform: "Multi-System",
        image: retroArchLogo,
        status: "Flexible",
        version: "v1.17.0",
        lastUpdated: "Stable",
        description: "A frontend for emulators, game engines and media players. The 'Metal' video driver provides low-latency performance for classic consoles.",
        bestFor: ["NES/SNES", "Genesis", "PS1 (Beetle HW)"],
        pros: ["All-in-one", "Shaders (CRT filters)", "Cloud saves"],
        cons: ["Steep learning curve", "UI can be confusing"],
    },
    {
        name: "Mesen",
        platform: "NES / SNES / GB",
        image: mesenLogo,
        status: "Perfect",
        version: "2.0",
        lastUpdated: "Stable",
        description: "High-accuracy emulator for Nintendo systems. It focuses on perfect reproduction of hardware quirks rather than just speed.",
        bestFor: ["Kaizo Mario", "Metroid", "Zelda layouts"],
        pros: ["Cycle accurate", "Debug tools", "HD Packs"],
        cons: ["Heavier than lightweight cores"],
    },
];

export default function EmulatorsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center md:text-left mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Emulator Reference</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A curated compatibility tracker for Apple Silicon.
                        We monitor nightly builds to tell you what's actually usable today.
                    </p>
                </div>

                {/* List */}
                <div className="space-y-8">
                    {EMULATORS.map((emu) => (
                        <div
                            key={emu.name}
                            className="bg-card/40 border border-border/40 rounded-3xl p-8 transition-all hover:bg-card/60 hover:border-primary/20"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Icon Column */}
                                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                                    <div className="w-24 h-24 relative bg-background rounded-2xl p-4 border border-border/50">
                                        <Image
                                            src={emu.image}
                                            alt={emu.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${emu.status === "Experimental" ? "bg-red-500/10 text-red-400 border-red-500/20" :
                                            emu.status === "Demanding" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                                                "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                        }`}>
                                        {emu.status}
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1 space-y-6">
                                    <div>
                                        <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                            <h2 className="text-3xl font-bold">{emu.name}</h2>
                                            <span className="text-muted-foreground font-medium">{emu.platform}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mb-4">
                                            <span>{emu.version}</span>
                                            <span>•</span>
                                            <span>Updated {emu.lastUpdated}</span>
                                        </div>
                                        <p className="text-lg text-foreground/80 leading-relaxed">
                                            {emu.description}
                                        </p>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid md:grid-cols-2 gap-6 bg-background/30 rounded-xl p-5 border border-white/5">
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-3">Pros</span>
                                            <ul className="space-y-2">
                                                {emu.pros.map(pro => (
                                                    <li key={pro} className="flex items-start gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                                                        <span>{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-3">Best Tested On</span>
                                            <ul className="space-y-2">
                                                {emu.bestFor.map(game => (
                                                    <li key={game} className="flex items-start gap-2 text-sm">
                                                        <Cpu className="w-4 h-4 text-primary mt-0.5" />
                                                        <span>{game}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="flex flex-wrap items-center gap-4 pt-2">
                                        <button className="cta-secondary h-10 px-6 text-sm">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download
                                        </button>
                                        <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-4">
                                            <ExternalLink className="w-4 h-4" />
                                            Official Site
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
