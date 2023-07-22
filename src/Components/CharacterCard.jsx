import React from "react";
import { useMarvelContext } from "../context/MarvelContext";
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarFill } from '@heroicons/react/24/solid';


const CharacterCard = ({ characterData, handleOpenModal }) => {
  const { name, thumbnail } = characterData;
  const { favorites, addToFavorites } = useMarvelContext()

  const isImageNotAvailable = thumbnail && thumbnail.path.includes("image_not_available");

  if (isImageNotAvailable) {
    return null;
  }

  const handleAddToFavorites = () => {
    // Call the addToFavorites function from the context to add the character to favorites
    addToFavorites(characterData);
  };

  return (
    <div className="character-card">
      <button className="w-7 m-auto opacity-50" onClick={handleAddToFavorites}>  
        {
        favorites.includes(characterData) ?
         <StarFill /> : <StarOutline />
        }
      </button>
      <img
        src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
        alt={name}
        onClick={() => handleOpenModal(characterData)}
        className="z-10"
      />
      <h3>{name}</h3>
    </div>
  );
};

export default CharacterCard;
