import background from "../assets/background.jpg";
import SearchBar from "../components/Home/SearchBar";
import FooterBar from "../components/Home/FooterBar";
import { cn } from "@/lib/utils";
import { useSearchStore } from "@/states/api";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const { fetchData, loading, movies } = useSearchStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleClick = async (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
    await fetchData({ query });
  };

  const hasSearchContent = loading || movies.length > 0 || hasSearched;
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div
        className={cn(
          "relative flex flex-col",
          hasSearchContent ? "min-h-screen" : "h-screen shrink-0"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/90" aria-hidden />

        <div
          className={cn(
            "relative z-10 flex w-full flex-col px-4 text-white",
            hasSearchContent
              ? "items-center pt-20 pb-6"
              : "flex-1 items-center justify-center text-center"
          )}
        >
          <SearchBar onSearch={handleClick} />
        </div>

        {hasSearchContent && (
          <div className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 pb-8 text-white">
            {searchQuery && !loading && (
              <h2 className="text-lg font-semibold mb-6 text-foreground">
                {movies.length > 0 
                  ? <>Search Results for: <span className="text-[var(--primary)]">{searchQuery}</span></> 
                  : <>No Results for: <span className="text-[var(--primary)]">{searchQuery}</span></>}
              </h2>
            )}

            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
              </div>
            ) : movies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie) => (
                  <Card 
                    key={movie.id} 
                    className="cursor-pointer border-none bg-card hover:bg-card/80 transition duration-300 hover:scale-105 rounded-none flex flex-col overflow-hidden h-full shadow-lg"
                  >
                    {movie.poster_path ? (
                      <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        className="w-full aspect-[2/3] object-cover !rounded-none" 
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-muted/20 flex items-center justify-center !rounded-none">
                        <span className="text-muted-foreground text-sm">No Poster</span>
                      </div>
                    )}
                    <CardContent className="p-3 flex-grow flex flex-col justify-between">
                      <p className="text-sm font-semibold truncate text-card-foreground" title={movie.title}>
                        {movie.title}
                      </p>
                      <p className="text-xs text-[var(--primary)] mt-1 font-medium">
                        {movie.release_date?.substring(0, 4) || "N/A"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Try a different search query.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <FooterBar />
    </div>
  );
}
