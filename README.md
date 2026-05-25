# 🎬 Movie Explorer – React + Zustand + TMDB

A responsive web application for exploring movies and TV shows using the **TMDB API**, built with **React, Zustand, TailwindCSS, and Shadcn UI**.  
Features include search, detailed movie pages, bookmarking with persistence, and paginated grids for popular, top‑rated, and TV shows.

---

## 🚀 Features
- Search movies & TV shows
- Detailed movie/TV pages with cast & trailers
- Bookmarking with localStorage persistence
- Paginated grids for Popular, Top‑Rated, and TV Shows
- Responsive dark‑theme design
- Error & empty states handling

---

## 🏗️ Project Architecture
- **API Layer** – Centralized Axios instance with TMDB base URL + API key interceptor
- **State Store** – Zustand store (`useSearchStore`) for movies, currentMovie, bookmarks, loading
- **Routing** – React Router setup with `<Navbar>`, `<FooterBar>`, `<Toaster>`
- **Theme & Styles** – Dark theme enforced via CSS variables
- **Utilities** – `cn` helper for class concatenation
- **Icons** – Lucide React icons used across UI

---

## 📄 Pages
- `/` – Home (search + featured movies)
- `/movie/:id` – Detailed movie/TV view
- `/top-rated` – Top‑rated movies (paginated)
- `/tv-shows` – Popular TV shows (paginated)
- `/popular` – Popular movies (paginated)
- `/about` – Static bio + tech stack
- `/bookmarks` – Bookmarked movies grid

---

## 👨‍💻 Author
**N.Harshavardan**  
📎 [LinkedIn Profile](https://www.linkedin.com/in/harshavardan-n-b86754327/)

---

## ⚡ Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/harsha47474/MoviePedia---website-for-finding-your-favourite-movie.git
