import React from "react";
import { StarIcon as StarFill } from "@heroicons/react/24/solid";
import { useMarvelContext } from "../context/MarvelContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useMarvelContext();
  
  const handleRemoveFromFavorites = (characterId) => {
    removeFromFavorites(characterId)
  }

  if (favorites.length === 0) {
    return (
      <h1>nothing here...</h1>
    )
  }
   
  return (
    <main className="grid grid-cols-4 place-items-center m-5 gap-y-5">
      { 
      favorites.map((favorite) => (
        <div className="card" key={favorite.id}>
          <button className="w-7 m-auto opacity-50" onClick={() => handleRemoveFromFavorites(favorite.id)}>  
            <StarFill />
          </button>
          <img
            src={`${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension}`}
            alt={favorite.name}
          />
          <span>{favorite.name}</span>
        </div>
        ))
      }
    </main>
  );
};

export default Favorites;
