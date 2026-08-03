import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss } from "react-icons/si";
import memoryImage from "../assets/Memory.png";
import germanImage from "../assets/German.jpg";

const projects = [
  {
    title: "Memory Game",
    subtitle: "Browser Memory Game",
    description:
      "Класична гра на пам'ять у браузері. Реалізовано логіку перевертання карток, підрахунок ходів, визначення переможця та анімовані переходи між станами. Розроблено з акцентом на плавність UX та чисту структуру коду.",
    problem: "Потрібно було реалізувати стан гри та логіку порівняння пар карток без зайвих ререндерів.",
    solution: "Використано модульний JS з чітким розділенням DOM-логіки та game state.",
    tech: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
    github: "https://github.com/Kryvdiuk-Denys/Memory-Game",
    demo: null,
    image: memoryImage,
    featured: true,
  },
  {
    title: "Wild Gunman",
    subtitle: "Arcade Web Game",
    description:
      "Веб-версія аркадної гри Wild Gunman. Розроблено інтерактивний геймплей з таймерами, різними рівнями складності та системою очок. Проєкт демонструє роботу з анімаціями, подіями та async-логікою в JavaScript.",
    problem: "Синхронізація таймерів та анімацій у реальному часі.",
    solution: "Побудовано state machine для керування станами гри.",
    tech: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
    github: "https://github.com/Kryvdiuk-Denys/Lab_7_JS_to_Pages",
    demo: null,
    image: germanImage,
    featured: true,
  },
  {
    title: "Web Technologies Lab",
    subtitle: "HTML / CSS Practices",
    description:
      "Серія лабораторних робіт з веб-технологій: від базової верстки до складних адаптивних макетів. Реалізовано flexbox/grid-лейаути, семантичну розмітку, кросбраузерну сумісність та SEO-орієнтовану структуру.",
    problem: "Навчитися будувати семантично правильні та адаптивні сторінки.",
    solution: "Застосовано сучасний підхід з CSS Grid, Flexbox та mobile-first принципом.",
    tech: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
    github: "https://github.com/Kryvdiuk-Denys/web-technologies",
    demo: null,
    featured: false,
  },
  {
    title: "JavaScript Labs",
    subtitle: "Core JS Exercises",
    description:
      "Колекція задач з JavaScript: робота з масивами, об'єктами, DOM, подіями, Promise, async/await та Fetch API. Кожен модуль — це окрема концепція, закріплена практикою.",
    problem: "Глибоке розуміння асинхронності та замикань.",
    solution: "Покрокове виконання від простих до складних патернів.",
    tech: [{ name: "JavaScript", icon: SiJavascript }],
    github: "https://github.com/Kryvdiuk-Denys/labs_js",
    demo: null,
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`glass glass-hover rounded-2xl overflow-hidden transition-all hover:-translate-y-2 ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    <div className="relative aspect-video bg-gradient-to-br from-accent/10 to-accent-2/10 flex items-center justify-center overflow-hidden">
      {project.image ? (
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
      ) : (
        <div className="text-6xl font-black gradient-text opacity-40">
          {project.title.split(" ")[0]}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>

    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-accent">{project.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            className="p-2 rounded-lg glass hover:text-accent transition"
          >
            <FaGithub />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="p-2 rounded-lg glass hover:text-accent transition"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4 p-4 rounded-xl bg-bg/50 space-y-2 text-sm">
        <div>
          <span className="text-accent-2 font-semibold">Проблема:</span>{" "}
          <span className="text-gray-400">{project.problem}</span>
        </div>
        <div>
          <span className="text-accent font-semibold">Рішення:</span>{" "}
          <span className="text-gray-400">{project.solution}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent"
          >
            <t.icon />
            {t.name}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Мої <span className="gradient-text">проєкти</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Кожен проєкт — це вирішена задача. Я описую їх як реальні кейси: проблему, рішення та результат.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Kryvdiuk-Denys?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-lg font-medium transition-all"
          >
            <FaGithub /> Переглянути всі репозиторії
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;