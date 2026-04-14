import { TICKET_URL } from "../data/siteConfig";

export default function CTAButton({ children = "Koop Tickets", className = "" }) {
  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 text-sm sm:text-base hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
}
