import React, {createContext, useState, useContext, useCallback, useEffect} from "react";
import { searchComicByIdAPI } from "../api/marvelApi";
import Cookies from 'js-cookie';

const MarvelContext = createContext()

const MarvelProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [modalData, setModalData] = React.useState(null);
  const [comic, setComic] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = Cookies.get("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : []
  });

  useEffect(() => {
    Cookies.set("favorites", JSON.stringify(favorites), { expires: 7 });
  }, [favorites]);


  const addToFavorites = useCallback((data) => {
      if (favorites.some((char) => char.id === data.id)) {
        return;
      } else {
        setFavorites((prevFav) => {
          const updatedFavorites = [...prevFav, {id: data.id, thumbnail: data.thumbnail, name: data.name}];
          return Cookies.set("favorites", JSON.stringify(updatedFavorites), {expires: 7}), updatedFavorites;
        });
      }
    }, [favorites]);
  
  const comicData = async (id) => {
    const result = await searchComicByIdAPI(id.comic);
    setComic(result[0]);
  };

  const removeFromFavorites = useCallback((characterId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((favorite) => favorite.id !== characterId);
      Cookies.set("favorites", JSON.stringify(updatedFavorites), {expires: 7});
      return updatedFavorites;
    });
  }, [favorites]);

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