import { motion } from "framer-motion";
import { FaCode, FaUsers, FaBrain, FaRocket } from "react-icons/fa";
import myPhoto2 from "../assets/MyPhoto_2.png";

const qualities = [
  {
    icon: FaCode,
    title: "Чистий код",
    text: "Пишу структурований та підтримуваний код",
  },
  {
    icon: FaUsers,
    title: "Командна робота",
    text: "Вмію ефективно працювати в команді",
  },
  {
    icon: FaBrain,
    title: "Швидке навчання",
    text: "Швидко освоюю нові технології",
  },
  {
    icon: FaRocket,
    title: "Відповідальність",
    text: "Уважний до деталей та строків",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Про мене</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glass-hover rounded-3xl p-1"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center overflow-hidden">
              <img
                src={myPhoto2}
                alt="Denys Kryvdiuk"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    '<div class="text-9xl gradient-text font-black">DK</div>';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Привіт! Я <span className="gradient-text">Денис Кривдюк</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Студент 3 курсу спеціальності{" "}
              <span className="text-accent">
                «Інженерія програмного забезпечення»
              </span>{" "}
              у Чернівецькому національному університеті ім. Ю. Федьковича.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Мені подобається створювати сучасні вебдодатки та поступово
              розвиватися як Full Stack Developer. У своїх проєктах приділяю
              увагу{" "}
              <span className="text-accent">
                чистому коду, структурі застосунку та зручності користувача
              </span>
              .
            </p>
            <p className="text-gray-400 leading-relaxed">
              Постійно вивчаю нові технології (React, TypeScript, Vue) та люблю
              вирішувати нестандартні задачі. Моя мета — стати професійним Full
              Stack розробником, який створює продукти, що приносять реальну
              користь.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {qualities.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 text-center transition-all hover:-translate-y-1"
            >
              <div className="text-4xl gradient-text mb-4 flex justify-center">
                <q.icon />
              </div>
              <h4 className="font-semibold mb-2">{q.title}</h4>
              <p className="text-sm text-gray-400">{q.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;