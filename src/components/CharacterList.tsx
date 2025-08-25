import type { ReactElement, ReactNode } from "react";
import { Loader } from "./Loader";
import { Character } from "./Character";
import type { ICharacter } from "../types/character";

interface CharacterListProps {
  characters: ICharacter[];
}

export const CharacterList = ({
  characters,
}: CharacterListProps): ReactElement => {
  const renderCharacters = (): ReactNode => {
    if (!characters.length) return <Loader />;

    return characters
      .map((c) => <Character character={c} key={c.id} />)
      .slice(0, 10);
  };

  return (
    <section id="character-list" className="g-card">
      <header>
        <h2>Characters List</h2>
      </header>
      <div className="characters">{renderCharacters()}</div>
    </section>
  );
};
