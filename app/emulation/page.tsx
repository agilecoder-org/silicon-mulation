"use client";

import { Gamepad2, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Emulator Logos
import mesenLogo from "@/assets/emulators/mesen.png";
import pcsx2Logo from "@/assets/emulators/pcsx2.png";
import ppssppLogo from "@/assets/emulators/ppsspp.png";
import retroArchLogo from "@/assets/emulators/retro-arch.png";
import rpcs3Logo from "@/assets/emulators/rpcs3.png";
import shadps4Logo from "@/assets/emulators/shadps4.png";

type EmulatorInfo = {
    name: string;
    slug: string;
    image?: StaticImageData | null;
    status: string;
    description: string;
};

type EmulatorCategory = {
    badge: string;
    emulators: EmulatorInfo[];
};

const EMULATOR_CATEGORIES: EmulatorCategory[] = [
    {
        badge: "PS1",
        emulators: [
            { name: "DuckStation", slug: "duckstation", image: null, status: "Perfect", description: "The absolute best PS1 emulator." },
            { name: "Gamma", slug: "gamma", image: null, status: "Stable", description: "A popular choice focusing on ease of use." },
            { name: "OpenEmu", slug: "openemu", image: null, status: "Stable", description: "The premier all-in-one frontend for macOS." },
            { name: "RetroArch", slug: "retroarch", image: retroArchLogo, status: "Flexible", description: "The Swiss Army knife of emulation." }
        ]
    },
    {
        badge: "PS2",
        emulators: [
            { name: "PCSX2", slug: "pcsx2", image: pcsx2Logo, status: "Stable", description: "Mature PS2 emulator that runs flawlessly." },
            { name: "AetherSX2", slug: "aethersx2", image: null, status: "Stable", description: "Highly optimized ARM-native emulator." },
            { name: "Play!", slug: "play", image: null, status: "Experimental", description: "High-level PS2 emulator without needing BIOS." }
        ]
    },
    {
        badge: "PS3",
        emulators: [
            { name: "RPCS3", slug: "rpcs3", image: rpcs3Logo, status: "Demanding", description: "The first open-source PS3 emulator." }
        ]
    },
    {
        badge: "PS4",
        emulators: [
            { name: "shadPS4", slug: "shadps4", image: shadps4Logo, status: "Experimental", description: "Emerging PS4 emulator showing promise." },
            { name: "fpPS4", slug: "fpps4", image: null, status: "Experimental", description: "Early-stage emulator focusing mostly on 2D titles." },
            { name: "Spine", slug: "spine", image: null, status: "Experimental", description: "Closed-source PS4 emulator that plays commercial games." }
        ]
    },
    {
        badge: "PSP / Vita",
        emulators: [
            { name: "PPSSPP", slug: "ppsspp", image: ppssppLogo, status: "Excellent", description: "The absolute gold standard for PSP." },
            { name: "Vita3K", slug: "vita3k", image: null, status: "Stable", description: "First functional PS Vita emulator." }
        ]
    },
    {
        badge: "NES / SNES",
        emulators: [
            { name: "Mesen", slug: "mesen", image: mesenLogo, status: "Perfect", description: "High-accuracy NES/SNES emulator." },
            { name: "Snes9x", slug: "snes9x", image: null, status: "Perfect", description: "Highly compatible SNES emulator." },
            { name: "bsnes", slug: "bsnes", image: null, status: "Excellent", description: "Aiming for near-perfect emulation accuracy." }
        ]
    },
    {
        badge: "N64",
        emulators: [
            { name: "simple64", slug: "simple64", image: null, status: "Stable", description: "Easy-to-use N64 emulator." },
            { name: "RMG", slug: "rmg", image: null, status: "Excellent", description: "Rosalie's Mupen GUI, a modern frontend." }
        ]
    },
    {
        badge: "GC / Wii",
        emulators: [
            { name: "Dolphin", slug: "dolphin", image: null, status: "Excellent", description: "One of the greatest emulators ever made." }
        ]
    },
    {
        badge: "Switch",
        emulators: [
            { name: "Ryujinx", slug: "ryujinx", image: null, status: "Demanding", description: "Accurate Switch emulator in C#." },
            { name: "Suyu", slug: "suyu", image: null, status: "Demanding", description: "Community fork of Yuzu." }
        ]
    },
    {
        badge: "GB / DS / 3DS",
        emulators: [
            { name: "mGBA", slug: "mgba", image: null, status: "Perfect", description: "Fast, accurate GBA emulator." },
            { name: "MelonDS", slug: "melonds", image: null, status: "Excellent", description: "Fast and accurate DS emulation." },
            { name: "Citra", slug: "citra", image: null, status: "Stable", description: "Pioneering 3DS emulator." }
        ]
    },
    {
        badge: "Xbox Family",
        emulators: [
            { name: "Xemu", slug: "xemu", image: null, status: "Stable", description: "Original Xbox emulator." },
            { name: "Xenia", slug: "xenia", image: null, status: "Experimental", description: "Primary Xbox 360 emulator." }
        ]
    },
    {
        badge: "SEGA",
        emulators: [
            { name: "Genesis PGX", slug: "genesis-plus-gx", image: null, status: "Perfect", description: "Accurate emulator for Sega 8/16-bit." },
            { name: "Flycast", slug: "flycast", image: null, status: "Excellent", description: "Multi-platform Dreamcast emulator." }
        ]
    }
];

export default function EmulationPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-24">
            <div className="section-container">
                {/* Header Section */}
                <div className="mb-16 space-y-4 md:text-left">
                    <h1 className="heading-section">
                        Emulator <span className="text-primary">Reference</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed md:mx-0">
                        Curated, tested, and optimized emulators for Apple Silicon architecture across all celebrated decades of gaming.
                    </p>
                </div>

                {/* Table Container */}
                <div className="w-full border border-border/50 bg-card/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-12 gap-6 bg-muted/40 p-6 border-b border-border/50 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <div className="col-span-3 lg:col-span-2">Console</div>
                        <div className="col-span-9 lg:col-span-10">Available Emulators</div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-border/40">
                        {EMULATOR_CATEGORIES.map((category, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 hover:bg-muted/10 transition-colors">
                                
                                {/* Console Badge Cell */}
                                <div className="md:col-span-3 lg:col-span-2 flex items-center md:items-start pt-2">
                                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm tracking-widest border border-primary/20 shadow-inner">
                                        {category.badge}
                                    </span>
                                </div>
                                
                                {/* Emulators Cell */}
                                <div className="md:col-span-9 lg:col-span-10 flex flex-wrap gap-2 md:gap-4">
                                    {category.emulators.map((emu) => (
                                        <Link
                                            href={`/emulators/${emu.slug}`}
                                            key={emu.slug}
                                            title={emu.description}
                                            className="group flex flex-col items-center justify-start w-28 sm:w-32 p-2 pt-3 rounded-2xl hover:bg-background/80 hover:shadow-lg border border-transparent hover:border-border/50 transition-all duration-300 relative"
                                        >
                                            {/* Recommended Star Absolute Positioning */}
                                            {(emu.status === "Perfect" || emu.status === "Excellent") && (
                                                <Star 
                                                    className="absolute top-2 right-2 w-4 h-4 fill-yellow-500 text-yellow-500 shrink-0 filter drop-shadow-[0_0_6px_rgba(234,179,8,0.5)] z-10"
                                                    aria-label="Highly Recommended"
                                                />
                                            )}

                                            {/* Icon */}
                                            <div className="w-20 h-20 bg-card rounded-2xl p-3 shadow border border-border/30 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                {emu.image ? (
                                                    <Image
                                                        src={emu.image}
                                                        alt={emu.name}
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <Gamepad2 className="w-10 h-10 text-muted-foreground/40" />
                                                )}
                                            </div>

                                            {/* Title */}
                                            <span className="text-xs font-semibold text-center text-foreground/80 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                {emu.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}