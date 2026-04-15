import { EVENT } from "../data/siteConfig";
import CTAButton from "../components/CTAButton";

import flyerImage from "../assets/flyer.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-6 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-red-500 font-bold mb-6">
          {EVENT.presenter}
        </span>

        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mb-8">
          <img
            src={flyerImage}
            alt={`${EVENT.name} - ${EVENT.dateDisplay} - ${EVENT.location}`}
            className="w-full h-auto shadow-[0_0_60px_rgba(220,38,38,0.2)]"
          />
        </div>

        <div className="w-full max-w-md mb-8 space-y-3">
          {[
            { label: EVENT.dateDisplay, value: "Datum" },
            { label: EVENT.location, value: "Locatie" },
            { label: EVENT.doors, value: "Doors" },
            { label: "€ 54,-", value: "Regular" },
            { label: "€ 84,-", value: "Golden Circle" },
          ].map((item) => (
            <div
              key={item.value}
              className="border-b border-gray-800 pb-3 flex items-center justify-between"
            >
              <span className="text-base sm:text-lg font-black text-white uppercase">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-red-500 font-bold">
                {item.value}
              </span>
            </div>
          ))}
        </div>

<div className="hidden md:block">
          <CTAButton className="text-base sm:text-lg px-10 py-5">
            Tickets
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
