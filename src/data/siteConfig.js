export const TICKET_URL =
  "https://www.eventim.nl/noapp/eventseries/3994007?affiliate=3LA";

export const EVENT = {
  name: "CHO presents THE PLAYGROUND",
  tagline: "SUMMER CLOSING",
  presenter: "NEW VINTAGE COLLEGE PRESENTS",
  brand: "NVC Events",
  date: "2026-09-26T14:00:00",
  dateDisplay: "26 september 2026",
  dayOfWeek: "Zaterdag",
  location: "Amsterdamse Bos",
  shows: [
    { label: "Middagshow", time: "14:00 - 17:00" },
    { label: "Avondshow", time: "19:00 - 22:00" },
  ],
  description:
    "Op zaterdag 26 september staat CHO live in het Amsterdamse Bos met zijn allereerste open air shows. Met twee shows op één dag maakt CHO van het Bostheater zijn eigen playground waarin we samen de zomer afsluiten.",
};

export const TICKETS = [
  {
    id: "regular",
    title: "Regular",
    price: "€ 43,70",
    description: "Standaard ticket",
    features: ["Toegang tot het volledige event"],
    soldOut: false,
  },
];
