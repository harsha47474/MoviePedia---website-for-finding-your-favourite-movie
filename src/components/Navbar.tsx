import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Menu, X } from "lucide-react";
import icon from '../assets/icon.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-white/10 px-6 py-3 backdrop-blur-md">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
        <span className="text-xl"><img src={icon} alt="logo" width={20} height={20} /></span>
        <h1 className="text-white font-semibold text-lg">
          <span className="text-[var(--primary)]">Movie</span>Pedia
        </h1>
      </Link>

      {/* Right: Desktop Nav links */}
      <div className="hidden md:flex space-x-6 text-sm">
        <Link to="/" className="text-white/90 hover:text-[var(--primary)]/80 transition-colors">
          Home
        </Link>
        <Link to="/top-rated" className="text-white/90 hover:text-[var(--primary)] transition-colors">
          Movies
        </Link>
        <Link to="/tv-shows" className="text-white/90 hover:text-[var(--primary)] transition-colors">
          TV Shows
        </Link>
        <Link to="/popular" className="text-white/90 hover:text-[var(--primary)] transition-colors">
          Popular
        </Link>
        <Link to="/about" className="text-white/90 hover:text-[var(--primary)] transition-colors">
          About Me
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white/90 hover:text-[var(--primary)] focus:outline-none transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-40 flex flex-col bg-black/95 backdrop-blur-lg border-b border-white/10 px-6 py-4 space-y-4 animate-in slide-in-from-top duration-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-[var(--primary)] text-base font-medium py-1 transition-colors">
            Home
          </Link>
          <Link to="/top-rated" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-[var(--primary)] text-base font-medium py-1 transition-colors">
            Top Rated
          </Link>
          <Link to="/tv-shows" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-[var(--primary)] text-base font-medium py-1 transition-colors">
            TV Shows
          </Link>
          <Link to="/popular" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-[var(--primary)] text-base font-medium py-1 transition-colors">
            Popular
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-[var(--primary)] text-base font-medium py-1 transition-colors">
            About Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;