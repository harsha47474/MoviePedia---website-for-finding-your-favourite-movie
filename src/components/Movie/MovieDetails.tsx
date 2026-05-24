import React from "react";
import type { DetailedMovie } from "@/states/api";

interface MovieDetailsProps {
  movie: DetailedMovie;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const languageNames: { [key: string]: string } = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    hi: "Hindi",
    ru: "Russian",
    pt: "Portuguese",
  };

  const getLanguageName = (code: string) => {
    return languageNames[code.toLowerCase()] || code.toUpperCase();
  };

  return (
    <div className="space-y-6 bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
      <div>
        <h3 className="text-lg font-bold text-white mb-3 tracking-wide border-l-4 border-[var(--primary)] pl-3">
          Overview
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {movie.overview || "No overview available for this movie."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Genres
          </h4>
          <div className="flex flex-wrap gap-2">
            {movie.genres && movie.genres.length > 0 ? (
              movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/5 text-white/90 rounded-full px-3 py-1"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="text-sm text-muted-foreground">N/A</span>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Details
          </h4>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <div>
              <span className="text-muted-foreground block text-xs">Runtime</span>
              <span className="font-semibold text-white/90">
                {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground block text-xs">Language</span>
              <span className="font-semibold text-white/90">
                {movie.original_language ? getLanguageName(movie.original_language) : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
