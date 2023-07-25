import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import DataList from "./Components/DataList";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";
import useMarvelSearch from "./Hooks/useMarvelSearch";

function App() {
  const {
    type,
    setType,
    inputValue,
    handleInputChange,
    search,
    results,
    setRandomCharacter
  } = useMarvelSearch();

  useEffect(()=> {
    setRandomCharacter()
  }, [])

  return (
    <div className="App min-h-screen">
      <Header
        value={inputValue}
        inputChange={handleInputChange}
        handleSearch={search}
        searchType={type}
        setSearchType={setType}
      />
      <Routes>
        <Route
          exact
          path="/*"
          element={
            <DataList data={results} />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
