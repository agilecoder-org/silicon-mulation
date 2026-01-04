import { Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative py-16 border-t border-border/50">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold gradient-text-cyan mb-2">Silicon M-ulation</h3>
                        <p className="text-sm text-muted-foreground">
                            The definitive Mac gaming & emulation reference.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <Link href="/games" className="hover:text-foreground transition-colors">Games</Link>
                        <Link href="/emulators" className="hover:text-foreground transition-colors">Emulators</Link>
                        <Link href="/benchmarks" className="hover:text-foreground transition-colors">Benchmarks</Link>
                        <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
                        <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.youtube.com/@m-ulation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Visit Silicon M-ulation on YouTube"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
                    <p>© 2026 Silicon M-ulation. Not affiliated with Apple Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
