import React from "react";
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarFill } from '@heroicons/react/24/solid';

const DataCard = ({ id, title, thumbnail, handleAddToFavorites, handleOpenModal, favorites}) => {
  const containerStyles = {
    backgroundImage: `url(${thumbnail.path}/portrait_uncanny.${thumbnail.extension})`,
    height: '500px',
  }

  const isImageNotAvailable = thumbnail && thumbnail.path.includes("image_not_available");

  if (isImageNotAvailable) {
    return null;
  }

  return (
    <div className="bg-cover bg-no-repeat bg-center w-11/12 flex flex-col justify-between rounded-lg text-zinc-50" style={containerStyles}> 
      <button className="w-10 self-end" onClick={() => handleAddToFavorites(id)}>  
        {
        favorites.some((char) => char.id === id) ? <StarFill /> : <StarOutline />
        }
      </button>
      <h3 className="m-5 text-lg" onClick={handleOpenModal}>{title}</h3>
    </div>
  );
};

export default DataCard;
