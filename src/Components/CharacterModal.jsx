import React from 'react'

const CharacterModal = ({ characterData, handleCloseModal }) => {
  const { name, description, thumbnail } = characterData;

  return (
    <div className="modal">
      <button className="close-btn" onClick={handleCloseModal}>
        Close
      </button>
      <div className="modal-content">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <h2>{name}</h2>
        <p>{description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default CharacterModal;