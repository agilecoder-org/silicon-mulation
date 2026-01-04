"use client";

import { Layers, Zap, Scale, Cpu, BookOpen, AlertTriangle, Download, ExternalLink, CheckCircle, Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Emulator Logos
import mesenLogo from "@/assets/emulators/mesen.png";
import pcsx2Logo from "@/assets/emulators/pcsx2.png";
import ppssppLogo from "@/assets/emulators/ppsspp.png";
import retroArchLogo from "@/assets/emulators/retro-arch.png";
import rpcs3Logo from "@/assets/emulators/rpcs3.png";
import shadps4Logo from "@/assets/emulators/shadps4.png";

const EMULATORS = [
    {
        name: "RPCS3",
        slug: "rpcs3",
        platform: "PlayStation 3",
        image: rpcs3Logo,
        status: "Demanding",
        version: "v0.0.32-15600",
        lastUpdated: "2 days ago",
        description: "The first open-source PS3 emulator. Performance varies by title, but M3/M4 chips can handle many exclusives.",
        bestFor: ["Demon's Souls", "Persona 5"],
        pros: ["High compatibility", "Resolution scaling"],
        cons: ["Heavy CPU usage"],
    },
    {
        name: "PCSX2",
        slug: "pcsx2",
        platform: "PlayStation 2",
        image: pcsx2Logo,
        status: "Stable",
        version: "v1.7.5000 (Nightly)",
        lastUpdated: "Daily",
        description: "A mature PS2 emulator that runs flawlessly on almost all Apple Silicon chips. Supports 4K upscaling.",
        bestFor: ["MGS 3", "Gran Turismo 4"],
        pros: ["Runs on M1 Air", "Great upscale quality"],
        cons: ["Software mode glitches"],
    },
    {
        name: "shadPS4",
        slug: "shadps4",
        platform: "PlayStation 4",
        image: shadps4Logo,
        status: "Experimental",
        version: "v0.0.1 (Alpha)",
        lastUpdated: "Active",
        description: "Emerging PS4 emulator. Very early stages but promising for 2D games and some 3D titles.",
        bestFor: ["Indie titles", "Homebrew"],
        pros: ["First viable PS4 emu", "Rapid progress"],
        cons: ["Low compatibility"],
    },
    {
        name: "PPSSPP",
        slug: "ppsspp",
        platform: "PSP",
        image: ppssppLogo,
        status: "Excellent",
        version: "v1.16",
        lastUpdated: "1 month ago",
        description: "The gold standard for portable emulation. Runs native on ARM at 8K+ without issues.",
        bestFor: ["God of War", "Crisis Core"],
        pros: ["Extremely efficient", "Great UI"],
        cons: ["None really"],
    },
    {
        name: "RetroArch",
        slug: "retroarch",
        platform: "Multi-System",
        image: retroArchLogo,
        status: "Flexible",
        version: "v1.17.0",
        lastUpdated: "Stable",
        description: "All-in-one frontend. Uses 'Metal' video driver for low-latency performance on classic consoles.",
        bestFor: ["NES/SNES", "Genesis", "PS1"],
        pros: ["All-in-one", "Shaders (CRT)"],
        cons: ["Steep learning curve"],
    },
    {
        name: "Mesen",
        slug: "mesen",
        platform: "NES / SNES / GB",
        image: mesenLogo,
        status: "Perfect",
        version: "2.0",
        lastUpdated: "Stable",
        description: "High-accuracy emulator focusing on perfect reproduction of hardware quirks rather than speed.",
        bestFor: ["Kaizo Mario", "Metroid"],
        pros: ["Cycle accurate", "Debug tools"],
        cons: ["Heavier than others"],
    },
];

const getStatusStyles = (status: string) => {
    switch (status) {
        case "Experimental":
            return "bg-red-500/10 text-red-500 border-red-500/20";
        case "Demanding":
            return "bg-orange-500/10 text-orange-500 border-orange-500/20";
        case "Excellent":
        case "Perfect":
            return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
        default:
            return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
};

export default function EmulationPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-24">
            <div className="section-container">

                {/* Hero */}
                <div className="mb-24 space-y-4">
                    <h1 className="heading-section">
                        Core <span className="text-primary">Concepts</span>
                    </h1>

                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        Understanding how your Mac translates foreign code is the first step to optimization.
                    </p>
                </div>

                {/* Concepts Grid - Simplified Layout */}
                <div className="grid md:grid-cols-2 gap-6 mb-32">
                    {/* 1. Emulation vs Virt */}
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/20 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                            <Layers className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Emulation vs. Virtualization</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            <strong>Emulation</strong> mimics hardware in software (slow, flexible).
                            <strong> Virtualization</strong> shares the real CPU with a guest OS (fast, limited).
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 rounded-xl bg-muted/30">
                                <span className="block font-bold text-foreground mb-1">Emulator</span>
                                <span className="text-muted-foreground">RPCS3, Dolphin</span>
                            </div>
                            <div className="p-3 rounded-xl bg-muted/30">
                                <span className="block font-bold text-foreground mb-1">Virtualizer</span>
                                <span className="text-muted-foreground">Parallels, VMware</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Architecture */}
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/20 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                            <Cpu className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">The Rosetta Translation</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Most games are x86 (Intel). Your Mac is ARM. <strong>Rosetta 2</strong> translates between them.
                            Native emulators avoid this penalty.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-xs font-medium">
                                <span className="w-16">Native</span>
                                <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-emerald-500 rounded-full" />
                                </div>
                                <span className="text-emerald-500">100%</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-medium">
                                <span className="w-16">Rosetta</span>
                                <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-blue-500 rounded-full" />
                                </div>
                                <span className="text-blue-500">~75%</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Graphics */}
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/20 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Metal vs. Vulkan</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Apple uses its own graphics API, <strong>Metal</strong>. Most emulators use <strong>Vulkan</strong>.
                            Translation layers like MoltenVK bridge this gap, but can cause "shader compilation stutter" when you first enter a new area in a game.
                        </p>
                    </div>

                    {/* 4. Ethics */}
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/20 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                            <Scale className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Legal & Safe</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            <strong>Emulators are legal.</strong> Piracy is not.
                            We only support dumping your own BIOS and Game Discs. We do not link to ROM sites.
                            Preserving your library is a right; downloading others' is a risk.
                        </p>
                    </div>
                </div>


                {/* Software Section */}
                <div className="border-t border-border/40 pt-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Emulator Reference</h2>
                            <p className="text-muted-foreground max-w-xl">
                                Curated, tested, and verified for Apple Silicon.
                            </p>
                        </div>
                    </div>

                    {/* Emulators Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {EMULATORS.map((emu) => (
                            <Link
                                href={`/emulators/${emu.slug}`}
                                key={emu.slug}
                                className="group relative bg-card border border-border/50 rounded-3xl p-6 hover:border-primary/30 hover:bg-muted/5 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 bg-background rounded-2xl p-3 border border-border/30 shadow-sm group-hover:scale-105 transition-transform">
                                        <Image
                                            src={emu.image}
                                            alt={emu.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className={`px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border ${getStatusStyles(emu.status)}`}>
                                        {emu.status}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                                        {emu.name}
                                        <ArrowRight className="w-4 h-4 -ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                    </h3>
                                    <p className="text-xs font-mono text-muted-foreground">{emu.platform}</p>
                                </div>

                                <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                                    {emu.description}
                                </p>

                                {/* Footer Stats */}
                                <div className="pt-4 border-t border-border/30 grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-[10px] uppercase text-muted-foreground font-semibold block mb-1">Best For</span>
                                        <span className="text-xs text-foreground truncate block">{emu.bestFor[0]}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] uppercase text-muted-foreground font-semibold block mb-1">Updated</span>
                                        <span className="text-xs text-foreground">{emu.lastUpdated}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}