import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silicon M-ulation | Mac Gaming & Emulation Reference",
  description: "The definitive reference for gaming & emulation on Apple Silicon (macOS).",
  icons: {
    icon: "/assets/logo.png",
  },
};

import Navigation from "@/components/landing-page-sections/Navigation";
import Footer from "@/components/landing-page-sections/footer";
import FloatingControls from "@/components/ui/floating-controls";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Film grain overlay */}
          <div className="film-grain" />

          <Navigation />

          <main className="flex-1">
            {children}
          </main>

          <FloatingControls />

          <Footer />
        </div>
      </body>
    </html>
  );
}
