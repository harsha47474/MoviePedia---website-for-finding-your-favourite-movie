import React from "react";
import type { DetailedMovie } from "@/states/api";
import { Bookmark, Star, Share2, Calendar, Clock, Film } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieHeaderProps {
  movie: DetailedMovie;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onShare: () => void;
}

export const MovieHeader: React.FC<MovieHeaderProps> = ({
  movie,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  const releaseYear = movie.release_date?.substring(0, 4) || "N/A";
  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  const duration = movie.runtime ? `${movie.runtime} min` : "N/A";
  const primaryGenre = movie.genres && movie.genres.length > 0 ? movie.genres[0].name : "N/A";

  return (
    <div className="relative w-full">
      {/* Hero Backdrop with overlay */}
      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
        {movie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="h-full w-full bg-muted/20 flex items-center justify-center">
            <span className="text-muted-foreground">No Backdrop</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Floating Rating Pill */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-1 rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 shadow-lg">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-white">{voteAverage}</span>
        </div>
      </div>

      {/* Title & Floating Poster Container (Overlap) */}
      <div className="relative z-10 -mt-16 sm:-mt-24 px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
        {/* Floating Poster */}
        <div className="w-[120px] sm:w-[160px] md:w-[200px] aspect-[2/3] shrink-0 overflow-hidden rounded-2xl border-4 border-background bg-card shadow-2xl transition duration-300 hover:scale-[1.02]">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted/20">
              <span className="text-muted-foreground text-xs">No Poster</span>
            </div>
          )}
        </div>

        {/* Title and details */}
        <div className="flex-1 pb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {movie.title}
          </h1>

          {/* Quick Info Grid */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center space-x-1 bg-white/[0.04] border border-white/5 rounded-full px-3 py-1">
              <Calendar className="h-3.5 w-3.5 text-[var(--primary)]" />
              <span>{releaseYear}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center space-x-1 bg-white/[0.04] border border-white/5 rounded-full px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-[var(--primary)]" />
              <span>{duration}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center space-x-1 bg-white/[0.04] border border-white/5 rounded-full px-3 py-1">
              <Film className="h-3.5 w-3.5 text-[var(--primary)]" />
              <span>{primaryGenre}</span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Actions (hidden on mobile, handled in MovieActions) */}
        <div className="hidden md:flex items-center space-x-3 pb-2 shrink-0">
          <button
            onClick={onToggleBookmark}
            className={cn(
              "flex items-center justify-center p-3 rounded-full border transition-all duration-300 cursor-pointer",
              isBookmarked
                ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-[var(--primary)]/20"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
            )}
            title={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            <Bookmark className={cn("h-5 w-5", isBookmarked && "fill-current")} />
          </button>
          <button
            onClick={onShare}
            className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            title="Share Movie"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
