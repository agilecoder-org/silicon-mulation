"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReplyFormProps {
    topicId: string;
    onCommentPosted?: (comment: any) => void;
}

export default function ReplyForm({ topicId, onCommentPosted }: ReplyFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [authorName, setAuthorName] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const newComment = {
            _id: `temp-${Date.now()}`,
            topicId,
            authorName: authorName || "Anonymous",
            content,
            publishedAt: new Date().toISOString(),
        };

        // Optimistic update immediately
        if (onCommentPosted) {
            onCommentPosted(newComment);
        }

        try {
            const res = await fetch("/api/forum/comment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topicId, authorName, content }),
            });

            if (res.ok) {
                setAuthorName("");
                setContent("");
                // Wait for 1 second to show success/loading state
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Force a hard reload to ensure data consistency
                window.location.reload();
            } else {
                alert("Failed to post reply. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Leave a Reply
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Name (Optional)</label>
                    <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="w-full md:w-1/2 bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                        placeholder="Anonymous"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Comment</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={3}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 resize-y"
                        placeholder="Join the discussion..."
                    />
                </div>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[100px]"
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Post Reply"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
