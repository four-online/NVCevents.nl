import { FAQ_ITEMS } from "../data/siteConfig";
import AccordionItem from "../components/AccordionItem";

export default function FAQ() {
  const mid = Math.ceil(FAQ_ITEMS.length / 2);
  const colLeft = FAQ_ITEMS.slice(0, mid);
  const colRight = FAQ_ITEMS.slice(mid);

  return (
    <section id="faq" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-12 tracking-tight text-center">
          FAQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {colLeft.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div className="space-y-4">
            {colRight.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
