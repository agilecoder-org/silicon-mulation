import { StaticImageData } from "next/image";

import gameGow1 from "@/assets/games/gow1.jpg";
import gameGow2 from "@/assets/games/gow2.jpg";
import gameGow3 from "@/assets/games/gow3-cover.jpg";
import gameGowAscension from "@/assets/games/gow-ascension.jpg";
import gameRe6 from "@/assets/games/resident-evil-6.jpg";
import gameTombRaider from "@/assets/games/tomb-raider.jpeg";
import gameUncharted3 from "@/assets/games/uncharted-3.jpeg";
import gameDemonSouls from "@/assets/games/demon-souls.jpg";

export type GameStatus = "Excellent" | "Playable" | "Not Playable";

export interface GameDetail {
    id: number;
    slug: string;
    name: string;
    emulator: string;
    chip: string;
    fps: string;
    status: GameStatus;
    image: StaticImageData;
    genre: string;
    releaseYear: string;
    developer: string;
    description: string;
    testedSpecs: string;
    performanceNotes: string;
}

export const ALL_GAMES: GameDetail[] = [
    {
        id: 101,
        slug: "god-of-war-1",
        name: "God of War I (HD Remastered)",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "60",
        status: "Excellent",
        image: gameGow1,
        genre: "Action",
        releaseYear: "2010",
        developer: "Santa Monica Studio",
        description: "Experience the beginning of Kratos's saga. The HD Remaster runs flawlessly on Apple Silicon, delivering a locked 60FPS experience at upscaled resolutions.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Runs perfectly. You can upscale to 4K (300% scale) without dropping frames. No special config needed."
    },
    {
        id: 102,
        slug: "god-of-war-2",
        name: "God of War II (HD Remastered)",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "60",
        status: "Excellent",
        image: gameGow2,
        genre: "Action",
        releaseYear: "2010",
        developer: "Santa Monica Studio",
        description: "The sequel continues Kratos's journey with improved visuals. Like the first game, it handles beautifully on M-series chips via RPCS3.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Solid 60FPS. Resolution scaling works great. Minor shader compilation stutters on first run, then smooth."
    },
    {
        id: 103,
        slug: "god-of-war-ascension",
        name: "God of War: Ascension",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "30-50",
        status: "Excellent",
        image: gameGowAscension,
        genre: "Action",
        releaseYear: "2013",
        developer: "Santa Monica Studio",
        description: "A prequel with stunning visuals that push the PS3 limit. It's demanding but playable on high-end Apple Silicon.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Variable framerate between 30 and 50 FPS in open areas. Combat is generally smooth. Recommended to lock to 30FPS for consistency if preferred."
    },
    {
        id: 104,
        slug: "god-of-war-3",
        name: "God of War III",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "30-60",
        status: "Playable",
        image: gameGow3,
        genre: "Action",
        releaseYear: "2010",
        developer: "Santa Monica Studio",
        description: "The epic conclusion of the Greek saga. Incredible scale and graphics. One of the most demanding PS3 titles.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Performance varies. Smaller areas hit 60FPS, but large set pieces can drop to 30s. 'Write Color Buffers' must be enabled to fix graphical glitches."
    },
    {
        id: 105,
        slug: "resident-evil-6",
        name: "Resident Evil 6",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "45–60",
        status: "Playable",
        image: gameRe6,
        genre: "Horror",
        releaseYear: "2012",
        developer: "Capcom",
        description: "Action-packed horror title. The MT Framework engine emulates reasonably well, though it can be CPU intensive.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Generally smooth performance. Some cutscenes might desync slightly. 60FPS is achievable in most indoor corridors."
    },
    {
        id: 106,
        slug: "tomb-raider-2013",
        name: "Tomb Raider",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "45-60",
        status: "Playable",
        image: gameTombRaider,
        genre: "Adventure",
        releaseYear: "2013",
        developer: "Crystal Dynamics",
        description: "The gritty reboot of Lara Croft's story. While a native Mac version exists, the PS3 version emulates well for archival purposes.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Playable, but the native Mac port is superior. Emulation is good for testing but expect occasional frame drops in open hubs."
    },
    {
        id: 107,
        slug: "uncharted-3",
        name: "Uncharted 3",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "30",
        status: "Playable",
        image: gameUncharted3,
        genre: "Action Adventure",
        releaseYear: "2011",
        developer: "Naughty Dog",
        description: "Drake's Deception pushes the PS3 hardware to the edge. Emulation is heavy and requires powerful hardware.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Capped at 30FPS for stability is recommended. Frequent dips below 30 in major action sequences. 'Read Color Buffers' fixes some lighting issues."
    },
    {
        id: 108,
        slug: "demon-souls",
        name: "Demon's Souls",
        emulator: "RPCS3",
        chip: "M4 Pro",
        fps: "N/A",
        status: "Not Playable",
        image: gameDemonSouls,
        genre: "RPG",
        releaseYear: "2009",
        developer: "FromSoftware",
        description: "The game that started the Souls-like genre. Currently struggles with heavy graphical artifacts and crashes on Apple Silicon.",
        testedSpecs: "M4 Pro, 36GB RAM, macOS Sequoia",
        performanceNotes: "Currently crashes at title screen or specific areas. Not recommended for play yet. Waiting for better MoltenVK support."
    }
];
