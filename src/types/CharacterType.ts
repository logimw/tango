export interface Character {
  aliases: string[];
  allegiances: string[];
  books?: string[];
  born: string;
  culture: string;
  died: string;
  father: string;
  gender?: string;
  mother: string;
  name: string;
  playedBy: string[];
  povBooks: string[];
  spouse: string;
  titles: string[];
  tvSeries?: string[];
  url: string;
}

type Genders = "Male" | "Female" | "Any";

export interface ICharacters {
  totalPages: number;
  page: number;
  limit: number;
  gender: Genders;
  culture: string;
}

// interface IDispatch {
//   dispatch: any;
// }

// interface ICharacter {
//   characters: ICharacters;
//   dispatch: IDispatch;
// }
