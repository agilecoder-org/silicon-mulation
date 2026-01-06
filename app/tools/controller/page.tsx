"use client";

import { ControllerTester } from "@/components/tools/ControllerTester";

export default function ControllerTesterPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background via-background to-muted/5">
            <div className="section-container space-y-12">

                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="heading-section">Controller Tester</h1>
                        <p className="text-lg text-muted-foreground mt-2">
                            Verify buttons, sticks, and triggers in real time
                        </p>
                    </div>
                </div>

                <ControllerTester />

                {/* Troubleshooting Info */}
                <div className="bg-muted/30 border border-border/50 rounded-2xl p-8 text-center space-y-4">
                    <h3 className="text-xl font-bold">Controller Not Working in Games?</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        If your controller is detected here but doesn't work natively in emulators or games,
                        macOS might not be mapping it correctly. We recommend using a key mapper tool to force compatibility.
                    </p>
                    <div className="pt-2">
                        <a
                            href="https://yukkurigames.com/enjoyable/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                        >
                            Download Enjoyable
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
