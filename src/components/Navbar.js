import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md text-white px-6 py-4 shadow-[0_0_25px_rgba(0,255,255,0.15)] ring-1 ring-cyan-500/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-cyan-400 hover:drop-shadow-[0_0_5px_cyan] transition duration-300">
          Ansh
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm md:text-base font-medium">
            <li><Link to="/projects" className="hover:text-cyan-400 transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-cyan-400 transition">Skills</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
