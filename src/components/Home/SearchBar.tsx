import React, { useState } from "react";
import { Search, Clapperboard } from "lucide-react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 w-full max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <Clapperboard className="text-[var(--primary)] w-8 h-8" />
                <span>
                    <span className="text-[var(--primary)]">Movie</span>Pedia
                </span>
            </h1>
            <hr className="border-gray-500 mb-6" />

            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden mb-6">
                <span className="pl-4 text-gray-400">
                    <Search className="w-5 h-5" />
                </span>
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="flex-grow bg-transparent text-white px-4 py-3 focus:outline-none"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <button 
                onClick={handleSearch}
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white font-semibold py-3 rounded-full transition"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;