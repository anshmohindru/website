import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Ansh
        </Link>
        <ul className="flex space-x-6 text-sm md:text-base font-medium text-gray-300">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-200 border-b-2 border-transparent hover:border-cyan-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-cyan-400 transition duration-200 border-b-2 border-transparent hover:border-cyan-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-200 border-b-2 border-transparent hover:border-cyan-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition duration-200 border-b-2 border-transparent hover:border-cyan-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
