import CTAButton from "../components/CTAButton";

export default function Experience() {
  const features = [
    { title: "Live Performance", desc: "CHO & The Homies op het podium" },
    { title: "Foodtrucks", desc: "Ruim aanbod, ook vega en vegan" },
    { title: "Outdoor Vibes", desc: "Zuiderpark, Den Haag" },
    { title: "Lockers", desc: "Je spullen veilig opgeborgen" },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-12 tracking-tight">
          De Experience
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((f) => (
            <div key={f.title} className="border border-gray-800 p-6">
              <h3 className="text-white font-bold uppercase text-sm mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
        <CTAButton>Koop Tickets</CTAButton>
      </div>
    </section>
  );
}
