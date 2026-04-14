import { LINEUP } from "../data/siteConfig";

export default function LineUp() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-12 tracking-tight">
          Line-Up
        </h2>
        <div className="space-y-4">
          {LINEUP.map((artist) => (
            <div
              key={artist.name}
              className="border-b border-gray-800 pb-4 flex items-center justify-between max-w-xl mx-auto"
            >
              <span className="text-xl sm:text-2xl font-black text-white uppercase">
                {artist.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
                {artist.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
