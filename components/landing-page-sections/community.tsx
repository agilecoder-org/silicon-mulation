import { Users, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const CommunitySection = () => {
    return (
        <section className="relative py-24 border-t border-border/50">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Community */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="emulator-icon !w-12 !h-12 group-hover:border-primary/50">
                                    <Users className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">Community Tested</h3>
                            </div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Our benchmarks come from real Mac users testing games on their own hardware.
                                Join the community and contribute your results.
                            </p>
                            <Link href="/community" className="inline-flex items-center text-primary hover:underline group/link">
                                Join the Community
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>

                        {/* Deep Dives */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="emulator-icon !w-12 !h-12 group-hover:border-accent/50">
                                    <FileText className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">Deep Dives</h3>
                            </div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Technical breakdowns of Apple Silicon architecture, Metal API performance,
                                and emulator optimization techniques.
                            </p>
                            <Link href="/blogs" className="inline-flex items-center text-accent hover:underline group/link">
                                Read Articles
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
