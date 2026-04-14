import { useState, useEffect } from "react";
import { EVENT } from "../data/siteConfig";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = new Date(EVENT.date) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Dagen" },
    { value: timeLeft.hours, label: "Uren" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {blocks.map((b) => (
        <div key={b.label} className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-black text-white tabular-nums leading-none">
            {String(b.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mt-1">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
