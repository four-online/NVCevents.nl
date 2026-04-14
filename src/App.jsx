import Hero from "./sections/Hero";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import StickyMobileCTA from "./components/StickyMobileCTA";
import BackgroundTexture from "./components/BackgroundTexture";
import MouseGlow from "./components/MouseGlow";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundTexture />
      <MouseGlow />
      <div className="relative z-10">
      <Hero />
      <About />
      <FAQ />
      <FinalCTA />

      <footer className="py-6 text-center border-t border-gray-900">
        <p className="text-gray-600 text-xs">
          &copy; 2026 NVC Events / New Vintage College — Alle rechten voorbehouden
        </p>
      </footer>

      <StickyMobileCTA />
      <div className="h-16 md:hidden" />
      </div>
    </div>
  );
}
