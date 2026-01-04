"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ControllerVisualizerProps {
    gamepad: {
        buttons: readonly GamepadButton[];
        axes: readonly number[];
    } | null;
}

export function ControllerVisualizer({ gamepad }: ControllerVisualizerProps) {
    // Helper to check if button is pressed
    const isPressed = (index: number) => gamepad?.buttons[index]?.pressed;
    const getValue = (index: number) => gamepad?.buttons[index]?.value || 0;
    const getAxis = (index: number) => gamepad?.axes[index] || 0;

    // Default CSS classes for SVG elements
    const baseStyle = "fill-muted/20 stroke-border stroke-2 transition-all duration-75";
    const activeStyle = "fill-primary stroke-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]";

    // Stick positions
    const leftStickX = getAxis(0) * 20;
    const leftStickY = getAxis(1) * 20;
    const rightStickX = getAxis(2) * 20;
    const rightStickY = getAxis(3) * 20;

    return (
        <div className="w-full aspect-[16/10] relative select-none">
            <svg
                viewBox="0 0 800 500"
                className="w-full h-full drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* --- BODY SHAPE --- */}
                <path
                    d="M 210,120 
                       C 210,120 280,80 400,80 
                       C 520,80 590,120 590,120 
                       C 640,140 700,180 700,280 
                       C 700,420 620,480 560,480 
                       C 520,480 480,420 480,380 
                       L 320,380 
                       C 320,420 280,480 240,480 
                       C 180,480 100,420 100,280 
                       C 100,180 160,140 210,120 Z"
                    className="fill-card stroke-border stroke-[3]"
                />

                {/* --- GRIPS (Texture details) --- */}
                <path d="M 110,300 C 110,380 150,450 200,450" className="fill-none stroke-border/30 stroke-[4]" />
                <path d="M 690,300 C 690,380 650,450 600,450" className="fill-none stroke-border/30 stroke-[4]" />

                {/* --- BUMPERS & TRIGGERS (Behind) --- */}
                {/* L1 / LB */}
                <path
                    d="M 210,120 C 180,110 160,130 150,150 L 160,160 C 180,140 220,130 220,130 Z"
                    className={cn(baseStyle, isPressed(4) && activeStyle)}
                />
                {/* R1 / RB */}
                <path
                    d="M 590,120 C 620,110 640,130 650,150 L 640,160 C 620,140 580,130 580,130 Z"
                    className={cn(baseStyle, isPressed(5) && activeStyle)}
                />

                {/* --- TRIGGERS (Analog fill) --- */}
                {/* LT Text */}
                <text x="180" y="70" className={cn("text-xs font-mono font-bold fill-muted-foreground", isPressed(6) && "fill-primary")}>
                    LT {(getValue(6) * 100).toFixed(0)}%
                </text>
                <rect x="180" y="80" width="60" height="8" className="fill-muted/30 rx-2" />
                <rect x="180" y="80" width={60 * getValue(6)} height="8" className="fill-primary rx-2" />

                {/* RT Text */}
                <text x="560" y="70" className={cn("text-xs font-mono font-bold fill-muted-foreground", isPressed(7) && "fill-primary")}>
                    RT {(getValue(7) * 100).toFixed(0)}%
                </text>
                <rect x="560" y="80" width="60" height="8" className="fill-muted/30 rx-2" />
                <rect x="560" y="80" width={60 * getValue(7)} height="8" className="fill-primary rx-2" />


                {/* --- DPAD --- */}
                <g transform="translate(260, 240)">
                    {/* UP */}
                    <path d="M -15,-15 L -15,-45 L 15,-45 L 15,-15 Z"
                        className={cn(baseStyle, isPressed(12) && activeStyle)} />
                    {/* DOWN */}
                    <path d="M -15,15 L -15,45 L 15,45 L 15,15 Z"
                        className={cn(baseStyle, isPressed(13) && activeStyle)} />
                    {/* LEFT */}
                    <path d="M -15,-15 L -45,-15 L -45,15 L -15,15 Z"
                        className={cn(baseStyle, isPressed(14) && activeStyle)} />
                    {/* RIGHT */}
                    <path d="M 15,-15 L 45,-15 L 45,15 L 15,15 Z"
                        className={cn(baseStyle, isPressed(15) && activeStyle)} />
                    {/* CENTER */}
                    <rect x="-15" y="-15" width="30" height="30" className="fill-muted/50" />
                </g>

                {/* --- FACE BUTTONS --- */}
                <g transform="translate(540, 240)">
                    {/* Y (Top) */}
                    <circle cx="0" cy="-40" r="18"
                        className={cn(baseStyle, isPressed(3) && "fill-yellow-500 stroke-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]")} />
                    <text x="0" y="-35" textAnchor="middle" className="fill-foreground font-bold text-sm pointer-events-none">Y</text>

                    {/* B (Right) */}
                    <circle cx="40" cy="0" r="18"
                        className={cn(baseStyle, isPressed(1) && "fill-red-500 stroke-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]")} />
                    <text x="40" y="5" textAnchor="middle" className="fill-foreground font-bold text-sm pointer-events-none">B</text>

                    {/* A (Bottom) */}
                    <circle cx="0" cy="40" r="18"
                        className={cn(baseStyle, isPressed(0) && "fill-blue-500 stroke-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]")} />
                    <text x="0" y="45" textAnchor="middle" className="fill-foreground font-bold text-sm pointer-events-none">A</text>

                    {/* X (Left) */}
                    <circle cx="-40" cy="0" r="18"
                        className={cn(baseStyle, isPressed(2) && "fill-purple-500 stroke-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]")} />
                    <text x="-40" y="5" textAnchor="middle" className="fill-foreground font-bold text-sm pointer-events-none">X</text>
                </g>

                {/* --- ANALOG STICKS --- */}
                {/* Left Stick */}
                <g transform={`translate(${260 + leftStickX}, ${340 + leftStickY})`}>
                    <circle r="35" className="fill-background stroke-border stroke-2 shadow-xl" />
                    <circle r="30" className={cn(baseStyle, "transition-none", isPressed(10) && activeStyle)} /> {/* L3 Click */}
                    <path d="M -25,0 A 25,25 0 0 1 25,0" className="fill-none stroke-black/20 stroke-2" /> {/* Grip texture */}
                </g>
                {/* Stick Base (Static) */}
                <circle cx="260" cy="340" r="45" className="fill-none stroke-border/30 stroke-1 pointer-events-none" />


                {/* Right Stick */}
                <g transform={`translate(${540 + rightStickX}, ${340 + rightStickY})`}>
                    <circle r="35" className="fill-background stroke-border stroke-2 shadow-xl" />
                    <circle r="30" className={cn(baseStyle, "transition-none", isPressed(11) && activeStyle)} /> {/* R3 Click */}
                    <path d="M -25,0 A 25,25 0 0 1 25,0" className="fill-none stroke-black/20 stroke-2" />
                </g>
                {/* Stick Base (Static) */}
                <circle cx="540" cy="340" r="45" className="fill-none stroke-border/30 stroke-1 pointer-events-none" />


                {/* --- MENU BUTTONS --- */}
                {/* Select / Back */}
                <g transform="translate(360, 240)">
                    <rect x="-15" y="-8" width="30" height="16" rx="4"
                        className={cn(baseStyle, isPressed(8) && activeStyle)} />
                </g>

                {/* Start */}
                <g transform="translate(440, 240)">
                    <path d="M -15,0 L -15,10 L 15,0 Z" transform="scale(0.8)" className="fill-transparent" /> {/* Filler */}
                    <path d="M 0,-10 L 10,0 L 0,10 L -10,0 Z" className="fill-transparent" />
                    <rect x="-15" y="-8" width="30" height="16" rx="4"
                        className={cn(baseStyle, isPressed(9) && activeStyle)} />
                </g>

                {/* Logo / Home Button */}
                <circle cx="400" cy="200" r="20" className={cn("fill-muted/10 stroke-border", isPressed(16) && activeStyle)} />
                <path d="M 392,204 L 400,192 L 408,204 Z" className="fill-muted-foreground/50" />

            </svg>

            {/* Overlay hint if no gamepad */}
            {!gamepad && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-[2px] transition-all">
                    <p className="text-muted-foreground font-medium animate-pulse">Connect Controller...</p>
                </div>
            )}
        </div>
    );
}
