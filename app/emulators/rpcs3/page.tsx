"use client";

import Image from "next/image";
import { ExternalLink, Download, Monitor, Cpu, Settings, AlertTriangle, Terminal, FileDown, Youtube, Play, Construction } from "lucide-react";
import rpcs3Logo from "@/assets/emulators/rpcs3.png";
import { BackButton } from "@/components/ui/back-button";

export default function RPCS3Page() {
    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-100 pt-24 pb-24 px-6 selection:bg-cyan-500/30">
            <div className="max-w-6xl mx-auto">

                {/* Back Link */}
                <BackButton href="/emulation" label="Back to Hub" />

                {/* Hero Section */}
                <div className="relative rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-12 mb-16">
                    {/* Background Gradient */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start text-left">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-2xl shadow-black/50 flex-shrink-0 flex items-center justify-center">
                            <Image src={rpcs3Logo} alt="RPCS3" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <div className="flex items-center justify-start gap-4 mb-2">
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">RPCS3</h1>
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                                        Demanding
                                    </span>
                                </div>
                                <p className="text-lg md:text-xl text-zinc-400 font-medium">PlayStation 3 Emulator</p>
                            </div>

                            <p className="text-zinc-400 leading-relaxed max-w-2xl text-base md:text-lg">
                                The world's first open-source Sony PlayStation 3 emulator. On macOS, it relies on <span className="text-cyan-400">MoltenVK</span> to translate Vulkan to Metal, enabling hardware-accelerated emulation even on Apple Silicon.
                            </p>

                            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
                                <a href="https://rpcs3.net/download" target="_blank" className="w-full sm:w-auto justify-center bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-900/20 flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download for Mac
                                </a>
                                <a href="https://www.playstation.com/en-us/support/hardware/ps3/system-software/" target="_blank" className="w-full sm:w-auto justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3 rounded-xl font-medium transition-all border border-zinc-700 flex items-center gap-2">
                                    <FileDown className="w-5 h-5" />
                                    Get Firmware (PUP)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Critical Firmware Section */}
                        <section className="bg-zinc-900/50 border border-red-900/30 rounded-2xl overflow-hidden">
                            <div className="bg-red-950/20 px-6 py-4 border-b border-red-900/20 flex items-center gap-3">
                                <Terminal className="w-5 h-5 text-red-500" />
                                <h2 className="font-bold text-red-100">Critical: Firmware Installation</h2>
                            </div>
                            <div className="p-6">
                                <p className="text-zinc-400 mb-4 text-sm">
                                    RPCS3 will <strong>not boot games</strong> without the official PlayStation 3 firmware.
                                </p>
                                <ol className="space-y-3 text-sm list-decimal list-inside text-zinc-300">
                                    <li className="pl-2"><span className="text-zinc-500">Download</span> <code className="bg-zinc-950 px-1.5 py-0.5 rounded text-red-400">PS3UPDAT.PUP</code> from the link above.</li>
                                    <li className="pl-2">Open RPCS3.</li>
                                    <li className="pl-2">Go to <strong className="text-white">File &gt; Install Firmware</strong>.</li>
                                    <li className="pl-2">Select the downloaded .PUP file.</li>
                                </ol>
                            </div>
                        </section>

                        {/* Setup Guide Video */}
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
                                {/* Scanlines effect */}
                                <div className="absolute inset-0 bg-[url('/assets/scanlines.png')] opacity-10 pointer-events-none" />
                            </div>
                        </section>

                        {/* Apple Silicon Report */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-6 h-6 text-cyan-500" />
                                <h2 className="text-2xl font-bold text-white">Apple Silicon Status</h2>
                            </div>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-1.5 h-12 bg-cyan-500/20 rounded-full mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">M1 / M2 Chips</h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                Good for lighter titles like <em>Persona 5</em> or <em>Demon's Souls</em> (at 720p). Heavier games like <em>God of War 3</em> may struggle to reach playable framerates consistently.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-1.5 h-12 bg-cyan-500 rounded-full mt-1 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">M3 / M4 Chips</h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                Significant performance boost due to <strong>Hardware Raytracing</strong> support. Many titles previously considered "unplayable" are now stable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar / Coming Soon */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-2 px-2">
                            <Construction className="w-4 h-4 text-cyan-500" />
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Coming Soon</h3>
                        </div>

                        {/* Card Grid */}
                        <div className="grid gap-4">
                            {[
                                { title: "Optimal Configs", desc: "Settings for M1/M2/M3", icon: "⚙️" },
                                { title: "Compatibility List", desc: "Verified macOS boot list", icon: "✅" },
                                { title: "Benchmarks", desc: "FPS Data & Charts", icon: "📊" },
                                { title: "Wiki Articles", desc: "Troubleshooting & Fixes", icon: "📚" }
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

                        {/* Discord CTA */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-900/20 to-zinc-900 rounded-2xl border border-indigo-500/20 text-center">
                            <h4 className="font-bold text-indigo-200 mb-2">Need Help?</h4>
                            <p className="text-xs text-indigo-300/60 mb-4">Join the community for real-time support.</p>
                            <button disabled className="w-full py-2 bg-indigo-600/20 md:hover:bg-indigo-600/30 text-indigo-400 text-sm font-bold rounded-lg border border-indigo-500/30 transition-colors cursor-not-allowed">
                                Discord Link (Soon)
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
