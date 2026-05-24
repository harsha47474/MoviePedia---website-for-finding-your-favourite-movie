import React from "react";
import type { Video } from "@/states/api";
import { Play } from "lucide-react";

interface MovieTrailerProps {
  videos?: Video[];
}

export const MovieTrailer: React.FC<MovieTrailerProps> = ({ videos = [] }) => {
  // Find a YouTube trailer
  const trailer = videos.find(
    (vid) => vid.site.toLowerCase() === "youtube" && vid.type.toLowerCase() === "trailer"
  ) || videos.find(
    (vid) => vid.site.toLowerCase() === "youtube" && (vid.type.toLowerCase() === "teaser" || vid.type.toLowerCase() === "clip")
  ) || videos.find(
    (vid) => vid.site.toLowerCase() === "youtube"
  );

  if (!trailer) {
    return (
      <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-3 min-h-[220px] shadow-lg">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-muted-foreground/60">
          <Play className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-white font-semibold">No Trailer Available</h4>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
            We couldn't find an official video or trailer on YouTube for this movie.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white tracking-wide border-l-4 border-[var(--primary)] pl-3">
        Official Trailer
      </h3>
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}?rel=0&modestbranding=1`}
          title="Movie Trailer"
          className="absolute inset-0 w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
