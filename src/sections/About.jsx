import CTAButton from "../components/CTAButton";

export default function About() {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-8 tracking-tight">
          New Vintage College Presents: The Playground
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          Op zaterdag 26 september staat CHO live in het Amsterdamse Bos met zijn
          allereerste open air show. Op deze speciale avond vieren we samen de 10
          year anniversary van Knock Knock 3, hoor je nieuwe muziek en sluiten we
          samen de zomer af.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          Haal nu je tickets via de onderstaande button.
        </p>
        <CTAButton className="text-base sm:text-lg px-10 py-5">
          Tickets
        </CTAButton>
      </div>
    </section>
  );
}
