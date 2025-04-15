import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This site! Built with React and deployed on Vercel.",
      link: "https://anshmohindru.vercel.app",
    },
    {
      title: "Coming soon",
      description: "Stay tuned",
      link: "https://nfl.com",
    },
  ];

  return (
    <div className="min-h-screen px-8 py-12 bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white">
      <h1 className="text-4xl font-bold mb-10 text-cyan-400">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
