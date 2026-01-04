import { Youtube } from "lucide-react";

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
                        <a href="/games" className="hover:text-foreground transition-colors">Games</a>
                        <a href="/emulators" className="hover:text-foreground transition-colors">Emulators</a>
                        <a href="/benchmarks" className="hover:text-foreground transition-colors">Benchmarks</a>
                        <a href="/tools" className="hover:text-foreground transition-colors">Tools</a>
                        <a href="/about" className="hover:text-foreground transition-colors">About</a>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.youtube.com/@m-ulation" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
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
