"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

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
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-6">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.1)`,
                    transition: "transform 0.25s ease-out",
                }}
            >
                {/* Base image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(11,11,15,0.55), rgba(11,11,15,0.85)),
              url('/assets/hero-background.jpg')
            `,
                    }}
                />

                {/* Edge gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            </div>

            {/* SOFT GLOW BLOBS */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {/* Title */}
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] pr-4">
                    Silicon <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent">
                        M-ulation
                    </span>
                </h1>

                {/* Subtitle */}
                <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-muted-foreground">
                        Gaming & Emulation on Apple Silicon
                    </p>
                    <p className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-secondary italic">
                        Can your Mac run Games?
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Button
                        size="xl"
                        className="bg-foreground cursor-pointer text-background hover:bg-primary transition-colors font-bold uppercase tracking-tighter px-12 h-14 text-lg"
                    >
                        Explore Games
                    </Button>
                    <Button
                        size="xl"
                        variant="outline"
                        className="border-foreground/20 cursor-pointer hover:border-accent hover:text-black bg-transparent font-bold uppercase tracking-tighter px-12 h-14 text-lg"
                    >
                        Browse Emulators
                    </Button>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-12 flex flex-col items-center gap-2 text-[10px] tracking-[0.5em] uppercase text-muted-foreground opacity-60">
                Scroll
                <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
        </section>
    )
}
