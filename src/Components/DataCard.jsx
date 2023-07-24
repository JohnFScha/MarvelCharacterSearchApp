import React from "react";
import { useMarvelContext } from "../context/MarvelContext";
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarFill } from '@heroicons/react/24/solid';


const DataCard = ({ id, title, thumbnail, handleOpenModal }) => {
  const { favorites, addToFavorites } = useMarvelContext()

  const isImageNotAvailable = thumbnail && thumbnail.path.includes("image_not_available");

  if (isImageNotAvailable) {
    return null;
  }

  const handleAddToFavorites = () => {
    addToFavorites(id);
  };

  return (
    <div className="character-card">
      <button className="w-7 m-auto opacity-50" onClick={handleAddToFavorites}>  
        {
        favorites.includes(id) ?
         <StarFill /> : <StarOutline />
        }
      </button>
      <img
        src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
        alt={title}
        onClick={() => handleOpenModal(characterData)}
        className="z-10"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default DataCard;
