import React from "react";
import type { DetailedMovie } from "@/states/api";
import { Bookmark, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieActionsProps {
  movie: DetailedMovie;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onShare: () => void;
}

export const MovieActions: React.FC<MovieActionsProps> = ({
  movie,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  return (
    <div className="flex md:hidden items-center justify-center gap-4 py-4 border-y border-white/5 w-full">
      <button
        onClick={onToggleBookmark}
        className={cn(
          "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-semibold text-sm transition-all duration-300 cursor-pointer",
          isBookmarked
            ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-[var(--primary)]/20"
            : "bg-white/5 border-white/10 text-white hover:bg-white/10"
        )}
      >
        <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
        <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
      </button>

      <button
        onClick={onShare}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-semibold text-sm transition-all duration-300 cursor-pointer"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>
    </div>
  );
};
