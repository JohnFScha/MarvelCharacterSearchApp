import React from 'react';

function CharactersList({ characters, onCharacterClick }) {

  return (
    <main className='flex justify-evenly flex-wrap'>
      {characters.map((character) => (
        <div key={character.id} className='w-1/3 p-3'>
          <img 
            src={character.thumbnail.path + ".jpg"} 
            alt={character.name}
            onClick={() => onCharacterClick(character)}
            className='max-h-fit object-contain' 
          />
        </div>
      ))}
    </main>
  );
}

export default CharactersList;
