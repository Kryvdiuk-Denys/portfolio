import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        width: 10,
        height: 10,
        borderRadius: "9999px",
        background: "#b58cff",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        marginLeft: -5,
        marginTop: -5,
      }}
    />
  );
};

export default CursorGlow;