import React from 'react';
import Header from './Components/Header'
import CharacterModal from './Components/CharacterModal';
import CharacterCard from './Components/CharacterCard';
import Favorites from './Components/Favorites';
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
          // onFavoritesClick={handleAddToFavourites}
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <div className="grid grid-cols-4 place-items-center m-5 gap-y-5">
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
        {modalData && <CharacterModal characterData={modalData} handleCloseModal={handleCloseModal} />}
        <Favorites />
      </div>
  )
}

export default App
