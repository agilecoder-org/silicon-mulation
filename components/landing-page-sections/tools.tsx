"use client";

import { ArrowRight, Cpu, Zap, Gamepad } from "lucide-react";

import { HardDrive, Gauge, TrendingUp, Layers } from 'lucide-react';

const MacVisualization = () => {
    const metrics = [
        { icon: Zap, label: "60 FPS", value: "60", position: "top-8 left-8", delay: "0s", color: "text-primary" },
        { icon: Cpu, label: "CPU", value: "82%", position: "top-1/4 right-6", delay: "0.5s", color: "text-blue-400" },
        { icon: Gauge, label: "GPU", value: "78%", position: "bottom-1/4 right-6", delay: "1s", color: "text-purple-400" },
        { icon: HardDrive, label: "RAM", value: "12GB", position: "bottom-8 left-8", delay: "1.5s", color: "text-accent" },
        { icon: TrendingUp, label: "M4 Pro", value: "Outstanding", position: "top-1/3 right-4", delay: "2s", color: "text-emerald-400" },
        { icon: Layers, label: "GPU Cores", value: "10-core", position: "bottom-1/3 left-4", delay: "2.5s", color: "text-orange-400" },
    ];

    return (
        <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated concentric rings */}
                <div className="absolute inset-8 rounded-full border border-primary/20 animate-pulse-slow" />
                <div
                    className="absolute inset-16 rounded-full border border-accent/20 animate-pulse-slow"
                    style={{ animationDelay: "0.5s" }}
                />
                <div
                    className="absolute inset-24 rounded-full border border-primary/30 animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                />

                {/* Radial grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                    <g stroke="currentColor" strokeWidth="0.5" className="text-primary/30">
                        <line x1="200" y1="0" x2="200" y2="400" />
                        <line x1="0" y1="200" x2="400" y2="200" />
                        <line x1="50" y1="50" x2="350" y2="350" />
                        <line x1="350" y1="50" x2="50" y2="350" />
                    </g>
                </svg>

                {/* Center card */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl blur-3xl animate-glow" />
                        <div className="relative bg-card border border-primary/30 rounded-2xl p-8 box-glow-cyan backdrop-blur-sm">
                            <div className="flex flex-col items-center gap-3">
                                <Cpu className="w-14 h-14 text-primary animate-pulse" />
                                <div className="text-center">
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Apple Silicon</p>
                                    <p className="text-lg font-bold text-foreground">M4 Pro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating metric badges */}
                {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                        <div
                            key={index}
                            className={`absolute ${metric.position} animate-float`}
                            style={{ animationDelay: metric.delay }}
                        >
                            <div className="chip-badge-glow bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-3 flex items-center gap-2 hover:border-primary/60 transition-colors shadow-lg">
                                <Icon className={`w-4 h-4 ${metric.color}`} />
                                <div className="flex flex-col">
                                    <span className="text-mono text-xs font-bold text-foreground">{metric.value}</span>
                                    <span className="text-mono text-xs text-muted-foreground">{metric.label}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Performance spectrum bar */}
                <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center">
                    <div className="w-4/5 h-1 bg-gradient-to-r from-red-500/30 via-yellow-500/30 to-emerald-500/30 rounded-full blur-sm" />
                    <div className="absolute flex justify-between w-4/5 text-xs text-muted-foreground/60 px-2">
                        <span>Poor</span>
                        <span>Good</span>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>

            {/* Stats grid below visualization */}
            <div className="grid grid-cols-3 gap-3 mt-12 max-w-md mx-auto">
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-3 text-center hover:border-primary/50 transition-colors">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Cores</p>
                    <p className="text-lg font-bold">12</p>
                </div>
                <div className="bg-muted/30 border border-accent/20 rounded-lg p-3 text-center hover:border-accent/50 transition-colors">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Memory</p>
                    <p className="text-lg font-bold">36GB</p>
                </div>
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-3 text-center hover:border-primary/50 transition-colors">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">TDP</p>
                    <p className="text-lg font-bold">36W</p>
                </div>
            </div>
        </div>
    );
};

const ToolsTeaserSection = () => {
    return (
        <section className="relative py-36 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

            <div className="relative z-10 section-container">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left — Visual (unchanged) */}
                    <div className="relative order-2 lg:order-1">
                        <MacVisualization />
                    </div>

                    {/* Right — Content */}
                    <div className="order-1 lg:order-2 max-w-xl">
                        <h2 className="heading-section mb-6">
                            Tools built for{" "}
                            <span className="gradient-text-cyan">real testing</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            Utilities that help you decide what runs, how well it runs,
                            and what hardware works best — based on actual Apple Silicon testing.
                        </p>

                        {/* Tool list */}
                        <ul className="space-y-4 mb-12">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                <span>
                                    Check game compatibility across M-series Macs
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                <span>
                                    Test controller support and emulator mappings
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                <span>
                                    Find recommended settings and performance limits
                                </span>
                            </li>
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="cta-primary group">
                                Check Compatibility
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button className="cta-secondary group">
                                <Gamepad className="w-4 h-4 mr-2" />
                                Test Controller
                            </button>
                        </div>

                        {/* Secondary link */}
                        <div className="mt-6">
                            <a
                                href="/tools"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                            >
                                View all tools
                                <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsTeaserSection;
