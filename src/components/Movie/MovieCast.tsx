import React from "react";
import type { CastMember } from "@/states/api";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieCastProps {
  cast: CastMember[];
}

export const MovieCast: React.FC<MovieCastProps> = ({ cast }) => {
  const displayCast = cast.slice(0, 12); // Limit to top 12 cast members for clean display

  if (displayCast.length === 0) {
    return (
      <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-6 text-center text-muted-foreground">
        No cast information available.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white tracking-wide border-l-4 border-[var(--primary)] pl-3">
        Cast & Crew
      </h3>
      
      {/* Container: Horizontal scrolling on mobile (flex), Grid on desktop (md:grid) */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 pb-4 md:pb-0 snap-x scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {displayCast.map((member) => (
          <div
            key={member.id}
            className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-full bg-white/[0.02] border border-white/5 rounded-2xl p-3 flex flex-col items-center text-center snap-start transition duration-300 hover:bg-white/[0.06] hover:scale-[1.03] shadow-md"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 border border-white/10 bg-muted/20 flex items-center justify-center shrink-0 shadow-inner">
              {member.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground/60" />
              )}
            </div>
            
            <div className="w-full flex-grow flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-semibold text-white/95 truncate block" title={member.name}>
                {member.name}
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground truncate block mt-0.5" title={member.character}>
                {member.character}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
