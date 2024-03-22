export type Meaning = {
  partofSpeech: "string";
  definitions: Definition[];
};
export type Word = {
  word: string;
  meanings: Meaning[];
};

export type Definition = {
  definition: string;
};
