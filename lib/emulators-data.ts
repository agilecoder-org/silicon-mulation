export type EmulatorDetail = {
    name: string;
    slug: string;
    platform: string;
    status: "Perfect" | "Excellent" | "Stable" | "Demanding" | "Experimental" | "Flexible";
    website: string;
    downloadUrl: string;
    biosUrl?: string; // Optional BIOS link
    description: string;
    appleSiliconNotes: string;
};

export const EMULATOR_TEXT_DATA: Record<string, Omit<EmulatorDetail, "logo">> = {
    "rpcs3": {
        name: "RPCS3",
        slug: "rpcs3",
        platform: "PlayStation 3",
        status: "Demanding",
        website: "https://rpcs3.net",
        downloadUrl: "https://rpcs3.net/download",
        biosUrl: "https://www.playstation.com/en-us/support/hardware/ps3/system-software/", // Official Firmware
        description: "RPCS3 is the world's first open-source Sony PlayStation 3 emulator. It's written in C++ for Windows, Linux, macOS and FreeBSD.",
        appleSiliconNotes: "RPCS3 on macOS relies on MoltenVK to translate Vulkan to Metal. M3/M4 chips see significant boosts due to hardware raytracing support.",
    },
    "pcsx2": {
        name: "PCSX2",
        slug: "pcsx2",
        platform: "PlayStation 2",
        status: "Stable",
        website: "https://pcsx2.net",
        downloadUrl: "https://pcsx2.net/downloads",
        // No direct BIOS download link (illegal), linking to guide usually, but for now leaving empty or generic
        biosUrl: "https://pcsx2.net/docs/usage/setup/#bios-setup",
        description: "A free and open-source PlayStation 2 (PS2) emulator. Native Metal support makes it incredibly efficient on Apple Silicon.",
        appleSiliconNotes: "Runs nearly flawlessly on base M1 Air. Native Metal renderer eliminates most graphical glitches found in older versions.",
    },
    "shadps4": {
        name: "shadPS4",
        slug: "shadps4",
        platform: "PlayStation 4",
        status: "Experimental",
        website: "https://github.com/shadps4-emu/shadPS4",
        downloadUrl: "https://github.com/shadps4-emu/shadPS4/releases",
        description: "An emerging PS4 emulator. Currently very experimental but showing rapid progress for 2D and light 3D games.",
        appleSiliconNotes: "Requires macOS Sequoia (beta) and latest MoltenVK. Expect crashes and missing textures.",
    },
    "ppsspp": {
        name: "PPSSPP",
        slug: "ppsspp",
        platform: "PSP",
        status: "Excellent",
        website: "https://ppsspp.org",
        downloadUrl: "https://ppsspp.org/download",
        description: "The gold standard for PSP emulation. Extremely optimized and feature-rich.",
        appleSiliconNotes: "Can run at 8K resolution on M1 chips without creating significant heat. One of the best emulators on the platform.",
    },
    "retroarch": {
        name: "RetroArch",
        slug: "retroarch",
        platform: "Multi-System",
        status: "Flexible",
        website: "https://retroarch.com",
        downloadUrl: "https://retroarch.com/?page=platforms",
        description: "A frontend for emulators (cores). Powerful but has a steeper learning curve.",
        appleSiliconNotes: "Supports Metal directly for low-latency input and shaders.",
    },
    "mesen": {
        name: "Mesen",
        slug: "mesen",
        platform: "NES / SNES / GB",
        status: "Perfect",
        website: "https://mesen.ca",
        downloadUrl: "https://mesen.ca",
        description: "High-accuracy NES/SNES emulator. Focuses on perfect preservation of hardware behavior.",
        appleSiliconNotes: "Requires .NET runtime. Heavier than other emulators but provides the most accurate experience.",
    }
};
