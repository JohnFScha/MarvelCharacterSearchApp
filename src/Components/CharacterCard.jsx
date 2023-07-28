import React, {useCallback} from "react";
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarFill } from '@heroicons/react/24/solid';
import { useMarvelContext } from "../context/MarvelContext";
import { CharacterContainer, CharacterAddToFav, CharacterImg } from "../styles/componentStyles";
import { searchComicByCharacterIdAPI } from "../api/marvelApi";

const CharacterCard = ({ id, title, thumbnail }) => {
  const { favorites, addToFavorites ,results, setModalData } = useMarvelContext();

  const isImageNotAvailable = thumbnail && thumbnail.path.includes("image_not_available");

  if (isImageNotAvailable) {
    return null;
  }

  const handleOpenModal = async (characterId) => {
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
    const characterData = results.find(
      (character) => character.id === characterId
    );
    if (characterData) {
      addToFavorites(characterData);
    }
    console.log(characterData)
  };

  return (
    <CharacterContainer> 
      <CharacterAddToFav onClick={() => handleAddToFavorites(id)}>  
        {favorites.some((char) => char.id === id) ? <StarFill /> : <StarOutline />}
      </CharacterAddToFav>
      <CharacterImg src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt={title} />
      <h3 className="m-5 text-lg z-10" onClick={() => handleOpenModal(id)}>{title}</h3>
    </CharacterContainer>
  );
};

export default CharacterCard;
