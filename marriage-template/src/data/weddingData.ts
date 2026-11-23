import type { WeddingData } from "../types/wedding";

export const wedding: WeddingData = {
  bride: "Heni",
  groom: "Sandip",
  hashtag: "#HeniWedsSandip",
  date: "2026-11-24T18:00:00", // Date of wedding
  dateLabel: "24 · 11 · 2026",
  venue: "Avlava Farm, Surat",
  story: [
    {
      year: "01",
      title: "The First Meet",
      text: "A delayed flight, a crowded cafe, and a conversation that stretched for hours. The world faded, and it was just us.",
    },
    {
      year: "02",
      title: "The First Date",
      text: "Strings of fairy lights, the sound of the ocean, and a quiet dinner that felt like coming home. We knew this was different.",
    },
    {
      year: "03",
      title: "The Engagement",
      text: "Surrounded by our families, with tears of joy and hearts full of love, we made our promise official under a canopy of gold.",
    },
    {
      year: "04",
      title: "Finally Marriage Date Fixed ",
      text: "From this moment on, forever doesn't seem long enough. We invite you to witness the beginning of our always.",
    },
  ],
  events: [
    {
      name: "Geet / Raas Garba",
      date: "23 Nov 2026",
      day: "Monday",
      time: "8:00 PM",
      venue: "Avlava Farm",
      note: "Join us for a night of music and dance.",
      image:
        "https://plus.unsplash.com/premium_photo-1683129651802-1c7ba429a137?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      name: "Mandap Muhurat",
      date: "23 Nov 2026",
      day: "Monday",
      time: "3:00 PM",
      venue: "Avlava Farm",
      note: "The sacred beginning of the wedding rituals.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    },
    {
      name: "Jan Prasthan",
      date: "24 Nov 2026",
      day: "Tuesday",
      time: "5:00 PM",
      venue: "Avlava Farm",
      note: "The groom's procession arrives.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    },
    {
      name: "Bhojan Samarambh",
      date: "24 Nov 2026",
      day: "Tuesday",
      time: "6:00 PM",
      venue: "Avlava Farm",
      note: "Aapshri Sada Padharo (Dinner to follow)",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    },
    {
      name: "Hast Melap",
      date: "24 Nov 2026",
      day: "Tuesday",
      time: "8:00 PM",
      venue: "Avlava Farm",
      note: "The union of hearts and hands.",
      image:
        "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&q=80",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1591969851586-adbbd4accf81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  ],
  // ... baaki data ke baad
  brideFamily: [
    {
      relation: "Parents",
      names: ["Shri Ashokbhai M. Kyada", "Smt. Dakshaben A. Kyada"],
    },
    {
      relation: "Grandparents",
      names: ["Late Shri M. Kyada", "Late Smt. K. Kyada"],
    },
    { relation: "Siblings", names: ["Chi. Ravi Kyada", "Chi. Pooja Kyada"] },
  ],
  groomFamily: [
    {
      relation: "Parents",
      names: ["Shri Babubhai V. Bavadiya", "Smt. Kailashben B. Bavadiya"],
    },
    {
      relation: "Grandparents",
      names: ["Late Shri V. Bavadiya", "Late Smt. J. Bavadiya"],
    },
    {
      relation: "Siblings",
      names: ["Chi. Chirag Bavadiya", "Chi. Riya Bavadiya"],
    },
  ],
  dressCode: [
    {
      event: "Geet & Garba",
      colorHex: "#F3E5AB",
      colorName: "Golden Yellow",
      note: "Traditional Garba Attire",
    },
    {
      event: "Mandap Muhurat",
      colorHex: "#1C2C2B",
      colorName: "Emerald Green",
      note: "Elegant Ethnic Wear",
    },
    {
      event: "Wedding / Hast Melap",
      colorHex: "#8B0000",
      colorName: "Royal Maroon",
      note: "Traditional Wedding Wear",
    },
  ],
};
