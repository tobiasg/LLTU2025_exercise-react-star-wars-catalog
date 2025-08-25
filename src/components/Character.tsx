import type { ReactElement } from "react";
import type { ICharacter } from "../types/character";

interface CharacterProps {
  character: ICharacter;
}

export const Character = ({ character }: CharacterProps): ReactElement => {
  const { name } = character;
  return (
    <article className="character">
      <h3>{name}</h3>
    </article>
  );
};
