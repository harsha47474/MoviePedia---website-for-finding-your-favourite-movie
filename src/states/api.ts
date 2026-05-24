import { create } from "zustand"
import { api } from "@/lib/axios"

interface Movie {
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

interface searchStore {
    movies: Movie[],
    loading: boolean,
    fetchData: (params: { query: string }) => Promise<void>
}


export const useSearchStore = create<searchStore>((set) => ({
    movies: [],
    loading: false,

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
    }
}))