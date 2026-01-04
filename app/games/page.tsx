"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Filter, Check, Monitor, Gamepad2, Activity } from "lucide-react";
import { GAME_STATUSES, GameStatus, GameDetail } from "@/lib/emulators-data";
import { MultiSelect } from "@/components/ui/multi-select";
import { Badge } from "@/components/ui/badge";

import gameGow1 from "@/assets/games/gow1.jpg";
import gameGow2 from "@/assets/games/gow2.jpg";
import gameGow3 from "@/assets/games/gow3-cover.jpg";
import gameGowAscension from "@/assets/games/gow-ascension.jpg";
import gameRe6 from "@/assets/games/resident-evil-6.jpg";
import gameTombRaider2013 from "@/assets/games/tomb-raider.jpeg";
import gameUncharted3 from "@/assets/games/uncharted-3.jpeg";
import gameDemonSouls from "@/assets/games/demon-souls.jpg";

const ALL_GAMES: GameDetail[] = [
    {
        id: 101,
        name: "God of War I (HD Remastered)",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "60",
        status: "Excellent",
        image: gameGow1,
        genre: "Action"
    },
    {
        id: 102,
        name: "God of War II (HD Remastered)",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "60",
        status: "Excellent",
        image: gameGow2,
        genre: "Action"
    },
    {
        id: 103,
        name: "God of War: Ascension",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "30-50",
        status: "Excellent",
        image: gameGowAscension,
        genre: "Action"
    },
    {
        id: 104,
        name: "God of War III",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "30-60",
        status: "Playable",
        image: gameGow3,
        genre: "Action"
    },
    {
        id: 105,
        name: "Resident Evil 6",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "45–60",
        status: "Playable",
        image: gameRe6,
        genre: "Horror"
    },
    {
        id: 106,
        name: "Tomb Raider",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "45-60",
        status: "Playable",
        image: gameTombRaider2013,
        genre: "Adventure"
    },
    {
        id: 107,
        name: "Uncharted 3",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "30",
        status: "Playable",
        image: gameUncharted3,
        genre: "Action Adventure"
    },
    {
        id: 108,
        name: "Demon's Souls",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "N/A",
        status: "Not Playable",
        image: gameDemonSouls,
        genre: "RPG"
    }
];

const ALL_EMULATORS = [
    "RPCS3",
    "PCSX2",
    "PPSSPP",
    "shadPS4",
    "RetroArch",
    "Mesen",
];

const ALL_DEVICES = [
    "M1",
    "M4 Pro"
]

