import { FaGithub, FaTelegram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold gradient-text mb-2">
              Denys Kryvdiuk
            </div>
            <p className="text-sm text-gray-400">
              Future Full Stack Developer · Software Engineering Student
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/Kryvdiuk-Denys"
              target="_blank"
              className="p-3 glass glass-hover rounded-xl hover:text-accent transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/ArXiMaGl"
              target="_blank"
              className="p-3 glass glass-hover rounded-xl hover:text-accent transition"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            Designed & Developed with{" "}
            <FaHeart className="text-accent" /> by Denys Kryvdiuk
          </div>
          <div>© 2026 All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;