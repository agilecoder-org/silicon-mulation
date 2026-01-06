"use client";

import Image from "next/image";
import { ExternalLink, Download, Layers, Gamepad, Settings, Gamepad2, Tv, Youtube, Play, Construction } from "lucide-react";
import retroArchLogo from "@/assets/emulators/retro-arch.png";
import { BackButton } from "@/components/ui/back-button";

export default function RetroArchPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-100 pt-24 pb-24 px-6 selection:bg-zinc-500/30">
            <div className="max-w-6xl mx-auto">
                <BackButton href="/emulation" label="Back to Hub" />

                <div className="relative rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-12 mb-16">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start text-left">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-2xl shadow-black/50 flex-shrink-0 flex items-center justify-center">
                            <Image src={retroArchLogo} alt="RetroArch" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <div className="flex items-center justify-start gap-4 mb-2">
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">RetroArch</h1>
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                                        Flexible
                                    </span>
                                </div>
                                <p className="text-lg md:text-xl text-zinc-400 font-medium">Multi-System Frontend</p>
                            </div>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl text-base md:text-lg">
                                A powerful interface for emulators (called Cores). It uses the <span className="text-white font-bold">Metal</span> video driver on macOS for extremely low-latency gaming and advanced shader effects.
                            </p>

                            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
                                <a href="https://retroarch.com/?page=platforms" target="_blank" className="w-full sm:w-auto justify-center bg-zinc-100 hover:bg-white text-black px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download Metal Build
                                </a>
                                <a href="https://retroarch.com" target="_blank" className="w-full sm:w-auto justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3 rounded-xl font-medium transition-all border border-zinc-700 flex items-center gap-2">
                                    <ExternalLink className="w-5 h-5" />
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors">
                                <Tv className="w-8 h-8 text-cyan-500 mb-4" />
                                <h3 className="font-bold text-white mb-2">Shaders / CRT</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Apply advanced visual effects like scanlines and curvature that simulate old TVs without performance loss.
                                </p>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors">
                                <Gamepad2 className="w-8 h-8 text-cyan-500 mb-4" />
                                <h3 className="font-bold text-white mb-2">Input Latency</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Use the "Run-Ahead" feature to get input response times faster than the original consoles.
                                </p>
                            </div>
                        </div>

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

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-2 px-2">
                            <Construction className="w-4 h-4 text-zinc-500" />
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Coming Soon</h3>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "Core Guide", desc: "Best cores for Mac", icon: "🧠" },
                                { title: "Mega Bezel", desc: "Shader presets", icon: "📺" },
                                { title: "Playlists", desc: "Organize your ROMs", icon: "📑" },
                                { title: "Netplay", desc: "Multiplayer setup", icon: "🌍" }
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
