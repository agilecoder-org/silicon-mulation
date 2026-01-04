import { ALL_GAMES } from "@/lib/games-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Monitor, Activity, Gamepad2, Calendar, Building2, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Generate static params if you want static export, or just let it be dynamic
export async function generateStaticParams() {
    return ALL_GAMES.map((game) => ({
        slug: game.slug,
    }));
}

// Next.js 15+ treats params as a Promise
export default async function GameDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const game = ALL_GAMES.find((g) => g.slug === params.slug);

    if (!game) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero Section with Backdrop */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className="object-cover opacity-40 blur-sm scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transpose to-background/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-transparent" />
                </div>

                <div className="relative z-10 h-full section-container flex flex-col justify-end pb-12">
                    <Link
                        href="/games"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Games
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end gap-8">
                        {/* Cover Art Card */}
                        <div className="relative w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex-shrink-0 hidden md:block">
                            <Image
                                src={game.image}
                                alt={game.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold text-xs py-1">
                                    {game.emulator}
                                </Badge>
                                <Badge variant="outline" className={`border-0 uppercase tracking-widest font-bold text-xs py-1 ${game.status === 'Excellent' ? 'bg-emerald-500/20 text-emerald-400' : game.status === 'Playable' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}`}>
                                    {game.status}
                                </Badge>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
                                {game.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4" />
                                    {game.developer}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {game.releaseYear}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Gamepad2 className="w-4 h-4" />
                                    {game.genre}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="section-container mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* About */}
                        <section>
                            <h2 className="heading-subsection mb-6 flex items-center gap-3">
                                <Info className="w-6 h-6 text-primary" />
                                About the Game
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {game.description}
                            </p>
                        </section>

                        {/* Performance Analysis */}
                        <section className="bg-card/30 border border-border/50 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="heading-subsection mb-6 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-accent" />
                                Performance Analysis
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                        Tested Configuration
                                    </h3>
                                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-white/5 w-fit">
                                        <Monitor className="w-5 h-5 text-blue-400" />
                                        <span className="font-mono text-sm">{game.testedSpecs}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                        Notes
                                    </h3>
                                    <p className="text-foreground/90 leading-relaxed">
                                        {game.performanceNotes}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-3xl border border-border/50 bg-card/20 space-y-6">
                            <h3 className="text-xl font-bold mb-4">Quick Stats</h3>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-background/40">
                                <span className="text-muted-foreground text-sm">Target FPS</span>
                                <span className="font-mono font-bold text-accent text-lg">{game.fps}</span>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-background/40">
                                <span className="text-muted-foreground text-sm">Tested Chip</span>
                                <span className="font-mono font-bold text-blue-400 text-lg">{game.chip}</span>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-background/40">
                                <span className="text-muted-foreground text-sm">Emulator</span>
                                <span className="font-mono font-bold text-primary text-lg">{game.emulator}</span>
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 space-y-4">
                            <h3 className="text-lg font-bold text-primary">Contributions</h3>
                            <p className="text-sm text-muted-foreground">
                                Have different results? Tested on an M1 or M2?
                                Join the community and share your findings!
                            </p>
                            <Link href="/community" className="cta-secondary w-full justify-center text-sm py-3">
                                Submit Report
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
