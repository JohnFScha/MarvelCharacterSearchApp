import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header.jsx';
import CharacterList from "./components/CharacterList.jsx";
import ComicDetail from "./components/ComicDetail.jsx";
import Favorites from "./components/Favorites.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  
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
