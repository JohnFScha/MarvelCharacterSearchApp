import React, { useEffect, useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import DataList from "./Components/DataList";
import ComicDetail from "./Components/ComicDetail";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";
import useMarvelSearch from "./Hooks/useMarvelSearch";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const {
    type,
    setType,
    inputValue,
    handleInputChange,
    search,
    results,
    setRandomCharacter
  } = useMarvelSearch();
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(()=> {
    setRandomCharacter()
  }, [])

  
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
    <div className="h-screen">
      <Header
        value={inputValue}
        inputChange={handleInputChange}
        handleSearch={search}
        searchType={type}
        setSearchType={setType}
        favorites={favorites}
      />
      <Routes>
        <Route
          exact
          path="/*"
          element={
            <DataList data={results} favorites={favorites} addToFavorites={addToFavorites}/>
          }
        />
        <Route path="/comics/:comic" element={<ComicDetail />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
