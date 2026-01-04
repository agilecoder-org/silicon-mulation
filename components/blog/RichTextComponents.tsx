import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full aspect-video my-10 rounded-xl overflow-hidden shadow-2xl border border-border/50">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog Image"}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                </div>
            );
        },
        table: ({ value }: any) => {
            const { rows } = value;
            return (
                <div className="my-10 w-full overflow-hidden rounded-xl border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-xs uppercase font-semibold text-muted-foreground border-b border-border/50">
                                <tr>
                                    {rows[0].cells.map((cell: string, i: number) => (
                                        <th key={i} className="px-6 py-4 tracking-wider">{cell}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {rows.slice(1).map((row: any, i: number) => (
                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                        {row.cells.map((cell: string, cellIndex: number) => (
                                            <td key={cellIndex} className="px-6 py-4 text-foreground/90 font-medium">{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="my-6 space-y-3 px-4 text-muted-foreground">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="my-6 list-decimal list-inside space-y-3 text-muted-foreground">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="leading-relaxed">{children}</span>
            </li>
        ),
        number: ({ children }: any) => (
            <li className="leading-relaxed">{children}</li>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 tracking-tight">
                {children}
            </h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight relative inline-block">
                <span className="relative z-10">{children}</span>
                <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-primary/30 rounded-full" />
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-primary">
                {children}
            </h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground/90">
                {children}
            </h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary/50 pl-6 my-8 py-2 italic text-xl text-muted-foreground bg-primary/5 rounded-r-xl">
                "{children}"
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="mb-6 leading-relaxed text-lg text-muted-foreground/90 font-sans">
                {children}
            </p>
        ),
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className="font-bold text-foreground">{children}</strong>
        ),
        em: ({ children }: any) => (
            <em className="italic text-primary/80 font-medium">{children}</em>
        ),
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="text-primary font-medium hover:underline underline-offset-4 decoration-primary/30 transition-all"
                >
                    {children}
                </Link>
            );
        },
        code: ({ children }: any) => (
            <code className="bg-muted px-2 py-1 rounded-md text-sm font-mono text-primary border border-border">
                {children}
            </code>
        )
    },
};
