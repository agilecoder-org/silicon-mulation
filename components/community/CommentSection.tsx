"use client";

import { useState, useOptimistic, useRef } from "react";
import ReplyForm from "@/components/community/ReplyForm";
import { User, Clock } from "lucide-react";

type Comment = {
    _id: string;
    authorName: string;
    content: string;
    publishedAt: string;
};

type Props = {
    initialComments: Comment[];
    topicId: string;
    topicAuthorName: string;
};

export default function CommentSection({ initialComments, topicId, topicAuthorName }: Props) {
    const [comments, setComments] = useState<Comment[]>(initialComments || []);
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state: Comment[], newComment: Comment) => [...state, newComment]
    );

    const handleNewComment = (newComment: Comment) => {
        addOptimisticComment(newComment);
        // We'll revert this if the server refresh fails, but generally we rely on the server 
        // eventually delivering the real data which will replace this state.
        // For simplicity in this "jugaad" forum, we'll append it to local state too
        // so it persists until the next full reload if router.refresh is slow.
        setComments((prev) => [...prev, newComment]);
    };

    return (
        <div className="space-y-8 mb-16">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <div className="bg-primary/20 p-1.5 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-primary block" />
                </div>
                Discussion <span className="text-muted-foreground font-normal text-base ml-1">({optimisticComments.length})</span>
            </h2>

            <div className="space-y-6">
                {optimisticComments.map((comment: any) => {
                    const isOp = comment.authorName === topicAuthorName;
                    // Check if it's an optimistic comment (using a temp ID pattern or checking existence)
                    const isOptimistic = comment._id.startsWith('temp-');

                    return (
                        <div key={comment._id} className={`group flex gap-4 ${isOp ? 'pl-4 border-l-2 border-primary/30' : ''} ${isOptimistic ? 'opacity-70 animate-pulse' : ''}`}>
                            <div className="flex-shrink-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isOp ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                    {comment.authorName?.[0]?.toUpperCase() || 'A'}
                                </div>
                            </div>

                            <div className="flex-1 bg-card/40 border border-border/40 rounded-2xl rounded-tl-none p-5 relative group-hover:bg-card/60 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className={`font-semibold text-sm ${isOp ? 'text-primary' : 'text-foreground'}`}>
                                            {comment.authorName}
                                        </span>
                                        {isOp && (
                                            <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded ml-1 font-bold tracking-wide">
                                                AUTHOR
                                            </span>
                                        )}
                                        <span className="text-muted-foreground text-xs">•</span>
                                        <span className="text-muted-foreground text-xs">
                                            {isOptimistic ? 'Just now' : new Date(comment.publishedAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <p className="whitespace-pre-wrap text-muted-foreground text-sm leading-relaxed">{comment.content}</p>
                            </div>
                        </div>
                    );
                })}

                {optimisticComments.length === 0 && (
                    <div className="text-center py-12 border border-dashed border-border/50 rounded-xl bg-card/20">
                        <p className="text-muted-foreground italic">No comments yet. Start the conversation!</p>
                    </div>
                )}
            </div>

            {/* Reply Form */}
            <div className="border-t border-border/50 pt-10">
                <ReplyForm topicId={topicId} onCommentPosted={handleNewComment} />
            </div>
        </div>
    );
}
