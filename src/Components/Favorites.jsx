import React from "react";
import { MainContainer, CardContainer, StyledButton, StarFillIcon, StyledName, EmptyFavs } from "../styles/componentStyles";

const Favorites = ({ favorites, removeFromFavorites }) => {
  
  const handleRemoveFromFavorites = (favorite) => {
    removeFromFavorites(favorite)
    alert(`${favorite.name} removed.`)
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
        <CardContainer key={favorite.id} style={{backgroundImage: `url(${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension})`}}>
          <StyledButton onClick={() => handleRemoveFromFavorites(favorite.id)}>  
            <StarFillIcon />
          </StyledButton>
          <StyledName>{favorite.name}</StyledName>
        </CardContainer>
        ))
      }
    </MainContainer>
  );
};

export default Favorites;
