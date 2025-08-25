import type { ICharacter } from "./types/character";

export const fetchCharacters = async (): Promise<ICharacter[]> => {
  const res = await fetch("https://swapi.online/api/characters");
  const characters = (await res.json()) as ICharacter[];
  return characters;
};
