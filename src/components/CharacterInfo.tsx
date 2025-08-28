import type { ReactElement, ReactNode } from "react";
import type { IPlanet } from "../types/planet";
import type { ICharacter } from "../types/character";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterHomeworld } from "./CharacterHomeworld";
import { Loader } from "./Loader";

interface ICharacterProps {
  loading: boolean;
  homeworld?: IPlanet;
  character?: ICharacter;
}

export const CharacterInfo = ({
  loading,
  homeworld,
  character,
}: ICharacterProps): ReactElement => {
  const renderCharacterInfo = (): ReactNode => {
    if (loading) return <Loader />;

    if (!character || !homeworld) return <p>No character selected</p>;
    return (
      <>
        <CharacterDetails character={character} />
        <CharacterHomeworld planet={homeworld} />
      </>
    );
  };

  return (
    <section id="character-info" className="g-card">
      <header>
        <h2>Character Info</h2>
      </header>
      <div className="info-wrapper">{renderCharacterInfo()}</div>
    </section>
  );
};
