import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCertificate, FaTimes } from "react-icons/fa";
import htmlCertificate from "../assets/sertuficat_Html.jpg";
import jsCertificate from "../assets/sertuficat_JS.png";

const certificates = [
  {
    title: "Основи створення простих вебсайтів",
    issuer: "Online Course",
    year: "2022",
    description: "HTML5/CSS3/Bootstrap5",
    image: htmlCertificate,
  },
  {
    title: "Створення динамічних вебсайтів",
    issuer: "Online Course",
    year: "2023",
    description: "JavaScript / VueJS3",
    image: jsCertificate,
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            Certificates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Мої <span className="gradient-text">сертифікати</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="glass glass-hover rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-2 hover:border-accent/40"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
              </div>
              <h3 className="font-bold mb-1">{c.title}</h3>
              <p className="text-sm text-accent mb-2">{c.issuer} · {c.year}</p>
              <p className="text-sm text-gray-400">{c.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl p-8 max-w-lg w-full relative"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={certificates[selected].image}
                    alt={certificates[selected].title}
                    className="w-full max-h-[60vh] object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  {certificates[selected].title}
                </h3>
                <p className="text-center text-accent mb-4">
                  {certificates[selected].issuer} · {certificates[selected].year}
                </p>
                <p className="text-gray-400 text-center">
                  {certificates[selected].description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;