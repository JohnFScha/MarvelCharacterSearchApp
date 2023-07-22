import React, { createContext, useState, useContext} from "react";
import { useCallback } from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [comicData, setComicData] = useState(null);
  const [characterData, setCharacterData] = useState(null);
  const [favorites, setFavorites] = useState([]);
 
  const addToFavorites = (characterData) => {
    if (favorites.some(char => char.id === characterData.id)){
      alert(`${characterData.name} already Faved.`)
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, characterData]);
    }
  };
  
  return (
    <MarvelContext.Provider value={{ comicData, setComicData, characterData, setCharacterData, favorites, addToFavorites }}>
      {children}
    </MarvelContext.Provider>
  );
};

const useMarvelContext = () => {
  const context = useContext(MarvelContext);
  if (!context) {
    throw new Error('useMarvelContext must be used within a MarvelProvider');
  }
  return context;
};

export { MarvelProvider, useMarvelContext };