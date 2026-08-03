import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import myPhoto1 from "../assets/MyPhoto_1.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Фонове зображення */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(79,140,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
          >
            Future Full Stack Developer
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              DENYS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block gradient-text"
            >
              KRYVDIUK
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-gray-400 mb-8 max-w-lg"
          >
            Software Engineering Student · ЧНУ ім. Ю. Федьковича.
            <br />
            Створюю адаптивні веб-застосунки, пишу чистий код та постійно вивчаю
            нове.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent hover:bg-hover text-white rounded-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(79,140,255,0.5)]"
            >
              Переглянути проєкти
            </a>
            <a
              href="https://github.com/Kryvdiuk-Denys"
              target="_blank"
              className="px-6 py-3 glass glass-hover rounded-lg font-medium flex items-center gap-2 transition-all"
            >
              <FaGithub /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Анімоване світіння навколо фото */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-2 rounded-full blur-3xl opacity-30 animate-pulse" />

            {/* Плейсхолдер для твого фото */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass border-2 border-accent/30">
              <img
                src={myPhoto1}
                alt="Denys Kryvdiuk"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-8xl gradient-text font-black">DK</div>';
                }}
              />
            </div>

            {/* Плаваючі іконки */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass glass-hover rounded-xl p-3 text-accent text-xl"
            >
              ⚛️
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass glass-hover rounded-xl p-3 text-accent-2 text-xl"
            >
              🚀
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent text-sm"
      >
        ↓ scroll
      </motion.div>
    </section>
  );
};

export default Hero;