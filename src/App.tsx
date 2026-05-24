import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import TopRatedPage from './pages/TopRatedPage'
import TVShowsPage from './pages/TVShowsPage'
import PopularPage from './pages/PopularPage'
import AboutPage from './pages/AboutPage'
import FooterBar from './components/Home/FooterBar'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Navbar />
      <Toaster position="bottom-right" theme="dark" />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/tv-shows" element={<TVShowsPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <FooterBar />
    </div>
  )
}

export default App
