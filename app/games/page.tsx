"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

// Placeholder imports - using same as featured for now
import gameGow3 from "@/assets/games/gow3.jpg";
import gameRe5 from "@/assets/games/resident-evil-5.png";
import gameTombRaider from "@/assets/games/tomb-raider-2013.jpg";
import gameWwe2k from "@/assets/games/wwe-2k17.jpg";

// Expanded mock data
const ALL_GAMES = [
    {
        id: 1,
        name: "God of War III",
        emulator: "RPCS3",
        chip: "M3 Pro",
        fps: "30–45",
        status: "Playable",
        image: gameGow3,
        genre: "Action",
    },
    {
        id: 2,
        name: "Resident Evil 5",
        emulator: "RPCS3",
        chip: "M2 Pro",
        fps: "45–60",
        status: "Perfect",
        image: gameRe5,
        genre: "Horror",
    },
    {
        id: 3,
        name: "Tomb Raider (2013)",
        emulator: "RPCS3",
        chip: "M3 Max",
        fps: "40–55",
        status: "Playable",
        image: gameTombRaider,
        genre: "Adventure",
    },
    {
        id: 4,
        name: "WWE 2K14",
        emulator: "RPCS3",
        chip: "M2 Pro",
        fps: "30–50",
        status: "Ingame",
        image: gameWwe2k,
        genre: "Sports",
    },
    // Duplicates for grid demo
    {
        id: 5,
        name: "Demon's Souls",
        emulator: "RPCS3",
        chip: "M1 Max",
        fps: "30-60",
        status: "Playable",
        image: gameGow3, // placeholder
        genre: "RPG",
    },
    {
        id: 6,
        name: "Metal Gear Solid 4",
        emulator: "RPCS3",
        chip: "M3 Max",
        fps: "15-25",
        status: "Ingame",
        image: gameRe5, // placeholder
        genre: "Action",
    },
];

export default function GamesPage() {
    const [search, setSearch] = useState("");

    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tested Games</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Verified performance reports from the community.
                            Filter by chip, emulator, or playability status.
                        </p>
                    </div>
                </div>

                {/* Filters & Search Bar */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 space-y-8 flex-shrink-0">
                        {/* Mobile Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search games..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/20 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="p-6 rounded-2xl border border-border/40 bg-card/30 space-y-6">
                            <div className="flex items-center gap-2 font-semibold text-lg">
                                <Filter className="w-5 h-5 text-primary" />
                                Filters
                            </div>

                            {/* Chip Filter */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Chip</label>
                                <div className="space-y-2">
                                    {["M1 Family", "M2 Family", "M3 Family", "M4 Family"].map(chip => (
                                        <label key={chip} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-4 h-4 rounded border border-muted-foreground/50 group-hover:border-primary transition-colors" />
                                            <span className="text-sm group-hover:text-foreground transition-colors">{chip}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Status Filter */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Status</label>
                                <div className="space-y-2">
                                    {["Perfect", "Playable", "Ingame", "Intro"].map(status => (
                                        <label key={status} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-4 h-4 rounded border border-muted-foreground/50 group-hover:border-primary transition-colors" />
                                            <span className="text-sm group-hover:text-foreground transition-colors">{status}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Game Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ALL_GAMES.map((game) => (
                                <div
                                    key={game.id}
                                    className="group relative rounded-2xl overflow-hidden border border-border/40 bg-card/40 hover:bg-card/60 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 aspect-[4/5] flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative h-1/2 overflow-hidden">
                                        <Image
                                            src={game.image}
                                            alt={game.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />

                                        <div className="absolute top-4 right-4">
                                            <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${game.status === "Perfect" ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" :
                                                    game.status === "Playable" ? "bg-blue-500/20 border-blue-500/30 text-blue-400" :
                                                        "bg-orange-500/20 border-orange-500/30 text-orange-400"
                                                }`}>
                                                {game.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
                                        <div>
                                            <p className="text-xs text-primary font-mono mb-2">{game.emulator}</p>
                                            <h3 className="text-xl font-bold leading-tight mb-1 group-hover:text-primary transition-colors">{game.name}</h3>
                                            <p className="text-sm text-muted-foreground">{game.genre}</p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase text-muted-foreground tracking-wider mb-0.5">Tested On</p>
                                                <p className="font-semibold text-sm">{game.chip}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] uppercase text-muted-foreground tracking-wider mb-0.5">Performance</p>
                                                <p className="font-mono font-bold text-sm text-secondary">{game.fps} FPS</p>
                                            </div>
                                        </div>
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
