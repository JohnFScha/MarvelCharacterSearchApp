import React from 'react';
import DataCard from './DataCard';
import { useMarvelContext } from "../context/MarvelContext";

const DataList = ({ data, handleOpenModal }) => {
  const { favorites, addToFavorites } = useMarvelContext()

  if (!data || data.length === 0) {
    return <h1>No characters found</h1>;
  }
   
  const handleAddToFavorites = (characterId) => {
    const characterData = data.find((character) => character.id === characterId);
    if (characterData) {
      addToFavorites(characterData);
    } 
  }

  return (
    <main className="grid grid-cols-4 place-items-center m-5 gap-y-5">
      {
        data.map((character) => (
          <DataCard
            key={character.id}
            id={character.id}
            title={character.title || character.name}
            thumbnail={character.thumbnail}
            handleAddToFavorites={() => handleAddToFavorites(character.id)}>
            handleOpenModal={handleOpenModal}
          </DataCard>
        ))
      }
    </main>
  );
};

export default DataList;
