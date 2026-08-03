import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava, FaPython, FaNodeJs, FaGitAlt, FaFigma, FaLinux
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiSass
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    color: "#4F8CFF",
    skills: [
      { name: "HTML", icon: FaHtml5, level: 4 },
      { name: "CSS", icon: FaCss3Alt, level: 4 },
      { name: "JavaScript", icon: FaJs, level: 3 },
      { name: "SCSS", icon: SiSass, level: 2 },
      { name: "Bootstrap", icon: FaBootstrap, level: 4 },
    ],
  },
  {
    title: "Backend",
    color: "#8B5CF6",
    skills: [
      { name: "Java", icon: FaJava, level: 2 },
      { name: "Spring Boot", icon: SiSpringboot, level: 1 },
      { name: "Python", icon: FaPython, level: 2 },
      { name: "Node.js", icon: FaNodeJs, level: 1 },
    ],
  },
  {
    title: "Databases",
    color: "#10B981",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 4 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 4 },
      { name: "MongoDB", icon: SiMongodb, level: 4 },
    ],
  },
  {
    title: "Tools",
    color: "#F59E0B",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 4 },
      { name: "Figma", icon: FaFigma, level: 3 },
      { name: "REST API", icon: TbApi, level: 2 },
      { name: "Linux", icon: FaLinux, level: 1 },
    ],
  },
];

const learning = ["React", "TypeScript", "Vue", "Tailwind", "Node.js", "Docker", "JWT"];

const ProgressBar = ({ level, color }: { level: number; color: string }) => (
  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level * 20}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-full rounded-full"
      style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
    />
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Технологічний <span className="gradient-text">стек</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <div
                className="text-xl font-bold mb-6"
                style={{ color: cat.color }}
              >
                {cat.title}
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-sm">
                        <skill.icon style={{ color: cat.color }} />
                        {skill.name}
                      </div>
                      <span className="text-xs text-gray-500">
                        {skill.level}/5
                      </span>
                    </div>
                    <ProgressBar level={skill.level} color={cat.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Блок "Зараз вивчаю" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glass-hover rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <div className="text-2xl font-bold">Зараз поглиблюю</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {learning.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 to-accent-2/10 border border-accent/30 text-accent font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;