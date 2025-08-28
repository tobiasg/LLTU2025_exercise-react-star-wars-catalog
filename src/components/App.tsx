import { useEffect, useState } from "react";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterList } from "./CharacterList";
import { Hero } from "./Hero";
import { fetchCharacters, fetchPlanet } from "../api";
import type { ICharacter } from "../types/character";
import type { IPlanet } from "../types/planet";

export const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<
    ICharacter | undefined
  >(undefined);
  const [homeworld, setHomeworld] = useState<IPlanet | undefined>(undefined);
  const [isCharacterLoading, setCharacterLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  const handleOnChatacterClick = (character: ICharacter) => {
    setCharacterLoading(true);
    setSelectedCharacter(characters.find((c) => c.id === character.id));
    fetchPlanet(character.homeworld).then((planet) => {
      setHomeworld(planet);
      setCharacterLoading(false);
    });
  };

  return (
    <>
      <div id="app">
        <Hero />
        <main id="main-content">
          <CharacterList
            characters={characters}
            onCharacterClick={handleOnChatacterClick}
          />
          <CharacterInfo
            loading={isCharacterLoading}
            homeworld={homeworld}
            character={selectedCharacter}
          />
        </main>
      </div>
    </>
  );
};

export default App;
