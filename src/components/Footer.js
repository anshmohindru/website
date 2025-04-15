import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white px-6 py-6 shadow-[0_0_25px_rgba(255,0,255,0.1)] ring-1 ring-pink-500/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:anshmohindru@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition hover:drop-shadow-[0_0_5px_pink]"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-mohindru-a987932ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition hover:drop-shadow-[0_0_5px_pink]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anshmohindru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition hover:drop-shadow-[0_0_5px_pink]"
          >
            <FaGithub />
          </a>
          <a
            href="https://discord.com/users/624025359121121280"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition hover:drop-shadow-[0_0_5px_pink]"
          >
            <FaDiscord />
          </a>
        </div>

        <p className="text-sm text-gray-400">&copy; 2025 Ansh Mohindru. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
