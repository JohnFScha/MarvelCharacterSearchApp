import React, { createContext, useState, useContext} from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [comicData, setComicData] = useState(null);
  const [characterData, setCharacterData] = useState(null);

  return (
    <MarvelContext.Provider value={{ comicData, setComicData, characterData, setCharacterData }}>
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