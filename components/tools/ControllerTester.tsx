"use client";

import { useRef, useState, useEffect } from "react";
import { Gamepad2, CheckCircle2, RefreshCw, ChevronsUpDown, Check, AlertTriangle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ControllerVisualizer } from "./ControllerVisualizer";
import { ControllerMetrics } from "./ControllerMetrics";


interface GamepadState {
    id: string;
    index: number;
    buttons: readonly GamepadButton[];
    axes: readonly number[];
    connected: boolean;
    timestamp: number;
    mapping: GamepadMappingType;
}

type ControllerType = "xbox" | "playstation" | "nintendo" | "generic";

const getControllerInfo = (id: string, mapping: GamepadMappingType) => {
    const lowerId = id.toLowerCase();

    // Type Detection
    let type: ControllerType = "generic";
    if (lowerId.includes("xbox") || lowerId.includes("microsoft") || lowerId.includes("x-input")) type = "xbox";
    else if (lowerId.includes("dualshine") || lowerId.includes("dualshock") || lowerId.includes("dualsense") || lowerId.includes("sony") || lowerId.includes("playstation")) type = "playstation";
    else if (lowerId.includes("nintendo") || lowerId.includes("switch") || lowerId.includes("pro controller")) type = "nintendo";

    // Check if browser considers it standard via ID string (Chrome/Edge often append this)
    const isStandard = mapping === "standard" || lowerId.includes("standard gamepad");

    // MacOS Compatibility Check
    // MacOS often maps generic controllers weirdly if they don't report "standard" mapping
    // We strictly check for generic types that are NOT standard.
    const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
    const mayHaveIssues = isMac && type === "generic" && !isStandard;

    return { type, mayHaveIssues, isStandard };
};

