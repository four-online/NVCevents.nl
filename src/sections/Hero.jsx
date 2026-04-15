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

          <div className="pt-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-red-500 font-bold">
              Tickets
            </span>
          </div>
          {[
            { price: "€ 54,-", tier: "Regular" },
            { price: "€ 84,-", tier: "Golden Circle" },
          ].map((item) => (
            <div
              key={item.tier}
              className="border-b border-gray-800 pb-3 flex items-center justify-between"
            >
              <span className="text-base sm:text-lg font-black text-white uppercase">
                {item.price}
                <span className="ml-2 text-[10px] sm:text-xs font-normal text-gray-500 normal-case tracking-normal">
                  ex servicekosten
                </span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-red-500 font-bold">
                {item.tier}
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
