export interface StoryItem {
  year: string;
  title: string;
  text: string;
}

export interface EventItem {
  name: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  note: string;
  image: string;
}

export interface WeddingData {
  bride: string;
  groom: string;
  hashtag: string;
  date: string;
  dateLabel: string;
  venue: string;
  story: StoryItem[];
  events: EventItem[];
  gallery: string[];
  brideFamily: FamilyMember[];
  groomFamily: FamilyMember[];
  dressCode: DressCode[];
}

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface FamilyMember {
  relation: string;
  names: string[];
}

export interface DressCode {
  event: string;
  colorHex: string;
  colorName: string;
  note: string;
}
