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

export const GAME_STATUSES = ["Excellent", "Playable", "Not Playable"] as const;
export type GameStatus = typeof GAME_STATUSES[number];

export interface GameDetail {
    id: number;
    name: string;
    emulator: string;
    chip: string;
    fps: string;
    status: GameStatus;
    // We'll keep image as string for now to avoid static import issues in data file if strictly needed, 
    // but typically Next.js images are StaticImageData. 
    // For this file to be pure TS without image imports, we might need a workaround or just keep it simple.
    // Let's assume we pass the image *object* or path. 
    // Since the current page.tsx uses imports, we can keep the data there OR export a function/array that accepts images.
    // For simplicity in this file, let's keep the type generic for image or handle data in page.tsx.
    // However, the plan said "Export a list of games". 
    // Let's define the type here and export the data from here, but we will need to handle image imports.
    // Since we cant easily import images here without changing file extension to .tsx or worrying about bundler, 
    // let's define the SHAPE here, and maybe keep the DATA in page.tsx *OR* move data to a .tsx file.
    // Actually, `lib/emulators-data.ts` is .ts. Importing images might work if configured, but let's just use string paths or keep data in page.tsx for now if images are local assets.
    // Wait, the plan said "Export a list of games (migrating from page.tsx)".
    // Let's try to move it. If imports fail, we can fix.
    image?: any; // StaticImageData placeholder
    genre: string;
}

// Since we can't easily import local images in a pure .ts lib file without some config assurance, 
// and the original file has imports like `import gameGow3 from "@/assets/games/gow3.jpg";`
// We will export the ARRAY from here but we might need to change this file to .tsx or just rely on the user having image declarations. 
// Actually, let's just export the helper types and constants here, and keep the specific game list with image imports in `page.tsx` or a new `data/games.ts` (which likely doesn't exist).
// To follow the plan strictly "Export a list of games", I should probably create a new file or move this to a .tsx if I want to include image imports easily. 
// BUT, I can just use strings for image paths if they were in public. They are in assets.
// Let's stick to defining types and constants here to be safe and CLEAN, 
// and then I'll construct the data in `page.tsx` or a new component to avoid breaking image imports.
// RE-READING PLAN: "Export a list of games (migrating from page.tsx)".
// Okay, I will try to support it. But looking at the file `lib/emulators-data.ts`, it seems it's just text data now.
// Let's just add types and constants for now. I will refactor the data in page.tsx.

