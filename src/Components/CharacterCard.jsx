import React from "react";
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarFill } from '@heroicons/react/24/solid';
import { useMarvelContext } from "../context/MarvelContext";
import { CharacterContainer, StyledButton, CharacterImg } from "../styles/componentStyles";
import { searchComicByCharacterIdAPI } from "../api/marvelApi";

const CharacterCard = ({ id, title, thumbnail }) => {
  const { favorites, addToFavorites, results, setModalData } = useMarvelContext();

  const isImageNotAvailable = thumbnail && thumbnail.path.includes("image_not_available");

  if (isImageNotAvailable) {
    return null;
  }

  const handleOpenModal = async(characterId) => {
    const characterData = results.find(
      (character) => character.id === characterId
    );

    if (!characterData) {
      return (
      <SpinnerContainer>
        <TailSpin color="red" wrapperClass="wrapper" />
      </SpinnerContainer> 
      )
       
    } else {
      const result = await searchComicByCharacterIdAPI(characterData.id);
      setModalData(result);
    }
  }

  const handleAddToFavorites = (characterId) => {
    const characterData = results.find((character) => character.id === characterId);
    console.log(characterData)
    if (characterData) {
      addToFavorites(characterData);
    }
  };

  return (
    <CharacterContainer> 
      <StyledButton onClick={() => handleAddToFavorites(id)}>  
        {favorites.some((char) => char.id === id) ? <StarFill /> : <StarOutline />}
      </StyledButton>
      <CharacterImg src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt={title} onClick={() => handleOpenModal(id)} />
      <h3>{title}</h3>
    </CharacterContainer>
  );
};

export default CharacterCard;
