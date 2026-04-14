import { TICKETS } from "../data/siteConfig";
import TicketCard from "../components/TicketCard";

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4 tracking-tight text-center">
          Tickets
        </h2>
        <p className="text-gray-400 text-center mb-12 text-sm uppercase tracking-widest">
          Wees er snel bij — op is op
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TICKETS.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  );
}
