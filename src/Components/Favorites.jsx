import React, { useEffect } from "react";
import { StarIcon as StarFill } from "@heroicons/react/24/solid";
import { useMarvelContext } from "../context/MarvelContext";

const Favorites = () => {
  const { favorites } = useMarvelContext();
  
  if (favorites.length === 0) {
    return (
      <h1>Nothing here...</h1>
    )
  }

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <img src={`${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension}`} alt={favorite.name} />
            <span>{favorite.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
