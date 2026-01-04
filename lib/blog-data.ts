export type Category = "All" | "Deep Dive" | "Tutorial" | "News" | "Community";

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: Category;
    readTime: string;
    imageGradient: string;
    content: string; // HTML content
}

export const CATEGORIES: Category[] = ["All", "Deep Dive", "Tutorial", "News", "Community"];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Understanding GPTK 3.0 Performance Scaling",
        excerpt: "We analyze how the latest Game Porting Toolkit handles AVX2 instructions on M4 chips compared to the previous generation.",
        date: "Oct 12, 2025",
        author: "Alex Chen",
        category: "Deep Dive",
        readTime: "8 min read",
        imageGradient: "from-blue-500/20 to-purple-500/20",
        content: `
            <h2>The Leaps in Translation</h2>
            <p>With the release of Game Porting Toolkit 3.0, Apple has significantly overhauled the D3D12 to Metal translation layer. The new AVX2 instruction handling on M-series chips, particularly the M4, allows for near-native performance in vector-heavy workloads.</p>
            
            <h3>Key Improvements</h3>
            <ul>
                <li><strong>Shader Compilation:</strong> Reduced stuttering by 40% in Unreal Engine 5 titles.</li>
                <li><strong>Geometry Pipelines:</strong> Mesh shaders are now fully supported, enabling higher polygon counts without CPU bottlenecks.</li>
                <li><strong>Memory Management:</strong> Unified memory access patterns have been optimized for 8GB models.</li>
            </ul>

            <p>Our benchmarks show a 25% fps increase in <em>Cyberpunk 2077</em> and a massive 50% boost in <em>Elden Ring</em> when using the new "Aggressive Geometry" flag.</p>
            
            <h3>What This Means for Emulation</h3>
            <p>For emulator developers, GPTK 3.0 provides a roadmap for better maximizing the Metal API. We expect Ryujinx and RPCS3 to integrate these findings into their MoltenVK implementations soon.</p>
        `
    },
    {
        id: 2,
        title: "Setting up Ryujinx for Maximum Efficiency",
        excerpt: "A comprehensive guide to configuring memory mapping and shader compilation for stutter-free Switch emulation on macOS.",
        date: "Oct 10, 2025",
        author: "Sarah Miller",
        category: "Tutorial",
        readTime: "12 min read",
        imageGradient: "from-emerald-500/20 to-teal-500/20",
        content: `
            <h2>Optimizing Your Switch Emulation</h2>
            <p>Ryujinx is a powerful emulator, but macOS users often face unique challenges with shader compilation stutter. This guide walks you through the best settings for M1/M2/M3/M4 chips.</p>

            <h3>1. Memory Manager Mode</h3>
            <p>Set this to <strong>Host Unchecked</strong>. On Apple Silicon, this provides the best performance/stability balance. "Host Checked" acts safer but incurs a 15% performance penalty.</p>

            <h3>2. Graphics Backend</h3>
            <p>Ensure you are using the <strong>Vulkan</strong> backend. OpenGL on macOS is deprecated and lacks many features required for modern Switch titles.</p>

            <h3>3. Resolution Scaling</h3>
            <p>For M1/M2 Air: Stick to Native (720p/1080p).<br>
            For M1/M2/M3 Pro/Max: You can comfortably scale to 2x (4K) for most titles.</p>

            <blockquote>
                <strong>Pro Tip:</strong> Always pre-compile your shader cache if you have sharing enabled. It eliminates the initial stutter when loading new areas.
            </blockquote>
        `
    },
    {
        id: 3,
        title: "Silicon-Mulation 2.0 Roadmap Revealed",
        excerpt: "Here is what we are planning for the next major release: Cloud saves, community configs, and auto-updater integration.",
        date: "Oct 05, 2025",
        author: "Team Lead",
        category: "News",
        readTime: "4 min read",
        imageGradient: "from-orange-500/20 to-red-500/20",
        content: `
            <h2>The Future is Connected</h2>
            <p>Silicon-Mulation started as a simple frontend, but 2.0 aims to be a complete ecosystem. Here are the three pillars of our next major release.</p>

            <h3>Cloud Saves</h3>
            <p>Sync your game saves across devices using iCloud or Google Drive. No more dragging files between your MacBook and Mac Mini.</p>

            <h3>Community Configs</h3>
            <p>Don't know the best settings for <em>Zelda: TOTK</em>? Version 2.0 will pull crowdsourced, verified config files for each game, optimizing performance instantly.</p>

            <h3>Auto-Updater</h3>
            <p>We are partnering with emulator developers to fetch the latest nightly builds directly within the app, ensuring you always have the latest fixes without manually checking GitHub.</p>
        `
    },
    {
        id: 4,
        title: "Community Spotlight: October 2025",
        excerpt: "Highlighting the best custom shader presets and controller mappings created by our amazing community this month.",
        date: "Oct 01, 2025",
        author: "Community Mgr",
        category: "Community",
        readTime: "6 min read",
        imageGradient: "from-pink-500/20 to-rose-500/20",
        content: `
            <h2>Creators of the Month</h2>
            <p>This month we've seen some incredible contributions from our Discord community. Here are the improved assets you should check out.</p>

            <h3>"Cinematic HDR" ReShade by RetroFuture</h3>
            <p>This preset brings standard SDR games to life on XDR displays. It uses smart contrast curves to fake HDR metadata, making colors pop on MacBook Pros.</p>

            <h3>Dual Sense "Haptic" Profile by ControllerGod</h3>
            <p>A custom mapping profile for RPCS3 that translates rumble events into nuanced haptic feedback for DualSense controllers. It's a game-changer for racing titles.</p>
        `
    },
    {
        id: 5,
        title: "Why Vulkan Metal Backend Matters",
        excerpt: "Exploring the technical implications of MoltenVK updates and what it means for DX12 translation layers.",
        date: "Sep 28, 2025",
        author: "Dev Team",
        category: "Deep Dive",
        readTime: "15 min read",
        imageGradient: "from-indigo-500/20 to-cyan-500/20",
        content: `
            <h2>Bridging the API Gap</h2>
            <p>Vulkan is the industry standard for cross-platform 3D graphics, but Apple devices speak Metal. MoltenVK is the bridge, and it just got a lot stronger.</p>

            <h3>Tessellation Support</h3>
            <p>The latest update finally brings full tessellation support to Metal via Vulkan. This fixes the "spiky terrain" bugs seen in games like <em>The Witcher 3</em>.</p>

            <h3>Transform Feedback</h3>
            <p>Crucial for DX10/11 games, improved transform feedback means less graphical glitching in older titles running through Wine/Crossover.</p>

            <p>As these layers mature, the gap between "Native Mac Gaming" and "Emulated Mac Gaming" continues to shrink.</p>
        `
    }
];
