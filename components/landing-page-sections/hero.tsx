"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30
            const y = (e.clientY / window.innerHeight - 0.5) * 30
            setMouse({ x, y })
        }

        window.addEventListener("mousemove", onMove)
        return () => window.removeEventListener("mousemove", onMove)
    }, [])

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center px-4 md:px-6 text-center py-12 md:py-0">

            {/* CINEMATIC BACKGROUND */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.1)`,
                    transition: "transform 0.25s ease-out",
                }}
            >
                {/* Base image + dark tint */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(11,11,15,0.55), rgba(11,11,15,0.85)),
              url('/assets/hero-background.jpg')
            `,
                    }}
                />

                {/* Edge gradients for focus */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            </div>

            {/* SOFT AMBIENT GLOWS */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 blur-[100px] md:blur-[140px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-accent/10 blur-[80px] md:blur-[120px] rounded-full" />

            {/* HERO CONTENT */}
            <div className="relative z-10 max-w-4xl space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* TITLE */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase leading-[0.9]">
                    Silicon <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent">
                        M-ulation
                    </span>
                </h1>

                {/* IDENTITY + AUTHORITY */}
                <div className="space-y-3">
                    <p className="text-xs md:text-base font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground">
                        Gaming & Emulation on Apple Silicon
                    </p>

                    <p className="text-xl md:text-4xl font-mono font-semibold tracking-tight text-foreground">
                        Tested. Measured. Proven.
                    </p>
                </div>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 pt-4">
                    <Button
                        size="xl"
                        asChild
                        className="bg-foreground text-background hover:bg-primary transition-colors font-semibold uppercase tracking-wide w-full sm:w-auto px-8 md:px-10 h-12 md:h-13 text-sm md:text-base"
                    >
                        <Link href="/games">Explore Games</Link>
                    </Button>

                    <Button
                        size="xl"
                        variant="outline"
                        asChild
                        className="border-foreground/30 hover:border-accent hover:text-black transition-colors font-semibold uppercase tracking-wide w-full sm:w-auto px-8 md:px-10 h-12 md:h-13 text-sm md:text-base bg-transparent"
                    >
                        <Link href="/emulation">Browse Emulators</Link>
                    </Button>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-6 md:bottom-12 flex flex-col items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-muted-foreground opacity-60">
                Scroll
                <div className="w-px h-8 md:h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
        </section>
    )
}
