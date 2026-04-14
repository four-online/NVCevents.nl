import { useState } from "react";

export default function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="absolute bg-[#2A2A2A]"
        style={{ top: 6, left: 6, right: -6, bottom: -6 }}
      />
      <div
        className={`relative border-2 transition-all duration-200 ${
          open
            ? "border-red-600 bg-red-600/10"
            : "border-gray-700 bg-black hover:border-gray-500"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer"
          aria-expanded={open}
        >
          <span className="text-red-500 text-xl font-bold shrink-0">
            {open ? "−" : "+"}
          </span>
          <span className="font-black text-sm sm:text-base uppercase tracking-wide text-white">
            {question}
          </span>
        </button>
        {open && (
          <div className="px-5 pb-4 border-t border-gray-700/50">
            <p className="text-gray-300 text-sm leading-relaxed pt-3 whitespace-pre-line">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
