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
        </div>
        <CTAButton className="hidden md:inline-block text-base sm:text-lg px-10 py-5">
          Get Tickets
        </CTAButton>
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

        {/* MOJO logo */}
        <svg viewBox="0 0 155 40" className="h-6 sm:h-8 w-auto text-white" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M49.629 19.565c0-11.13 8.205-19.212 19.506-19.212 11.306 0 19.513 8.088 19.513 19.212 0 11.19-8.029 19.008-19.513 19.008-11.484 0-19.506-7.817-19.506-19.008Zm12.62.197c0 4.381 2.83 7.44 6.886 7.44 4.058 0 6.89-3.073 6.89-7.44 0-4.368-2.9-7.537-6.89-7.537-3.99 0-6.887 3.155-6.887 7.537Zm-38.357 1.542L29.194.96H42.04l5.792 37.027H35.754l-2.398-21.084-5.96 21.084h-7.239l-5.693-21.123-2.382 21.123H0L5.701.96h12.984l5.207 20.344ZM135.489.353c-11.303 0-19.507 8.081-19.507 19.212 0 11.19 8.014 19.008 19.507 19.008 11.492 0 19.511-7.817 19.511-19.008C155 8.441 146.794.353 135.489.353Zm0 26.849c-4.055 0-6.889-3.059-6.889-7.44 0-4.382 2.899-7.537 6.889-7.537s6.888 3.169 6.888 7.537c0 4.367-2.825 7.44-6.888 7.44Zm-39.272.905c2.558 0 2.558-3.335 2.558-4.43V.977h12.608V26.75c0 7.64-5.055 12.976-12.292 12.976-3.398 0-7.733-1.683-10.867-4.202 2.422-2.81 4.11-6.231 4.903-9.93.615 1.328 1.496 2.515 3.09 2.515Z" />
        </svg>

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
