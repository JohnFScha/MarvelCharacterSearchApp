import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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

  const removeFromFavorites = useCallback((characterId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favorite) => favorite.id !== characterId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }, []);

  return (
    <MarvelContext.Provider
      value={{
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
