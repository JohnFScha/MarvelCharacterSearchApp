import React from "react";
import { MainContainer, CardContainer, StyledButton, StarFillIcon, StyledName, EmptyFavs, CharacterImg } from "../styles/componentStyles";
import { useMarvelContext } from "../context/MarvelContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useMarvelContext();
  
  const handleRemoveFromFavorites = (favorite) => {
    removeFromFavorites(favorite)
  }

  if (favorites.length === 0) {
    return (
      <EmptyFavs>nothing here...</EmptyFavs>
    )
  }
   
  return (
    <MainContainer>
      { 
      favorites.map((favorite) => (
        <CardContainer key={favorite.id}>
          <StyledButton onClick={() => handleRemoveFromFavorites(favorite.id)}>  
            <StarFillIcon />
          </StyledButton>
          <CharacterImg src={`${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension}`} alt={favorite.name} />
          <StyledName>{favorite.name}</StyledName>
        </CardContainer>
        ))
      }
    </MainContainer>
  );
};

export default Favorites;
