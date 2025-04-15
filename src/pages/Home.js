import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative z-10 mt-16 mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hi, I’m Ansh 👋
        </h1>

        <p className="text-lg text-gray-300 mb-2">
          Developer. Student. Curious mind.
        </p>
        <p className="text-lg text-gray-300 max-w-xl px-4">
          This is my digital playground, built with{" "}
          <span className="text-pink-400">🧠</span> ReactJS and styled with Tailwind CSS.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 transition rounded-full font-semibold shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-2 border border-gray-500 hover:bg-gray-800 transition rounded-full font-semibold shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
