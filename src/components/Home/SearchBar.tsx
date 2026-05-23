import React from "react";
import { Search, Clapperboard } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 w-full max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <Clapperboard className="text-orange-500 w-8 h-8" />
                <span>
                    <span className="text-orange-500">Media</span>Pedia
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
                />
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition">
                Search
            </button>
        </div>
    );
};

export default SearchBar;