export function ControllerTester() {
    const [gamepads, setGamepads] = useState<Record<number, GamepadState>>({});
    const [activePadIndex, setActivePadIndex] = useState<number | null>(null);
    const [pollingRate, setPollingRate] = useState(0);

    // Polling rate calcs
    const framesRef = useRef(0);
    const lastTimeRef = useRef(performance.now());
    const requestRef = useRef<number>(0);

    const scanGamepads = () => {
        const connectedGamepads = navigator.getGamepads();
        const gamepadState: Record<number, GamepadState> = {};
        let firstIndex = null;

        for (let i = 0; i < connectedGamepads.length; i++) {
            const gp = connectedGamepads[i];
            if (gp) {
                if (firstIndex === null) firstIndex = gp.index;
                gamepadState[gp.index] = {
                    id: gp.id,
                    index: gp.index,
                    buttons: gp.buttons,
                    axes: gp.axes,
                    connected: gp.connected,
                    timestamp: gp.timestamp,
                    mapping: gp.mapping
                };
            }
        }

        setGamepads(gamepadState);

        // Auto-select first gamepad if none selected or selected is active
        if (activePadIndex === null && firstIndex !== null) {
            setActivePadIndex(firstIndex);
        }

        // Calculate Polling Rate
        framesRef.current++;
        const now = performance.now();
        if (now - lastTimeRef.current >= 1000) {
            setPollingRate(framesRef.current);
            framesRef.current = 0;
            lastTimeRef.current = now;
        }

        requestRef.current = requestAnimationFrame(scanGamepads);
    };

    useEffect(() => {
        window.addEventListener("gamepadconnected", scanGamepads);
        window.addEventListener("gamepaddisconnected", scanGamepads);
        requestRef.current = requestAnimationFrame(scanGamepads);

        return () => {
            window.removeEventListener("gamepadconnected", scanGamepads);
            window.removeEventListener("gamepaddisconnected", scanGamepads);
            cancelAnimationFrame(requestRef.current);
        };
    }, [activePadIndex]); // Re-bind if needed, though scanGamepads usually stable

    const activeGamepad = activePadIndex !== null ? gamepads[activePadIndex] || null : null;

    return (
        <div className="pb-10">
            {/* Header / Selector */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Gamepad2 className="w-6 h-6 text-primary" />
                        Connected Devices
                    </h2>
                </div>

                <div className="flex gap-2">
                    {Object.keys(gamepads).length > 0 ? (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className="w-[280px] justify-between bg-card/50 hover:text-white border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all text-foreground h-12 rounded-xl"
                                >
                                    {activePadIndex !== null && gamepads[activePadIndex] ? (
                                        <span className="flex items-center gap-3 truncate font-medium">
                                            <div className="p-1 bg-primary/10 rounded-md">
                                                <Gamepad2 className="w-4 h-4 text-primary" />
                                            </div>
                                            {gamepads[activePadIndex].id}
                                        </span>
                                    ) : (
                                        <span className="text-muted-foreground">Select Controller</span>
                                    )}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[280px] p-2 bg-card/95 backdrop-blur-xl border-border/50 shadow-2xl rounded-xl">
                                <div className="space-y-1">
                                    <h4 className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                                        Available Devices
                                    </h4>
                                    {Object.values(gamepads).map((gp) => (
                                        <div
                                            key={gp.index}
                                            className={cn(
                                                "relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm outline-none transition-colors",
                                                activePadIndex === gp.index
                                                    ? "bg-primary/10 text-primary font-medium"
                                                    : "hover:bg-muted/50 text-foreground"
                                            )}
                                            onClick={() => setActivePadIndex(gp.index)}
                                        >
                                            <div className={cn(
                                                "mr-3 flex h-5 w-5 items-center justify-center rounded-full border",
                                                activePadIndex === gp.index
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-muted-foreground/30"
                                            )}>
                                                {activePadIndex === gp.index && <Check className="h-3 w-3" />}
                                            </div>
                                            <span className="truncate flex-1">{gp.id}</span>
                                            <span className="ml-2 text-xs text-muted-foreground font-mono bg-muted/30 px-1.5 py-0.5 rounded">
                                                #{gp.index}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <div className="px-5 py-3 rounded-xl bg-muted/10 border border-dashed border-border/50 text-sm text-muted-foreground flex items-center gap-3">
                            <RefreshCw className="w-4 h-4 animate-spin text-primary" />
                            <span>Scanning for controllers...</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Split View */}
            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left: Visualizer (2 cols wide) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-card/40 border border-border/50 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                        {/* Background Effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                        <div className="relative z-10">
                            <ControllerVisualizer gamepad={activeGamepad} />
                        </div>


                        {/* Footer in Visualizer Card */}
                        <div className="flex justify-between items-end mt-8 pt-6 border-t border-border/30">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Device ID</p>
                                <p className="font-mono text-xs text-foreground max-w-md truncate" title={activeGamepad?.id}>
                                    {activeGamepad?.id || "N/A"}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                {activeGamepad && (() => {
                                    const { type, isStandard } = getControllerInfo(activeGamepad.id, activeGamepad.mapping);
                                    return (
                                        <>
                                            <Badge variant="outline" className="capitalize bg-secondary text-secondary-foreground border-secondary">
                                                {type}
                                            </Badge>
                                            <Badge variant="outline" className={cn(
                                                "border",
                                                isStandard ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-orange-500/10 text-orange-500 border-orange-500/20"
                                            )}>
                                                {isStandard ? "Standard Mapping" : "Non-Standard"}
                                            </Badge>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>

                    {activeGamepad && (() => {
                        const { mayHaveIssues, type } = getControllerInfo(activeGamepad.id, activeGamepad.mapping);
                        if (mayHaveIssues) {
                            return (
                                <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>Potential Mac Compatibility Issue</AlertTitle>
                                    <AlertDescription>
                                        This generic controller does not report "Standard" mapping. On macOS, buttons may be scrambled.
                                        Try using a tool like "SDL2 Gamepad Mapper" or check system settings if inputs look wrong.
                                    </AlertDescription>
                                </Alert>
                            );
                        }
                        return null;
                    })()}

                    <div className="bg-muted/10 border border-border/30 rounded-xl p-4 flex gap-4 items-start">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Info className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Testing Instructions</h4>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                Press every button and rotate analog sticks to the edge to verify range.
                                Some browsers map buttons differently. This tool shows the raw Standard Gamepad API output.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Metrics (1 col wide) */}
                <div className="lg:col-span-1">
                    <ControllerMetrics gamepad={activeGamepad} pollingRate={pollingRate} />
                </div>

            </div>
        </div>
    );
}
