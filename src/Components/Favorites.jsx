import React from "react";
import { StarIcon as StarFill } from "@heroicons/react/24/solid";

const Favorites = ({ favorites, removeFromFavorites }) => {
  const containerStyles = {height: '500px'}
  
  const handleRemoveFromFavorites = (favorite) => {
    removeFromFavorites(favorite)
    alert(`${favorite.name} removed.`)
  }

  if (favorites.length === 0) {
    return (
      <h1 className="h-screen">nothing here...</h1>
    )
  }
   
  return (
    <main className="grid grid-cols-4 place-items-center m-5 gap-y-5">
      { 
      favorites.map((favorite) => (
        <div className="bg-cover bg-no-repeat bg-center w-11/12 flex flex-col justify-between rounded-lg text-zinc-50" key={favorite.id} style={{backgroundImage: `url(${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension})`, ...containerStyles}}>
          <button className="w-10 self-end" onClick={() => handleRemoveFromFavorites(favorite.id)}>  
            <StarFill />
          </button>
          <span className="m-5 text-lg">{favorite.name}</span>
        </div>
        ))
      }
    </main>
  );
};

export default Favorites;
