import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ALL_GAMES } from "@/lib/games-data";

// Select specific featured games by ID or Slug
const FEATURED_IDs = [104, 105, 106, 107]; // GOW3, RE6, TR, Uncharted 3
const games = ALL_GAMES.filter(g => FEATURED_IDs.includes(g.id));

const FeaturedGamesSection = () => {
    return (
        <section className="relative section-container py-24">
            {/* Section header */}
            <div className="mb-12">
                <h2 className="heading-section text-foreground mb-4">
                    Featured <span className="gradient-text-cyan">Benchmarks</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Real performance data from real Mac hardware. No guesses, just data.
                </p>
            </div>

            {/* Game strips */}
            <div className="space-y-4">
                {games.map((game, index) => (
                    <Link
                        href={`/games/${game.slug}`}
                        key={game.id}
                        className="game-strip group cursor-pointer block relative h-[280px] md:h-[180px] overflow-hidden rounded-3xl border border-border/20 hover:border-primary/50"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Background image */}
                        <Image
                            src={game.image}
                            alt={game.name}
                            className="game-strip-image object-cover"
                            fill
                            quality={90}
                        />

                        {/* Stronger Gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-[1]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[1]" />

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

                                {/* Game info */}
                                <div className="space-y-3 max-w-2xl">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors drop-shadow-lg">
                                        {game.name}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                                            {game.emulator}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                            {game.chip}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400">
                                            {game.fps} FPS
                                        </span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-3 text-white/50 group-hover:text-primary transition-all group-hover:translate-x-2">
                                    <span className="text-sm font-medium uppercase tracking-widest hidden md:block">View Performance</span>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* View all CTA */}
            <div className="section-container mt-12 text-center">
                <Link href="/games" className="cta-secondary group inline-flex items-center">
                    View All Games
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
};

export default FeaturedGamesSection;
