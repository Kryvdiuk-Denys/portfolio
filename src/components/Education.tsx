import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaCode } from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    title: "Вступ до ЧНУ",
    icon: FaUniversity,
    description: "Початок навчання на спеціальності «Інженерія програмного забезпечення» у Чернівецькому національному університеті.",
    color: "#4F8CFF",
  },
  {
    year: "2022",
    title: "Курс HTML/CSS/Bootstrap",
    icon: FaCode,
    description: "Опанування основ верстки, адаптивного дизайну та створення простих вебсайтів.",
    color: "#8B5CF6",
  },
  {
    year: "2023",
    title: "Курс JavaScript/Vue",
    icon: FaCode,
    description: "Розвиток навичок створення динамічних вебсайтів, роботи з DOM, логікою та сучасними фреймворками.",
    color: "#10B981",
  },
  {
    year: "2024 — сьогодні",
    title: "Розвиток як Full Stack Developer",
    icon: FaGraduationCap,
    description: "Поглиблене вивчення React, TypeScript, Node.js та практичне створення власних проєктів.",
    color: "#F59E0B",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Мій <span className="gradient-text">шлях</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-2 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2" />

                <div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 20px ${item.color}`,
                  }}
                >
                  <item.icon className="text-white text-sm" />
                </div>

                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass glass-hover rounded-2xl p-6 transition-all hover:-translate-y-1">
                    <div
                      className="text-2xl font-black mb-2"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;