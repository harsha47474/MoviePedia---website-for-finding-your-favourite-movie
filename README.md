# 🎬 MoviePedia – Explore Movies and TVShows

A responsive web application for exploring movies and TV shows using the **TMDB API**, built with **React, Zustand, TailwindCSS, and Shadcn UI**.  
Search and explore trending, popular or highest rated movies and tvshows across different genres.

---

## ✨ Technologies
- `React`
- `TypeScript - Type Safety`
- `Zustand - State Management`
- `TailwingCSS`
- `ShadCN UI`
- `TMDB API`

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

## 📄 Routes
- `/` – Home (search + featured movies)
- `/movie/:id` – Detailed movie/TV view
- `/top-rated` – Top‑rated movies (paginated)
- `/tv-shows` – Popular TV shows (paginated)
- `/popular` – Popular movies (paginated)
- `/about` – Static bio + tech stack
- `/bookmarks` – Bookmarked movies grid

---

## 📍 Running the Project
1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install required dependencies.
3. Get your `TMDB API KEY` and `ACCESS TOKEN` from https://www.themoviedb.org/.
4. Create a `.env` file and create variables `VITE_API_KEY`, `VITE_READ_ACCESS_API`, `VITE_BASE_URL`.
5. Run `npm run start` or `yarn start` to get the project started.
6. Open http://localhost:5173/ (or the address shown in your console) in your web browser to view the app.


---

## 👨‍💻 Author
**N.Harshavardan**  
📎 [LinkedIn Profile](https://www.linkedin.com/in/harshavardan-n-b86754327/)

---

## ⚡ Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/harsha47474/MoviePedia---website-for-finding-your-favourite-movie.git
