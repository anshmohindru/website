import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaJava,
    FaPython,
  } from "react-icons/fa";
  import {
    SiNextdotjs,
    SiTailwindcss,
    SiCplusplus,
    SiC,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiFirebase,
    SiVercel,
    SiAdobephotoshop,
    SiAdobeillustrator,
  } from "react-icons/si";
  
  const skills = [
    {
      category: "Frontend",
      items: [
        { label: "React", icon: <FaReact /> },
        { label: "Next.js", icon: <SiNextdotjs /> },
        { label: "Tailwind CSS", icon: <SiTailwindcss /> },
        { label: "HTML5", icon: <SiHtml5 /> },
        { label: "CSS3", icon: <SiCss3 /> },
        { label: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { label: "C", icon: <SiC /> },
        { label: "C++", icon: <SiCplusplus /> },
        { label: "Java", icon: <FaJava /> },
        { label: "Python", icon: <FaPython /> },
      ],
    },
    {
      category: "Tools & Design",
      items: [
        { label: "Git", icon: <FaGitAlt /> },
        { label: "Vercel", icon: <SiVercel /> },
        { label: "Photoshop", icon: <SiAdobephotoshop /> },
        { label: "Illustrator", icon: <SiAdobeillustrator /> },
      ],
    },
  ];
  
  function Skills() {
    return (
      <div className="min-h-screen px-6 py-20 text-white bg-gradient-to-br from-black via-zinc-900 to-neutral-950">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Skills
        </h1>
  
        <div className="max-w-6xl mx-auto space-y-16">
          {skills.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">{section.category}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-cyan-500/30 transition duration-300"
                  >
                    <div className="text-4xl text-cyan-400 mb-2">{item.icon}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Skills;
  