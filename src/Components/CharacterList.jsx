import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, handleOpenModal }) => {

  if (!characters || characters.length === 0) {
    return <h1>No characters found</h1>;
  }

  return (
    <div className="grid grid-cols-4 place-items-center m-5 gap-y-5">
      {
        characters.map((characterData) => (
          <CharacterCard
            key={characterData.id}
            characterData={characterData}
            handleOpenModal={handleOpenModal}
          />
        ))
      }
    </div>
  );
};

export default CharacterList;
