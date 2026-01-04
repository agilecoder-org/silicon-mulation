"use client";

import { Laptop2, Gamepad2, Hammer, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

interface ToolCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    disabled?: boolean;
    comingSoon?: boolean;
}

function ToolCard({ title, description, icon: Icon, href, disabled, comingSoon }: ToolCardProps) {
    const Wrapper = disabled ? 'div' : Link;

    return (
        <Wrapper
            href={href}
            className={clsx(
                "relative overflow-hidden rounded-3xl border border-border/50 p-8 flex flex-col justify-between min-h-[250px] transition-all duration-300 group",
                disabled ? "bg-muted/10 opacity-75 grayscale-[0.5]" : "bg-card/30 hover:bg-card/50 hover:shadow-lg hover:border-primary/20 cursor-pointer"
            )}
        >
            {comingSoon && (
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
            )}

            <div className="relative z-10 space-y-4">
                <div className={clsx(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    disabled ? "bg-muted/20 text-muted-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20",
                    title === "Controller Tester" && !disabled && "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20"
                )}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>

            <div className="relative z-10 mt-8">
                {comingSoon ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/20 text-muted-foreground text-xs font-bold uppercase tracking-wider border border-border/50">
                        <Hammer className="w-3 h-3" />
                        Coming Soon
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-primary group-hover:translate-x-1 transition-all">
                        Open Tool <ArrowRight className="w-4 h-4" />
                    </div>
                )}
            </div>
        </Wrapper>
    );
}

interface ExternalToolProps {
    name: string;
    description: string;
    url: string;
}

function ExternalTool({ name, description, url }: ExternalToolProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-xl border border-border/40 hover:bg-muted/30 transition-colors group"
        >
            <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:text-foreground transition-colors">
                <ExternalLink className="w-5 h-5" />
            </div>
            <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
        </a>
    );
}

export default function ToolsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="section-container space-y-20">

                {/* Header */}
                <div className="space-y-4">
                    <h1 className="heading-section">Emulation Tools</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        Utilities to help you set up, debug, and optimize your emulation experience on Apple Silicon.
                    </p>
                </div>

                {/* Built-in Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ToolCard
                        title="Controller Tester"
                        description="Verify button mappings, trigger sensitivity, and joystick deadzones."
                        icon={Gamepad2}
                        href="/tools/controller"
                    />

                    <ToolCard
                        title="Compatibility Checker"
                        description="Scan your library to find the best settings for your specific M-series chip."
                        icon={Laptop2}
                        href="#"
                        disabled
                        comingSoon
                    />
                </div>

                {/* Community Tools Section */}
                <div className="border-t border-border/40 pt-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Referenced Community Tools</h2>
                            <p className="text-muted-foreground mt-2">
                                Trusted external utilities maintained by the community to enhance your experience.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ExternalTool
                            name="EmuDeck"
                            description="All-in-one installer that configures emulators, aspects ratios, and hotkeys automatically."
                            url="https://www.emudeck.com"
                        />
                        <ExternalTool
                            name="Whisky"
                            description="A modern Wine wrapper for macOS built with SwiftUI to run Windows games."
                            url="https://getwhisky.app"
                        />
                        <ExternalTool
                            name="Crossover"
                            description="Run Windows software on macOS without installing Windows. (Commercial)"
                            url="https://www.codeweavers.com/crossover"
                        />
                        <ExternalTool
                            name="Heroic Games Launcher"
                            description="Open Source Game Launcher for Epic Games, GOG and Amazon Prime Games."
                            url="https://heroicgameslauncher.com"
                        />
                        <ExternalTool
                            name="Enjoyable"
                            description="Map gamepad and joystick inputs to keyboard and mouse events for Mac."
                            url="https://yukkurigames.com/enjoyable/"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
