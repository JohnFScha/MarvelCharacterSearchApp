import React from 'react';

const CharacterCard = ({ characterData, handleOpenModal }) => {
  const { name, thumbnail } = characterData;
  console.log(characterData)
  return (
    <div className="character-card" onClick={() => handleOpenModal(characterData)}>
      <img src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt={name} />
      <h3>{name}</h3>
      {/* Add star icon to mark as favorite */}
    </div>
  );
};

export default CharacterCard;
