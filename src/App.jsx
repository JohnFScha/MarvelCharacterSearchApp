import React from 'react';
import Header from './Components/Header'
import CharacterModal from './Components/CharacterModal';
import CharacterCard from './Components/CharacterCard';
import useMarvelSearch from './Hooks/useMarvelSearch';

function App() {
  const {
    searchType,
    setSearchType,
    inputValue,
    searchResult,
    handleInputChange,
    handleSearch,
  } = useMarvelSearch();

  const [modalData, setModalData] = React.useState(null);
  const [favourites, setFavourites] = React.useState(null);

  const handleAddToFavourites = (characterData) => {
    setFavourites(characterData)
  }

  const handleOpenModal = (characterData) => {
    setModalData(characterData);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
      <div className="App">
        <Header
          value={inputValue}
          inputChange={handleInputChange}
          handleSearch={handleSearch}
          onFavoritesClick={handleAddToFavourites}
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <div className="characters-container">
          {searchResult ?
            searchResult.map((characterData) => (
              <CharacterCard
                key={characterData.id}
                characterData={characterData}
                handleOpenModal={handleOpenModal}
              />
            ))
            :
            <h1>No data yet</h1>
          }
        </div>
        {modalData && <Modal characterData={modalData} handleCloseModal={handleCloseModal} />}
        {/* <Favourites /> */}
      </div>
  )
}

export default App
