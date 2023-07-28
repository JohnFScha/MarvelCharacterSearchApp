import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import ComicDetail from "./components/ComicDetail";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import useMarvelSearch from "./Hooks/useMarvelSearch";
import { useMarvelContext } from "./context/MarvelContext";

function App() {
  const {
    setRandomCharacter
  } = useMarvelSearch();

  const {results} = useMarvelContext()

  useEffect(()=> {
    setRandomCharacter()
  }, [])

  return (
    <div className="h-screen">
      <Header/>
      <Routes>
        <Route
          exact
          path="/*"
          element={
            <CharacterList />
          }
        />
        <Route path="/comics/:comic" element={<ComicDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