export default function GamesPage() {
    const [search, setSearch] = useState("");
    const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<GameStatus[]>([]);
    const [selectedEmulators, setSelectedEmulators] = useState<string[]>([]);

    // Filtering Logic
    const filteredGames = useMemo(() => {
        return ALL_GAMES.filter(game => {
            // Search Text
            const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase()) ||
                game.emulator.toLowerCase().includes(search.toLowerCase());

            // Filters
            const matchesDevice = selectedDevices.length === 0 || selectedDevices.includes(game.chip);
            const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(game.status);
            const matchesEmulator = selectedEmulators.length === 0 || selectedEmulators.includes(game.emulator);

            return matchesSearch && matchesDevice && matchesStatus && matchesEmulator;
        });
    }, [search, selectedDevices, selectedStatuses, selectedEmulators]);

    const toggleFilter = <T extends string>(item: T, current: T[], setter: (val: T[]) => void) => {
        if (current.includes(item)) {
            setter(current.filter(i => i !== item));
        } else {
            setter([...current, item]);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="section-container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <h1 className="heading-section">
                            Tested <span className="text-primary">Games</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                            Explore performance reports from the community on Macintosh Silicon.
                            Filter by device, emulator, and playability status.
                        </p>
                    </div>
                </div>

                {/* Filters & Search Bar */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-72 space-y-8 flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:h-fit">
                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search games..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 shadow-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="p-6 rounded-2xl border border-border/40 bg-card/30 space-y-8 shadow-sm">
                            <div className="flex items-center gap-2 font-semibold text-lg pb-4 border-b border-border/50">
                                <Filter className="w-5 h-5 text-primary" />
                                Filters
                            </div>

                            {/* Emulator Filter - MultiSelect */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    <Gamepad2 className="w-4 h-4" />
                                    Emulator
                                </label>
                                <MultiSelect
                                    title="Emulators"
                                    options={ALL_EMULATORS}
                                    selected={selectedEmulators}
                                    onChange={setSelectedEmulators}
                                    placeholder="Select emulators..."
                                />
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Status Filter */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    <Activity className="w-4 h-4" />
                                    Status
                                </label>
                                <div className="space-y-2">
                                    {GAME_STATUSES.map(status => (
                                        <label key={status} className="flex items-center gap-3 cursor-pointer group select-none py-1">
                                            <div
                                                className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${selectedStatuses.includes(status)
                                                    ? "bg-primary border-primary text-primary-foreground shadow-sm scale-110"
                                                    : "border-muted-foreground/40 group-hover:border-primary bg-background"
                                                    }`}
                                                onClick={() => toggleFilter(status, selectedStatuses, setSelectedStatuses)}
                                            >
                                                {selectedStatuses.includes(status) && <Check className="w-3.5 h-3.5" />}
                                            </div>
                                            <span
                                                className={`text-sm transition-colors ${selectedStatuses.includes(status) ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"}`}
                                            >
                                                {status}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Chip Filter (Tested Devices) */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    <Monitor className="w-4 h-4" />
                                    Tested Device
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {ALL_DEVICES.map(chip => (
                                        <div
                                            key={chip}
                                            onClick={() => toggleFilter(chip, selectedDevices, setSelectedDevices)}
                                            className={`
                                                px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border select-none
                                                ${selectedDevices.includes(chip)
                                                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                                    : "bg-muted/30 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                                                }
                                            `}
                                        >
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Game Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">
                                Showing <span className="font-bold text-foreground">{filteredGames.length}</span> results
                            </p>
                            {/* Optional: Clear All Filters button can go here */}
                            {(selectedDevices.length > 0 || selectedStatuses.length > 0 || selectedEmulators.length > 0) && (
                                <button
                                    onClick={() => {
                                        setSelectedDevices([]);
                                        setSelectedStatuses([]);
                                        setSelectedEmulators([]);
                                        setSearch("");
                                    }}
                                    className="text-xs text-primary hover:underline font-medium"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>

                        {filteredGames.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 px-4 text-center border rounded-2xl border-dashed border-border/50 bg-muted/10">
                                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                                    <Search className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">No games found</h3>
                                <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                                    We couldn't find any games matching your current filters. Try adjusting your search or clearing some filters.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedDevices([]);
                                        setSelectedStatuses([]);
                                        setSelectedEmulators([]);
                                        setSearch("");
                                    }}
                                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredGames.map((game) => (
                                    <div
                                        key={game.id}
                                        className="group relative rounded-2xl overflow-hidden border border-border/40 bg-card/40 hover:bg-card/60 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 flex flex-col h-full"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-video overflow-hidden bg-muted">
                                            <Image
                                                src={game.image}
                                                alt={game.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                                            <div className="absolute top-3 right-3">
                                                <Badge
                                                    variant="outline"
                                                    className={`backdrop-blur-md border-0 uppercase tracking-wider font-bold text-[10px] px-2 py-0.5 shadow-sm ${game.status === "Excellent" ? "bg-emerald-600 text-white ring-1 ring-emerald-500" :
                                                        game.status === "Playable" ? "bg-blue-600 text-white ring-1 ring-blue-500" :
                                                            "bg-red-600 text-white ring-1 ring-red-500"
                                                        }`}
                                                >
                                                    {game.status}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex-1 flex flex-col justify-between relative z-10 border-t border-border/20">
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-[10px] uppercase tracking-wider font-bold border-0">
                                                        {game.emulator}
                                                    </Badge>
                                                    <span className="text-xs text-muted-foreground font-mono">{game.genre}</span>
                                                </div>

                                                <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">{game.name}</h3>
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-border/30 grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-[10px] uppercase text-muted-foreground tracking-wider mb-0.5 font-bold">Chip</p>
                                                    <div className="flex items-center gap-1.5">
                                                        <Monitor className="w-3.5 h-3.5 text-blue-400" />
                                                        <p className="font-semibold text-sm">{game.chip}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase text-muted-foreground tracking-wider mb-0.5 font-bold">FPS</p>
                                                    <div className="flex items-center gap-1.5">
                                                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                                                        <p className="font-mono font-bold text-sm">{game.fps}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
