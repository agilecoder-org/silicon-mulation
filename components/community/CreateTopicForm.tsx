"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateTopicForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/forum/topic", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, authorName, content }),
            });

            if (res.ok) {
                const data = await res.json();
                setTitle("");
                setAuthorName("");
                setContent("");
                setIsExpanded(false);
                router.refresh(); // Refresh to show new topic
            } else {
                alert("Failed to create topic. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    // Modal Render
    return (
        <>
            <div className="flex justify-center">
                <Button
                    onClick={() => setIsExpanded(true)}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg shadow-primary/20"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    New Discussion
                </Button>
            </div>

            {isExpanded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="w-full max-w-2xl bg-card border border-border rounded-xl p-6 shadow-2xl animate-in zoom-in-95 duration-200 relative">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Start a New Discussion</h3>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsExpanded(false)}
                                className="h-8 w-8 hover:bg-muted rounded-full transition-colors"
                            >
                                <span className="text-xl leading-none">&times;</span>
                                <span className="sr-only">Close</span>
                            </Button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Title</label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                                    placeholder="What's on your mind?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Your Name (Optional)</label>
                                <input
                                    type="text"
                                    value={authorName}
                                    onChange={(e) => setAuthorName(e.target.value)}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                                    placeholder="Anonymous"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Content</label>
                                <textarea
                                    required
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    rows={6}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 resize-y"
                                    placeholder="Share your thoughts, questions, or findings..."
                                />
                            </div>

                            <div className="flex gap-3 justify-end pt-4">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setIsExpanded(false)}
                                    disabled={isLoading}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[100px]"
                                >
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Post Topic"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
