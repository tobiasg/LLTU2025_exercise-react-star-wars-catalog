import type { ICharacter } from "./types/character";
import type { IPlanet } from "./types/planet";

export const fetchCharacters = async (): Promise<ICharacter[]> => {
  const res = await fetch("https://swapi.online/api/characters");
  const characters = (await res.json()) as ICharacter[];
  return characters;
};

export const fetchPlanet = async (planetId: number): Promise<IPlanet> => {
  const res = await fetch(`https://swapi.online/api/planets/${planetId}`);
  const planet = (await res.json()) as IPlanet;
  return planet;
};
