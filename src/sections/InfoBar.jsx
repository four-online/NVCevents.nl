import { EVENT } from "../data/siteConfig";

export default function InfoBar() {
  const items = [
    { label: EVENT.dateDisplay, value: "Datum" },
    { label: EVENT.location, value: "Locatie" },
    { label: EVENT.doors, value: "Doors" },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-12 tracking-tight">
          Info
        </h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="border-b border-gray-800 pb-4 flex items-center justify-between max-w-xl mx-auto"
            >
              <span className="text-xl sm:text-2xl font-black text-white uppercase">
                {item.label}
              </span>
              <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
