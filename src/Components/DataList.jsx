import React from 'react';
import DataCard from './DataCard';
import ComicModal from './ComicModal';
import { useMarvelContext } from "../context/MarvelContext";
import { searchComicByCharacterIdAPI } from '../Helpers/marvelApi';

const DataList = ({ data }) => {
  const [modalData, setModalData] = React.useState(null);
  const { addToFavorites } = useMarvelContext();
  
  if (!data || data.length === 0) {
    return <h1 className='h-screen'>No characters found</h1>;
  }

  const handleOpenModal = async (characterId) => {
    const characterData = data.find((character) => character.id === characterId);
    if (characterData) {
      const result = await searchComicByCharacterIdAPI(characterData.id);
      setModalData(result);
    } 
  };

  console.log("MODAL DATA: ", modalData);

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleAddToFavorites = (characterId) => {
    const characterData = data.find((character) => character.id === characterId);
    if (characterData) {
      addToFavorites(characterData);
    } 
  };

  return (
    <main className="grid grid-cols-4 place-items-center m-5 gap-y-5">
      {data.map((character) => (
        <DataCard
          key={character.id}
          id={character.id}
          title={character.name}
          thumbnail={character.thumbnail}
          handleAddToFavorites={() => handleAddToFavorites(character.id)}
          handleOpenModal={() => handleOpenModal(character.id)}
        />
      ))}
      {modalData !== null ? (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-6 w-80 rounded-lg shadow-lg overflow-y-scroll h-5/6'>
          <button type='button' onClick={handleCloseModal}>X</button>
          {modalData.map((comic) => (
            <ComicModal
              key={comic.id}
              title={comic.title}
              thumbnail={comic.thumbnail}
              description={comic.description}
            />
          ))}
        </div>
      </div>
      ) : null}
    </main>
  );
};

export default DataList;
