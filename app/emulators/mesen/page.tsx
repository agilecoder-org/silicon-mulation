"use client";

import Image from "next/image";
import { ExternalLink, Download, Layers, Monitor, Settings, Box, Youtube, Play, Cpu, Construction } from "lucide-react";
import { BackButton } from "@/components/ui/back-button";
import mesenLogo from "@/assets/emulators/mesen.png";

export default function MesenPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-100 pt-32 pb-20 px-6 selection:bg-cyan-500/30">
            <div className="max-w-6xl mx-auto">
                <BackButton href="/emulation" label="Back to Hub" />

                <div className="relative rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-12 mb-16">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-2xl shadow-black/50 flex-shrink-0 flex items-center justify-center">
                            <Image src={mesenLogo} alt="Mesen" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                    <h1 className="heading-section text-white">Mesen</h1>
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                                        Perfect
                                    </span>
                                </div>
                                <p className="text-lg md:text-xl text-zinc-400 font-medium">NES / SNES / GB Emulator</p>
                            </div>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl text-base md:text-lg">
                                A high-accuracy emulator that creates the most authentic experience possible. It focuses on <span className="text-emerald-400">cycle-accuracy</span> rather than speed, aiming to replicate the original hardware exactly.
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                <a href="https://mesen.ca" target="_blank" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download
                                </a>
                                {/* No secondary button needed as site is main download */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">

                        {/* Runtime Alert */}
                        <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
                            <div className="bg-zinc-950/50 px-6 py-4 border-b border-zinc-800 flex items-center gap-3">
                                <Box className="w-5 h-5 text-zinc-400" />
                                <h2 className="font-bold text-zinc-200">Runtime Requirement</h2>
                            </div>
                            <div className="p-6">
                                <p className="text-zinc-400 text-sm">
                                    Because Mesen is built with .NET, you may need to install the <strong>.NET 6.0 Runtime</strong> for macOS to run it.
                                </p>
                            </div>
                        </section>

                        {/* Setup Video */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Youtube className="w-6 h-6 text-red-500" />
                                <h2 className="text-2xl font-bold text-white">Setup Guide</h2>
                            </div>
                            <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 relative overflow-hidden group cursor-not-allowed">
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 shadow-xl mb-4">
                                        <Play className="w-6 h-6 text-zinc-500 fill-zinc-500" />
                                    </div>
                                    <p className="text-zinc-500 font-medium">Video Guide Coming Soon</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-6 h-6 text-emerald-500" />
                                <h2 className="text-2xl font-bold text-white">Why Accuracy Matters</h2>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8">
                                <p className="text-zinc-400 leading-relaxed">
                                    Many older games rely on specific hardware timing or "glitches" to run correctly. Faster emulators often hack around these, leading to bugs. Mesen plays them exactly as the real console would.
                                </p>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-2 px-2">
                            <Construction className="w-4 h-4 text-emerald-500" />
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Coming Soon</h3>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "HD Packs", desc: "Texture Replacements", icon: "✨" },
                                { title: "Configs", desc: "Pixel-perfect display", icon: "📺" },
                                { title: "Game List", desc: "Tested Library", icon: "📚" },
                                { title: "Latency", desc: "Input lag tests", icon: "⚡" }
                            ].map((item, i) => (
                                <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl flex items-center gap-4 opacity-60 hover:opacity-100 hover:bg-zinc-900/50 transition-all cursor-default select-none group">
                                    <div className="w-10 h-10 bg-zinc-950 rounded-lg flex items-center justify-center text-lg border border-zinc-800 group-hover:border-zinc-700">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-300 text-sm">{item.title}</h4>
                                        <p className="text-xs text-zinc-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
