import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Головна", href: "#hero" },
  { name: "Про мене", href: "#about" },
  { name: "Навички", href: "#skills" },
  { name: "Проєкти", href: "#projects" },
  { name: "Освіта", href: "#education" },
  { name: "Контакти", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-xl ${
        scrolled ? "glass py-3 shadow-[0_0_30px_rgba(79,140,255,0.12)]" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold gradient-text tracking-[0.2em]">
          D.K
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm text-gray-300 hover:text-accent transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.name}
            </a>
          ))}
          <a
            href="https://github.com/Kryvdiuk-Denys"
            target="_blank"
            className="p-2 rounded-full glass hover:text-accent transition"
          >
            <FaGithub />
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass mt-3 mx-6 rounded-xl p-6"
        >
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-accent"
              >
                {l.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;