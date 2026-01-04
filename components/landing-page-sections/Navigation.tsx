"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Emulation", href: "/emulators" },
    { label: "Games", href: "/games" },
    { label: "Tools", href: "/tools" },
    { label: "Blogs", href: "/blogs" },
    { label: "Community", href: "/community" },
];

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
                        <Image
                            src="/assets/logo.png"
                            alt="Silicon M-ulation Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-lg text-foreground">
                            Silicon M-ulation
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile nav */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50">
                        <div className="py-4 px-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
