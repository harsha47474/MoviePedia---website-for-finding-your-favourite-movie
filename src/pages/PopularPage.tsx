import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios";
import type { Movie } from "@/states/api";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function PopularPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setLoading(true);
        const response = await api.get("/movie/popular");
        setMovies(response.data.results || []);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Popular <span className="text-[var(--primary)]">Movies</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-md">
            The most watched and talked-about movies right now.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin" />
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="cursor-pointer border-none bg-card hover:bg-card/85 transition duration-300 hover:scale-105 rounded-2xl overflow-hidden h-full shadow-lg flex flex-col border border-white/5"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full aspect-[2/3] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[2/3] bg-muted/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">No Poster</span>
                  </div>
                )}
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <p className="text-sm font-semibold truncate text-card-foreground" title={movie.title}>
                    {movie.title}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-[var(--primary)] font-medium">
                      {movie.release_date?.substring(0, 4) || "N/A"}
                    </span>
                    <span className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded-full">
                      ★ {movie.vote_average?.toFixed(1) || "N/A"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No movies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
