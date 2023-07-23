import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import CharacterList from "./Components/CharacterList";
import CharacterModal from "./Components/CharacterModal";
import Favorites from "./Components/Favorites";
import useMarvelSearch from "./Hooks/useMarvelSearch";

function App() {
  const {
    searchType,
    setSearchType,
    inputValue,
    searchResult,
    handleInputChange,
    handleSearch,
    onload
  } = useMarvelSearch();

  const [modalData, setModalData] = React.useState(null);

  const handleOpenModal = (characterData) => {
    setModalData(characterData);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <Router>
      <div className="App">
        <Header
          value={inputValue}
          inputChange={handleInputChange}
          handleSearch={handleSearch}
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <Routes>
          <Route exact path="/" element={<CharacterList characters={searchResult} handleOpenModal={handleOpenModal} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        {modalData && (
          <CharacterModal
            characterData={modalData}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
