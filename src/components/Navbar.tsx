import { Link } from "react-router-dom"; 
import icon from '../assets/icon.svg'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-white/10 px-6 py-3 backdrop-blur-md">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl"><img src={icon} alt="logo" width={20} height={20} /></span>
        <h1 className="text-white font-semibold text-lg">
          <span className="text-[var(--primary)]">Movie</span>Pedia
        </h1>
      </div>


      {/* Right: Nav links */}
      <div className="flex space-x-6 text-sm">
        <Link to="/" className="text-white/90 hover:text-[var(--primary)]/80">
          Home
        </Link>
        <Link to="/about" className="text-white/90 hover:text-[var(--primary)]">
          About Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;