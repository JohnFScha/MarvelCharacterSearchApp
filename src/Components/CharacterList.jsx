import React from "react";
import CharacterCard from "./CharacterCard";
import ComicModal from "./ComicModal";
import { TailSpin } from 'react-loader-spinner'
import { MainContainer, ModalOutside, ModalInside, ModalContainer, ModalWarning, StyledXCircleIcon, Title1, SpinnerContainer } from "../styles/componentStyles";
import { useMarvelContext } from "../context/MarvelContext";

const CharacterList = () => {
  const { modalData, handleCloseModal, results } = useMarvelContext()

  if (!results || results.length === 0) {
    return (
    <SpinnerContainer>
      <TailSpin color="red" wrapperClass="wrapper" />
    </SpinnerContainer> 
    )
  }


  return (
    <MainContainer>
      {results.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          title={character.name}
          thumbnail={character.thumbnail}
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

export default CharacterList;
