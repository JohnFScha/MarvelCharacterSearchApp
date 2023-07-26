import React from "react";
import DataCard from "./DataCard";
import ComicModal from "./ComicModal";
import { useMarvelContext } from "../context/MarvelContext";
import { searchComicByCharacterIdAPI } from "../Helpers/marvelApi";
import { XCircleIcon } from "@heroicons/react/24/outline";

const DataList = ({ data }) => {
  const [modalData, setModalData] = React.useState(null);
  const { addToFavorites } = useMarvelContext();

  console.log("DATA: ", data)

  if (!data || data.length === 0) {
    return <h1 className="h-screen">No characters found</h1>;
  }

  const handleOpenModal = async (characterId) => {
    const characterData = data.find(
      (character) => character.id === characterId
    );
    if (characterData) {
      const result = await searchComicByCharacterIdAPI(characterData.id);
      setModalData(result);
    }
  };

  console.log("MODAL DATA:", modalData)

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleAddToFavorites = (characterId) => {
    const characterData = data.find(
      (character) => character.id === characterId
    );
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
      {modalData ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl overflow-y-scroll h-5/6 w-4/6 shadow-rose-900 scroll-smooth">
            <div className="flex justify-between items-center">
              {modalData.length !== 0 ? (
                <h1 className="text-3xl text-red-600 ms-3">{modalData[0].characters.items[0].name}:</h1>
              ) : null}
              <button
                type="button"
                onClick={handleCloseModal}
                className="inline-block"
              >
                <XCircleIcon className="w-8" />
              </button>
            </div>
            {modalData.length !== 0 ? (
              modalData.map((comic) => (
                <ComicModal
                  key={comic.id}
                  id={comic.id}
                  title={comic.title}
                  thumbnail={comic.thumbnail}
                  description={comic.description}
                />
              ))
            ) : (
              <h1 className="text-4xl text-center my-40">
                No comic data for this character
              </h1>
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default DataList;
