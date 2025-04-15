function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h2>
      <p className="text-zinc-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline font-medium"
      >
        View Project →
      </a>
    </div>
  );
}

export default ProjectCard;
