import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-xl text-cyan-400 hover:text-white transition"
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
