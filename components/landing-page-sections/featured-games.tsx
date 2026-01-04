import { ArrowRight } from "lucide-react";
import Image from "next/image";
import gameZelda from "@/assets/game-zelda.jpg";
import gameGow from "@/assets/game-gow.jpg";
import gameRe4 from "@/assets/game-re4.jpg";
import gameElden from "@/assets/game-elden.jpg";

const games = [
    {
        id: 1,
        name: "The Legend of Zelda: Tears of the Kingdom",
        emulator: "Ryujinx",
        chip: "M3 Pro",
        fps: "45-60",
        image: gameZelda,
    },
    {
        id: 2,
        name: "God of War Ragnarök",
        emulator: "RPCS3",
        chip: "M4 Max",
        fps: "30-45",
        image: gameGow,
    },
    {
        id: 3,
        name: "Resident Evil 4 Remake",
        emulator: "CrossOver",
        chip: "M2 Ultra",
        fps: "60+",
        image: gameRe4,
    },
    {
        id: 4,
        name: "Elden Ring",
        emulator: "Game Porting Toolkit",
        chip: "M3 Max",
        fps: "40-55",
        image: gameElden,
    },
];

const FeaturedGamesSection = () => {
    return (
        <section className="relative py-24">
            {/* Section header */}
            <div className="section-container mb-12">
                <h2 className="heading-section text-foreground mb-4">
                    Featured <span className="gradient-text-cyan">Benchmarks</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Real performance data from real Mac hardware. No guesses, just data.
                </p>
            </div>

            {/* Game strips */}
            <div className="space-y-2">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        className="game-strip group cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Background image */}
                        <Image
                            src={game.image}
                            alt={game.name}
                            className="game-strip-image object-cover"
                            fill
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40 z-[1]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 z-[1]" />

                        {/* Content */}
                        <div className="relative z-10 section-container py-10 md:py-16">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                {/* Game info */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {game.name}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                                        <span className="chip-badge">{game.emulator}</span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-mono text-primary font-medium">{game.chip}</span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-mono fps-display font-bold">{game.fps} FPS</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                    <span className="font-medium">View Performance</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom border glow on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    </div>
                ))}
            </div>

            {/* View all CTA */}
            <div className="section-container mt-12 text-center">
                <button className="cta-secondary group">
                    View All Games
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </section>
    );
};

export default FeaturedGamesSection;
