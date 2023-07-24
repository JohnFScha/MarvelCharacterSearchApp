import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import DataList from "./Components/DataList";
import CharacterModal from "./Components/CharacterModal";
import Favorites from "./Components/Favorites";
import useMarvelSearch from "./Hooks/useMarvelSearch";

function App() {
  const {
    type,
    setType,
    inputValue,
    results,
    handleInputChange,
    search,
    setRandomCharacter
  } = useMarvelSearch();

  const [modalData, setModalData] = React.useState(null);

  const handleOpenModal = (characterData) => {
    setModalData(characterData);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };
  
  useEffect(() => {
    setRandomCharacter()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header
          value={inputValue}
          inputChange={handleInputChange}
          handleSearch={search}
          searchType={type}
          setSearchType={setType}
        />
        <Routes>
          <Route exact path="/" element={<DataList data={results} handleOpenModal={handleOpenModal} />} />
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
