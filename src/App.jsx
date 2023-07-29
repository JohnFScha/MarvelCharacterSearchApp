import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import CharacterList from "./components/CharacterList";
import ComicDetail from "./components/ComicDetail";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import useMarvelSearch from "./Hooks/useMarvelSearch";

function App() {
  const {
    setRandomCharacter
  } = useMarvelSearch();

  useEffect(()=> {
    setRandomCharacter()
  }, [])

  return (
    <>
      <Header/>
        <Routes>
          <Route exact path="/*" element={<CharacterList />} />
          <Route path="/comics/:comic" element={<ComicDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
