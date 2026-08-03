import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-light tracking-widest text-gray-300"
        >
          Hello, I'm <span className="gradient-text font-bold">Denys</span>.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4 text-center text-gray-400 text-sm md:text-base"
        >
          Welcome to my portfolio.
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
          className="mt-8 h-[2px] bg-gradient-to-r from-accent to-accent-2 mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default Loader;