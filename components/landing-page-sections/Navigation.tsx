"use client";

import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Background blur */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-border/50" />

            <div className="relative section-container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Cpu className="w-6 h-6 text-primary" />
                        <span className="font-bold text-lg text-foreground">Silicon M-ulation</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/games" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Games</Link>
                        <Link href="/emulators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Emulators</Link>
                        <Link href="/benchmarks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benchmarks</Link>
                        <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tools</Link>
                        <button className="cta-primary !py-2 !px-4 text-sm">
                            Check Compatibility
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile nav */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50">
                        <div className="py-4 px-6 space-y-4">
                            <Link href="/games" className="block text-foreground hover:text-primary transition-colors">Games</Link>
                            <Link href="/emulators" className="block text-foreground hover:text-primary transition-colors">Emulators</Link>
                            <Link href="/benchmarks" className="block text-foreground hover:text-primary transition-colors">Benchmarks</Link>
                            <Link href="/tools" className="block text-foreground hover:text-primary transition-colors">Tools</Link>
                            <button className="cta-primary w-full !py-3 text-sm">
                                Check Compatibility
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
