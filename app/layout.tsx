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
  title: {
    default: "Silicon M-ulation | Mac Gaming & Emulation Reference",
    template: "%s | Silicon M-ulation"
  },
  description: "The definitive reference for gaming & emulation on Apple Silicon (macOS). Optimized configs, compatibility lists, and performance guides for M1, M2, M3 & M4 chips.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Apple Silicon", "Mac Gaming", "Emulation", "M1", "M2", "M3", "M4", "Game Porting Toolkit", "Ryujinx", "RPCS3", "PCSX2"],
  openGraph: {
    title: "Silicon M-ulation",
    description: "The definitive reference for gaming & emulation on Apple Silicon.",
    url: "https://silicon-mulation.vercel.app",
    siteName: "Silicon M-ulation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silicon M-ulation",
    description: "Mac Gaming & Emulation Reference for Apple Silicon.",
    creator: "@AgileCoderYT",
  },
};

import Navigation from "@/components/landing-page-sections/Navigation";
import Footer from "@/components/landing-page-sections/footer";
import FloatingControls from "@/components/ui/floating-controls";

// ... imports

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JV9N5QE57F"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JV9N5QE57F');
          `}
        </Script>
      </head>
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
