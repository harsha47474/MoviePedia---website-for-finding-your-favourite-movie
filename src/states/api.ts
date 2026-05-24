import { create } from "zustand"
import { api } from "@/lib/axios"

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    softcore: boolean,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface Video {
    key: string;
    site: string;
    type: string;
}

export interface DetailedMovie extends Movie {
    runtime?: number;
    genres?: { id: number; name: string }[];
    credits?: {
        cast: CastMember[];
    };
    videos?: {
        results: Video[];
    };
}

interface searchStore {
    movies: Movie[];
    loading: boolean;
    currentMovie: DetailedMovie | null;
    bookmarks: Movie[];
    fetchData: (params: { query: string }) => Promise<void>;
    fetchSingleMovie: (params: { id: string }) => Promise<void>;
    toggleBookmark: (movie: Movie | DetailedMovie) => void;
}

export const useSearchStore = create<searchStore>((set, get) => ({
    movies: [],
    loading: false,
    currentMovie: null,
    bookmarks: JSON.parse(localStorage.getItem("bookmarks") || "[]"),

    fetchData: async ({ query }: { query: string }) => {
        try {
            set({ loading: true });
            const response = await api.get("/search/movie", {
                params: {
                    query: query,
                },
            });
            set({ movies: response.data.results });
            console.log(response.data.results);
        } catch (error: any) {
            console.log("error in fetching data", error.message);
        } finally {
            set({ loading: false });
        }
    },

    fetchSingleMovie: async ({ id }: { id: string }) => {
        try {
            set({ loading: true, currentMovie: null });
            let response;
            try {
                response = await api.get(`/movie/${id}`, {
                    params: {
                        append_to_response: "credits,videos",
                    },
                });
            } catch (movieErr) {
                // Fallback to TV show API if movie ID is not found
                response = await api.get(`/tv/${id}`, {
                    params: {
                        append_to_response: "credits,videos",
                    },
                });
                if (response.data) {
                    response.data.title = response.data.name;
                    response.data.release_date = response.data.first_air_date;
                    if (response.data.episode_run_time && response.data.episode_run_time.length > 0) {
                        response.data.runtime = response.data.episode_run_time[0];
                    }
                }
            }
            set({ currentMovie: response.data });
            console.log("Fetched single movie or tv show:", response.data);
        } catch (error: any) {
            console.log("Error fetching movie or tv show:", error.message);
        } finally {
            set({ loading: false });
        }
    },

    toggleBookmark: (movie) => {
        const { bookmarks } = get();
        const exists = bookmarks.some((b) => b.id === movie.id);
        let updatedBookmarks;
        if (exists) {
            updatedBookmarks = bookmarks.filter((b) => b.id !== movie.id);
        } else {
            const simplifiedMovie = {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                genre_ids: movie.genre_ids || movie.genre_ids?.map((g: any) => g.id) || [],
                adult: movie.adult,
                original_language: movie.original_language,
                original_title: movie.original_title,
                popularity: movie.popularity,
                softcore: movie.softcore,
                video: movie.video,
                vote_count: movie.vote_count
            };
            updatedBookmarks = [...bookmarks, simplifiedMovie];
        }
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        set({ bookmarks: updatedBookmarks });
    }
}))