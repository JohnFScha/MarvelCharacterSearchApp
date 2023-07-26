import React from "react";
import { useMarvelContext } from "../context/MarvelContext";
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarFill } from '@heroicons/react/24/solid';

const DataCard = ({ id, title, thumbnail, handleAddToFavorites, handleOpenModal }) => {
  const { favorites } = useMarvelContext()

  const isImageNotAvailable = thumbnail && thumbnail.path.includes("image_not_available");

  if (isImageNotAvailable) {
    return null;
  }

  return (
    <div className="character-card">
      <button className="w-7 m-auto opacity-50" onClick={() => handleAddToFavorites(id)}>  
        {
        favorites.some((char) => char.id === id) ? <StarFill /> : <StarOutline />
        }
      </button>
      <img
        src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
        alt={title}
        onClick={() => handleOpenModal(id)}
        className="z-10"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default DataCard;
