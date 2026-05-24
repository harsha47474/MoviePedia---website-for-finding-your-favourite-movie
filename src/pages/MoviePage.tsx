import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchStore } from "@/states/api";
import { MovieHeader } from "@/components/Movie/MovieHeader";
import { MovieDetails } from "@/components/Movie/MovieDetails";
import { MovieCast } from "@/components/Movie/MovieCast";
import { MovieTrailer } from "@/components/Movie/MovieTrailer";
import { MovieActions } from "@/components/Movie/MovieActions";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentMovie, loading, fetchSingleMovie, toggleBookmark, bookmarks } = useSearchStore();

  useEffect(() => {
    if (id) {
      fetchSingleMovie({ id });
    }
  }, [id, fetchSingleMovie]);

  const isBookmarked = currentMovie ? bookmarks.some((b) => b.id === currentMovie.id) : false;

  const handleToggleBookmark = () => {
    if (!currentMovie) return;
    toggleBookmark(currentMovie);
    const willBeBookmarked = !isBookmarked;
    toast.success(
      willBeBookmarked
        ? `Added "${currentMovie.title}" to bookmarks`
        : `Removed "${currentMovie.title}" from bookmarks`,
      {
        duration: 2500,
        className: "bg-zinc-900 border border-zinc-800 text-white font-medium rounded-xl shadow-2xl",
      }
    );
  };

  const handleShare = () => {
    if (!currentMovie) return;
    navigator.clipboard.writeText(window.location.href);
    if (navigator.share) {
      navigator
        .share({
          title: currentMovie.title,
          text: currentMovie.overview,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      toast.success("Link copied to clipboard!", {
        duration: 2500,
        className: "bg-zinc-900 border border-zinc-800 text-white font-medium rounded-xl shadow-2xl",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background text-white gap-4">
        <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin" />
        <p className="text-muted-foreground text-sm font-medium animate-pulse">Loading movie details...</p>
      </div>
    );
  }

  if (!currentMovie) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background text-white px-4 py-8">
        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Movie Not Found</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We couldn't retrieve the details for this movie. It might have been removed or the ID is invalid.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back navigation */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-muted-foreground hover:text-white transition duration-300 font-semibold text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        {/* Header (Backdrop + Poster + Title) */}
        <MovieHeader
          movie={currentMovie}
          isBookmarked={isBookmarked}
          onToggleBookmark={handleToggleBookmark}
          onShare={handleShare}
        />

        {/* Mobile Actions Panel (Bookmark & Share) */}
        <MovieActions
          movie={currentMovie}
          isBookmarked={isBookmarked}
          onToggleBookmark={handleToggleBookmark}
          onShare={handleShare}
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <MovieDetails movie={currentMovie} />
            <MovieCast cast={currentMovie.credits?.cast || []} />
          </div>

          {/* Sidebar (Trailer / Videos) */}
          <div className="space-y-8">
            <MovieTrailer videos={currentMovie.videos?.results || []} />
          </div>
        </div>
      </div>
    </div>
  );
}