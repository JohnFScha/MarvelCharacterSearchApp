import React from "react";
import DataCard from "./DataCard";
import ComicModal from "./ComicModal";
import { searchComicByCharacterIdAPI } from "../Helpers/marvelApi";
import { MainContainer, ModalOutside, ModalInside, ModalContainer, ModalWarning, StyledXCircleIcon, Title1} from "../styles/componentStyles";

const DataList = ({ data, favorites, addToFavorites }) => {
  const [modalData, setModalData] = React.useState(null);
  
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
    console.log(characterData)
  };

  return (
    <MainContainer>
      {data.map((character) => (
        <DataCard
          key={character.id}
          id={character.id}
          title={character.name}
          thumbnail={character.thumbnail}
          favorites={favorites}
          handleAddToFavorites={() => handleAddToFavorites(character.id)}
          handleOpenModal={() => handleOpenModal(character.id)}
        />
      ))}
      {modalData ? (
        <ModalOutside>
          <ModalInside>
            <ModalContainer>
              {modalData.length !== 0 ? (
                <Title1>{modalData[0].characters.items[0].name}:</Title1>
              ) : null}
              <button
                type="button"
                onClick={handleCloseModal}
              >
                <StyledXCircleIcon />
              </button>
            </ModalContainer>
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
              <ModalWarning>
                No comic data for this character
              </ModalWarning>
            )}
          </ModalInside>
        </ModalOutside>
      ) : null}
    </MainContainer>
  );
};

export default DataList;
