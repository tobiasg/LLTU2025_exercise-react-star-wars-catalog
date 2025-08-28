import type { ReactElement } from "react";
import type { IPlanet } from "../types/planet";

interface ICharacterHomeworldProps {
  planet: IPlanet;
}

export const CharacterHomeworld = ({
  planet,
}: ICharacterHomeworldProps): ReactElement => {
  const { name } = planet;
  return (
    <article className="character-homeworld">
      <h3>{name}</h3>
    </article>
  );
};
