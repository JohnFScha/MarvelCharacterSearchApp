import React, {createContext, useState, useContext, useCallback} from "react";
import { searchComicByIdAPI } from "../api/marvelApi";


const MarvelContext = createContext()

const MarvelProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [modalData, setModalData] = React.useState(null);
  const [comic, setComic] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorites = useCallback(
    (data) => {
      if (favorites.some((char) => char.id === data.id)) {
        alert(`${data.name} already Faved.`);
      } else {
        setFavorites((prevFav) => {
          const updatedFavorites = [...prevFav, data];
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
          return updatedFavorites;
        });
      }
    },
    [favorites]
  );

  const comicData = async (id) => {
    const result = await searchComicByIdAPI(id.comic);
    setComic(result[0]);
  };

  const removeFromFavorites = useCallback((characterId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favorite) => favorite.id !== characterId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }, []);

  const handleCloseModal = () => {
    setModalData(null);
  };


  return (
    <MarvelContext.Provider
      value={{
        results,
        setResults,
        favorites,
        addToFavorites,
        removeFromFavorites,
        modalData,
        setModalData,
        handleCloseModal,
        comic,
        comicData
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