import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-8 px-6 border-t border-zinc-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:anshmohindru@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-mohindru-a987932ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anshmohindru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://discord.com/users/624025359121121280"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaDiscord />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">&copy; 2025 Ansh Mohindru. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
