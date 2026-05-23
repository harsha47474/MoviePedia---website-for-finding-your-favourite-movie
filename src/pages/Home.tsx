import background from "../assets/background.jpg";
import SearchBar from "../components/Home/SearchBar";
import FooterBar from "../components/Home/FooterBar";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Set to true when search results are rendered below the search bar.
const hasSearchContent = false;

export default function Home() {
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
          <SearchBar />
        </div>

        {hasSearchContent && (
          <div className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 pb-8">
            {/* Search results go here */}
          </div>
        )}
      </div>

      <FooterBar />
    </div>
  );
}
