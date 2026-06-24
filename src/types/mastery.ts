export interface MasteryRecord {
  cardId: string;
  category: string;
  topic: string;

  mode: "study" | "quiz" | "mock";

  response: "knew_it" | "almost" | "review" | "didnt_know";

  points: number;

  timestamp: string;
}
