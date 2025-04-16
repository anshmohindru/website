import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center transition-colors duration-500 text-black dark:text-white bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-zinc-900 dark:via-neutral-800 dark:to-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text mb-6">
        About Me
      </h1>
      <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
        Hey! I'm Ansh — a high school student, developer, and the creator of this very site
      </p>
      <p className="max-w-2xl mt-4 text-lg text-gray-700 dark:text-gray-300">
        This is subtitle text 
      </p>
      <p className="max-w-2xl mt-4 text-lg text-gray-700 dark:text-gray-300">
        This website is a living project where I'll keep adding features, designs, and personal work. Stay tuned!
      </p>
    </motion.div>
  );
}

export default About;
