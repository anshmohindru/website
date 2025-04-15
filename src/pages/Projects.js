import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This site! Built with React and deployed on Vercel.',
      link: 'https://github.com/anshmohindru/website',
    },
    {
      title: 'Coming soon',
      description: 'Stay tuned',
      link: 'https://nfl.com',
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
  
}

export default Projects;
