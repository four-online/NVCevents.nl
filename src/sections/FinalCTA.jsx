export default function FinalCTA() {
  return (
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

        {/* Mojo logo */}
        <span className="text-2xl sm:text-4xl font-black italic uppercase tracking-tight text-white leading-none select-none">
          MOJO
        </span>
      </div>
    </section>
  );
}
