import { TICKET_URL } from "../data/siteConfig";

export default function CTAButton({ children = "Get Tickets", className = "" }) {
  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block overflow-hidden bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 text-sm sm:text-base hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-200 ${className}`}
    >
      <span
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "url('/textures/tile.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          mixBlendMode: "soft-light",
        }}
      />
      <span
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/textures/grain.jpg')",
          backgroundSize: "cover",
          mixBlendMode: "soft-light",
          filter: "blur(0.3px)",
        }}
      />
      <span className="relative">{children}</span>
    </a>
  );
}
