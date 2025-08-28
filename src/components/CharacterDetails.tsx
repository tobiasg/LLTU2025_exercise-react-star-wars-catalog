import type { ReactElement } from "react";
import type { ICharacter } from "../types/character";

interface ICharacterDetailsProps {
  character: ICharacter;
}

export const CharacterDetails = ({
  character,
}: ICharacterDetailsProps): ReactElement => {
  const { name, height } = character;
  return (
    <article className="character-details">
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {height}</p>
      <p>Hair color: {height}</p>
      <p>Skin color: {height}</p>
      <p>Eye color: {height}</p>
      <p>Birth year: {height}</p>
      <p>Gender: {height}</p>
    </article>
  );
};
