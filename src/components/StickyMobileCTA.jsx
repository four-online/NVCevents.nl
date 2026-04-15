import { TICKET_URL } from "../data/siteConfig";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-black/90 backdrop-blur-sm border-t border-gray-800 md:hidden">
      <a
        href={TICKET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-red-600 text-white font-black uppercase tracking-wider py-3 text-center text-sm hover:bg-red-700 transition-colors"
      >
        Tickets
      </a>
    </div>
  );
}
