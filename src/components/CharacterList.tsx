import { useState, type ReactElement, type ReactNode } from "react";
import { Loader } from "./Loader";
import { Character } from "./Character";
import type { ICharacter } from "../types/character";
import { Pagination } from "./Pagination";
import { PageSize } from "../constants";

interface CharacterListProps {
  characters: ICharacter[];
  onCharacterClick: (character: ICharacter) => void;
}

export const CharacterList = ({
  characters,
  onCharacterClick,
}: CharacterListProps): ReactElement => {
  const [page, setPage] = useState<number>(0);
  const pageCount: number = Math.ceil(characters.length / PageSize);
  const loading: boolean = characters.length === 0;

  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));
  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));

  const renderCharacters = (): ReactNode => {
    if (loading) return <Loader />;

    const start = page * PageSize;
    const end = start + PageSize;

    return characters
      .map((c) => (
        <Character
          character={c}
          key={c.id}
          onCharacterClick={onCharacterClick}
        />
      ))
      .slice(start, end);
  };

  return (
    <section id="character-list" className="g-card">
      <header>
        <h2>Characters List</h2>
      </header>
      <div className="characters">{renderCharacters()}</div>
      <Pagination
        loading={loading}
        currentPage={page + 1}
        pageCount={pageCount}
        next={handleOnNext}
        previous={handleOnPrevious}
      />
    </section>
  );
};
