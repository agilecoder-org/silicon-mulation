"use client";

import { Activity, Zap, MousePointer2, GitCommit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ControllerMetricsProps {
    gamepad: {
        id: string;
        index: number;
        buttons: readonly GamepadButton[];
        axes: readonly number[];
        timestamp: number;
    } | null;
    pollingRate: number;
}

export function ControllerMetrics({ gamepad, pollingRate }: ControllerMetricsProps) {
    if (!gamepad) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-border/50 rounded-2xl bg-muted/5">
                <Activity className="w-12 h-12 text-muted-foreground/20 mb-4" />
                <p className="text-muted-foreground">Waiting for device...</p>
            </div>
        );
    }

    const formatFloat = (n: number) => n.toFixed(3);

    return (
        <div className="space-y-6">

            {/* Meta Stats Row */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/50 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-bold">
                        <Activity className="w-3.5 h-3.5" />
                        Polling Rate
                    </div>
                    <div className="text-2xl font-mono font-bold text-foreground">
                        {pollingRate} <span className="text-sm text-muted-foreground font-sans font-normal">Hz</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/50 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-bold">
                        <Zap className="w-3.5 h-3.5" />
                        Timestamp
                    </div>
                    <div className="text-xl font-mono text-foreground truncate" title={gamepad.timestamp.toString()}>
                        {(gamepad.timestamp / 1000).toFixed(2)}s
                    </div>
                </div>
            </div>

            {/* Axis Data */}
            <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden">
                <div className="bg-muted/30 px-4 py-3 border-b border-border/50 flex items-center gap-2">
                    <MousePointer2 className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-sm">Axis Values</h3>
                </div>
                <div className="p-4 space-y-4">
                    {gamepad.axes.map((val, i) => (
                        <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs text-muted-foreground font-mono">
                                <span>AXIS {i}</span>
                                <span className={Math.abs(val) > 0.05 ? "text-primary font-bold" : ""}>
                                    {formatFloat(val)}
                                </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                                <div className="absolute top-0 bottom-0 w-[2px] bg-foreground/20 left-1/2 -translate-x-1/2" /> {/* Center marker */}
                                <div
                                    className="absolute h-full bg-primary transition-all duration-75 ease-linear"
                                    style={{
                                        width: `${Math.abs(val) * 50}%`,
                                        left: val < 0 ? `${(1 + val) * 50}%` : '50%',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Button Matrix */}
            <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden">
                <div className="bg-muted/30 px-4 py-3 border-b border-border/50 flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-emerald-500" />
                    <h3 className="font-semibold text-sm">Button Matrix</h3>
                </div>
                <div className="p-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {gamepad.buttons.map((btn, i) => (
                        <div
                            key={i}
                            className={`
                                flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-75
                                ${btn.pressed
                                    ? "bg-primary/20 border-primary text-primary shadow-sm scale-95"
                                    : "bg-background border-border/50 text-muted-foreground"
                                }
                            `}
                        >
                            <span className="text-[10px] font-bold uppercase opacity-60">B{i}</span>
                            <span className="text-xs font-mono font-bold">{formatFloat(btn.value)}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
