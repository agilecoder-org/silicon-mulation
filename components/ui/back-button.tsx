"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
    href: string;
    label?: string;
    className?: string;
}

export function BackButton({ href, label = "Back", className }: BackButtonProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8",
                className
            )}
        >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {label}
        </Link>
    );
}
