"use client";

import { useEffect, useState, useRef } from "react";

const chips = [
    { name: "M1", variant: "Air" },
    { name: "M2", variant: "Pro" },
    { name: "M3", variant: "Max" },
    { name: "M4", variant: "Pro" },
];

const ChipPerformanceSection = () => {
    const [fps, setFps] = useState(30);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && fps < 60) {
            const timer = setTimeout(() => {
                setFps(prev => Math.min(prev + 2, 60));
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isVisible, fps]);

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="relative z-10 section-container">
                {/* Chip display */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
                    {chips.map((chip, index) => (
                        <div
                            key={chip.name}
                            className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative">
                                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-mono gradient-text-cyan glow-cyan">
                                    {chip.name}
                                </span>
                                <span className="absolute -top-2 -right-6 text-sm text-muted-foreground font-medium">
                                    {chip.variant}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FPS Animation */}
                <div className={`text-center mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="inline-flex items-baseline gap-2">
                        <span className="text-6xl md:text-8xl font-bold text-mono fps-display">
                            {fps}
                        </span>
                        <span className="text-2xl md:text-3xl text-muted-foreground font-medium">FPS</span>
                    </div>
                </div>

                {/* Tagline */}
                <div className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium mb-8">
                        From M1 Air to M4 Pro — we test what actually runs.
                    </p>
                    <button className="cta-secondary">
                        Check your Mac
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ChipPerformanceSection;
