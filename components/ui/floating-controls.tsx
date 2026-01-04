"use client";

import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FloatingControls() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            {/* Scroll to Top Button */}
            {showTop && (
                <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:bg-muted transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 text-foreground" />
                </Button>
            )}

            {/* Community Chat Button */}
            <Link href="/community">
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-110 active:scale-95"
                    aria-label="Community Chat"
                >
                    <MessageSquare className="w-6 h-6" />
                </Button>
            </Link>
        </div>
    );
}
