"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Emulator Imports
import mesenLogo from "@/assets/emulators/mesen.png";
import pcsx2Logo from "@/assets/emulators/pcsx2.png";
import ppssppLogo from "@/assets/emulators/ppsspp.png";
import retroArchLogo from "@/assets/emulators/retro-arch.png";
import rpcs3Logo from "@/assets/emulators/rpcs3.png";
import shadps4Logo from "@/assets/emulators/shadps4.png";

// Console Imports
import gbaConsole from "@/assets/consoles/gba.png";
import nesConsole from "@/assets/consoles/nes.png";
import ps1Console from "@/assets/consoles/ps1.png";
import ps2Console from "@/assets/consoles/ps2-slim.png";
import ps3Console from "@/assets/consoles/ps3-slim.png";

const emulators = [
    {
        name: "RPCS3",
        slug: "rpcs3",
        platform: "PlayStation 3",
        image: rpcs3Logo,
        status: "Demanding",
        note: "CPU-heavy, varies per title",
    },
    {
        name: "PCSX2",
        slug: "pcsx2",
        platform: "PlayStation 2",
        image: pcsx2Logo,
        status: "Stable",
        note: "Well-optimized on Apple Silicon",
    },
    {
        name: "shadPS4",
        slug: "shadps4",
        platform: "PlayStation 4",
        image: shadps4Logo,
        status: "Experimental",
        note: "Preliminary support for lighter titles",
    },
    {
        name: "PPSSPP",
        slug: "ppsspp",
        platform: "PSP",
        image: ppssppLogo,
        status: "Excellent",
        note: "Near-native experience, 4K+",
    },
    {
        name: "RetroArch",
        slug: "retroarch",
        platform: "Multi-System",
        image: retroArchLogo,
        status: "Flexible",
        note: "Core-dependent behaviour",
    },
    {
        name: "Mesen",
        slug: "mesen",
        platform: "NES / SNES",
        image: mesenLogo,
        status: "Perfect",
        note: "Cycle-accurate emulation",
    },
];

export default function EmulatorsConsolesSection() {
    return (
        <section className="relative py-40 overflow-hidden border-t border-border/50">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

            <div className="relative z-10 section-container">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-32">
                    <h2 className="heading-section mb-6">
                        Emulate <span className="gradient-text-cyan">Everything.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From 8-bit classics to modern powerhouses.
                        We track the state of emulation for every major platform on Apple Silicon.
                    </p>
                </div>

                {/* Emulator Grid */}
                <div className="max-w-5xl mx-auto mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {emulators.map((emulator) => (
                            <Link
                                href={`/emulators/${emulator.slug}`}
                                key={emulator.name}
                                className="group p-7 rounded-2xl border border-border/40 bg-card/40 hover:bg-card/60 hover:border-primary/20 transition-all cursor-pointer block"
                            >
                                <div className="flex items-start gap-5 mb-6">
                                    <div className="relative w-16 h-16 rounded-xl bg-muted/30 p-2 border border-white/5 group-hover:border-primary/20 transition-colors">
                                        <Image
                                            src={emulator.image}
                                            alt={emulator.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                            {emulator.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {emulator.platform}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between gap-4 text-sm">
                                    <span
                                        className={`px-2 py-0.5 rounded-md text-xs font-medium border ${emulator.status === "Experimental"
                                            ? "border-orange-500/20 text-orange-400 bg-orange-500/10"
                                            : emulator.status === "Demanding"
                                                ? "border-red-500/20 text-red-400 bg-red-500/10"
                                                : "border-emerald-500/20 text-emerald-400 bg-emerald-500/10"
                                            }`}
                                    >
                                        {emulator.status}
                                    </span>

                                    <span className="text-muted-foreground text-xs text-right leading-relaxed max-w-[60%]">
                                        {emulator.note}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-36">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Console Lineage */}
                <div className="relative mb-32">
                    <div className="max-w-3xl mb-16">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                            Supported Hardware Families
                        </h3>
                        <p className="text-muted-foreground text-lg">
                            Coverage across console generations — from modern systems to classic handhelds.
                        </p>
                    </div>

                    {/* Timeline hint */}
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-40" />

                    {/* Lineage layout */}
                    <div className="overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 scrollbar-hide">
                        <div className="relative flex items-end gap-8 md:gap-24 min-w-max">
                            <ConsoleItem image={ps3Console} label="PlayStation 3" width={280} z="z-30" />
                            <ConsoleItem image={ps2Console} label="PlayStation 2" width={220} z="z-20" offset />
                            <ConsoleItem image={ps1Console} label="PlayStation 1" width={180} z="z-10" offset />
                            <ConsoleItem image={nesConsole} label="NES" width={160} z="z-0" offset />
                            <ConsoleItem image={gbaConsole} label="Game Boy Advance" width={120} z="z-0" offset />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/games" className="cta-secondary group inline-flex items-center">
                        View Compatibility List
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* Console helper */
function ConsoleItem({
    image,
    label,
    width,
    z,
    offset,
}: {
    image: any;
    label: string;
    width: number;
    z: string;
    offset?: boolean;
}) {
    return (
        <div className={`relative ${z} ${offset ? "-ml-16" : ""}`}>
            <Image
                src={image}
                alt={label}
                width={width}
                className="drop-shadow-2xl opacity-90"
            />
            <div className="mt-4 text-xs font-mono uppercase tracking-widest text-primary opacity-80">
                {label}
            </div>
        </div>
    );
}
