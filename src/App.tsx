import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<main className="container mx-auto px-4 py-8"><h1>Movies</h1></main>} />
        <Route path="/tv-shows" element={<main className="container mx-auto px-4 py-8"><h1>TV Shows</h1></main>} />
        <Route path="/anime" element={<main className="container mx-auto px-4 py-8"><h1>Anime</h1></main>} />
        <Route path="/about" element={<main className="container mx-auto px-4 py-8"><h1>About Me</h1></main>} />
      </Routes>
    </>
  )
}

export default App
