import { Terminal, Gamepad, Monitor, Smartphone, Tv, Layers } from "lucide-react";

const emulators = [
    { name: "Ryujinx", platform: "Nintendo Switch", icon: Gamepad },
    { name: "Dolphin", platform: "GameCube / Wii", icon: Tv },
    { name: "RPCS3", platform: "PlayStation 3", icon: Monitor },
    { name: "PCSX2", platform: "PlayStation 2", icon: Monitor },
    { name: "RetroArch", platform: "Multi-System", icon: Layers },
    { name: "PPSSPP", platform: "PlayStation Portable", icon: Smartphone },
];

const EmulatorsSection = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 section-container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 chip-badge mb-6">
                        <Terminal className="w-4 h-4" />
                        <span className="text-sm text-muted-foreground">Comprehensive Database</span>
                    </div>
                    <h2 className="heading-section text-foreground mb-6">
                        Every Emulator. <span className="gradient-text-cyan">One Reference.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Performance benchmarks, compatibility charts, and optimization guides for every major emulator on Apple Silicon.
                    </p>
                </div>

                {/* Emulator icons - organic layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16">
                    {emulators.map((emulator, index) => (
                        <div
                            key={emulator.name}
                            className="group text-center"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="emulator-icon mx-auto mb-4 group-hover:border-primary/50">
                                <emulator.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {emulator.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{emulator.platform}</p>
                        </div>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-8 border-t border-b border-border/50">
                    <div className="text-center">
                        <span className="block text-3xl md:text-4xl font-bold text-mono gradient-text-cyan">12+</span>
                        <span className="text-sm text-muted-foreground">Emulators Covered</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl md:text-4xl font-bold text-mono gradient-text-cyan">8</span>
                        <span className="text-sm text-muted-foreground">Platforms Supported</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl md:text-4xl font-bold text-mono gradient-text-cyan">Daily</span>
                        <span className="text-sm text-muted-foreground">Updates</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmulatorsSection;
