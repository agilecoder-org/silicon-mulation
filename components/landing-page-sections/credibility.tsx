"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
    { value: 500, suffix: "+", label: "Games Tested" },
    { value: 4, suffix: "", label: "Chip Generations" },
    { value: 100, suffix: "%", label: "Real Gameplay Footage" },
];

const CredibilitySection = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
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
        if (!isVisible) return;

        const intervals = stats.map((stat, index) => {
            const increment = Math.ceil(stat.value / 40);
            return setInterval(() => {
                setCounts(prev => {
                    const newCounts = [...prev];
                    if (newCounts[index] < stat.value) {
                        newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
                    }
                    return newCounts;
                });
            }, 30);
        });

        return () => intervals.forEach(clearInterval);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="relative py-36">
            {/* Subtle texture background */}
            <div className="absolute inset-0 bg-background" />
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 section-container">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="stat-number mb-4">
                                    {counts[index]}
                                    {stat.suffix}
                                </div>
                                <p className="text-lg text-muted-foreground font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Tagline */}
                    <div
                        className={`mt-20 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            Benchmarks from <span className="text-foreground font-medium">M1 to M4</span>.
                            Real hardware. Real results.
                        </p>
                    </div>

                    {/* 🔽 NEW: Proof & Links */}
                    <div
                        className={`mt-14 max-w-3xl mx-auto transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            We make videos testing a wide range of emulators and games on Apple Silicon.
                            Every tool, configuration, and downloadable used during testing is documented
                            and linked — so you can reproduce the results yourself.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                            <Link
                                href="/community"
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                                Watch Test Videos
                            </Link>
                            <Link
                                href="/tools"
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                                Tools & Downloads
                            </Link>
                            <Link
                                href="/games"
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                                View Tested Games
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CredibilitySection;
