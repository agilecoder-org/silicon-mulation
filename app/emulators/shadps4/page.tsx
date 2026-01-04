"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Cpu, Construction, AlertTriangle, Skull, Youtube, Play } from "lucide-react";
import shadps4Logo from "@/assets/emulators/shadps4.png";

export default function ShadPS4Page() {
    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-100 pt-24 pb-24 px-6 selection:bg-red-500/30">
            <div className="max-w-6xl mx-auto">
                <Link href="/emulation" className="group inline-flex items-center text-sm text-zinc-500 hover:text-red-400 mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Hub
                </Link>

                <div className="relative rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-12 mb-16">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-2xl shadow-black/50 flex-shrink-0 flex items-center justify-center">
                            <Image src={shadps4Logo} alt="shadPS4" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">shadPS4</h1>
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                                        Experimental
                                    </span>
                                </div>
                                <p className="text-lg md:text-xl text-zinc-400 font-medium">PlayStation 4 Emulator</p>
                            </div>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl text-base md:text-lg">
                                The bleeding edge of PS4 emulation. Currently very experimental but showing rapid progress. It is primarily useful for 2D games and homebrew at this stage.
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                <a href="https://github.com/shadps4-emu/shadPS4/releases" target="_blank" className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-900/20 flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download Pre-release
                                </a>
                                <a href="https://github.com/shadps4-emu/shadPS4" target="_blank" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3 rounded-xl font-medium transition-all border border-zinc-700 flex items-center gap-2">
                                    <ExternalLink className="w-5 h-5" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">

                        {/* Warnings */}
                        <section className="bg-orange-500/5 border border-orange-500/10 rounded-2xl overflow-hidden p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="w-6 h-6 text-orange-400" />
                                <h2 className="font-bold text-orange-100 text-xl">Early Access Warnings</h2>
                            </div>
                            <ul className="space-y-4 text-sm text-zinc-400">
                                <li className="flex gap-4 p-4 bg-zinc-950/30 rounded-xl border border-zinc-800">
                                    <Skull className="w-5 h-5 text-red-400 flex-shrink-0" />
                                    <span><strong>Expect Crashes:</strong> Do not expect a stable playthrough of any commercial blockbuster (like Bloodborne) just yet.</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-zinc-950/30 rounded-xl border border-zinc-800">
                                    <Cpu className="w-5 h-5 text-zinc-100 flex-shrink-0" />
                                    <span><strong>macOS 15 Recommended:</strong> Recent Metal features in macOS Sequoia are typically required for the latest builds.</span>
                                </li>
                            </ul>
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
                                <Cpu className="w-6 h-6 text-red-500" />
                                <h2 className="text-2xl font-bold text-white">Compatibility</h2>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8">
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Compatibility improves daily. Currently, 2D titles like <em>Sonic Mania</em> and <em>Undertale</em> run well. Heavier 3D titles are mostly getting in-game or staying in menus.
                                </p>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-2 px-2">
                            <Construction className="w-4 h-4 text-red-500" />
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Coming Soon</h3>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "Configuration", desc: "Basic setup to boot", icon: "⚙️" },
                                { title: "Game List", desc: "Verified bootable titles", icon: "🎮" },
                                { title: "Performance Reports", desc: "FPS on M3 Max", icon: "📈" },
                                { title: "Bloodborne Tracker", desc: "Specific fix list", icon: "🩸" }
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
