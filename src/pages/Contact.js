import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <motion.div
      className="min-h-screen px-6 py-20 transition-colors duration-500 text-black dark:text-white bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-zinc-900 dark:to-neutral-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Contact Me
      </h1>

      <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
        Let’s connect! Whether it’s a collab idea, project, or just to say hi 👋
      </p>

      <div className="max-w-xl mx-auto space-y-6">
        <ContactItem
          icon={<FaEnvelope />}
          label="Email"
          href="mailto:anshmohindru@gmail.com"
        />
        <ContactItem
          icon={<FaLinkedin />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/ansh-mohindru-a987932ab/"
        />
        <ContactItem
          icon={<FaGithub />}
          label="GitHub"
          href="https://github.com/anshmohindru"
        />
        <ContactItem
          icon={<FaDiscord />}
          label="Discord"
          href="https://discordapp.com/users/624025359121121280"
        />
      </div>
    </motion.div>
  );
}

function ContactItem({ icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-6 py-4 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] text-black dark:text-white"
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-cyan-500 text-xl">{icon}</div>
      <div className="font-medium">{label}</div>
    </motion.a>
  );
}

export default Contact;
