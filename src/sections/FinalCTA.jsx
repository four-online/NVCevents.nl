import CTAButton from "../components/CTAButton";

export default function FinalCTA() {
  return (
    <>
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-8 tracking-tight">
          We're Outside This Summer
        </h2>
        <div className="space-y-2 mb-10">
          <p className="text-gray-300 text-base sm:text-lg">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mr-2">Locatie</span>
            Zuiderpark, Den Haag
          </p>
          <p className="text-gray-300 text-base sm:text-lg">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mr-2">Datum</span>
            11 juli 2026
          </p>
          <p className="text-gray-300 text-base sm:text-lg">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mr-2">Doors</span>
            17.00 – 22.30 uur
          </p>
          <p className="text-gray-300 text-base sm:text-lg pt-4">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mr-2">Regular</span>
            € 54,- <span className="text-gray-500 text-sm">ex servicekosten</span>
          </p>
          <p className="text-gray-300 text-base sm:text-lg">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mr-2">Golden Circle</span>
            € 84,- <span className="text-gray-500 text-sm">ex servicekosten</span>
          </p>
        </div>
        <div className="hidden md:block">
          <CTAButton className="text-base sm:text-lg px-10 py-5">
            Tickets
          </CTAButton>
        </div>
      </div>
    </section>
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto flex items-center justify-center gap-10 sm:gap-16 opacity-40">
        {/* Colmena Live logo */}
        <img
          src="/logos/colmena.png"
          alt="Colmena Live"
          className="h-8 sm:h-10 w-auto brightness-0 invert"
        />

        {/* NVC logo */}
        <img
          src="/logos/nvc.png"
          alt="New Vintage College"
          className="h-10 sm:h-14 w-auto"
        />
      </div>
    </section>
    </>
  );
}
