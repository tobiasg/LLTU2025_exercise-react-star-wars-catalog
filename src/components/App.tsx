import { useEffect, useState } from "react";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterList } from "./CharacterList";
import { Hero } from "./Hero";
import { fetchCharacters } from "../api";
import type { ICharacter } from "../types/character";

export const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <div id="app">
        <Hero />
        <main id="main-content">
          <CharacterList characters={characters} />
          <CharacterInfo />
        </main>
      </div>
    </>
  );
};

export default App;
