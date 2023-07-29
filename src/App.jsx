import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import CharacterList from "./components/CharacterList";
import ComicDetail from "./components/ComicDetail";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  
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
