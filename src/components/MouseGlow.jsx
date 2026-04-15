import { useEffect, useRef, useState } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.08);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.08);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-[1] transition-opacity duration-500"
      style={{
        width: 900,
        height: 900,
        marginLeft: -450,
        marginTop: -450,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.03) 50%, transparent 75%)",
        mixBlendMode: "normal",
        opacity: visible ? 1 : 0,
        willChange: "transform",
      }}
    />
  );
}
