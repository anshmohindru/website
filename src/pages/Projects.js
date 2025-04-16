import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This site! Built with React and deployed on Vercel.",
      link: "https://github.com/anshmohindru/website",
    },
    {
      title: "Coming Soon",
      description: "Stay tuned for more projects!",
      link: "https://nfl.com",
    },
  ];

  return (
    <motion.div
      className="min-h-screen px-6 py-16 transition-colors duration-500 bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black dark:from-black dark:via-zinc-900 dark:to-neutral-950 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
