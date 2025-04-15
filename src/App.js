import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-800 to-black text-white">
      <h1 className="text-5xl font-bold">Hey, I’m Ansh 👋</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
