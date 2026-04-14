import { TICKET_URL } from "../data/siteConfig";

export default function TicketCard({ ticket }) {
  return (
    <div className="border-2 border-gray-700 bg-black/50 p-6 flex flex-col items-center text-center hover:border-red-600 transition-all duration-300 group">
      <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">
        {ticket.description}
      </span>
      <h3 className="text-xl font-black text-white uppercase mb-3">
        {ticket.title}
      </h3>
      <span className="text-4xl font-black text-red-500 mb-4">
        {ticket.price}
      </span>
      <ul className="text-gray-400 text-sm space-y-1 mb-6">
        {ticket.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <a
        href={TICKET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 px-6 text-center font-black uppercase tracking-wider text-sm transition-all duration-300 ${
          ticket.soldOut
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
        }`}
      >
        {ticket.soldOut ? "Uitverkocht" : "Koop Tickets"}
      </a>
    </div>
  );
}
