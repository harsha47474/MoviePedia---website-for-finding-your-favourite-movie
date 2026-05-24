import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronsLeft, ChevronsRight, Loader2 } from "lucide-react";

interface TVShow {
  id: number;
  name: string;
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
}

export default function TVShowsPage() {
  const [shows, setShows] = useState<TVShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = 500;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        setLoading(true);
        const response = await api.get("/tv/popular", { params: { page } });
        setShows(response.data.results || []);
      } catch (error) {
        console.error("Error fetching popular TV shows:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTVShows();
  }, [page]);

  const goPrev = () => setPage((p) => Math.max(p - 1, 1));
  const goNext = () => setPage((p) => Math.min(p + 1, totalPages));
  const goLast = () => setPage((p) => totalPages)
  const goFirst = () => setPage((p) => 1)

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Popular <span className="text-[var(--primary)]">TV Shows</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-md">
            The most popular TV series and streaming shows right now.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin" />
          </div>
        ) : shows.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {shows.map((show) => (
                <Card
                  key={show.id}
                  className="cursor-pointer border-none bg-card hover:bg-card/85 transition duration-300 hover:scale-105 rounded-2xl overflow-hidden h-full shadow-lg flex flex-col border border-white/5"
                  onClick={() => navigate(`/movie/${show.id}`)}
                >
                  {show.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                      alt={show.name}
                      className="w-full aspect-[2/3] object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[2/3] bg-muted/20 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">No Poster</span>
                    </div>
                  )}
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <p className="text-sm font-semibold truncate text-card-foreground" title={show.name}>
                      {show.name}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-[var(--primary)] font-medium">
                        {show.first_air_date?.substring(0, 4) || "N/A"}
                      </span>
                      <span className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded-full">
                        ★ {show.vote_average?.toFixed(1) || "N/A"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={goFirst}
                disabled={page === 1}
                className="flex items-center gap-1 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronsLeft className="w-4 h-4" />
                First
              </button>
              <button
                onClick={goPrev}
                disabled={page === 1}
                className="flex items-center gap-1 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronsLeft className="w-4 h-4" />
                Prev
              </button>
              <span className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={goNext}
                disabled={page === totalPages}
                className="flex items-center gap-1 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronsRight className="w-4 h-4" />
              </button>
              <button
                onClick={goLast}
                disabled={page === totalPages}
                className="flex items-center gap-1 px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No TV shows found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
