import { ArrowRight, Cpu, Zap } from "lucide-react";

const ToolsTeaserSection = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

            <div className="relative z-10 section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Visual */}
                    <div className="relative order-2 lg:order-1">
                        {/* Abstract chip visualization */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Outer glow ring */}
                            <div className="absolute inset-8 rounded-full border border-primary/20 animate-pulse-slow" />
                            <div className="absolute inset-16 rounded-full border border-accent/20 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                            <div className="absolute inset-24 rounded-full border border-primary/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />

                            {/* Center chip icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl animate-glow" />
                                    <div className="relative bg-card border border-primary/30 rounded-2xl p-8 box-glow-cyan">
                                        <Cpu className="w-16 h-16 text-primary" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating data points */}
                            <div className="absolute top-8 left-8 chip-badge-glow animate-float">
                                <Zap className="w-3 h-3 text-primary mr-1" />
                                <span className="text-mono text-xs">60 FPS</span>
                            </div>
                            <div className="absolute bottom-12 right-8 chip-badge animate-float" style={{ animationDelay: '1s' }}>
                                <span className="text-mono text-xs">M4 Pro</span>
                            </div>
                            <div className="absolute top-1/3 right-4 chip-badge animate-float" style={{ animationDelay: '2s' }}>
                                <span className="text-mono text-xs text-accent">Compatible</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 chip-badge-glow mb-6">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Performance Tool</span>
                        </div>

                        <h2 className="heading-section text-foreground mb-6">
                            Can My Mac <span className="gradient-text-cyan">Run This?</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            No guesses. Just data. Enter your Mac model and the game you want to play.
                            Get instant compatibility results with real performance benchmarks.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Instant compatibility check",
                                "Real FPS benchmarks from your chip",
                                "Recommended settings for best performance",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-foreground">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="cta-primary group">
                            Try the Tool
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsTeaserSection;
