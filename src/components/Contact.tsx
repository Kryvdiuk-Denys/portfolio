import { motion } from "framer-motion";
import {
  FaEnvelope, FaTelegram, FaGithub, FaPhone,
} from "react-icons/fa";
import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";

const links = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "k7974768@gmail.com",
    href: "mailto:k7974768@gmail.com",
    color: "#4F8CFF",
  },
  {
    icon: FaTelegram,
    label: "Telegram",
    value: "@ArXiMaGl",
    href: "https://t.me/ArXiMaGl",
    color: "#29B6F6",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Kryvdiuk-Denys",
    href: "https://github.com/Kryvdiuk-Denys",
    color: "#8B5CF6",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+380 96 939 11 46",
    href: "tel:+380969391146",
    color: "#10B981",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Заміни service/template/public key на свої з https://www.emailjs.com/
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("✓ Дякую! Я зв'яжуся з тобою найближчим часом.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("✗ Сталася помилка. Спробуй ще раз."));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-accent mb-2">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Давайте <span className="gradient-text">працювати разом</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Відкритий для пропозицій, стажувань та нових проєктів.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group transition-all hover:-translate-x-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                  style={{ background: `${l.color}20`, color: l.color }}
                >
                  <l.icon />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {l.label}
                  </div>
                  <div className="font-semibold">{l.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={send}
            className="glass glass-hover rounded-2xl p-8 space-y-4"
          >
            <input
              required
              placeholder="Ваше ім'я"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-bg/50 rounded-xl px-4 py-3 outline-none border border-white/5 focus:border-accent/50 transition"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-bg/50 rounded-xl px-4 py-3 outline-none border border-white/5 focus:border-accent/50 transition"
            />
            <textarea
              required
              rows={5}
              placeholder="Ваше повідомлення..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-bg/50 rounded-xl px-4 py-3 outline-none border border-white/5 focus:border-accent/50 transition resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-accent hover:bg-hover rounded-xl font-medium transition-all hover:shadow-[0_0_20px_rgba(79,140,255,0.5)]"
            >
              Надіслати повідомлення
            </button>
            {status && (
              <div className="text-center text-sm text-accent">{status}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;