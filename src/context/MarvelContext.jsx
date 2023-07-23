import React, { createContext, useState, useContext } from "react";
import { useCallback } from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [comicData, setComicData] = useState(null);
  const [characterData, setCharacterData] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? [JSON.parse(storedFavorites)] : localStorage.setItem("favorites", []);
  });

  const addToFavorites = useCallback(
    (characterData) => {
      if (favorites.some((char) => char.id === characterData.id)) {
        alert(`${characterData.name} already Faved.`);
      } else {
        setFavorites((prevFav) =>[...prevFav, characterData]);
        localStorage.setItem("favorites", JSON.stringify(characterData))
      }
    },
    [favorites]
  );

  const removeFromFavorites = useCallback(
    (characterId) => {
      setFavorites((prevFavorites) => {
        const updatedFavorites = prevFavorites.filter((favorite) => favorite.id !== characterId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    },
    [favorites]
  );

  return (
    <MarvelContext.Provider
      value={{
        comicData,
        setComicData,
        characterData,
        setCharacterData,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

const useMarvelContext = () => {
  const context = useContext(MarvelContext);
  if (!context) {
    throw new Error("useMarvelContext must be used within a MarvelProvider");
  }
  return context;
};

export { MarvelProvider, useMarvelContext };
