import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "University Projects" },
  { value: 4, suffix: "+", label: "Database Technologies" },
  { value: 10, suffix: "+", label: "Technologies Explored" },
  { value: 2028, suffix: "", label: "Graduation Year" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-black gradient-text">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-6 text-center transition-all hover:-translate-y-1"
          >
            <Counter end={s.value} suffix={s.suffix} />
            <div className="text-sm text-gray-400 mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;